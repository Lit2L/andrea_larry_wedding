'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Navbar } from './Navbar'
import { Countdown } from './Countdown'
import { wedding } from '@/lib/wedding'

type Props = { darkMode: boolean; toggleTheme: () => void }

export function Hero({ darkMode, toggleTheme }: Props) {
	const reduceMotion = useReducedMotion()

	return (
		<section id='home' className='relative isolate overflow-hidden bg-[#1e140f] text-[#fff4e8]'>
			{/* Desktop hero image: original couple photo with text-safe left gradient. */}
			<div className='absolute inset-0 hidden md:block'>
				<Image
					src='/images/larry-andrea-hero.webp'
					alt='Larry and Andrea smiling across a restaurant table'
					fill
					priority
					sizes='100vw'
					className='object-cover object-[center_46%]'
				/>
				<div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(16,10,7,0.93)_0%,rgba(26,15,9,0.72)_22%,rgba(21,13,9,0.22)_53%,rgba(18,11,8,0.05)_100%)]' />
				<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,5,0.27)_0%,transparent_28%,transparent_70%,rgba(12,7,5,0.25)_100%)]' />
			</div>

			<Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

			{/* Mobile intentionally shows full wide photo (no face crop). */}
			<div className='relative pt-[82px] md:hidden'>
				<Image
					src='/images/mobile.png'
					alt='Larry and Andrea together over dinner'
					width={1672}
					height={941}
					sizes='100vw'
					priority
					className='h-auto w-full'
				/>
				<div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1e140f] to-transparent' />
			</div>

			<div className='relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-center px-5 pb-[110px] pt-7 sm:px-10 md:min-h-[740px] md:h-[100svh] md:max-h-[1060px] md:justify-start md:pb-[130px] md:pt-[105px] lg:px-20'>
				<motion.div
					initial={reduceMotion ? false : { opacity: 0, y: 22 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='relative w-full max-w-[440px] text-center'
				>
					<div
						aria-hidden='true'
						className='pointer-events-none absolute -left-14 top-20 hidden text-[#d9bd96]/80 lg:block'
					>
						<span className='block h-[200px] w-[70px] rounded-[50%_0_0_50%] border-l border-[#d9bd96]/55' />
						<span className='absolute -left-1 top-1/2 text-xl'>✧</span>
					</div>
					<p className='mb-5 text-[10px] uppercase tracking-[0.4em] text-[#d8c4aa] sm:text-[11px]'>
						The Wedding Of
					</p>
					<h1 className='font-editorial text-[clamp(4.5rem,7vw,7.8rem)] leading-[0.77] tracking-[-0.045em]'>
						<span className='block'>Larry &</span>
						<span className='mt-4 block'>Andrea</span>
					</h1>
					<div className='mt-10 space-y-1.5 text-[10px] uppercase tracking-[0.27em] sm:text-xs'>
						<p>May 22, 2027</p>
						<p className='text-[#e9d6c3]/90'>Southern California</p>
					</div>
					<div
						className='my-6 flex items-center justify-center gap-3 text-[#d9b78b]'
						aria-hidden='true'
					>
						<span className='h-px w-12 bg-current/60' />
						<span className='text-[23px] leading-none'>✧</span>
						<span className='h-px w-12 bg-current/60' />
					</div>
					<p className='font-editorial text-[26px] leading-[1.05] italic text-[#f6e9dd] sm:text-[30px]'>
						Under the moon & stars,
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
						The Details <ArrowDown size={14} strokeWidth={1.5} />
					</a>
				</motion.div>
			</div>

			<div
				className='pointer-events-none absolute bottom-[100px] right-[7%] hidden text-6xl leading-none text-[#eac699]/60 lg:block'
				aria-hidden='true'
			>
				☾
			</div>
			<svg
				aria-hidden='true'
				viewBox='0 0 1440 120'
				preserveAspectRatio='none'
				className='hero-wave pointer-events-none absolute -bottom-px left-0 z-20 h-[48px] w-full sm:h-[80px] lg:h-[116px]'
			>
				<path d='M0 28 C180 0 265 92 445 71 C650 43 739 4 924 57 C1100 103 1224 19 1440 32 L1440 120 L0 120 Z' />
			</svg>
		</section>
	)
}
