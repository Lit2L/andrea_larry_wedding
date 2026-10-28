'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import {
	ArrowRight,
	ArrowUpRight,
	CarFront,
	ChevronDown,
	Gift,
	MapPin,
	Plane,
	Shirt,
	Utensils
} from 'lucide-react'
import { Reveal } from './Reveal'
import { mapsUrl, wedding } from '@/lib/wedding'
import {
	guestDetails,
	nearbyAirports,
	recommendedHotels,
	recommendedRestaurants
} from '@/lib/visit'

const betweenVenuesUrl =
	'https://www.google.com/maps/dir/?api=1' +
	`&origin=${encodeURIComponent(wedding.ceremony.mapQuery)}` +
	`&destination=${encodeURIComponent(wedding.reception.mapQuery)}` +
	'&travelmode=driving'

type TravelCategory = 'stay' | 'eat' | 'arrive' | 'guest-details'

type TravelAccordionProps = {
	id: TravelCategory
	number: string
	eyebrow: string
	title: string
	description: string
	isOpen: boolean
	onToggle: () => void
	children: ReactNode
}

function TravelAccordion({
	id,
	number,
	eyebrow,
	title,
	description,
	isOpen,
	onToggle,
	children
}: TravelAccordionProps) {
	const reducedMotion = useReducedMotion()
	const headingId = `travel-heading-${id}`
	const panelId = `travel-panel-${id}`

	return (
		<div
			id={id}
			className='travel-accordion scroll-mt-20 border border-theme-line'
			data-open={isOpen ? 'true' : 'false'}
		>
			<h3 className='m-0'>
				<button
					id={headingId}
					type='button'
					aria-expanded={isOpen}
					aria-controls={panelId}
					onClick={onToggle}
					className='group flex w-full items-center gap-4 px-5 py-6 text-left sm:gap-7 sm:px-9 sm:py-8'
				>
					<span
						className='font-editorial shrink-0 self-start text-3xl leading-none text-[#b69772] sm:text-4xl'
						aria-hidden='true'
					>
						{number}
					</span>
					<span className='min-w-0 flex-1'>
						<span className='eyebrow block'>{eyebrow}</span>
						<span className='font-editorial mt-2 block text-[clamp(2.5rem,4.7vw,4.7rem)] leading-[0.9]'>
							{title}
						</span>
						<span className='mt-3 block max-w-[650px] text-xs leading-6 text-theme-muted sm:text-sm'>
							{description}
						</span>
					</span>
					<span
						className='travel-accordion-icon flex size-11 shrink-0 items-center justify-center rounded-full border border-theme-line transition-colors group-hover:border-[#b69772]'
						aria-hidden='true'
					>
						<ChevronDown
							size={19}
							strokeWidth={1.4}
							className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
						/>
					</span>
				</button>
			</h3>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id={panelId}
						key={panelId}
						role='region'
						aria-labelledby={headingId}
						initial={reducedMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={
							reducedMotion
								? { opacity: 0, transition: { duration: 0 } }
								: { height: 0, opacity: 0 }
						}
						transition={{ duration: reducedMotion ? 0 : 0.32, ease: 'easeInOut' }}
						className='overflow-hidden'
					>
						<div className='border-t border-theme-line px-5 pb-8 pt-7 sm:px-9 sm:pb-10 sm:pt-9'>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export function Travel() {
	const [openCategory, setOpenCategory] = useState<TravelCategory | null>(null)
	const toggleCategory = (id: TravelCategory) => {
		setOpenCategory((current) => (current === id ? null : id))
	}

	return (
		<section
			id='travel'
			aria-labelledby='travel-title'
			className='paper relative scroll-mt-5 overflow-hidden border-t border-theme-line px-5 py-24 sm:px-10 lg:px-20 lg:py-32'
		>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -right-10 top-4 select-none font-editorial text-[200px] leading-none text-theme-muted opacity-[0.07] sm:text-[340px]'
			>
				✳
			</div>
			<div className='relative mx-auto max-w-[1180px]'>
				<Reveal className='mx-auto max-w-[700px] text-center'>
					<p className='eyebrow'>For Our Favorite People</p>
					<h2
						id='travel-title'
						className='font-editorial mt-3 text-[clamp(3.7rem,7vw,7rem)] leading-[0.95]'
					>
						Plan Your Visit
					</h2>
					<p className='font-editorial mt-6 text-[clamp(1.4rem,2.4vw,2rem)] italic leading-snug'>
						Stay a little longer. Make yourself at home.
					</p>
					<p className='mx-auto mt-4 max-w-[620px] text-sm leading-7 text-theme-muted'>
						We&apos;re celebrating from Seal Beach to Westminster. Whether you&apos;re a local or
						coming from far away, here&apos;s everything you need for a lovely weekend together.
					</p>
				</Reveal>

				<div className='mt-12 space-y-4'>
					{/* 02: Dining recommendations */}
					<TravelAccordion
						id='eat'
						number='01'
						eyebrow='Eat Something'
						title='Our Favorite Eats'
						description='Our Recommendations.'
						isOpen={openCategory === 'eat'}
						onToggle={() => toggleCategory('eat')}
					>
						<div className='mt-7 grid gap-4 sm:grid-cols-2'>
							{recommendedRestaurants.map((restaurant, index) => (
								<Reveal key={restaurant.id} delay={(index % 2) * 0.07}>
									<article
										className='travel-restaurant-card group flex h-full flex-col border border-theme-line bg-cover bg-center p-6 sm:p-8'
										style={{
											backgroundImage: `linear-gradient(rgba(247, 242, 234, 0.84), rgba(247, 242, 234, 0.92)), url(${restaurant.image})`
										}}
									>
										<div className='flex items-center justify-between gap-4'>
											<p className='eyebrow'>{restaurant.category}</p>
											<span
												aria-hidden='true'
												className='font-editorial text-3xl text-theme-muted opacity-40'
											>
												0{index + 1}
											</span>
										</div>
										<h4 className='font-editorial mt-6 text-[clamp(2rem,3vw,2.8rem)] leading-none'>
											{restaurant.name}
										</h4>
										<p className='mt-2 text-[10px] uppercase tracking-[0.16em] text-theme-muted'>
											{restaurant.location}
										</p>
										<p className='mt-5 flex-1 text-sm leading-7 text-theme-muted'>
											{restaurant.description}
										</p>
										<p className='mt-6 flex items-start gap-2 border-t border-theme-line pt-5 text-xs leading-5 text-theme-muted'>
											<MapPin size={14} className='mt-0.5 shrink-0' aria-hidden='true' />
											{restaurant.address}
										</p>
										<div className='mt-5 flex flex-wrap items-center gap-6'>
											<a
												href={restaurant.url}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-[0.13em] underline underline-offset-4'
											>
												Restaurant info <ArrowUpRight size={14} aria-hidden='true' />
											</a>
											<a
												href={mapsUrl(restaurant.address)}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex min-h-11 items-center text-[10px] uppercase tracking-[0.13em] text-theme-muted underline underline-offset-4'
											>
												Directions
											</a>
										</div>
									</article>
								</Reveal>
							))}
						</div>
						<p className='mt-5 text-center text-[11px] leading-6 text-theme-muted'>
							These are local suggestions, not wedding events. Restaurant schedules, menus, and
							availability may change before May 2027.
						</p>
					</TravelAccordion>

					{/* 01: Hotels */}
					<TravelAccordion
						id='stay'
						number='02'
						eyebrow='Settle In'
						title='Where to stay'
						description='A few hotel options with different personalities, from convenient to coastal. Pick what works best for your trip.'
						isOpen={openCategory === 'stay'}
						onToggle={() => toggleCategory('stay')}
					>
						<div className='mt-7 grid gap-4 md:grid-cols-3'>
							{recommendedHotels.map((hotel, index) => (
								<Reveal key={hotel.id} delay={index * 0.08} className='h-full'>
									<article
										className='travel-hotel-card group flex h-full flex-col border border-theme-line bg-cover bg-center px-6 pb-7 pt-6 sm:px-7 sm:pt-8'
										style={{
											backgroundImage: `linear-gradient(rgba(247, 242, 234, 0.84), rgba(247, 242, 234, 0.92)), url(${hotel.image})`
										}}
									>
										<div className='flex items-start justify-between gap-3'>
											<p className='eyebrow max-w-[75%] leading-4'>{hotel.eyebrow}</p>
											<span
												aria-hidden='true'
												className='font-editorial text-4xl leading-none text-theme-muted opacity-40'
											>
												0{index + 1}
											</span>
										</div>
										<div className='my-7 h-px w-11 bg-[#b69772]' aria-hidden='true' />
										<h4 className='font-editorial text-[clamp(2.2rem,3vw,3rem)] leading-[0.95]'>
											{hotel.name}
										</h4>
										<p className='mt-3 text-[10px] uppercase tracking-[0.18em] text-theme-muted'>
											{hotel.location}
										</p>
										<p className='mt-6 text-sm leading-7 text-theme-muted'>{hotel.description}</p>
										<div className='mt-7 border-t border-theme-line pt-5'>
											<p className='flex items-start gap-2 text-xs leading-5 text-theme-muted'>
												<MapPin size={14} className='mt-0.5 shrink-0' aria-hidden='true' />
												{hotel.address}
											</p>
										</div>
										<div className='mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8'>
											<a
												href={hotel.url}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex min-h-11 items-center gap-2 border-b border-current pb-1 text-[10px] uppercase tracking-[0.14em] transition-opacity group-hover:opacity-80'
											>
												View hotel <ArrowUpRight size={15} aria-hidden='true' />
											</a>
											<a
												href={mapsUrl(hotel.address)}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex min-h-11 items-center text-[10px] uppercase tracking-[0.14em] text-theme-muted underline underline-offset-4'
											>
												Directions
											</a>
										</div>
									</article>
								</Reveal>
							))}
						</div>
						<p className='mt-5 text-center text-[11px] leading-6 text-theme-muted'>
							We reserved wedding room blocks for people coming in from out of town.
						</p>
					</TravelAccordion>

					{/* 03: Airports + between-venue travel */}
					<TravelAccordion
						id='arrive'
						number='03'
						eyebrow='Getting Here'
						title='Travel & airports'
						description='Three airports to compare and an easy link between the two wedding locations.'
						isOpen={openCategory === 'arrive'}
						onToggle={() => toggleCategory('arrive')}
					>
						<div className='mt-7 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
							<Reveal>
								<div className='travel-guide-panel h-full border border-theme-line p-7 sm:p-9'>
									<Plane
										size={24}
										strokeWidth={1.3}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<p className='eyebrow mt-6'>Flying in?</p>
									<h4 className='font-editorial mt-2 text-4xl sm:text-5xl'>Nearby airports</h4>
									<div className='mt-6 divide-y divide-[var(--line)]'>
										{nearbyAirports.map((airport) => (
											<div
												key={airport.code}
												className='grid grid-cols-[3.5rem_1fr_auto] items-start gap-4 py-5'
											>
												<span className='font-editorial text-3xl leading-none'>{airport.code}</span>
												<div>
													<p className='text-sm font-medium'>{airport.name}</p>
													<p className='mt-0.5 text-[11px] text-theme-muted'>{airport.city}</p>
													<p className='mt-2 text-xs leading-5 text-theme-muted'>{airport.note}</p>
												</div>
												<a
													href={airport.url}
													target='_blank'
													rel='noopener noreferrer'
													aria-label={`${airport.name} airport website`}
													className='inline-flex min-h-11 min-w-11 items-start justify-end pt-1'
												>
													<ArrowUpRight size={18} aria-hidden='true' />
												</a>
											</div>
										))}
									</div>
								</div>
							</Reveal>
							<Reveal delay={0.08}>
								<div className='travel-guide-panel h-full border border-theme-line p-7 sm:p-9'>
									<CarFront
										size={24}
										strokeWidth={1.3}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<p className='eyebrow mt-6'>Two Locations, One Celebration</p>
									<h4 className='font-editorial mt-2 text-4xl sm:text-5xl'>Getting around</h4>
									<p className='mt-4 text-sm leading-7 text-theme-muted'>
										The ceremony is at Old Ranch Country Club in Seal Beach; the reception follows
										at Paracel Events & Catering in Westminster. Guests should plan their own ride
										between venues.
									</p>
									<div className='mt-6 space-y-3 border-t border-theme-line pt-6 text-xs leading-6'>
										<p>
											<span className='font-semibold'>Ceremony:</span> {wedding.ceremony.address}
										</p>
										<p>
											<span className='font-semibold'>Reception:</span> {wedding.reception.address}
										</p>
									</div>
									<a
										href={betweenVenuesUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='mt-7 inline-flex min-h-11 items-center gap-2 border-b border-current pb-1 text-[10px] uppercase tracking-[0.16em]'
									>
										Get route between venues <ArrowRight size={15} aria-hidden='true' />
									</a>
									<p className='mt-5 text-xs leading-6 text-theme-muted'>
										Southern California traffic can vary; allow extra time for travel and parking.
									</p>
								</div>
							</Reveal>
						</div>
					</TravelAccordion>

					{/* 04: Registry, parking, dress code, allergies */}
					<TravelAccordion
						id='guest-details'
						number='04'
						eyebrow='The Little Details'
						title='Good to know'
						description="Answers to the questions guests ask most often. We'll update anything that's still being finalized."
						isOpen={openCategory === 'guest-details'}
						onToggle={() => toggleCategory('guest-details')}
					>
						<div className='mt-7 grid gap-4 sm:grid-cols-2'>
							<Reveal>
								<article className='travel-faq-card h-full border border-theme-line p-7 sm:p-9'>
									<Gift
										size={26}
										strokeWidth={1.35}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<h4 className='font-editorial mt-5 text-4xl'>Registry & gifts</h4>
									<p className='mt-4 text-sm leading-7 text-theme-muted'>
										{guestDetails.registryUrl
											? 'Registry details are available through the link below.'
											: guestDetails.registryMessage}
									</p>
									{guestDetails.registryUrl && (
										<a
											href={guestDetails.registryUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='mt-6 inline-flex min-h-11 items-center gap-2 border-b border-current pb-1 text-[10px] uppercase tracking-[0.15em]'
										>
											View registry <ArrowUpRight size={15} aria-hidden='true' />
										</a>
									)}
								</article>
							</Reveal>
							<Reveal delay={0.07}>
								<article className='travel-faq-card h-full border border-theme-line p-7 sm:p-9'>
									<CarFront
										size={26}
										strokeWidth={1.35}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<h4 className='font-editorial mt-5 text-4xl'>Parking</h4>
									<p className='mt-4 text-xs font-semibold uppercase tracking-[0.15em]'>
										Ceremony · Old Ranch
									</p>
									<p className='mt-2 text-sm leading-6 text-theme-muted'>
										{guestDetails.ceremonyParking}
									</p>
									<p className='mt-5 text-xs font-semibold uppercase tracking-[0.15em]'>
										Reception · Paracel
									</p>
									<p className='mt-2 text-sm leading-6 text-theme-muted'>
										{guestDetails.receptionParking}
									</p>
								</article>
							</Reveal>
							<Reveal>
								<article className='travel-faq-card h-full border border-theme-line p-7 sm:p-9'>
									<Shirt
										size={26}
										strokeWidth={1.35}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<h4 className='font-editorial mt-5 text-4xl'>Dress code</h4>
									<p className='mt-4 text-sm leading-7 text-theme-muted'>
										{guestDetails.dressCode}
									</p>
								</article>
							</Reveal>
							<Reveal delay={0.07}>
								<article className='travel-faq-card h-full border border-theme-line p-7 sm:p-9'>
									<Utensils
										size={26}
										strokeWidth={1.35}
										className='text-[#b69772]'
										aria-hidden='true'
									/>
									<h4 className='font-editorial mt-5 text-4xl'>Food allergies</h4>
									<p className='mt-4 text-sm leading-7 text-theme-muted'>
										{guestDetails.foodAllergies}
									</p>
									{guestDetails.contactEmail && (
										<a
											href={`mailto:${guestDetails.contactEmail}?subject=Wedding%20dietary%20request`}
											className='mt-6 inline-flex min-h-11 items-center gap-2 border-b border-current pb-1 text-[10px] uppercase tracking-[0.15em]'
										>
											Contact us <ArrowUpRight size={15} aria-hidden='true' />
										</a>
									)}
								</article>
							</Reveal>
						</div>
					</TravelAccordion>
				</div>

				<Reveal className='mt-20 text-center'>
					<p className='font-editorial text-2xl italic text-theme-muted sm:text-3xl'>
						We&apos;re so glad you&apos;ll be here.
					</p>
					<div
						className='mx-auto mt-6 flex w-28 items-center gap-3 text-[#b69772]'
						aria-hidden='true'
					>
						<span className='h-px flex-1 bg-current opacity-55' />
						<span className='text-lg'>✧</span>
						<span className='h-px flex-1 bg-current opacity-55' />
					</div>
				</Reveal>
			</div>
		</section>
	)
}
