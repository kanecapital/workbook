const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kane Capital Trading Workbook',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Meet the Team',
        link: '/team/',
      },
      {
        text: 'Principles',
        link: '/principles/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Misc',
        link: '/misc/'
      }
    ],
    sidebar: {
      '/team/': [
        {
          title: 'Meet the Team',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'members',
            'guru',
            'mander'
          ]
        },
      ],
      '/principles/': [
        {
          title: 'Principles',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'risk',
            'emotions',
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'watchlist',
            'charting',
            'indicators',
            'options',
            'strategies',
          ]
        }
      ],
      '/misc/': [
        {
          title: 'Misc',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'pdt',
            'tax',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
