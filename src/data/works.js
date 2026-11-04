// 制作実績データ
//
// 実績を追加する手順は README.md の「制作実績の追加方法」を参照してください。
// この配列に1件追加するだけで、トップページの一覧とケーススタディページ
// （/works/:slug）の両方に自動的に反映されます。
//
// 数値の成果（問い合わせ数の増加率など）がわからない案件では、
// 絶対に数値を作らないこと。results.type を 'qualitative' にし、
// 実際に確認・把握している事実だけを items に書く。

import teppanTabitoImg from '../assets/works/teppan-tabito.webp'
import aspireImg from '../assets/works/aspire.webp'
import hidolFactoryImg from '../assets/works/hidol-factory.webp'

export const works = [
  {
    slug: 'hidol-factory',
    title: 'HiDOL FACTORY',
    tag: 'Web制作',
    industry: 'エンタメ / アイドル育成プロジェクト',
    client: 'HiDOL FACTORY 運営事務局',
    summary:
      '広島発の次世代アイドル育成プロジェクトの公式サイト。メンバー紹介やライブ告知など、ファンとの接点を作る導線を設計しました。',
    challenge:
      'メンバー・NEWS・ライブスケジュール・SNSなど複数の情報を、ファンが迷わず追える構造に整理する必要がありました。始動発表から初ライブ告知までを、独自ドメイン接続を含めて短期間で公開まで仕上げる必要もありました。',
    goal: '初ワンマンライブ（2026.08.30 @ ASPIRE）の告知を軸に、NEWSやメンバープロフィールでファンとの接点を増やし、SNSへの回遊を生むこと。',
    role: ['企画', 'デザイン', 'コーディング', '独自ドメイン接続'],
    work: [
      'トップページ（Hero / NEWS / メンバープロフィール / スケジュール / SNS）の設計・実装',
      'ライブ告知バッジなど、更新頻度の高い情報を目立たせるUI',
      '独自ドメイン（hidol.jp）の接続と本番公開',
    ],
    stack: ['React', 'Vite', 'Vercel', '独自ドメイン'],
    designNote:
      '白を基調に、ロゴのピンク×ネイビーを差し色として使い、清潔感と親しみやすさを両立させました。',
    duration: null,
    results: {
      type: 'qualitative',
      items: [
        '独自ドメイン hidol.jp で本番公開し、運用中',
        '初ワンマンライブ（2026.08.30 @ ASPIRE）の告知導線を用意した状態でリリース',
      ],
    },
    url: 'https://hidol.jp/',
    domain: 'hidol.jp',
    image: {
      src: hidolFactoryImg,
      alt: 'HiDOL FACTORY 公式サイトのトップページ（スマートフォン表示）',
      width: 406,
      height: 811,
    },
    related: ['aspire'],
    featured: true,
  },
  {
    slug: 'aspire',
    title: 'ASPIRE',
    tag: 'Web制作',
    industry: 'ライブショーバー / エンターテインメント',
    client: 'ASPIRE 様',
    summary:
      '広島・新天地のライブショーバーの公式サイト。400インチLEDのステージで行うショーの世界観を、トップの映像と予約導線で伝える構成にしました。',
    challenge:
      '音・光・パフォーマンスが交差するショーの雰囲気を、Web上でも伝える必要がありました。公演日（金・土・祝前日）やショータイム、料金、アクセスなど、来店前に知りたい情報を迷わず見つけられるように整理することも課題でした。',
    goal: '来店前に期待値を高め、WEB予約・Instagram・地図など、目的の異なる来訪者をそれぞれ次のアクションに導くこと。',
    role: ['デザイン', 'コーディング'],
    work: [
      'フルスクリーンのHeroビジュアルと世界観の設計',
      'スケジュール・プログラム・メンバー・料金・ギャラリー・アクセスなど、複数ページの構成',
      'WEB予約・Instagram・地図をまとめたモバイル下部の固定ナビと、ヘッダーの予約ボタン',
      '日本語・English の言語切り替え',
    ],
    stack: ['React', 'Vite', 'Vercel'],
    designNote:
      '淡い色のグラデーション背景に、ステージの映像を大きく見せるHeroを組み合わせ、ショーの華やかさと見やすさを両立させました。',
    duration: null,
    results: {
      type: 'qualitative',
      items: [
        'WEB予約・Instagram・地図への導線を、スマホ画面の下部に常時表示する構成で公開',
        'HiDOL FACTORY 初ワンマンライブの会場としても使用されている',
      ],
    },
    url: 'https://aspire21.jp/',
    domain: 'aspire21.jp',
    image: {
      src: aspireImg,
      alt: 'ASPIRE 公式サイトのトップページ（スマートフォン表示）',
      width: 406,
      height: 811,
    },
    related: ['hidol-factory'],
    featured: true,
  },
  {
    slug: 'teppan-tabito',
    title: '鉄板旅人',
    tag: 'Web制作',
    industry: '飲食店 / 鉄板料理（広島牡蠣・お好み焼き）',
    client: '鉄板旅人 様',
    summary:
      '広島牡蠣とお好み焼きを楽しめる鉄板料理店のサイト。メニューやお店の世界観を、清潔感のあるデザインで伝えています。',
    challenge:
      '一枚板のカウンターや立ちのぼる湯気など、店内でしか感じられない空気感を写真とレイアウトだけで伝える必要がありました。予約・メニュー・アクセスへの導線も一目でわかる設計が求められました。',
    goal: '来店前の期待値を高め、電話予約・ホットペッパーでの予約とメニュー確認へスムーズに進んでもらうこと。',
    role: ['企画', 'デザイン', 'コーディング', '公開'],
    work: [
      'フルスクリーンHero＋名物メニュー紹介セクション',
      '看板メニュー・鉄板料理一覧の構成',
      '店内の雰囲気ギャラリーとアクセス情報セクション',
    ],
    stack: ['React', 'Vite', 'Vercel', '独自ドメイン'],
    designNote:
      '黒基調に木目や湯気の写真を生かし、家紋モチーフのロゴを軸に、鉄板料理店らしい和の重厚感を演出しました。',
    duration: null,
    results: {
      type: 'qualitative',
      items: [
        '電話・ホットペッパーの2つの予約導線とメニュー確認導線を明確化して公開',
        'スマートフォンでの来店前チェックを想定したレイアウトで構成',
      ],
    },
    url: 'https://teppan-tabito.jp/',
    domain: 'teppan-tabito.jp',
    image: {
      src: teppanTabitoImg,
      alt: '鉄板旅人 公式サイトのトップページ（スマートフォン表示）',
      width: 406,
      height: 811,
    },
    related: [],
    featured: true,
  },
]

export function getWorkBySlug(slug) {
  return works.find((w) => w.slug === slug)
}

export function getRelatedWorks(work) {
  return (work.related || [])
    .map((slug) => getWorkBySlug(slug))
    .filter(Boolean)
}
