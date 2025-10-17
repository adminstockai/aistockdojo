export default function DisclaimerPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">免責事項</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
                        <p className="text-orange-800 dark:text-orange-200 font-semibold">
                            ⚠️ 重要な注意事項
                        </p>
                        <p className="text-orange-700 dark:text-orange-300 mt-2">
                            投資にはリスクが伴います。本サービスで提供される情報は教育目的であり、投資助言ではありません。
                        </p>
                    </div>
                    <h2>1. 投資リスクについて</h2>
                    <p>
                        株式投資には価格変動リスク、信用リスク等、様々なリスクが伴います。投資判断は必ずご自身の責任で行ってください。
                    </p>
                    <h2>2. 情報の正確性について</h2>
                    <p>
                        当社は情報の正確性を保つよう努めていますが、その完全性を保証するものではありません。
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-8">
                        準備中です。しばらくお待ちください。
                    </p>
                </div>
            </div>
        </div>
    )
}
