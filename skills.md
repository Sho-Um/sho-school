# Sho School 制作・公開ログ

React + Vite で Sho School の自己紹介サイトを作り、GitHub に push し、Vercel にデプロイして独自ドメインを接続するまでの記録。

このログは、今後の Sho School 改修だけでなく、飲食店HP・個人HP・LP制作などにも再利用できる制作テンプレートとして使う。

---

## 1. プロジェクト作成

```bash
# ~/sho-school ディレクトリで実行
npm create vite@latest . -- --template react --yes
npm install
```

**ファイル構成**

```txt
sho-school/
├── index.html
├── package.json
├── public/
│   └── favicon.png
└── src/
    ├── App.jsx     ← 全セクションのコンポーネント
    ├── App.css     ← レイアウト・各コンポーネントのスタイル
    └── index.css   ← デザイントークン（カラー・フォント）+ リセット
```

> **ポイント**: React + Vite の場合、基本的には `src/App.jsx` と `src/App.css` を中心に編集する。  
> ファビコンやOGP画像など、URLで直接参照する画像は `public/` に置く。

---

## 2. サイト構成

1ページ完結のLP。セクション構成：

| セクション | 内容 |
|-----------|------|
| Header | ロゴ + ナビ（sticky） |
| Hero | キャッチコピー + CTAボタン |
| About | 自己紹介テキスト + メタ情報リスト |
| What I Do | できることをカード形式で表示 |
| Current Projects | 最近の取り組みをグリッド表示 |
| Values | 大切にしている考え方 |
| Contact | 問い合わせ導線 |
| Footer | コピーライト |

---

## 3. デザイントークン

`src/index.css` にサイト全体で使う色・フォントをまとめる。

```css
:root {
  --ink:        #1a1a1a;
  --ink-soft:   #444444;
  --ink-muted:  #888888;
  --bg:         #ffffff;
  --cream:      #f8f6f1;
  --accent:     #1d5c52;   /* ティールグリーン */

  --font-body:    'Hiragino Kaku Gothic ProN', system-ui, sans-serif;
  --font-heading: 'Hiragino Mincho ProN', Georgia, serif;
}
```

**デザイン方針**

- 白・生成り・黒・ティールグリーンを中心にする
- 色を増やしすぎない
- 余白を広めに取る
- 派手さよりも、信頼感・知性・親しみを優先する
- 見出しは少し上品に、本文は読みやすくする

---

## 4. コンテンツ方針

Sho School のテーマは「流れをつくる」。

マーケティング・Web制作・教育・AI活用を通じて、人や事業が前に進むきっかけを作る個人ブランドとして見せる。

### 使いやすい表現

```txt
流れをつくる
整える
形にする
伝わるようにする
小さく試す
次の一手を見えるようにする
人と事業が前に進むきっかけを作る
```

### 避けたい表現

```txt
圧倒的
最先端
革新的
唯一無二
完全対応
すべて解決
最高品質
```

> **ポイント**: かっこつけすぎるより、「何ができるか」「どう関わるか」が伝わる方を優先する。

---

## 5. GitHub に push

```bash
git init
git add .
git commit -m "initial commit"

# gh CLI でリポジトリ作成 & push を一発で行う
gh repo create sho-school --public --source=. --remote=origin --push
```

リポジトリURL:

```txt
https://github.com/Sho-Um/sho-school
```

> **ポイント**: GitHub に置いておくことで、制作履歴を残せる。  
> Vercel と GitHub を連携すると、`git push` だけで自動デプロイできる。

---

## 6. Vercel にデプロイ

```bash
# 初回：プロジェクト作成 + プレビューデプロイ
vercel --yes

# 本番デプロイ
vercel --prod
```

- Vercel プロジェクト名: `sho-school`
- デフォルトURL: `https://sho-school.vercel.app`

> **注意**: `public/` フォルダの中で `vercel` を実行すると、別プロジェクトとして作られてしまう。  
> 常にプロジェクトルート、つまり `~/sho-school` で実行すること。

---

## 7. 独自ドメイン接続

### Vercel側

Vercel ダッシュボードで以下の流れ。

```txt
Project
↓
Settings
↓
Domains
↓
sho-school.jp を追加
```

### お名前.com側

DNSレコードを設定する。

| ホスト名 | TYPE | VALUE |
|---------|------|-------|
| 空欄 | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` |

DNS反映の確認:

```bash
dig sho-school.jp +short
```

以下が返ってきたらOK。

```bash
76.76.21.21
```

> **ポイント**:  
> ルートドメインは A レコード、`www` は CNAME で設定する。  
> 反映には数分〜数時間かかることがある。

---

## 8. ファビコン設定

### ファイルを置く場所

```txt
public/favicon.png
```

### `index.html` に追加

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

### ImageMagickで加工

4枚並びの画像から左上1枚を切り出す。

```bash
# 512x512の画像を4分割して左上を取り出す
magick favicon.png -crop 512x512+0+0 +repage favicon.png
```

余白を削って猫を大きく見せる。

```bash
# 外周の余白を自動トリム
magick favicon.png -fuzz 8% -trim +repage favicon.png

# 下部のテキストを除去して猫の顔にフォーカス
magick favicon.png -gravity North -crop 512x460+0+0 +repage -resize 512x512! favicon.png
```

> **ポイント**: ファビコンはブラウザタブで 16〜32px 程度で表示される。  
> 余白が多いと小さく見えるので、できるだけモチーフを大きくする。  
> イラスト系画像は SVG に自動変換すると線がガタガタになることがあるため、PNG のまま使う方が安全。

---

## 9. OGP設定

URLをLINEやXなどで共有したときに、タイトル・説明文・画像がきれいに表示されるようにする。

### `public/ogp.png` を作成

推奨サイズ:

```txt
1200px × 630px
```

配置場所:

```txt
public/ogp.png
```

### `index.html` に追加

```html
<title>Sho School | 流れをつくるマーケティングとWeb制作</title>
<meta name="description" content="Sho Schoolは、マーケティング、Web制作、教育、AI活用を通じて、人と事業が前に進む流れをつくる個人ブランドです。" />

<meta property="og:title" content="Sho School" />
<meta property="og:description" content="マーケティング、Web制作、教育、AI活用で、人と事業が前に進む流れをつくる。" />
<meta property="og:image" content="https://sho-school.jp/ogp.png" />
<meta property="og:url" content="https://sho-school.jp" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
```

> **ポイント**: OGP画像は、サイト公開後にSNSやLINEでURLを送ったときの見え方に大きく影響する。  
> 案件サイトでは、ファビコンよりもOGP画像の方が印象に残りやすい。

---

## 10. Google Search Console 登録

独自ドメインで公開したら、Google Search Console に登録する。

やること:

```txt
Google Search Consoleにアクセス
↓
ドメインまたはURLプレフィックスで登録
↓
所有権確認
↓
インデックス登録をリクエスト
↓
必要に応じてサイトマップ送信
```

> **ポイント**: 公開しただけでは、すぐにGoogle検索に出るとは限らない。  
> Search Console に登録して、Googleにサイトの存在を伝える。

---

## 11. Google Analytics 導入

アクセス数やユーザー行動を確認したい場合は、Google Analytics を入れる。

確認したい項目:

```txt
アクセス数
流入元
よく見られているページ
スマホ / PC 比率
滞在時間
問い合わせ前の動き
```

> **ポイント**: Sho School では必須ではないが、案件サイトでは導入しておくと改善提案がしやすい。

---

## 12. コードを更新したときの手順

基本は GitHub に保存して、Vercel に反映する。

```bash
# 1. 変更内容を確認
git status

# 2. 変更をステージング
git add .

# 3. コミット
git commit -m "変更内容"

# 4. GitHubへpush
git push
```

GitHub と Vercel が連携されていれば、`git push` 後に自動でデプロイされる。

CLIで直接本番反映したい場合:

```bash
vercel --prod
```

> **おすすめ運用**:  
> 普段は `git push` で自動デプロイ。  
> 急ぎで本番反映したいときだけ `vercel --prod` を使う。

---

## 13. 公開前チェックリスト

### 表示確認

- PCで崩れていない
- スマホで崩れていない
- 横スクロールが出ていない
- 文字が小さすぎない
- ボタンが押しやすい
- 余白が詰まりすぎていない

### 内容確認

- 誤字脱字がない
- 何をしている人か伝わる
- CTAがわかりやすい
- Contact導線が機能している
- 古い情報が残っていない

### 技術確認

```bash
npm run build
```

- build が通る
- Vercelでエラーが出ていない
- 独自ドメインで表示される
- `www` あり・なしの両方で問題ない
- favicon が表示される
- OGP画像が表示される
- ブラウザの Console に大きなエラーが出ていない

---

## 14. 今後追加したい改善

優先度高め:

```txt
OGP画像の作成
Google Search Console登録
Google Analytics導入
Contact導線の改善
スマホ表示の微調整
画像の軽量化
```

余裕があれば追加:

```txt
Worksページ
Projects詳細ページ
ブログ / メモページ
お問い合わせフォーム
404ページ
サイトマップ
構造化データ
```

---

## 15. 他案件への応用

Sho School の制作手順は、今後のWeb制作案件にも使える。

応用できる案件:

```txt
飲食店HP
個人事業主サイト
店舗LP
アイドル公式サイト
オーディションサイト
海洋散骨HP
サービス紹介サイト
採用LP
```

案件ごとに変える主な項目:

```txt
ブランド名
ドメイン
ロゴ
ブランドカラー
フォント
写真
Heroコピー
CTA
セクション構成
問い合わせ導線
SEOキーワード
OGP画像
```

> **ポイント**: Sho School は自分用サイトでありながら、今後の制作案件の練習台・テンプレートとしても使う。
