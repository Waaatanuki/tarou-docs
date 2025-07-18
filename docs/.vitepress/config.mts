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
          { text: '关于', link: '/begin/about' },
          { text: '更新日志', link: '/begin/changelog' },
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
