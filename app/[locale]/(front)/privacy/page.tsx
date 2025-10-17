export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        プライバシーポリシー
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
                        最終更新日: 2024年10月17日
                    </p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                ストックAI知習塾（以下「当社」といいます）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守すると共に、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱い及び保護に努めます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. 個人情報の定義</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、または個人識別符号が含まれる情報を意味します。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. 個人情報の収集方法</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                当社は、以下の方法で個人情報を収集します。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>会員登録時の入力フォームを通じた収集</li>
                                <li>お問い合わせフォームからの収集</li>
                                <li>サービス利用時の自動的な収集（Cookie、ログ情報等）</li>
                                <li>アンケートやキャンペーンへの回答を通じた収集</li>
                                <li>カスタマーサポートとのやり取りを通じた収集</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. 収集する個人情報の種類</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                当社は、以下の個人情報を収集する場合があります。
                            </p>
                            <div className="ml-4 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.1 登録情報</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>氏名（ニックネーム含む）</li>
                                        <li>メールアドレス</li>
                                        <li>パスワード（暗号化して保存）</li>
                                        <li>生年月日</li>
                                        <li>性別</li>
                                        <li>電話番号</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.2 決済情報</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>クレジットカード情報（決済代行会社を通じて処理）</li>
                                        <li>購入履歴</li>
                                        <li>請求先住所</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.3 サービス利用情報</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>学習履歴・進捗状況</li>
                                        <li>テスト結果・成績情報</li>
                                        <li>サービス内での行動履歴</li>
                                        <li>コミュニケーション履歴</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.4 技術情報</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>IPアドレス</li>
                                        <li>Cookie情報</li>
                                        <li>デバイス情報（OS、ブラウザ種類等）</li>
                                        <li>アクセスログ</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. 個人情報の利用目的</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                当社は、収集した個人情報を以下の目的で利用します。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>本サービスの提供、維持、保護及び改善のため</li>
                                <li>会員登録の受付、本人確認、認証のため</li>
                                <li>利用料金の請求及び決済処理のため</li>
                                <li>お客様からのお問い合わせへの対応のため</li>
                                <li>メールマガジン、お知らせの配信のため</li>
                                <li>サービスの利用状況の分析及び新サービスの開発のため</li>
                                <li>キャンペーン、アンケート、モニター等の実施のため</li>
                                <li>利用規約違反の対応のため</li>
                                <li>本サービスに関する規約、ポリシー等の変更の通知のため</li>
                                <li>マーケティング活動のため</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. 個人情報の第三者提供</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>法令に基づく場合</li>
                                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                                <li>合併、会社分割、事業譲渡その他の事由により事業の承継が行われる場合</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. 個人情報の共同利用</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、以下の通り個人情報を共同利用する場合があります。その場合、当社が個人情報の管理について責任を有します。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
                                <li>共同利用する個人情報の項目：氏名、住所、電話番号、メールアドレス、サービス利用履歴</li>
                                <li>共同利用する者の範囲：当社グループ会社</li>
                                <li>共同利用する者の利用目的：上記「4. 個人情報の利用目的」に記載の利用目的と同じ</li>
                                <li>個人情報の管理について責任を有する者：ストックAI知習塾</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. 個人情報の委託</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、個人情報の取扱いの全部または一部を第三者に委託する場合があります。その場合、当社は、個人情報を適切に取り扱っていると認められる委託先を選定し、委託契約等において、個人情報の適切な管理を求め、適切な監督を行います。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. 個人情報の開示、訂正、削除</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                お客様は、当社に対して、個人情報保護法の定めに従い、以下の権利を行使することができます。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-3">
                                <li>保有個人データの開示請求</li>
                                <li>保有個人データの訂正、追加または削除請求</li>
                                <li>保有個人データの利用停止または消去請求</li>
                                <li>保有個人データの第三者への提供の停止請求</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                これらの請求を行う場合は、当社のお問い合わせ窓口までご連絡ください。当社は、本人確認の上、合理的な期間内に対応いたします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Cookieの使用について</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                当社は、サービスの利便性向上、サービスの改善、マーケティング活動等のためにCookieを使用します。Cookieとは、Webサーバーがお客様のブラウザに送信する小さなテキストファイルで、お客様のコンピューター上に保存されます。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                お客様は、ブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、本サービスの一部機能がご利用いただけなくなる可能性があります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. アクセス解析ツールについて</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、本サービスの利用状況を把握するため、Google Analytics等のアクセス解析ツールを使用しています。これらのツールは、Cookieを使用してお客様の情報を収集します。収集される情報は匿名で収集されており、個人を特定するものではありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. セキュリティについて</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業者や委託先に対して、必要かつ適切な監督を行います。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. 個人情報保護方針の変更</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、法令の変更、サービス内容の変更、個人情報の取扱いに関する状況の変化等に応じて、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、本サービス上に掲載した時点で効力を生じるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. お問い合わせ窓口</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    <strong>ストックAI知習塾 個人情報お問い合わせ窓口</strong>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-1">
                                    メールアドレス: privacy@stockaidojo.jp
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    受付時間: 平日 10:00-18:00（土日祝日を除く）
                                </p>
                            </div>
                        </section>

                        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                制定日: 2024年1月1日<br/>
                                最終改定日: 2024年10月17日
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
