import { Award, BarChart3, BookOpen, TrendingUp } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const courses = [
    {
        id: 1,
        level: '初級',
        title: '株式投資の基礎',
        description: '株式市場の仕組みから投資の基本概念まで、ゼロから学べる初心者向けコースです。',
        icon: BookOpen,
        color: 'from-blue-500 to-cyan-500',
        topics: [
            '株式市場の仕組み',
            '投資口座の開設方法',
            '基本的な用語と概念',
            'リスク管理の基礎'
        ],
        duration: '4週間',
        lessons: 24,
        students: '1,234名',
        rating: 4.8
    },
    {
        id: 2,
        level: '中級',
        title: 'テクニカル＆ファンダメンタル分析',
        description: 'チャート分析と財務諸表の読み方を学び、銘柄選定能力を向上させます。',
        icon: TrendingUp,
        color: 'from-purple-500 to-pink-500',
        topics: [
            'チャートパターン分析',
            '財務諸表の読解',
            '業界・企業分析',
            'ポートフォリオ構築'
        ],
        duration: '6週間',
        lessons: 36,
        students: '892名',
        rating: 4.9
    },
    {
        id: 3,
        level: '上級',
        title: '高度な投資戦略とリスク管理',
        description: 'オプション取引やヘッジ戦略など、プロレベルの投資テクニックを習得します。',
        icon: Award,
        color: 'from-orange-500 to-red-500',
        topics: [
            'オプション取引戦略',
            'ヘッジとリスク管理',
            'マクロ経済分析',
            'アルゴリズム取引入門'
        ],
        duration: '8週間',
        lessons: 48,
        students: '567名',
        rating: 4.9
    },
    {
        id: 4,
        level: 'AI活用',
        title: 'AIを活用した投資分析',
        description: 'AI技術を使った市場分析とデータドリブンな投資判断の方法を学びます。',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        topics: [
            'AIによる市場予測',
            'ビッグデータ分析',
            'センチメント分析',
            '自動売買システム'
        ],
        duration: '6週間',
        lessons: 32,
        students: '445名',
        rating: 4.7
    }
]

export default function CoursesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            学習コース
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        あなたのレベルに合わせた最適なコース
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        初心者から上級者まで、体系的に学べる包括的なカリキュラムをご用意しています
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {courses.map((course) => {
                        const Icon = course.icon
                        return (
                            <Card key={course.id} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 dark:hover:border-blue-400">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                                            {course.level}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                                    <CardDescription className="text-base">{course.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                                                学習内容:
                                            </h4>
                                            <ul className="space-y-2">
                                                {course.topics.map((topic, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                <span>📚 {course.lessons}レッスン</span>
                                                <span>⏱️ {course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">★</span>
                                                <span className="text-sm font-semibold">{course.rating}</span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-500">
                                            👥 {course.students}が受講中
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                                        <Link href="/auth/signup">
                                            コースを見る
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>

                <div className="text-center">
                    <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                        <Link href="/store">
                            すべてのコースを見る →
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
