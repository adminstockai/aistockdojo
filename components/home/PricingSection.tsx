import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const plans = [
    {
        name: 'ベーシック',
        price: '¥9,800',
        period: '/月',
        description: '初心者向けプラン',
        features: [
            '初級コース全アクセス',
            'AIチャットサポート',
            '基礎レベル試験',
            'コミュニティアクセス',
            '月次レポート',
            'モバイルアプリ利用'
        ],
        highlighted: false,
        cta: '今すぐ始める',
        popular: false
    },
    {
        name: 'スタンダード',
        price: '¥19,800',
        period: '/月',
        description: '本格的に学びたい方へ',
        features: [
            '全レベルコースアクセス',
            '優先AIサポート（24時間対応）',
            '無制限の試験受験',
            '実践シミュレーター',
            'ライブセミナー参加（月2回）',
            '個別学習プラン',
            '週次パフォーマンス分析',
            'コミュニティ優先アクセス'
        ],
        highlighted: true,
        cta: '今すぐ始める',
        popular: true,
        badge: '人気No.1'
    },
    {
        name: 'プレミアム',
        price: '¥39,800',
        period: '/月',
        description: 'プロフェッショナル育成',
        features: [
            'スタンダードの全機能',
            '専属メンター（月4回セッション）',
            'プライベートコンサルティング',
            '高度な市場分析ツール',
            '独自投資戦略の構築支援',
            '認定試験対策コース',
            'VIPコミュニティアクセス',
            '生涯アップデート',
            '優先カスタマーサポート',
            '特別セミナー招待'
        ],
        highlighted: false,
        cta: '今すぐ始める',
        popular: false
    }
]

export default function PricingSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                        <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                            料金プラン
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        あなたに最適なプランを選択
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        すべてのプランで30日間返金保証付き
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 ${
                                plan.highlighted
                                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                                    : 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
                            } transition-all duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-2xl font-bold mb-2 ${
                                    plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                                }`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${
                                    plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-5xl font-bold ${
                                        plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                                    }`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-lg ${
                                        plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                                    }`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <p className={`text-sm mt-2 ${
                                    plan.highlighted ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                                }`}>
                                    年額プランなら2ヶ月分お得
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                            plan.highlighted
                                                ? 'bg-white/20'
                                                : 'bg-blue-100 dark:bg-blue-900/30'
                                        }`}>
                                            <Check className={`h-3 w-3 ${
                                                plan.highlighted
                                                    ? 'text-white'
                                                    : 'text-blue-600 dark:text-blue-400'
                                            }`} />
                                        </div>
                                        <span className={`text-sm ${
                                            plan.highlighted ? 'text-blue-50' : 'text-gray-700 dark:text-gray-300'
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-6 text-base font-semibold ${
                                    plan.highlighted
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                                }`}
                                asChild
                            >
                                <Link href="/plans">
                                    {plan.cta}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        すべてのプランに含まれる：30日間返金保証 • 24時間サポート • いつでもキャンセル可能
                    </p>
                    <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
                        <span>💳 各種決済対応</span>
                        <span>🔒 SSL暗号化通信</span>
                        <span>📱 全デバイス対応</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
