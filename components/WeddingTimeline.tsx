import { Reveal } from './Reveal'

type WeddingTimelineProps = {
	className?: string
}

type TimelineEvent = {
	time: string
	title: string
	location: string
	note?: string
}

const events: readonly TimelineEvent[] = [
	{ time: '11:30 AM', title: 'Ceremony', location: 'Old Ranch Country Club' },
	{ time: '5:00 PM', title: 'Tea Ceremony', location: 'Paracel', note: '(Family only)' },
	{ time: '6:00 PM', title: 'Reception', location: 'Paracel' }
]

export default function WeddingTimeline({ className = '' }: WeddingTimelineProps) {
	return (
		<div aria-labelledby='wedding-timeline-heading' className={`mt-14 sm:mt-16 ${className}`}>
			<Reveal className='text-center'>
				<p
					id='wedding-timeline-heading'
					className='text-[16px] font-semibold uppercase tracking-[0.3em] text-[#80603E]'
				>
					The Day&apos;s Timeline
				</p>
				<div
					aria-hidden='true'
					className='mx-auto mt-5 flex items-center justify-center gap-3 text-[#99734A]'
				>
					<span className='h-px w-10 bg-current/50' />
					<span className='text-lg leading-none'>✧ ☾</span>
					<span className='h-px w-10 bg-current/50' />
				</div>
			</Reveal>

			<ol className='relative mx-auto mt-10 max-w-[900px] border-l border-[#A68A68]/45 sm:mt-12 md:grid md:max-w-none md:grid-cols-3 md:border-l-0 md:border-t'>
				{events.map((event, index) => (
					<li
						key={event.time}
						className='relative pb-11 pl-8 last:pb-0 md:px-6 md:pb-0 md:pt-8 md:text-center'
					>
						<span
							aria-hidden='true'
							className='absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full border border-[#99734A] bg-[#F7F2EA] md:left-1/2 md:top-[-5px] md:-translate-x-1/2'
						/>
						<Reveal delay={index * 0.1}>
							<time className='font-editorial text-[clamp(1.9rem,3vw,2.45rem)] leading-none text-[#302820]'>
								{event.time}
							</time>
							<p className='mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#80603E]'>
								{event.title}
							</p>
							<p className='mt-2 text-[13px] leading-relaxed text-[#65574B]'>{event.location}</p>
							{event.note && (
								<p className='mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#99734A]'>
									{event.note}
								</p>
							)}
						</Reveal>
					</li>
				))}
			</ol>
		</div>
	)
}
