import DefaultTheme from 'vitepress/theme'
import ColoringProblem from '../components/ColoringProblem.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全域註冊元件，之後 Markdown 可直接使用 <ColoringProblem />
    app.component('ColoringProblem', ColoringProblem)
  }
}