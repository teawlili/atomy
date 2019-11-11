const path = require('path');

module.exports = {
  base: '/atomy/',
  dest: path.join(path.resolve(__dirname), '../dist'),
  locales: {
    '/en/': {
      lang: 'en',
      title: 'atomy',
      description:
        'project draft',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'atomy',
      description:
        'project draft',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`,
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#f43b6c',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: `/icons/apple-touch-icon-152x152.png`,
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#f43b6c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#f43b6c',
      },
    ],
  ],
  serviceWorker: true,
  themeConfig: {
    locales: {
      '/en/': {
        label: 'English',
        selectText: '中文',
        nav: [
          {
            text: 'home',
            link: '/',
          },
          {
            text: 'about-atomy',
            link: '/en/introduction',
          },
          {
            text: 'download',
            link: 'https://',
          },
          {
            text: 'about-me',
            link: 'https://teawlili.github.io/',
          },
        ],
        sidebar: {
          '/en/': [
            {
              title: 'Getting started',
              collapsable: false,
              children: [
                'products-list1',
                'products-list2',
                'hot-sell',
              ],
            },
            {
              title: 'products',
              collapsable: false,
              children: [
                'products/hemohim',
                'products/Health',
                'products/Beauty',
                'products/Personal-care',
                'products/Home-goods',
                'products/Fashion',
                'products/Food',
                'products/Special-set',
              ],
            },
            {
              title: 'shopping-guide',
              collapsable: false,
              children: ['shopping-guide/register'],
            },
            {
              title: 'Docs',
              collapsable: false,
              children: ['docs/style-guide', 'docs/pwa', 'docs/npm-scripts'],
            },
          ],
        },
      },
      '/zh-cn/': {
        label: '简体中文',
        selectText: 'English',

        nav: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: '公司背景',
            link: '/zh-cn/introduction',
          },
          {
            text: '下载',
            link: 'https://',
          },
          {
            text: '关于我',
            link: 'https://',
          },

        ],
        sidebar: {
          '/zh-cn/': [
            {
              title: '开始',
              collapsable: false,
              children: [
                'products-list1',
                'products-list2',
                'products/hemohim',

              ],
            },
            {
              title: 'shopping-guide',
              collapsable: false,
              children: ['shopping-guide/register'],
            },
            {
              title: '文档',
              collapsable: false,
              children: ['docs/style-guide', 'docs/npm-scripts', 'docs/i18n', 'docs/storybook', 'docs/redirects'],
            },
          ],
        },
      },
    },
  },
};
