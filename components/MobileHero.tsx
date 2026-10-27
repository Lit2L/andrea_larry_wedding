'use client'

import { motion } from 'motion/react'
import type { ComponentType } from 'react'
import { wedding } from '@/lib/wedding'
import { Countdown } from '@/components/Countdown'

type NavbarProps = {
	darkMode: boolean
	toggleTheme: () => void
}

type MobileWeddingHeroProps = NavbarProps & {
	/** Pass the project's existing Navbar component through unchanged. */
	Navbar: ComponentType<NavbarProps>
	/** Keep names in the page that owns this hero; this avoids duplicating site copy here. */
	heading?: string
	/** Defaults to the supplied restaurant photo copied to public/. */
	imageSrc?: string
}

function dateLabel(value: Date | string | number) {
	const date = new Date(value)
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	}).format(date)
}

/**
 * Mobile-only hero. Render this inside a `md:hidden` wrapper and leave the
 * project's current desktop hero in its existing `hidden md:block` wrapper.
 */
export function MobileWeddingHero({
	darkMode,
	toggleTheme,
	Navbar,
	heading = 'Larry & Andrea',
	imageSrc = '/restaurant-wedding-hero.png'
}: MobileWeddingHeroProps) {
	return (
		<section className='relative isolate min-h-[100svh] overflow-hidden bg-[#120d12] text-[#fff8f1]'>
			<div
				aria-hidden
				className='absolute inset-0 bg-cover bg-[center_45%] opacity-80'
				style={{ backgroundImage: `url('${imageSrc}')` }}
			/>
			<div
				aria-hidden
				className='absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,20,.78)_0%,rgba(19,11,25,.16)_35%,rgba(12,7,15,.7)_76%,#100a12_100%)]'
			/>
			<div
				aria-hidden
				className='absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(255,238,199,.24),transparent_18%),radial-gradient(ellipse_at_50%_63%,rgba(26,13,38,.1),rgba(13,8,19,.73)_78%)]'
			/>

			{/* Celestial layer: deliberately CSS/SVG so the photo remains the hero asset. */}
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-[15%] h-[52%] overflow-hidden'
			>
				<div className='absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8c98a]/35' />
				<div className='absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8c98a]/20' />
				<div className='absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#fff1c9] shadow-[0_0_36px_12px_rgba(255,229,174,.36)]' />
				{[
					'left-[15%] top-[25%]',
					'right-[17%] top-[34%]',
					'left-[29%] top-[11%]',
					'right-[28%] top-[16%]',
					'left-[9%] top-[48%]'
				].map((position) => (
					<span
						key={position}
						className={`absolute h-1 w-1 rounded-full bg-[#fff3d2] shadow-[0_0_8px_2px_rgba(255,240,195,.8)] ${position}`}
					/>
				))}
			</div>

			<div className='relative z-10'>
				<Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
			</div>

			<motion.div
				className='relative z-10 flex min-h-[100svh] flex-col items-center justify-end px-5 pb-9 pt-28 text-center'
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<p className='text-[10px] font-medium uppercase tracking-[0.42em] text-[#f7dfb4]'>
					The wedding of
				</p>
				<h1 className='mt-3 font-serif text-5xl font-normal italic tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,.45)]'>
					{heading}
				</h1>
				<p className='mt-4 text-xs uppercase tracking-[0.3em] text-[#fff4e4]'>
					{/* {dateLabel} */}
				</p>

				<div className='mt-7 h-8 w-px bg-gradient-to-b from-transparent via-[#f5d69b] to-transparent' />

				<div className='mt-5 w-full max-w-sm rounded-2xl border border-white/15 bg-[#1e1322]/45 px-1 py-3 backdrop-blur-md'>
					<Countdown />
				</div>
			</motion.div>
		</section>
	)
}
