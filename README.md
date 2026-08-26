# Sho School

Sho School の公式サイト。React + Vite で構築し、Vercel + 独自ドメイン（`sho-school.jp`）で公開している。
自己紹介だけでなく、Web制作・マーケティング案件の問い合わせにつなげることを目的とした構成になっている。

## セットアップ

```bash
npm install
npm run dev      # http://localhost:5173
```

## スクリプト

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用に `dist/` を生成 |
| `npm run lint` | ESLint を実行 |
| `npm run preview` | ビルド結果をローカルでプレビュー |

## 構成

```
src/
  data/works.js       制作実績データ（ここを編集すれば実績が増減する）
  components/          Header / Footer / Seo（ページ単位のmeta管理）
  pages/                Home / WorkDetail（ケーススタディ） / NotFound
  App.jsx               ルーティング定義
```

詳しいアーキテクチャの説明は [CLAUDE.md](./CLAUDE.md) を、デザイン方針や制作の記録は [skills.md](./skills.md) を、
Vercelデプロイ手順は [deploy-guide.md](./deploy-guide.md) を参照。

## 制作実績の追加方法

制作実績は `src/data/works.js` の配列を編集するだけで、トップページの一覧（`/#works`）と
ケーススタディページ（`/works/:slug`）の両方に反映される。

1. **画像を用意する**
   - 実績カードとケーススタディの画像は、**スマートフォンでの表示（TOP画面ひと目分）** で統一している。
     PCの横長スクリーンショットを使うと、カードのサムネイル枠でトリミング位置がずれて見えるため避ける。
   - 撮影方法（Chrome DevToolsのデバイスツールバー、またはモバイル実機）でスマホ幅（390px程度）の
     TOP画面のみをキャプチャし、`src/assets/works/` に配置する。
   - WebPに変換して軽量化する（例: `cwebp -q 82 input.jpg -o output.webp`）。
   - `magick identify output.webp` で実際の幅・高さ（px）を確認し、`works.js` に正確な値を書く
     （CLS防止と、カードのサムネイル枠 `aspect-ratio: 1 / 2` に合わせるため）。既存3件は 406×811px。

2. **`src/data/works.js` に1件追加する**

   ```js
   import newWorkImg from '../assets/works/new-work.webp'

   // works配列の先頭付近に追加
   {
     slug: 'new-work',              // URLになる（/works/new-work）
     title: 'サイト名',
     tag: 'Web制作',
     industry: '業種',
     client: 'クライアント名 様',    // わからなければ省略可
     summary: '一覧カードに出る要約文（1〜2文）',
     challenge: '制作前にあった課題（把握している範囲で）',
     goal: '制作目的',
     role: ['企画', 'デザイン', 'コーディング'],   // 担当範囲
     work: ['制作した内容を箇条書きで'],
     stack: ['React', 'Vite', 'Vercel'],
     designNote: 'デザイン上の意図',
     duration: null,                 // わからなければ null（表示されない）
     results: {
       type: 'qualitative',          // 数値の成果がない場合は必ず 'qualitative'
       items: ['実際に確認できている成果だけを書く。数値を捏造しない。'],
     },
     url: 'https://example.com/',
     domain: 'example.com',
     image: {
       src: newWorkImg,
       alt: '画像の代替テキスト',
       width: 964,                   // 実際のpx幅
       height: 1043,                 // 実際のpx高さ
     },
     related: ['hidol-factory'],     // 関連実績のslug（任意）
     featured: true,                 // トップページ一覧に出すか
   }
   ```

   **数値の成果（問い合わせ増加率など）がわからない案件では、絶対に数値を作らないこと。**
   把握している事実だけを `results.items` に書く。`industry` / `client` / `duration` なども、
   わからない項目はキーごと省略してよい（UI側が自動的に非表示にする）。

3. **`public/sitemap.xml` にURLを1行追加する**

   ```xml
   <url>
     <loc>https://sho-school.jp/works/new-work</loc>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

4. **確認する**

   ```bash
   npm run lint
   npm run build
   npm run dev   # http://localhost:5173/works/new-work を目視確認
   ```

## 公開前チェックリスト

`skills.md` の「13. 公開前チェックリスト」を参照。
