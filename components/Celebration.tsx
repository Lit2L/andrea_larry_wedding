'use client'

import Image from 'next/image'
import { ArrowUpRight, MapPin, Clock3 } from 'lucide-react'
import { Reveal } from './Reveal'
import { mapsUrl, wedding } from '@/lib/wedding'
import WeddingTimeline from './WeddingTimeline'

/* =========================================
   TYPES
========================================= */

type Venue = {
	label: string
	name: string
	city: string
	date: string
	time: string
	address: string
	mapQuery: string
	image: string | null
}

type VenuePanelProps = {
	venue: Venue
	number: string
	title: string
	delay?: number
}

/* =========================================
   VENUE PANEL
========================================= */

function VenuePanel({ venue, number, title, delay = 0 }: VenuePanelProps) {
	return (
		<Reveal delay={delay} className='min-w-0'>
			<article
				className='
          group relative isolate          min-h-[440px]          overflow-hidden          rounded-[4px]
          bg-[#29242B]          text-[#FFF8F0]          sm:min-h-[480px]          lg:min-h-[500px]        '
			>
				{/* Background photograph */}
				{venue.image && (
					<Image
						src={venue.image}
						alt=''
						fill
						sizes='(max-width: 1023px) 100vw, 1080px'
						className='
              object-cover object-center
              transition-transform
              duration-1000 ease-out
              group-hover:scale-[1.025]
            '
					/>
				)}

				{/*
          SOFT PHOTOGRAPHIC GRADIENT

          Mobile:
          Vertical shading keeps text readable.

          Desktop:
          Warm midnight gradient from left to right,
          allowing more of the photograph to show.
        */}
				<div
					className='
            pointer-events-none
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(28,25,30,0.72)_0%,rgba(32,28,31,0.62)_55%,rgba(40,32,33,0.55)_100%)]
            lg:bg-[linear-gradient(90deg,rgba(28,25,30,0.82)_0%,rgba(32,28,31,0.66)_38%,rgba(40,32,33,0.38)_70%,rgba(40,32,33,0.12)_100%)]
          '
				/>

				{/* Subtle border */}
				<div
					aria-hidden='true'
					className='
            pointer-events-none
            absolute inset-0
            border border-white/20
          '
				/>

				{/* Content */}
				<div
					className='
            relative z-10
            flex min-h-[440px]
            items-center
            px-7 py-12
            sm:min-h-[480px]
            sm:px-12 sm:py-14
            lg:min-h-[500px]
            lg:px-16
          '
				>
					<div className='w-full max-w-[560px]'>
						{/* Event label */}
						<p
							className='
                text-[11px] font-extrabold
                uppercase tracking-[0.25em]
                text-[#F1DAB9]
              '
						>
							{number} / {venue.label}
						</p>

						{/* Main heading */}
						<h3
							className='
                font-editorial
                mt-4
                text-[clamp(2.7rem,5vw,4.8rem)]
                leading-[0.98]
                tracking-[-0.035em]
                text-[#FFF8F0]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]
              '
						>
							{/* {title} */}
						</h3>

						{/* Gold divider */}
						<div
							aria-hidden='true'
							className='
                my-7
                flex items-center gap-3
                text-[#E2C39B]
              '
						>
							<span className='h-px w-12 bg-current/75' />
							<span className='text-xl leading-none'>✧</span>
							<span className='h-px w-7 bg-current/50' />
						</div>

						{/* Venue name */}
						<h4
							className='
                font-editorial
                text-[clamp(1.7rem,3vw,2.3rem)]
                leading-[1.08]
                text-[#FFF5E9]
              '
						>
							{venue.name}
						</h4>

						{/* Location */}
						<p
							className='
                mt-2
                text-[11px] font-medium
                uppercase tracking-[0.2em]
                text-[#EAD2B2]
              '
						>
							{venue.city}
						</p>

						{/* Date */}
						<p
							className='
                mt-7
                text-[13px] font-medium
                tracking-[0.05em]
                text-[#FFF8F0]
              '
						>
							{venue.date}
						</p>

						{/* Time */}
						<div className='mt-3 flex items-center gap-3'>
							<Clock3
								size={16}
								strokeWidth={1.6}
								className='shrink-0 text-[#E2C39B]'
								aria-hidden='true'
							/>

							<p
								className='
                  text-[13px]
                  leading-relaxed
                  text-[#F7EDE1]
                '
							>
								{venue.time}
							</p>
						</div>

						{/* Address */}
						<div className='mt-3 flex items-start gap-3'>
							<MapPin
								size={16}
								strokeWidth={1.6}
								className='
                  mt-0.5 shrink-0
                  text-[#E2C39B]
                '
								aria-hidden='true'
							/>

							<p
								className='
                  max-w-[400px]
                  text-[13px]
                  leading-relaxed
                  text-[#F7EDE1]
                '
							>
								{venue.address}
							</p>
						</div>

						{/* Directions */}
						<a
							href={mapsUrl(venue.mapQuery)}
							target='_blank'
							rel='noopener noreferrer'
							className='
                mt-8 inline-flex
                min-h-12 items-center
                justify-center gap-3
                rounded-full
                border border-[#F0D8B8]/80
                bg-[#FFF8F0]
                px-7 py-3
                text-[10px] font-semibold
                uppercase tracking-[0.17em]
                text-[#302820]
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:border-white
                hover:bg-white
                hover:shadow-lg
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              '
						>
							Get Directions
							<ArrowUpRight size={16} strokeWidth={1.6} aria-hidden='true' />
						</a>
					</div>
				</div>
			</article>
		</Reveal>
	)
}

/* =========================================
   CELEBRATION SECTION
========================================= */

export function Celebration() {
	return (
		<section
			id='details'
			className='
        relative scroll-mt-5
        bg-[#F7F2EA]
        px-5 pb-24 pt-20
        text-[#302820]
        sm:px-10 sm:pb-28 sm:pt-24
        lg:px-20 lg:pb-36 lg:pt-28
      '
		>
			<div className='mx-auto max-w-[1080px]'>
				{/* Section introduction */}
				<Reveal className='mx-auto max-w-[650px] text-center'>
					{/* Decorative star */}
					<span
						aria-hidden='true'
						className='
              block
              text-[26px]
              leading-none
              text-[#99734A]
            '
					>
						✧
					</span>

					{/* Small section label */}
					<p
						className='
              mt-5
              text-[11px] font-semibold
              uppercase tracking-[0.3em]
              text-[#80603E]
            '
					>
						The Wedding Day
					</p>

					{/* Section heading */}
					<h2
						className='
              font-editorial
              mt-4
              text-[clamp(3.4rem,6vw,5.8rem)]
              leading-[0.98]
              tracking-[-0.04em]
              text-[#302820]
            '
					>
						The Celebration
					</h2>

					{/* Introductory message */}
					<p
						className='
              font-editorial
              mx-auto mt-6
              max-w-[520px]
              text-[clamp(1.25rem,2.1vw,1.65rem)]
              leading-[1.35]
              italic
              text-[#65574B]
            '
					>
						We can&apos;t wait to celebrate this special day with you.
					</p>

					{/* Small divider */}
					<div
						aria-hidden='true'
						className='
              mx-auto mt-8
              h-px w-16
              bg-[#A68A68]/60
            '
					/>
				</Reveal>

				{/* Venue panels */}
				<div
					className='
            mt-14 space-y-6
            sm:mt-16 sm:space-y-8
          '
				>
					<VenuePanel venue={wedding.ceremony} number='01' title='The Ceremony' delay={0} />

					<VenuePanel venue={wedding.reception} number='02' title='The Reception' delay={0.1} />
				</div>

				{/* Closing flourish */}
				<Reveal
					className='
            mt-16
            flex flex-col
            items-center gap-3
            text-center
          '
				>
					<span
						aria-hidden='true'
						className='
              text-[24px]
              leading-none
              text-[#99734A]
            '
					>
						{/* ✧ ☾ */}
					</span>

					<p className='font-editorial text-[24px] italic text-[#65574B]'>
						{/* Under the moon &amp; stars */}
					</p>
					{/* Timeline */}
					<WeddingTimeline />
				</Reveal>
			</div>
		</section>
	)
}
