import { Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Briefcase className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                    <h1 className="text-4xl font-bold mb-4">採用情報</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        一緒に未来を創りませんか？
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        準備中です。しばらくお待ちください。
                    </p>
                    <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                        ホームに戻る
                    </Link>
                </div>
            </div>
        </div>
    )
}
