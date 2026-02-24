import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'ENVM',
	description: 'Secure Environment Variable Management & Sync Tool',
	base: '/',
	cleanUrls: true,
	ignoreDeadLinks: true,

	head: [['link', { rel: 'icon', href: '/img/favicon.png' }]],

	themeConfig: {
		nav: [
			{ text: 'Docs', link: '/docs/intro' },
			{ text: 'Changelog', link: '/docs/changelog' },
		],

		sidebar: {
			'/docs/': [
				{
					text: 'Getting Started',
					items: [
						{ text: 'Introduction', link: '/docs/intro' },
						{ text: 'Installation', link: '/docs/installation' },
						{ text: 'Quick Start', link: '/docs/initialize-project' },
					],
				},
				{
					text: 'Core Concepts',
					items: [
						{ text: 'Encryption', link: '/docs/encryption' },
						{ text: 'Environment Sync', link: '/docs/multi-environment' },
					],
				},
				{
					text: 'Reference',
					items: [
						{ text: 'CLI Reference', link: '/docs/cli-reference' },
						{ text: 'Running Commands', link: '/docs/running-commands' },
						{ text: 'Configuration', link: '/docs/manage-variables' },
						{ text: 'Changelog', link: '/docs/changelog' },
					],
				},
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/envm-org/envm' },
			{ icon: 'discord', link: 'https://discord.com/users/nyambogahezron' },
			{ icon: 'x', link: 'https://x.com/nyambogahezron' },
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © ${new Date().getFullYear()} ENVM.`,
		},

		search: {
			provider: 'local',
		},
	},
})
