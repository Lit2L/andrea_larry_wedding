'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { Monogram } from './Monogram'
import { wedding } from '@/lib/wedding'

export function RSVP() {
	return (
		<section
			id='rsvp'
			className='relative scroll-mt-5 overflow-hidden bg-[#1d2430] px-5 py-28 text-center text-[#f6eee2] sm:px-10 lg:py-40'
		>
			<div
				className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#4b4751_0%,transparent_64%)] opacity-80'
				aria-hidden='true'
			/>
			<div className='absolute left-[9%] top-[24%] text-xl text-[#e0c299]/45' aria-hidden='true'>
				✧
			</div>
			<div className='absolute right-[15%] top-[38%] text-3xl text-[#e0c299]/50' aria-hidden='true'>
				✧
			</div>
			<div
				className='absolute bottom-[18%] right-[11%] text-sm text-[#e0c299]/40'
				aria-hidden='true'
			>
				✦
			</div>
			<Reveal className='relative z-10 mx-auto max-w-[750px]'>
				<p className='text-[10px] uppercase tracking-[0.31em] text-[#d2b48c]'>
					Under the Moon & Stars
				</p>
				<div className='my-7 text-6xl leading-none text-[#e6c89b]' aria-hidden='true'>
					☾
				</div>
				<h2 className='font-editorial text-[clamp(4rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]'>
					Celebrate
					<br />
					With Us
				</h2>
				<p className='font-editorial mx-auto mt-8 max-w-lg text-[27px] leading-none italic text-[#e7d7c5] sm:text-[33px]'>
					We can&apos;t wait to share this day with you.
				</p>
				<p className='mt-9 text-[11px] uppercase tracking-[0.2em]'>
					Kindly reply by {wedding.rsvpBy}
				</p>
				{wedding.rsvpUrl ? (
					<a
						href={wedding.rsvpUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='mt-9 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#e4cba9] px-10 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-[#fff4e5] hover:text-[#20242d]'
					>
						RSVP Now <ArrowUpRight size={16} strokeWidth={1.5} />
					</a>
				) : (
					<p className='mt-9 text-sm text-[#d5c0a8]'>RSVP link coming soon</p>
				)}
				<div className='mx-auto mt-16 w-[80px] opacity-65'>
					<Monogram />
				</div>
			</Reveal>
		</section>
	)
}
