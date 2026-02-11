import type { ReactNode } from 'react'
import Heading from '@theme/Heading'

type FeatureItem = {
	title: string
	icon: ReactNode
	description: ReactNode
}

function FeatureIcon({ children }: { children: ReactNode }) {
	return (
		<div className='w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-lg mb-4'>
			{children}
		</div>
	)
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Secure by Default',
		icon: <FeatureIcon>🔐</FeatureIcon>,
		description: (
			<>
				End-to-end AES-256 encryption for all your secrets. Role-based access
				control, comprehensive audit logging, and secure key management keep
				your sensitive data protected.
			</>
		),
	},
	{
		title: 'Team Collaboration',
		icon: <FeatureIcon>👥</FeatureIcon>,
		description: (
			<>
				Share environment variables with your team without exposing sensitive
				values. Admins can grant access to secrets that team members can use but
				never see in plain text.
			</>
		),
	},
	{
		title: 'CLI & Web GUI',
		icon: <FeatureIcon>⌨️</FeatureIcon>,
		description: (
			<>
				Powerful command-line interface built with Go for maximum performance,
				plus an intuitive web dashboard for managing variables visually.
			</>
		),
	},
	{
		title: 'Multi-Environment',
		icon: <FeatureIcon>🌍</FeatureIcon>,
		description: (
			<>
				Seamlessly manage dev, staging, and production environments. Support for
				environment inheritance and variable overrides makes configuration a
				breeze.
			</>
		),
	},
	{
		title: 'Version Control',
		icon: <FeatureIcon>📜</FeatureIcon>,
		description: (
			<>
				Track every change to your environment variables with full history.
				Rollback to any previous version instantly when things go wrong.
			</>
		),
	},
	{
		title: 'Import & Export',
		icon: <FeatureIcon>🔄</FeatureIcon>,
		description: (
			<>
				Compatible with existing tools. Import from <code>.env</code>, JSON, or
				YAML files. Export to any format for maximum flexibility and easy
				migration.
			</>
		),
	},
]

function Feature({ title, icon, description }: FeatureItem) {
	return (
		<div className='group rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-900/10'>
			{icon}
			<Heading as='h3' className='text-lg font-semibold text-white mb-2'>
				{title}
			</Heading>
			<p className='text-sm text-white/50 leading-relaxed m-0'>{description}</p>
		</div>
	)
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className='py-20 border-t border-white/[0.06]'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='flex flex-col items-center justify-center text-center mb-16'>
					<Heading
						as='h2'
						className='flex flex-row items-center justify-center text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4'
					>
						Everything You Need
					</Heading>
					<p className='flex flex-row items-center justify-center text-base md:text-lg text-white/40 max-w-lg mx-auto leading-relaxed'>
						ENVM provides a complete solution for managing environment variables
						across your entire development lifecycle.
					</p>
				</div>
				<div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
