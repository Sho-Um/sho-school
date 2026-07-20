# React + Vite サイトを Vercel + 独自ドメインで公開するガイド

## 前提条件

- Node.js インストール済み
- `gh`（GitHub CLI）インストール・ログイン済み
- `vercel`（Vercel CLI）インストール・ログイン済み
- 独自ドメインを取得済み（お名前.com など）

```bash
# 未インストールの場合
npm install -g vercel
brew install gh
gh auth login
vercel login
```

---

## Step 1. プロジェクト作成

```bash
mkdir YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
npm create vite@latest . -- --template react --yes
npm install
```

---

## Step 2. 開発・確認

```bash
npm run dev
# → http://localhost:5173 で確認
```

`src/App.jsx` と `src/App.css` を編集してサイトを作る。

ビルドが通るか確認:

```bash
npm run build
# → dist/ フォルダが生成されれば OK
```

---

## Step 3. GitHubにpush

```bash
git init
git add .
git commit -m "initial commit"

# リポジトリ作成 & push を一発で行う
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
```

---

## Step 4. Vercel にデプロイ

```bash
# プロジェクトルートで実行（サブフォルダからは実行しないこと）
vercel --yes
```

初回実行でVercelプロジェクトが自動作成される。`.vercel/` フォルダが生成されたらリンク完了。

本番デプロイ:

```bash
vercel --prod
```

デフォルトURLの形式: `https://YOUR_PROJECT_NAME.vercel.app`

---

## Step 5. 独自ドメインを接続

### Vercel側

1. https://vercel.com にログイン
2. プロジェクト → Settings → Domains
3. ドメイン名を入力して「Add」
4. 表示されるDNS設定値をメモ

### DNS設定（お名前.com の場合）

お名前.com Navi → ドメイン → DNS設定/転送設定 → 対象ドメイン → DNSレコード設定

| ホスト名 | TYPE | VALUE |
|---------|------|-------|
| （空欄） | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` |

> 他のレジストラでも設定内容は同じ。管理画面の場所が違うだけ。

DNS反映の確認（数分〜最大48時間）:

```bash
dig YOUR_DOMAIN +short
# → 76.76.21.21 が返ってきたら完了
```

Vercelのダッシュボードで「Valid Configuration」と緑になっていれば接続完了。

---

## Step 6. ファビコンを設定する

### ファイルを置く場所

```
public/favicon.png   ← PNG の場合
public/favicon.svg   ← SVG の場合（シンプルなロゴに向いている）
public/favicon.ico   ← ICO の場合
```

### index.html の設定

```html
<!-- PNG -->
<link rel="icon" type="image/png" href="/favicon.png" />

<!-- SVG -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- ICO -->
<link rel="icon" href="/favicon.ico" />
```

### ファビコン画像の加工（ImageMagick）

```bash
# 複数並びの画像から1つを切り出す（例：2×2グリッドの左上）
magick favicon.png -crop 512x512+0+0 +repage favicon.png

# 外周の余白を自動トリム
magick favicon.png -fuzz 8% -trim +repage favicon.png

# 下部テキストを除去して上部にフォーカス（高さ90%分だけ残す）
magick favicon.png -gravity North -crop 512x460+0+0 +repage -resize 512x512! favicon.png
```

> **ポイント**: 余白が多いとタブで小さく見える。タイトにトリムするほど大きく見える。
> 複雑なイラストは PNG のまま使うのが無難（SVG自動変換は品質が落ちやすい）。

---

## 更新の手順（日常作業）

```bash
# コードを編集したあと
vercel --prod

# GitHubにも保存したい場合
git add .
git commit -m "変更内容のメモ"
git push
```

---

## よくあるミス

| ミス | 対処 |
|------|------|
| `public/` の中で `vercel` を実行した | `public/` の `.vercel/` フォルダを削除して、プロジェクトルートから実行し直す |
| ファビコンが更新されない | ブラウザのキャッシュをクリア（`Cmd + Shift + R`） |
| DNS設定後すぐにつながらない | 最大48時間かかる。`dig YOUR_DOMAIN +short` で反映を確認 |
| `vercel --yes` でGitHub連携に失敗した | デプロイ自体は成功している。GitHub連携はVercelダッシュボードから手動で行う |

---

## 参考

- [Vercel ドキュメント](https://vercel.com/docs)
- [Vite ドキュメント](https://vite.dev/)
- [お名前.com DNS設定ヘルプ](https://help.onamae.com/)
