'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Countdown } from './Countdown'
import { wedding } from '@/lib/wedding'

export function MobileWeddingHero() {
	const reduceMotion = useReducedMotion()

	const fadeUp = {
		initial: reduceMotion ? false : { opacity: 0, y: 18 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.9, ease: 'easeOut' as const }
	}

	return (
		<div
			className='
        relative isolate
        min-h-[850px] min-h-[100svh]
        overflow-hidden
        bg-[#1d2430]
        text-[#fff4e8]
      '
		>
			{/* ============================= */}
			{/* BACKGROUND PHOTOGRAPH         */}
			{/* ============================= */}

			<div className='pointer-events-none absolute inset-0 overflow-hidden'>
				{/* Blurred ambient photograph */}
				<Image
					src='/images/mobile.png'
					alt=''
					aria-hidden='true'
					fill
					sizes='100vw'
					className='
            scale-125
            object-cover object-center
            opacity-55 blur-3xl
          '
				/>

				{/* Actual photograph: full width, no horizontal crop */}
				<div
					className='
            absolute inset-x-0
            top-[20%]
            aspect-[4/3]
            sm:top-[18%]
          '
				>
					<Image
						src='/images/mobile.png'
						alt='Larry and Andrea smiling together at a restaurant'
						fill
						priority
						sizes='(max-width: 1023px) 100vw, 1px'
						className='object-contain object-center'
					/>
				</div>

				{/* Top dark gradient for navigation and monogram */}
				<div
					className='
            absolute inset-x-0 top-0 h-[35%]
            bg-gradient-to-b
            from-[#1d2430]/80
            via-[#1d2430]/30
            to-transparent
          '
				/>

				{/* Lower gradient blends the photograph into content */}
				<div
					className='
            absolute inset-x-0 bottom-0 h-[66%]
            bg-gradient-to-b
            from-transparent
            via-[#1e140f]/70
            to-[#130e13]
          '
				/>

				{/* Subtle midnight overlay */}
				<div className='absolute inset-0 bg-[#171321]/10' />
			</div>

			{/* ============================= */}
			{/* CELESTIAL DECORATIONS         */}
			{/* ============================= */}

			<div
				aria-hidden='true'
				className='
          pointer-events-none
          absolute inset-0 z-[1]
          text-[#eed3a9]
        '
			>
				{/* <span className='absolute left-[12%] top-[17%] text-xl opacity-70'>✧</span>

				<span className='absolute right-[12%] top-[22%] text-sm opacity-65'>✦</span> */}

				{/* <span className='absolute left-[8%] top-[55%] text-sm opacity-60'>✧</span>

				<span className='absolute right-[9%] top-[60%] text-xl opacity-70'>✧</span>

				<span className='absolute left-[49%] top-[48%] text-xs opacity-50'>✦</span> */}
			</div>

			{/* ============================= */}
			{/* MAIN MOBILE LAYOUT            */}
			{/* ============================= */}

			<div
				className='
          relative z-10
          flex min-h-[850px] min-h-[100svh]
          flex-col items-center
          px-5 pb-14 pt-32
          text-center
          sm:px-8
        '
			>
				{/* Top identity */}
				<motion.div {...fadeUp} className='flex w-full flex-col items-center'>
					<p
						className='
              text-[10px]
              uppercase tracking-[0.4em]
              text-[#f8e8d6]
              sm:text-xs
            '
					>
						The Wedding Of
					</p>
				</motion.div>

				{/* Flexible space keeps the central photograph visible */}
				<div
					aria-hidden='true'
					className='
            min-h-[210px]
            flex-[1_1_auto]
            sm:min-h-[250px]
          '
				/>

				{/* Wedding information */}
				<motion.div
					initial={reduceMotion ? false : { opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						delay: reduceMotion ? 0 : 0.15,
						ease: 'easeOut'
					}}
					className='
            relative z-10
            flex w-full max-w-[440px]
            shrink-0 flex-col items-center
          '
				>
					{/* Names */}
					<h1
						className='
              font-editorial
              text-[clamp(3.5rem,12.5vw,5.5rem)]
              leading-[0.92]
              tracking-[-0.045em]
              text-[#fff4e8]
              drop-shadow-[0_3px_14px_rgba(10,5,4,0.4)]
            '
					>
						<span className='block'>Andrea &amp;</span>
						<span className='mt-1 block'>Larry</span>
					</h1>

					{/* Decorative divider */}
					<div
						aria-hidden='true'
						className='
              my-5 flex items-center
              justify-center gap-4
              text-[#e0cdb5]
            '
					>
						<span className='h-px w-12 bg-current/60' />
						<span className='text-[22px] leading-none'>✧</span>
						<span className='h-px w-12 bg-current/60' />
					</div>

					{/* Wedding theme */}
					<p
						className='pt-20
              font-editorial
              text-[clamp(1.7rem,7vw,2.2rem)]
              leading-tight italic
              text-[#f7e2c8]
            '
					>
						Under the Stars
					</p>

					{/* Wedding date */}
					<p
						className='
              mt-6
              text-[10px] uppercase
              tracking-[0.22em]
              text-[#f4e4d3]
              sm:text-xs
            '
					>
						{wedding.dateLabel}
					</p>

					{/* Location */}
					<p
						className='
              mt-2
              text-[10px] uppercase
              tracking-[0.25em]
              text-[#dfc3a0]
            '
					>
						We're looking forward to celebrating with you!
					</p>

					{/* Countdown */}
					<div className='mt-7 w-full'>
						<Countdown />
					</div>

					{/* Details link */}
					<a
						href='#details'
						className='
              mt-8 inline-flex min-h-12
              items-center justify-center gap-4
              rounded-full
              border border-[#f3dfc7]/80
              bg-[#fff4e8]
              px-8 py-3
              text-[10px] font-medium uppercase
              tracking-[0.23em]
              text-[#291d19]
              shadow-[0_8px_30px_rgba(0,0,0,0.18)]
              transition-all duration-300
              hover:bg-[#dfc29f]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            '
					>
						The Details
						<ArrowDown size={15} strokeWidth={1.5} />
					</a>
				</motion.div>
			</div>

			{/* Bottom transition */}
			<div
				className='
          pointer-events-none
          absolute inset-x-0 bottom-0 z-20
          h-12
          bg-gradient-to-t
          from-[#1e140f]
          to-transparent
        '
			/>
		</div>
	)
}
