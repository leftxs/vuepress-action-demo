module.exports = {
    title: 'VuePress Demo',
    description: 'VuePress Demo',
    base: '/vuepress-action-demo/',
    plugins: [ '@vuepress/active-header-links' ],
    themeConfig: {
      // head: [
      //   ['link', { rel: 'icon', href: '/logo.png' }]
      // ],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Action', link: '/action/' },
        { text: 'Router', link: '/router/' },
      ],
      sidebar: [
        {
          title: 'Home',  
          path: '/',     
        },
        {
          title: 'Action',  
          path: '/action/',     
        },
        {
          title: 'Router',   
          path: '/router/',  
        },
      ]
    }
  }