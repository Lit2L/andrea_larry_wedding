'use client'

import Image from 'next/image'
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
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

function VenuePhoto({ venue, variant }: { venue: Venue; variant: 'ceremony' | 'reception' }) {
	return (
		<div className='venue-photo relative aspect-[16/10] overflow-hidden'>
			{venue.image ? (
				<Image
					src={venue.image}
					alt={`${venue.name} event space`}
					fill
					sizes='(max-width: 1024px) 100vw, 50vw'
					className='object-cover'
				/>
			) : (
				<div className='absolute inset-0 flex flex-col items-center justify-center px-8 text-center'>
					<div className='venue-sun absolute -left-10 -top-16 h-56 w-56 rounded-full blur-2xl' />
					<span className='relative z-10 mb-5 text-[28px] text-[#8f795d]' aria-hidden='true'>
						{variant === 'ceremony' ? '✧' : '☾'}
					</span>
					<span className='font-editorial relative z-10 text-[clamp(2.6rem,4vw,3.8rem)] leading-[0.95] text-[#5a4837]'>
						{variant === 'ceremony' ? 'A day together' : 'An evening to remember'}
					</span>
					<span className='relative z-10 mt-5 text-[10px] uppercase tracking-[0.3em] text-[#665441]'>
						{venue.city}
					</span>
					<div className='venue-flower' aria-hidden='true'>
						✺
					</div>
				</div>
			)}
		</div>
	)
}

function VenueCard({
	venue,
	variant,
	delay
}: {
	venue: Venue
	variant: 'ceremony' | 'reception'
	delay: number
}) {
	return (
		<Reveal delay={delay} className='min-w-0'>
			<article className='mx-auto max-w-[590px]'>
				<VenuePhoto venue={venue} variant={variant} />
				<div className='px-3 pt-8 text-center sm:px-6'>
					<p className='eyebrow'>{venue.label}</p>
					<h3 className='font-editorial mt-3 text-[clamp(2.6rem,4.3vw,4.3rem)] leading-[0.91] tracking-[-0.025em]'>
						{venue.name}
					</h3>
					<p className='mt-4 text-[10px] uppercase tracking-[0.24em] text-theme-muted'>
						{venue.city}
					</p>
					<div className='mx-auto mt-7 flex max-w-[360px] flex-col items-center gap-4 text-[12px] leading-relaxed tracking-[0.045em]'>
						<div className='flex items-start gap-3'>
							<CalendarDays
								className='mt-0.5 shrink-0 text-[#ae9170]'
								size={17}
								strokeWidth={1.5}
								aria-hidden='true'
							/>
							<span>
								<span className='block'>{venue.date}</span>
								<span className='mt-0.5 block text-theme-muted'>{venue.time}</span>
							</span>
						</div>
						<div className='flex items-start gap-3'>
							<MapPin
								className='mt-0.5 shrink-0 text-[#ae9170]'
								size={17}
								strokeWidth={1.5}
								aria-hidden='true'
							/>
							<span>{venue.address}</span>
						</div>
					</div>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={mapsUrl(venue.mapQuery)}
						className='outline-pill mt-7 inline-flex items-center gap-3 px-7 py-3 text-[10px] uppercase tracking-[0.19em]'
					>
						Get Directions <ArrowUpRight size={15} strokeWidth={1.5} />
					</a>
				</div>
			</article>
		</Reveal>
	)
}

export function Celebration() {
	return (
		<section
			id='details'
			className='paper relative scroll-mt-5 px-5 pb-28 pt-4 sm:px-10 sm:pt-10 lg:px-20 lg:pb-32'
		>
			<div className='mx-auto max-w-[1280px]'>
				<Reveal className='mx-auto max-w-[700px] text-center'>
					<span className='text-[23px] leading-none text-[#b79a79]' aria-hidden='true'>
						✧
					</span>
					<p className='eyebrow mt-4'>A Day Together</p>
					<h2 className='font-editorial mt-2 text-[clamp(3.8rem,6vw,6.4rem)] leading-none tracking-[-0.035em]'>
						The Celebration
					</h2>
					<p className='font-editorial mx-auto mt-5 max-w-[600px] text-[clamp(1.3rem,2.1vw,1.7rem)] leading-[1.13] italic text-theme-muted'>
						We can&apos;t wait to share this special day with the people who mean the most to us.
						Join us for our ceremony and reception as we begin the next chapter, together.
					</p>
				</Reveal>
				<div className='mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12'>
					<VenueCard venue={wedding.ceremony} variant='ceremony' delay={0} />
					<VenueCard venue={wedding.reception} variant='reception' delay={0.1} />
				</div>
			</div>
		</section>
	)
}
