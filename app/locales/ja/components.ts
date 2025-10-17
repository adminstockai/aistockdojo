export default {
    auth: {
        login: {
            title: 'ログイン',
            subtitle: 'アカウントにログインしてください',
            email: 'メールアドレス',
            password: 'パスワード',
            forgotPassword: 'パスワードをお忘れですか？',
            submit: 'ログイン',
            submitting: 'ログイン中...',
            noAccount: 'アカウントをお持ちでないですか？',
            signUp: '新規登録',
            or: 'または',
            googleSignIn: 'Googleでログイン',
            githubSignIn: 'GitHubでログイン',
            error: {
                invalidCredentials: 'メールアドレスまたはパスワードが正しくありません',
                general: 'ログインに失敗しました。もう一度お試しください'
            }
        },
        register: {
            title: '無料アカウント作成',
            subtitle: '今すぐ始めましょう',
            createAccount: 'アカウントを作成',
            form: {
                fullName: 'お名前',
                email: 'メールアドレス',
                password: 'パスワード',
                confirmPassword: 'パスワード（確認）',
                emailPlaceholder: 'your@email.com',
                passwordPlaceholder: '8文字以上',
                fullNamePlaceholder: '山田 太郎'
            },
            submit: '登録',
            submitting: '登録中...',
            hasAccount: 'すでにアカウントをお持ちですか？',
            signIn: 'ログイン',
            terms: '利用規約とプライバシーポリシーに同意します',
            agreeToTerms: '登録することで、{terms}と{privacy}に同意したことになります',
            termsLink: '利用規約',
            privacyLink: 'プライバシーポリシー',
            passwordRequirements: {
                title: 'パスワードの要件',
                minLength: '8文字以上',
                hasNumber: '数字を含む',
                hasLowercase: '小文字を含む',
                hasUppercase: '大文字を含む',
                hasSpecial: '特殊文字を含む'
            },
            error: {
                emailExists: 'このメールアドレスは既に登録されています',
                passwordMismatch: 'パスワードが一致しません',
                general: '登録に失敗しました。もう一度お試しください'
            },
            success: {
                title: '登録成功！',
                description: '確認メールを送信しました。メールをご確認ください。'
            }
        },
        forgotPassword: {
            title: 'パスワードリセット',
            description: 'メールアドレスを入力してください。パスワードリセット用のリンクをお送りします。',
            email: 'メールアドレス',
            submit: 'リセットリンクを送信',
            submitting: '送信中...',
            backToLogin: 'ログインに戻る',
            success: 'パスワードリセット用のリンクを送信しました'
        },
        resetPassword: {
            title: '新しいパスワードを設定',
            newPassword: '新しいパスワード',
            confirmPassword: 'パスワード（確認）',
            submit: 'パスワードを更新',
            success: 'パスワードが正常に更新されました'
        }
    },
    dashboard: {
        sidebar: {
            home: 'ホーム',
            courses: 'コース',
            myCourses: 'マイコース',
            manageCourses: 'コース管理',
            chat: 'AIチャット',
            account: 'アカウント',
            settings: '設定',
            logout: 'ログアウト',
            notifications: '通知'
        },
        header: {
            search: '検索...',
            profile: 'プロフィール',
            settings: '設定',
            logout: 'ログアウト'
        }
    },
    common: {
        loading: '読み込み中...',
        error: 'エラーが発生しました',
        success: '成功しました',
        save: '保存',
        cancel: 'キャンセル',
        delete: '削除',
        edit: '編集',
        submit: '送信',
        back: '戻る',
        next: '次へ',
        previous: '前へ',
        close: '閉じる',
        search: '検索',
        filter: 'フィルター',
        sort: '並び替え',
        viewAll: 'すべて表示',
        learnMore: '詳細を見る',
        getStarted: '今すぐ始める',
        readMore: '続きを読む'
    }
} as const
