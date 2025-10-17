export default function TermsPage() {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        利用規約
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
                        最終更新日: 2024年10月17日
                    </p>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第1条 （適用範囲）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                本利用規約（以下「本規約」といいます）は、ストックAI知習塾（以下「当社」といいます）が提供する株式投資教育プラットフォームサービス（以下「本サービス」といいます）の利用条件を定めるものです。利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第2条 （定義）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                本規約において使用する用語の定義は、以下のとおりとします。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li><strong>「本サービス」</strong>：当社が提供する株式投資教育プラットフォーム及びその関連サービス</li>
                                <li><strong>「利用者」</strong>：本規約に同意の上、本サービスを利用する個人または法人</li>
                                <li><strong>「会員」</strong>：本サービスに会員登録を行った利用者</li>
                                <li><strong>「コンテンツ」</strong>：本サービス上で提供される教材、動画、テキスト、画像等の情報</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第3条 （会員登録）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 本サービスの利用を希望する者は、本規約に同意の上、当社が定める方法により会員登録を申請するものとします。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                2. 当社は、会員登録の申請者が以下のいずれかに該当する場合、会員登録を承認しないことがあります。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-8 mb-3">
                                <li>虚偽の情報を登録した場合</li>
                                <li>過去に本規約違反等により会員資格を取り消されたことがある場合</li>
                                <li>その他、当社が不適切と判断した場合</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                3. 会員は、登録情報に変更が生じた場合、速やかに当社に通知し、最新の情報を維持するものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第4条 （アカウント管理）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 会員は、自己の責任において、パスワード及びアカウント情報を管理するものとします。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                2. 会員は、アカウント情報を第三者に利用させ、または貸与、譲渡、売買等をしてはなりません。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                3. アカウント情報の管理不十分により生じた損害について、当社は一切の責任を負いません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第5条 （利用料金及び支払方法）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 会員は、本サービスの有料プランを利用する場合、当社が定める利用料金を支払うものとします。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                2. 利用料金の支払方法は、クレジットカード決済その他当社が指定する方法とします。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                3. 一度支払われた利用料金は、当社の責に帰すべき事由がある場合を除き、返金されません。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                4. 支払期日までに利用料金の支払いが確認できない場合、当社は本サービスの提供を停止することができます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第6条 （禁止事項）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                会員は、本サービスの利用にあたり、以下の行為を行ってはなりません。
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>犯罪行為に関連する行為</li>
                                <li>当社または第三者の知的財産権、肖像権、プライバシー権、その他の権利を侵害する行為</li>
                                <li>本サービスのコンテンツを無断で複製、転載、配布する行為</li>
                                <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
                                <li>本サービスの運営を妨害する行為</li>
                                <li>不正アクセス行為</li>
                                <li>他の会員のアカウント情報を不正に使用する行為</li>
                                <li>反社会的勢力への利益供与行為</li>
                                <li>その他、当社が不適切と判断する行為</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第7条 （知的財産権）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 本サービスに関する知的財産権は、すべて当社または当社にライセンスを許諾している者に帰属します。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                2. 本規約に基づく本サービスの利用許諾は、本サービスに関する知的財産権の使用許諾を意味するものではありません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第8条 （免責事項）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 本サービスで提供される情報は教育目的であり、投資助言や投資勧誘を目的とするものではありません。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                2. 当社は、本サービスの内容の正確性、完全性、有用性について、いかなる保証も行いません。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                3. 会員が本サービスを利用して行った投資判断による損失について、当社は一切の責任を負いません。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                4. 当社は、本サービスの提供の中断、停止、終了等により生じた損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第9条 （サービスの変更・終了）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 当社は、事前の通知なく、本サービスの内容を変更または本サービスの提供を終了することができます。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                2. 当社は、本条に基づく措置により会員に生じた損害について、一切の責任を負いません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第10条 （退会）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 会員は、当社が定める手続により、いつでも退会することができます。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                2. 退会後も、本規約の規定により生じた権利義務には影響しないものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第11条 （規約の変更）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                当社は、必要に応じて本規約を変更することができます。本規約を変更した場合、変更後の規約は本サービス上に掲載した時点で効力を生じるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">第12条 （準拠法及び管轄裁判所）</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                1. 本規約の準拠法は日本法とします。
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                2. 本サービスに関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                            </p>
                        </section>

                        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                本規約についてご質問がある場合は、お問い合わせページよりご連絡ください。
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
