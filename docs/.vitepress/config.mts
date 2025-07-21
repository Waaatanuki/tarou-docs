import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '太郎',
  description: '太郎文档',
  base: '/tarou-docs/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/tarou-docs/favicon.ico' }],
  ],
  cleanUrls: true,
  vite: {
    plugins: [
      Unocss({
        inspector: false,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: 'types/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()],
        dirs: ['composables'],
        vueTemplate: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'types/components.d.ts',
        dirs: ['components'],
      }),
    ],
    ssr: { noExternal: ['element-plus'] },
  },
  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/begin/about' },
          { text: '快速开始', link: '/begin/start' },
          { text: '更新日志', link: '/begin/changelog' },
        ],
      },
      {
        text: '功能',
        items: [
          { text: '概论', link: '/feature/intro' },
          { text: '主页', link: '/feature/dashboard' },
          { text: '掉落统计', link: '/feature/drop' },
          // { text: '神器甄选', link: '/feature/artifact' },
          { text: '队伍信息', link: '/feature/party' },
          { text: '配置查询', link: '/feature/build' },
          // { text: '战斗信息', link: '/feature/combat' },
          { text: '战斗记录', link: '/feature/history' },
          // { text: '标记玩家', link: '/feature/patient' },
          // { text: '抽卡模拟', link: '/feature/gacha' },
          // { text: '接战', link: '/feature/battle' },
          { text: '用户信息', link: '/feature/info' },
          { text: '设置', link: '/feature/setting' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/tarou-docs' },
    ],
    lastUpdated: {
      text: '最后更新于 ',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
})
