import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: '田中 健太',
        role: '会社員 • 投資歴2年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenta',
        rating: 5,
        text: '完全初心者でしたが、AIチューターのおかげで基礎から体系的に学べました。特にチャート分析の実践的な内容が素晴らしく、今では自信を持って投資判断ができるようになりました。',
        course: '初級・中級コース修了',
        highlight: '月利8%を達成'
    },
    {
        id: 2,
        name: '佐藤 美咲',
        role: 'フリーランス • 投資歴5年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Misaki',
        rating: 5,
        text: 'オプション取引の上級コースを受講しました。これまで独学で限界を感じていましたが、ここで学んだヘッジ戦略のおかげで、リスクを抑えながら安定した収益を上げられるようになりました。',
        course: '上級コース修了',
        highlight: 'ポートフォリオ +35%'
    },
    {
        id: 3,
        name: '鈴木 大輔',
        role: 'IT企業勤務 • 投資歴3年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daisuke',
        rating: 5,
        text: 'AI活用コースが特に良かったです。データ分析の手法を学び、自分なりの投資アルゴリズムを構築できました。24時間いつでも質問できるAIサポートも非常に助かります。',
        course: 'AI活用コース修了',
        highlight: '年間リターン +42%'
    },
    {
        id: 4,
        name: '山田 由美',
        role: '主婦 • 投資歴1年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yumi',
        rating: 5,
        text: '家事の合間に自分のペースで学べるのが最高です。財務諸表の読み方が分かるようになり、企業の本質的な価値を見極められるようになりました。今では家計の資産運用を任されています。',
        course: '初級・中級コース修了',
        highlight: '運用資産300万円突破'
    },
    {
        id: 5,
        name: '伊藤 隆',
        role: '経営者 • 投資歴10年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Takashi',
        rating: 5,
        text: 'ベテラン投資家ですが、AIによる最新の市場分析手法を学びたくて受講しました。従来の分析に機械学習を組み合わせることで、より精度の高い投資判断ができるようになりました。',
        course: '全コース修了',
        highlight: 'リスク調整後リターン最適化'
    },
    {
        id: 6,
        name: '高橋 さくら',
        role: '大学生 • 投資歴半年',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sakura',
        rating: 5,
        text: '大学で経済学を学んでいますが、実践的な投資知識はここで得ました。少額から始められる方法や、リスク管理の重要性を学び、アルバイト代を賢く運用できるようになりました。',
        course: '初級コース修了中',
        highlight: '少額投資で経験値UP'
    }
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                            受講生の声
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        実際に学習された方々の体験談
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        1,000名以上の受講生が投資スキルを向上させています
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 relative"
                        >
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="h-12 w-12 text-blue-600" />
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                                {testimonial.text}
                            </p>

                            <div className="mb-6 space-y-2">
                                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                                    {testimonial.course}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-semibold">
                                    <span>📈</span>
                                    {testimonial.highlight}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,234+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">受講生</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.8★</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">平均評価</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">満足度</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">567</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">認定取得者</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
