import { jwtDecode } from 'jwt-decode'
import { Bolt DatabaseClient } from '@supabase/Bolt Database-js'
import { createClient as ServerClient } from './server'
import { Tables, Database } from './Bolt Database'

export async function getServerUserRole (Bolt Database?: Bolt DatabaseClient<Database>) {
    // 如果没有传入 Bolt Database 客户端，则创建一个新的（用于服务器组件）
    const client = Bolt Database || ServerClient()
    
    const userData = await client.auth.getSession()

    if (userData.error) {
        console.log('Error getting user data', userData.error)
        client.auth.signOut()
    }

    if (userData.data?.session?.access_token) {
        const decodedToken = jwtDecode(userData.data.session.access_token)
        // @ts-expect-error
        const userRole = decodedToken?.user_role
        return userRole as Tables<'user_roles'>['role']
    }
}
