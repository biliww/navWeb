import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  // base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  base: '/',

  lang: 'zh-CN',
  title: 'biliw网站导航',
  description: 'biliw网站导航description',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* 样式 配置 */
  // transformHead({ assets }) {
  //   // 相应地调整正则表达式以匹配字体
  //   const myFontFile = assets.find(file => /font-my\.\w+\.woff2/)
  //   if (myFontFile) {
  //     return [
  //       [
  //         'link',
  //         {
  //           rel: 'preload',
  //           href: myFontFile,
  //           as: 'font',
  //           type: 'font/woff2',
  //           crossorigin: ''
  //         }
  //       ]
  //     ]
  //   }
  // },
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://blog.wangpl.cn' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present biliww',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'biliww.navWeb',
    },

    comment: {
      repo: 'biliww/navWeb',
      repoId: 'R_kgDOMp7zYA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMp7zYM4CiCDF',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
