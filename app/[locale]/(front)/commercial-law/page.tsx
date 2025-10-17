export default function CommercialLawPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">事業者名</th>
                                <td className="py-3">ストックAI知習塾</td>
                            </tr>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">所在地</th>
                                <td className="py-3">東京都渋谷区神南1-2-3</td>
                            </tr>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">電話番号</th>
                                <td className="py-3">03-1234-5678</td>
                            </tr>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">メールアドレス</th>
                                <td className="py-3">support@stockaidojo.jp</td>
                            </tr>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">販売価格</th>
                                <td className="py-3">各プランページに記載</td>
                            </tr>
                            <tr className="border-b">
                                <th className="text-left py-3 pr-4">支払方法</th>
                                <td className="py-3">クレジットカード</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-gray-600 dark:text-gray-400 mt-8">
                        準備中です。しばらくお待ちください。
                    </p>
                </div>
            </div>
        </div>
    )
}
