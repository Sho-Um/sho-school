# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code（および他のAIコーディングツール）向けのガイドです。

## プロジェクト概要

Sho School の公式サイト（React + Vite、Vercel + 独自ドメイン `sho-school.jp`）。
個人ブランドの自己紹介と、Web制作・マーケティング案件の問い合わせにつなげる営業サイトを兼ねる。

制作の背景・デザイン方針・コンテンツの言葉選びは `skills.md` に詳しい記録がある。迷ったら先に読むこと。
Vercel/独自ドメイン接続などデプロイ手順は `deploy-guide.md` を参照。

## コマンド

```bash
npm run dev      # 開発サーバー（Vite）
npm run build    # 本番ビルド（dist/ を生成）
npm run lint     # ESLint
npm run preview  # ビルド結果をローカルでプレビュー
```

コードを変更したら、コミット前に必ず `npm run lint` と `npm run build` の両方を通すこと。

## アーキテクチャ

```
src/
  data/works.js        制作実績データ（唯一の情報源）
  components/
    Header.jsx          ヘッダー（PC/モバイルナビ、CTA）
    Footer.jsx
    Seo.jsx              ページごとのtitle/description/OGP/canonical/JSON-LDを差し替える
  pages/
    Home.jsx             トップページ（Hero / Works / About / Services / Process / Projects / Values / Contact）
    WorkDetail.jsx        ケーススタディページ（/works/:slug）
    NotFound.jsx
  App.jsx                 React Router のルート定義とレイアウト
```

- ルーティングは `react-router-dom`（BrowserRouter）。SPAなので `vercel.json` に全パスを `index.html` へ
  リライトする設定がある。直接URLアクセス（例: `/works/hidol-factory` を直接開く）を壊さないよう、
  ルートを追加したら `vercel.json` の対応も忘れないこと。
- SSRはしていないため、`Seo.jsx` によるOGP/meta書き換えはJSを実行するクローラー（Googlebotなど）には
  効くが、LINEやX等の一部リンクプレビューボットには効かない場合がある。`index.html` のデフォルトOGP
  がフォールバックになる。

## 制作実績（Works）の追加方法

`src/data/works.js` の配列に1件追加するだけで、トップページの一覧とケーススタディページの両方に反映される。
詳しい手順は README.md の「制作実績の追加方法」を参照。

**厳守事項**: 数値の成果（問い合わせ増加率など）がわからない案件では、絶対に数値を作らない。
`results.type` を `'qualitative'` にし、実際に確認できている事実だけを書く。業種・クライアント名・
制作期間なども、把握していない情報は書かず、フィールド自体を省略する（UIは値がないフィールドを
自動的に非表示にする）。

実績を追加したら `public/sitemap.xml` にもURLを1行追加する。

画像はPCの横長スクリーンショットではなく、**スマートフォン幅（390px程度）でのTOP画面**を使う。
`.work-thumb` は `aspect-ratio: 1 / 2` 前提でカードを組んでいるため、比率が違う画像を使うとトリミング位置がずれる。

## デザイン・トーン

- カラー: 白・生成り・黒・ティールグリーン（`--accent: #1d5c52`）を中心に。色を増やしすぎない。
- 「圧倒的」「最先端」「革新的」「唯一無二」「完全対応」「すべて解決」「最高品質」のような誇張表現は使わない。
  「流れをつくる」「整える」「形にする」など、何ができるか・どう関わるかが伝わる表現を優先する（詳細は `skills.md`）。
- 「AIが作ったテンプレサイト感」「カードを並べただけのデザイン」「過剰なグラデーション」「不要なアニメーション」は避ける。
  既存のタイポグラフィ（明朝の見出し+ゴシックの本文）と余白の取り方を崩さないこと。

## 注意事項

- `public/icons.svg` と `src/assets/hero.png` はテンプレート由来の未使用アセット。現状どこからも参照していない。
- 本番デプロイ（`vercel --prod`）やGitHubへのpushは、明示的に依頼されたときだけ行う。
