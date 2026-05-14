# 部署到 GitHub Pages

這頁說明如何把這個網站部署到 GitHub Pages。

## 1. 建立 GitHub Repo

到 GitHub 建立一個新的 repo。

例如 repo 名稱：

```text
my-docs
```

## 2. 修改 base

打開：

```text
docs/.vitepress/config.mts
```

找到：

```ts
base: '/vitepress-hackmd-book/',
```

把它改成你的 repo 名稱：

```ts
base: '/my-docs/',
```

如果你的 repo 叫 `my-blog`，就改成：

```ts
base: '/my-blog/',
```

## 3. 第一次上傳

在專案根目錄執行：

```bash
git init
git branch -M main
git add .
git commit -m "init"
git remote add origin https://github.com/你的帳號/你的repo.git
git push -u origin main
```

## 4. 開啟 GitHub Pages

到 GitHub repo：

```text
Settings → Pages
```

Source 選：

```text
GitHub Actions
```

## 5. 等待部署完成

到 repo 的：

```text
Actions
```

看到綠色勾勾代表部署成功。

網站網址通常是：

```text
https://你的帳號.github.io/你的repo/
```
