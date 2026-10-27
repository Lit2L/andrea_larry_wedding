'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { mapsUrl, wedding } from '@/lib/wedding'

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

function VenuePanel({ venue, number, title, delay = 0 }: VenuePanelProps) {
	return (
		<Reveal delay={delay} className='min-w-0'>
			<article
				className='
          group relative isolate
          min-h-[380px]
          overflow-hidden rounded-sm
          bg-[#e9dfd1]
          sm:min-h-[400px]
        '
			>
				{/* Background venue photograph */}
				{venue.image && (
					<div className='absolute inset-0 -z-10'>
						<Image
							src={venue.image}
							alt=''
							fill
							sizes='(max-width: 1023px) 100vw, 980px'
							className='
                object-cover object-center
                transition-transform
                duration-700 ease-out
                group-hover:scale-[1.035]
              '
						/>
					</div>
				)}

				{/* Warm, translucent ivory overlay */}
				<div
					className='
            pointer-events-none
            absolute inset-0 -z-10
            bg-[linear-gradient(90deg,rgba(247,241,231,0.97)_0%,rgba(247,241,231,0.90)_48%,rgba(247,241,231,0.62)_100%)]
          '
				/>

				{/* Subtle edge treatment */}
				<div
					className='
            pointer-events-none
            absolute inset-0
            border border-[#b49a78]/25
          '
				/>

				{/* Content */}
				<div
					className='
            relative z-10
            flex min-h-[380px]
            flex-col justify-center
            px-7 py-12
            text-[#34291f]
            sm:min-h-[400px]
            sm:px-12 sm:py-14
            lg:px-16
          '
				>
					<div className='max-w-[570px]'>
						{/* Label */}
						<p
							className='
                text-[10px] font-medium
                uppercase tracking-[0.3em]
                text-[#9b7b56]
              '
						>
							{number} / {venue.label}
						</p>

						{/* Event title */}
						<h3
							className='
                font-editorial
                mt-4
                text-[clamp(2.7rem,5vw,4.8rem)]
                leading-[0.95]
                tracking-[-0.035em]
              '
						>
							{title}
						</h3>

						{/* Small gold divider */}
						<div
							aria-hidden='true'
							className='
                my-6 flex items-center
                gap-3 text-[#b18f68]
              '
						>
							<span className='h-px w-10 bg-current/60' />
							<span className='text-lg'>✧</span>
						</div>

						{/* Venue name */}
						<h4
							className='
                font-editorial
                text-[clamp(1.5rem,2.7vw,2rem)]
                leading-tight
              '
						>
							{venue.name}
						</h4>

						{/* Schedule */}
						<p
							className='
                mt-4 text-[12px]
                font-medium tracking-[0.07em]
              '
						>
							{venue.date}
							<span aria-hidden='true' className='mx-2 text-[#aa8b67]'>
								·
							</span>
							{venue.time}
						</p>

						{/* Address */}
						<p
							className='
                mt-3 max-w-[410px]
                text-[12px] leading-relaxed
                text-[#68584b]
                sm:text-[13px]
              '
						>
							{venue.address}
						</p>

						{/* Directions */}
						<a
							href={mapsUrl(venue.mapQuery)}
							target='_blank'
							rel='noopener noreferrer'
							className='
                mt-7 inline-flex
                w-fit items-center gap-2
                border-b border-[#9c7c59]/60
                pb-1 text-[10px] font-medium
                uppercase tracking-[0.18em]
                text-[#866444]
                transition-colors duration-300
                hover:border-[#4c3625]
                hover:text-[#4c3625]
                focus-visible:outline-2
                focus-visible:outline-offset-4
              '
						>
							Get Directions
							<ArrowUpRight size={15} strokeWidth={1.5} aria-hidden='true' />
						</a>
					</div>
				</div>
			</article>
		</Reveal>
	)
}

export function Celebration() {
	return (
		<section
			id='details'
			className='
        paper relative scroll-mt-5
        px-5 pb-20 pt-16
        sm:px-10 sm:pb-24 sm:pt-20
        lg:px-20 lg:pb-32 lg:pt-24
      '
		>
			<div className='mx-auto max-w-[1080px]'>
				{/* Section introduction */}
				<Reveal className='mx-auto max-w-[650px] text-center'>
					<span aria-hidden='true' className='text-[24px] text-[#b79a79]'>
						✧
					</span>

					<p className='eyebrow mt-4'>The Wedding Day</p>

					<h2
						className='
              font-editorial
              mt-3
              text-[clamp(3.2rem,6vw,5.5rem)]
              leading-[0.98]
              tracking-[-0.035em]
            '
					>
						The Celebration
					</h2>

					<p
						className='
              font-editorial
              mx-auto mt-5 max-w-[490px]
              text-[clamp(1.15rem,2vw,1.5rem)]
              leading-[1.3] italic
              text-theme-muted
            '
					>
						We can&apos;t wait to celebrate this special day with you.
					</p>
				</Reveal>

				{/* Both venue panels */}
				<div className='mt-14 space-y-5 sm:mt-16 sm:space-y-7'>
					<VenuePanel venue={wedding.ceremony} number='01' title='The Ceremony' delay={0} />

					<VenuePanel venue={wedding.reception} number='02' title='The Reception' delay={0.1} />
				</div>

				{/* Closing flourish */}
				<Reveal className='mt-14 text-center'>
					<p
						className='
              font-editorial
              text-[22px] italic
              text-theme-muted
            '
					>
						Under the moon &amp; stars
					</p>

					<span
						aria-hidden='true'
						className='
              mt-3 block text-[20px]
              text-[#b79a79]
            '
					>
						☾ ✧
					</span>
				</Reveal>
			</div>
		</section>
	)
}
