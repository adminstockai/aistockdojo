import { Bot } from 'lucide-react'
import Link from 'next/link'

export default function AITutorPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Bot className="h-16 w-16 mx-auto text-purple-600 mb-4" />
                    <h1 className="text-4xl font-bold mb-4">AI学習サポート</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        24時間365日、株式投資の学習をAIがサポート
                    </p>
                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-4 mt-6 max-w-2xl mx-auto text-left">
                        <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">
                            ⚠️ 重要な注意事項
                        </p>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                            本機能は教育目的の学習サポートツールです。投資助言や投資勧誘を目的とするものではありません。実際の投資判断は、お客様ご自身の責任で行ってください。
                        </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-8">
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
