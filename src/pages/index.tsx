import type { ReactNode } from 'react'
import { useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'

const installCommands = [
	{
		label: 'go install',
		command: 'go install github.com/envm-org/envm@latest',
	},
	{ label: 'curl', command: 'curl -fsSL https://envm.dev/install.sh | sh' },
	{ label: 'docker', command: 'docker pull ghcr.io/envm-org/envm:latest' },
]

function InstallTabs() {
	const [active, setActive] = useState(0)
	return (
		<div className='mt-10 max-w-xl'>
			<div className='flex gap-0 border-b border-white/10'>
				{installCommands.map((cmd, i) => (
					<button
						type='button'
						key={cmd.label}
						onClick={() => setActive(i)}
						className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer border-0 bg-transparent ${
							i === active
								? 'text-purple-400 border-b-2 border-purple-400'
								: 'text-white/50 hover:text-white/80'
						}`}
					>
						{cmd.label}
					</button>
				))}
			</div>
			<div className='mt-0 rounded-b-lg bg-white/[0.03] border border-t-0 border-white/10 px-5 py-3 font-mono text-sm text-white/90 flex items-center justify-between'>
				<span>
					<span className='text-purple-400 mr-2'>$</span>
					{installCommands[active].command}
				</span>
				<button
					type='button'
					onClick={() =>
						navigator.clipboard.writeText(installCommands[active].command)
					}
					className='ml-4 text-white/30 hover:text-white/70 transition-colors cursor-pointer bg-transparent border-0 text-sm'
					title='Copy'
				>
					📋
				</button>
			</div>
		</div>
	)
}


function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className='relative overflow-hidden bg-[#1b1b1f] pt-24 pb-16 md:pt-32 md:pb-24'>
			{/* Subtle gradient glow */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none' />

			<div className='max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12 relative z-10'>
				{/* Left: text content */}
				<div className='flex-1 text-left max-w-2xl'>
					<Heading
						as='h1'
						className='text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight'
					>
						{siteConfig.title}
					</Heading>
					<p className='mt-4 text-xl md:text-2xl text-white/60 font-medium leading-relaxed'>
						{siteConfig.tagline}
					</p>
					<p className='mt-4 text-base md:text-lg text-white/40 leading-relaxed max-w-lg'>
						Manage, encrypt, and sync environment variables across your team.
						Stop sharing secrets in Slack and start using ENVM.
					</p>

					<div className='flex items-center gap-4 mt-8 flex-wrap'>
						<Link
							className='inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-all hover:shadow-lg hover:shadow-purple-600/25 hover:no-underline hover:text-white'
							to='/docs/intro'
						>
							Get Started
						</Link>
						<Link
							className='inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all hover:no-underline hover:text-white'
							href='https://github.com/envm-org/envm'
						>
							View on GitHub
						</Link>
					</div>

					<InstallTabs />
				</div>

				{/* Right: decorative graphic */}
				<div className='hidden lg:flex flex-1 items-center justify-center'>
					<div className='relative w-72 h-72'>
						{/* Stacked cards like Vite's graphic */}
						<div className='absolute inset-8 rounded-2xl bg-purple-600/10 border border-purple-500/20 transform rotate-6' />
						<div className='absolute inset-4 rounded-2xl bg-purple-600/15 border border-purple-500/25 transform rotate-3' />
						<div className='absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center'>
							<div className='text-center'>
								<div className='text-5xl mb-3'>🔐</div>
								<span className='text-white/40 text-sm font-mono tracking-wider'>
									ENVM
								</span>
							</div>
						</div>
						{/* Floating dots */}
						<div className='absolute -top-3 -right-3 w-6 h-6 rounded-full bg-purple-500/30 border border-purple-500/40' />
						<div className='absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-violet-500/30 border border-violet-500/40' />
						<div className='absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-indigo-500/30 border border-indigo-500/40' />
					</div>
				</div>
			</div>
		</header>
	)
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title='Secure Env Management'
			description='ENVM is a secure environment variable management and sync tool. Manage, encrypt, and share env variables across your team without exposing sensitive data.'
		>
			<HomepageHeader />
			<main className='bg-[#1b1b1f]'>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}
