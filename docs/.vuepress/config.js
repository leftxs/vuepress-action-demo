module.exports = {
    title: 'docs/config.js Global title',
    description: 'VuePress Demo',
    base: '/vuepress-action-demo/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'About', link: '/about/'}
          ]
        },
    plugins: [
          '@vuepress/back-to-top'
        ]    
  }