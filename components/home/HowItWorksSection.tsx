import { BookOpen, GraduationCap, Sparkles, UserPlus } from 'lucide-react'
import Link from 'next/link'

const steps = [
    {
        number: '01',
        title: 'アカウント作成',
        description: '無料でアカウントを作成し、簡単なレベル診断テストを受けます。あなたの現在の投資知識レベルを把握します。',
        icon: UserPlus,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        number: '02',
        title: 'コース選択',
        description: 'AIがあなたのレベルと学習目標を分析し、最適なコースとカリキュラムを推薦します。',
        icon: BookOpen,
        color: 'from-purple-500 to-pink-500'
    },
    {
        number: '03',
        title: '学習開始',
        description: 'AIチューターのサポートを受けながら、自分のペースで学習を進めます。質問はいつでもAIが即座に回答します。',
        icon: GraduationCap,
        color: 'from-orange-500 to-red-500'
    },
    {
        number: '04',
        title: '認定取得',
        description: 'コース修了後、試験に合格すれば認定証明書を取得。あなたの投資知識を証明できます。',
        icon: Sparkles,
        color: 'from-green-500 to-emerald-500'
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                            学習の流れ
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        シンプルな4ステップで始められます
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        初めての方でも安心。AIがあなたの学習をサポートします
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="relative">
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0" />
                                )}

                                <div className="relative z-10 text-center">
                                    <div className="mx-auto mb-6 relative">
                                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-100 dark:border-gray-700 shadow-md">
                                            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border-2 border-blue-200 dark:border-blue-800">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            <span className="font-semibold">準備はできましたか？</span> 今すぐ無料で始めましょう
                        </p>
                        <Link
                            href="/auth/signup"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            無料でアカウント作成 →
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                            クレジットカード不要 • いつでもキャンセル可能
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
