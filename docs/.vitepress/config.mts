import { defineConfig } from 'vitepress'

// VitePress 設定檔
// 這裡控制網站標題、導覽列、左側目錄、搜尋、頁尾等功能。
export default defineConfig({
  // 如果你的 GitHub repo 名稱不是 vitepress-hackmd-book，請改成你的 repo 名稱。
  // 例如你的網址是 https://你的帳號.github.io/my-blog/
  // 那這裡就要填：base: '/my-blog/'
  base: '/docs_test/',

  // 網站標題，會顯示在左上角與瀏覽器分頁
  title: '我的教學筆記',

  // 網站描述，主要給搜尋引擎與社群預覽使用
  description: 'HackMD 風格的多文章教學網站',

  // 語系設定：繁體中文
  lang: 'zh-Hant-TW',

  themeConfig: {
    // 左上角網站標題旁的文字
    siteTitle: '我的教學筆記',

    // 右上角導覽列
    nav: [
      { text: '首頁', link: '/' },
      { text: '開始閱讀', link: '/guide/intro' },
      { text: '文章範例', link: '/tutorials/markdown-demo' }
    ],

    // 左側書本式目錄
    // 新增文章後，記得在這裡加一筆，左側目錄才會出現。
    sidebar: [
      {
        text: '開始',
        collapsed: false,
        items: [
          { text: '前言', link: '/guide/intro' },
          { text: '網站使用方式', link: '/guide/how-to-use' },
          { text: '部署到 GitHub Pages', link: '/guide/deploy-github-pages' }
        ]
      },
      {
        text: '教學文章',
        collapsed: false,
        items: [
          { text: 'Markdown 範例', link: '/tutorials/markdown-demo' },
          { text: '圖片與 GIF', link: '/tutorials/images-and-gifs' },
          { text: '程式碼區塊', link: '/tutorials/code-blocks' }
        ]
      }
    ],

    // 內建本地搜尋，不需要額外服務
    search: {
      provider: 'local'
    },

    // 上一頁 / 下一頁文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 頁尾資訊
    footer: {
      message: '使用 VitePress + GitHub Pages 建立',
      copyright: 'Copyright © 2026'
    },

    // 右側文章大綱標題
    outline: {
      label: '本頁目錄',
      level: [2, 3]
    },

    // 編輯連結。若不需要，可以整段刪除。
    editLink: {
      pattern: 'https://github.com/你的帳號/你的repo/edit/main/docs/:path',
      text: '在 GitHub 編輯此頁'
    }
  }
})
