import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'ENVM',
	tagline: 'Secure Environment Variable Management & Sync Tool',

	plugins: [require.resolve('./src/plugins/tailwind-plugin.cjs')],
	favicon: 'img/favicon.ico',

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: process.env.GITHUB_ACTIONS
		? 'https://envm-org.github.io/docs'
		: 'http://localhost:3000',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	// Use '/' for local development, '/envm/' for GitHub Pages
	baseUrl: process.env.GITHUB_ACTIONS ? '/docs/' : '/',

	// GitHub pages deployment config.
	organizationName: 'envm-org', // Your GitHub org/user name.
	projectName: 'envm', // Your repo name.
	trailingSlash: false,

	onBrokenLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang.
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/envm-org/envm/tree/main/docs/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					editUrl: 'https://github.com/envm-org/envm/tree/main/docs/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/envm-social-card.jpg',
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: false,
		},
		navbar: {
			title: 'ENVM',
			logo: {
				alt: 'ENVM Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Docs',
				},

				{
					href: 'https://github.com/envm-org/envm',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Documentation',
					items: [
						{
							label: 'Getting Started',
							to: '/docs/intro',
						},
						{
							label: 'Installation',
							to: '/docs/installation',
						},
						{
							label: 'Encryption',
							to: '/docs/encryption',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub Discussions',
							href: 'https://github.com/envm-org/envm/discussions',
						},
						{
							label: 'Discord',
							href: 'https://discord.gg/envm',
						},
						{
							label: 'X / Twitter',
							href: 'https://x.com/envm_dev',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/envm-org/envm',
						},
						{
							label: 'npm',
							href: 'https://www.npmjs.com/package/envm',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} ENVM. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.dracula,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['bash', 'json', 'yaml', 'go'],
		},
	} satisfies Preset.ThemeConfig,
}

export default config;
