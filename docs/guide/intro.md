# 前言

這是一個 **VitePress + GitHub Pages** 的多文章教學網站範本。

它的使用方式很像 HackMD：

1. 用 Markdown 寫文章
2. 把圖片或 GIF 放進資料夾
3. 用 Git 推送到 GitHub
4. GitHub Pages 自動更新網站

## 你可以把它當成什麼？

你可以把它當成：

- 個人教學網站
- 課程講義
- 技術筆記
- 專案說明書
- 類似 GitBook 的書本式網站

## 文章放在哪裡？

文章都放在 `docs/` 資料夾裡。

例如：

```text
// 這些都是文章檔案
docs/guide/intro.md
docs/tutorials/markdown-demo.md
docs/tutorials/images-and-gifs.md
```

## 左側目錄在哪裡設定？

左側目錄在：

```text
docs/.vitepress/config.mts
```

新增文章後，要去 `sidebar` 裡面加上連結，左側目錄才會顯示。
