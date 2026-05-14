# 網站使用方式

這頁說明日常更新網站的流程。

## 第一次啟動

進到專案資料夾後，執行：

```bash
npm install
npm run docs:dev
```

接著打開終端顯示的網址，通常是：

```text
http://localhost:5173
```

## 修改文章

直接用 VSCode 打開 `.md` 檔案編輯。

例如：

```text
docs/tutorials/markdown-demo.md
```

修改後按：

```text
Ctrl + S
```

本機預覽網站會自動更新。

## 新增文章

例如新增一篇：

```text
docs/tutorials/my-new-article.md
```

內容可以這樣寫：

```md
# 我的新文章

這是新文章內容。
```

然後到：

```text
docs/.vitepress/config.mts
```

在 `sidebar` 裡新增：

```ts
{ text: '我的新文章', link: '/tutorials/my-new-article' }
```

注意：連結不用寫 `.md`。

## 更新到 GitHub

改完文章後執行：

```bash
git add .
git commit -m "update article"
git push
```

GitHub Pages 會自動重新部署。
