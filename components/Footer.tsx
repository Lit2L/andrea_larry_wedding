import { wedding } from '@/lib/wedding'

export function Footer() {
	return (
		<footer className='bg-[#1d2430] px-5 pb-12 pt-3 text-center text-[#e8d8c4]'>
			<p className='text-[10px] uppercase tracking-[0.24em]'>
				{wedding.dateLabel} · {wedding.locationLabel}
			</p>
			<p className='font-editorial mt-5 text-xl italic text-[#d5bea4]'>Under the moon & stars</p>
			<a
				href='#home'
				className='mt-8 inline-block text-[10px] uppercase tracking-[0.2em] text-[#e8d8c4]/60 hover:text-white'
			>
				Back to top ↑
			</a>
		</footer>
	)
}
