import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ENVM",
  description: "Secure Environment Variable Management & Sync Tool",
  base: '/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/docs/intro' },
      { text: 'Encryption', link: '/docs/encryption' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/intro' },
            { text: 'Installation', link: '/docs/installation' },
            { text: 'Quick Start', link: '/docs/initialize-project' }, 
          ]
        },
        {
          text: 'Core Concepts',
          items: [
             { text: 'Encryption', link: '/docs/encryption' },
             { text: 'Environment Sync', link: '/docs/multi-environment' }, 
          ]
        },
         {
          text: 'Reference',
          items: [
             { text: 'CLI Commands', link: '/docs/running-commands' }, 
             { text: 'Configuration', link: '/docs/manage-variables' }, 
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/envm-org/envm' },
      { icon: 'discord', link: 'https://discord.gg/envm' },
      { icon: 'x', link: 'https://x.com/envm_dev' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} ENVM. Built with VitePress.`
    },
    
    search: {
      provider: 'local'
    }
  }
})
