export default function DisclaimerPage() {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        免責事項
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
                        最終更新日: 2024年10月17日
                    </p>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-6 mb-8">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <p className="text-orange-800 dark:text-orange-200 font-bold text-lg mb-2">
                                    重要な注意事項
                                </p>
                                <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                                    本サービスで提供される情報は教育目的のみを目的としており、金融商品取引法に基づく投資助言や投資勧誘を目的とするものではありません。投資判断は必ずお客様ご自身の責任において行ってください。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 投資リスクについて</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                株式投資には、以下のような様々なリスクが伴います。
                            </p>
                            <div className="space-y-3 ml-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">価格変動リスク</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        株式の価格は、政治・経済情勢、企業の業績、市場の需給等により変動します。場合によっては投資元本を割り込む可能性があります。
                                    </p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">信用リスク</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        投資対象企業の財務状況の悪化や経営破綻により、投資資金の全部または一部を失う可能性があります。
                                    </p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">流動性リスク</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        市場の流動性が低い場合、希望する価格や数量で売買できない可能性があります。
                                    </p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">為替変動リスク</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        外国株式等に投資する場合、為替相場の変動により損失が生じる可能性があります。
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                投資を行う際は、これらのリスクを十分に理解し、ご自身の投資目的、投資経験、資力等に照らして適切かどうかをご判断ください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 情報の正確性について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                当社は、本サービスで提供する情報の正確性、完全性、有用性、適時性について、細心の注意を払っておりますが、以下の点についてご理解ください。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>情報の正確性、完全性、最新性を保証するものではありません</li>
                                <li>情報は予告なく変更される場合があります</li>
                                <li>過去のデータや実績は将来の結果を保証するものではありません</li>
                                <li>第三者から提供を受けた情報については、その正確性を保証するものではありません</li>
                                <li>技術的な問題により、情報の提供が遅延または中断する場合があります</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. 投資判断について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                本サービスで提供される情報は、あくまでも投資判断の参考情報であり、以下の点にご注意ください。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>投資の最終判断は、必ずお客様ご自身の責任において行ってください</li>
                                <li>当社は、特定の金融商品の売買を推奨するものではありません</li>
                                <li>投資に関する税制や法規制は変更される可能性があります</li>
                                <li>投資を行う際は、必要に応じて税理士、弁護士等の専門家にご相談ください</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. 損害の責任について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                当社は、以下の事項について一切の責任を負いません。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>本サービスの利用により生じた投資損失</li>
                                <li>本サービスで提供される情報の誤り、遅延、欠落等により生じた損害</li>
                                <li>本サービスの中断、停止、終了により生じた損害</li>
                                <li>本サービスからリンクされた第三者のサイトの利用により生じた損害</li>
                                <li>不正アクセス、コンピューターウイルス等により生じた損害</li>
                                <li>その他、当社の故意または重過失によらない損害</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                ただし、消費者契約法その他の法令により、当社が責任を負うべき場合については、この限りではありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. 著作権・知的財産権について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                本サービスで提供される全てのコンテンツ（文章、画像、動画、プログラム等）の著作権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。これらのコンテンツを無断で複製、転載、配布、改変等することは、著作権法その他の法令により禁止されています。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. 第三者のサービスについて</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                本サービスには、第三者が運営するウェブサイトへのリンクが含まれる場合があります。これらのリンク先のサービスやコンテンツについて、当社は一切の責任を負いません。リンク先のサイトをご利用の際は、各サイトの利用規約等をご確認ください。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. 金融商品取引業者の登録について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は金融商品取引業者（投資助言・代理業、投資運用業等）の登録を受けていません。本サービスは、金融商品取引法に基づく投資助言や投資一任契約の締結の代理または媒介を行うものではありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. サービスの変更・中断・終了について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、事前の通知なく、本サービスの内容を変更し、または本サービスの提供を一時的に中断もしくは終了することがあります。これらの措置により生じた損害について、当社は一切の責任を負いません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. 免責事項の変更</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、必要に応じて本免責事項を変更することがあります。変更後の免責事項は、本サービス上に掲載した時点で効力を生じるものとします。
                            </p>
                        </section>

                        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">投資を始める前に</h2>
                            <ul className="space-y-3 text-blue-800 dark:text-blue-200">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>投資は余裕資金で行い、生活資金を投じないようにしましょう</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>分散投資を心がけ、特定の銘柄に集中投資しないようにしましょう</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>長期的な視点を持ち、短期的な値動きに一喜一憂しないようにしましょう</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>継続的に学習を続け、知識とスキルを向上させましょう</span>
                                </li>
                            </ul>
                        </section>

                        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                本免責事項についてご質問がある場合は、お問い合わせページよりご連絡ください。
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
