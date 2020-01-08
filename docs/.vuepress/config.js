module.exports = {
  title: '博客系统',
  description: '欢迎来到，ali的博客',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  locales: { /* ... */ },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://364967648.github.io/' },
    ],
    sidebar: 'auto',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://364967648.github.io/',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    locales: {},
    lastUpdated: 'Last Updated',
  },
  plugins: ['@vuepress/active-header-links','@vuepress/back-to-top']
}
