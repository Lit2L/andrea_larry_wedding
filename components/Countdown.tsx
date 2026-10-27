'use client'

import { useEffect, useState } from 'react'
import { wedding } from '@/lib/wedding'

const target = new Date(wedding.weddingDateISO).getTime()

function getTimeLeft(now: number) {
	const seconds = Math.max(0, Math.floor((target - now) / 1000))
	return [
		{ label: 'Days', value: Math.floor(seconds / 86400) },
		{ label: 'Hours', value: Math.floor((seconds % 86400) / 3600) },
		{ label: 'Minutes', value: Math.floor((seconds % 3600) / 60) },
		{ label: 'Seconds', value: seconds % 60 }
	]
}

export function Countdown() {
	// The first SSR and hydration paint show dashes, avoiding hydration mismatches.
	const [now, setNow] = useState<number | null>(null)

	useEffect(() => {
		const tick = () => setNow(Date.now())
		tick()
		const timer = window.setInterval(tick, 1000)
		return () => window.clearInterval(timer)
	}, [])

	return (
		<div
			className='mx-auto grid w-full max-w-[425px] grid-cols-4 divide-x divide-white/25'
			role='timer'
			aria-label='Countdown to the wedding'
			aria-live='off'
		>
			{getTimeLeft(now ?? target).map((item) => (
				<div key={item.label} className='px-1.5 text-center sm:px-3'>
					<div className='font-editorial text-[33px] leading-none tabular-nums sm:text-[43px]'>
						{now === null ? '—' : String(item.value).padStart(2, '0')}
					</div>
					<p className='mt-2 text-[9px] uppercase tracking-[0.16em] text-[#eee0ce]/80 sm:text-[10px] sm:tracking-[0.21em]'>
						{item.label}
					</p>
				</div>
			))}
		</div>
	)
}
