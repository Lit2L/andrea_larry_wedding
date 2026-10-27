'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'
import { wedding } from '@/lib/wedding'

export function Gallery() {
	return (
		<section
			id='gallery'
			className='paper scroll-mt-5 border-t border-theme-line px-5 py-24 sm:px-10 lg:px-20 lg:py-32'
		>
			<div className='mx-auto max-w-[1160px] text-center'>
				<Reveal>
					<p className='eyebrow'>A Little Bit of Us</p>
					<h2 className='font-editorial mt-3 text-[clamp(3.7rem,6vw,6.5rem)] leading-none'>
						Our Moments
					</h2>
				</Reveal>
				<div className={`mt-12 grid gap-4 ${wedding.gallery.length > 1 ? 'sm:grid-cols-2' : ''}`}>
					{wedding.gallery.map((photo, index) => (
						<Reveal key={photo.src} delay={index * 0.08}>
							<div
								className={`relative mx-auto overflow-hidden bg-[#d4bea6] ${
									wedding.gallery.length === 1 ? 'aspect-[16/9] max-w-[1080px]' : 'aspect-[4/5]'
								}`}
							>
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									sizes={
										wedding.gallery.length === 1
											? '(max-width: 1160px) 100vw, 1080px'
											: '(max-width: 640px) 100vw, 50vw'
									}
									className='object-cover transition-transform duration-700 hover:scale-[1.025]'
								/>
							</div>
						</Reveal>
					))}
				</div>
				{wedding.gallery.length === 1 && (
					<p className='mt-6 text-xs tracking-[0.06em] text-theme-muted'>
						More of our favorite moments to come.
					</p>
				)}
			</div>
		</section>
	)
}
