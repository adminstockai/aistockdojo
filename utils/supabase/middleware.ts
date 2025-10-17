import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

import { getServerUserRole } from './getUserRole'
import { Database } from './boltdatabase'

export async function updateSession(request: NextRequest, response: NextResponse) {
    // ✅ 使用统一的 Supabase 变量名
    const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    response.cookies.set({ name, value, ...options })
                },
                remove(name: string, options: CookieOptions) {
                    response.cookies.set({ name, value: '', ...options })
                }
            }
        }
    )

    // ✅ 使用正确的 supabase 实例
    const { data: userData, error: userError } = await supabase.auth.getUser()

    const localePattern = /^\/(en|es|po|fr|de|it|pt|ru|zh|ja|ko)/
    const pathname = request.nextUrl.pathname.replace(localePattern, '')

    // 🔐 未登录用户访问 dashboard → 重定向到登录页
    if (pathname.includes('dashboard') && (!userData || userError)) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // 🧠 读取角色
    const userRole = await getServerUserRole(supabase)

    // 🔀 根据角色重定向
    if (userRole) {
        if (pathname.startsWith('/dashboard/teacher') &&
            (userRole !== 'teacher' && userRole !== 'admin')) {
            return NextResponse.redirect(new URL('/dashboard/student', request.url))
        }

        if (pathname.startsWith('/dashboard/student') &&
            (userRole !== 'student' && userRole !== 'admin')) {
            return NextResponse.redirect(new URL('/dashboard/teacher', request.url))
        }
    }

    // ✅ 登录用户访问 auth 页面 → 重定向到对应 dashboard
    if (!userError) {
        if (userData.user.id && pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
        }

        if (userData.user.id && pathname.endsWith('/dashboard')) {
            return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
        }
    }

    return response
}
