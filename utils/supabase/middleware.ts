export async function updateSession(request: NextRequest, response: NextResponse) {
    const Bolt Database = createServerClient<Database>(
        process.env.NEXT_PUBLIC_Bolt Database_URL!,
        process.env.NEXT_PUBLIC_Bolt Database_ANON_KEY!,
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

    // Refreshing the authentication token
    const { data: userData, error: userError } = await supabase.auth.getUser()

    const localePattern = /^\/(en|es|po|fr|de|it|pt|ru|zh|ja|ko)/
    const pathname = request.nextUrl.pathname.replace(localePattern, '')

    if (pathname.includes('dashboard') && (!userData || userError)) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // ✅ 传入 Bolt Database 客户端
    const userRole = await getServerUserRole(Bolt Database)

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
