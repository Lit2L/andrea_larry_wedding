'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Countdown } from './Countdown'
import { wedding } from '@/lib/wedding'

export function DesktopWeddingHero() {
	const reduceMotion = useReducedMotion()

	return (
		<div className='relative isolate min-h-[740px] h-[100svh] max-h-[1060px] overflow-hidden bg-[#1e140f]'>
			{/* Desktop photograph */}
			<div className='absolute inset-0 overflow-hidden bg-[#1e140f]'>
				{/* Atmospheric background */}
				<Image
					src='/images/larry-andrea-hero.webp'
					alt=''
					aria-hidden='true'
					fill
					sizes='100vw'
					className='
      scale-110
      object-cover object-center
      blur-3xl opacity-60
    '
				/>

				{/* Main photograph — preserve both faces */}
				<Image
					src='/images/larry-andrea-hero.webp'
					alt='Larry and Andrea smiling together at a restaurant'
					fill
					priority
					sizes='100vw'
					className='
      object-contain
      object-center
    '
				/>

				{/* Dark gradient for readable typography */}
				<div
					className='
      absolute inset-0
      bg-[linear-gradient(90deg,rgba(16,10,7,0.95)_0%,rgba(26,15,9,0.75)_24%,rgba(21,13,9,0.18)_65%,transparent_100%)]
    '
				/>

				{/* Top and bottom atmospheric shading */}
				<div
					className='
      absolute inset-0
      bg-[linear-gradient(180deg,rgba(9,6,5,0.30)_0%,transparent_30%,transparent_70%,rgba(12,7,5,0.30)_100%)]
    '
				/>
			</div>

			{/* Editorial content */}
			<div className='relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center px-20 pb-[130px] pt-[105px]'>
				<motion.div
					initial={reduceMotion ? false : { opacity: 0, y: 22 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='relative w-full max-w-[440px] text-center'
				>
					{/* Decorative flourish */}
					<div
						aria-hidden='true'
						className='pointer-events-none absolute -left-14 top-20 text-[#d9bd96]/80'
					>
						<span className='block h-[200px] w-[70px] rounded-[50%_0_0_50%] border-l border-[#d9bd96]/55' />
						<span className='absolute -left-1 top-1/2 text-xl'>✧</span>
					</div>

					<p className='mb-5 text-[11px] uppercase tracking-[0.4em] text-[#d8c4aa]'>
						The Wedding Of
					</p>

					<h1 className='font-editorial text-[clamp(4.5rem,7vw,7.8rem)] leading-[0.77] tracking-[-0.045em]'>
						<span className='block'>Larry &</span>
						<span className='mt-4 block'>Andrea</span>
					</h1>

					<div className='mt-10 space-y-1.5 text-xs uppercase tracking-[0.27em]'>
						<p>{wedding.dateLabel}</p>
						<p className='text-[#e9d6c3]/90'>Southern California</p>
					</div>

					<div
						aria-hidden='true'
						className='my-6 flex items-center justify-center gap-3 text-[#d9b78b]'
					>
						<span className='h-px w-12 bg-current/60' />
						<span className='text-[23px] leading-none'>✧</span>
						<span className='h-px w-12 bg-current/60' />
					</div>

					<p className='font-editorial text-[30px] leading-[1.05] italic text-[#f6e9dd]'>
						Under the moon &amp; stars,
						<br />
						we&apos;d love to celebrate with you.
					</p>

					<div className='mt-9'>
						<Countdown />
					</div>

					<a
						href='#details'
						className='mt-9 inline-flex min-h-12 items-center gap-4 rounded-full border border-[#eadbca]/80 px-8 py-3 text-[10px] uppercase tracking-[0.23em] transition-colors hover:bg-[#fff4e8] hover:text-[#23170f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
					>
						The Details
						<ArrowDown size={14} strokeWidth={1.5} />
					</a>
				</motion.div>
			</div>

			{/* Decorative moon */}
			<div
				aria-hidden='true'
				className='pointer-events-none absolute bottom-[100px] right-[7%] text-6xl leading-none text-[#eac699]/60'
			>
				☾
			</div>

			{/* Bottom wave */}
			<svg
				aria-hidden='true'
				viewBox='0 0 1440 120'
				preserveAspectRatio='none'
				className='hero-wave pointer-events-none absolute -bottom-px left-0 z-20 h-[116px] w-full'
			>
				<path d='M0 28 C180 0 265 92 445 71 C650 43 739 4 924 57 C1100 103 1224 19 1440 32 L1440 120 L0 120 Z' />
			</svg>
		</div>
	)
}
