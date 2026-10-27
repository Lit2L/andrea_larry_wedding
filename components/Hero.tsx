'use client'

import { DesktopWeddingHero } from './DesktopWeddingHero'
import { MobileWeddingHero } from './MobileWeddingHero'
import { Navbar } from './Navbar'

type Props = {
	darkMode: boolean
	toggleTheme: () => void
}

export function Hero({ darkMode, toggleTheme }: Props) {
	return (
		<section id='home' className='relative isolate overflow-hidden bg-[#1e140f] text-[#fff4e8]'>
			<Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

			{/* Mobile and tablet */}
			<div className='lg:hidden'>
				<MobileWeddingHero />
			</div>

			{/* Desktop */}
			<div className='hidden lg:block'>
				<DesktopWeddingHero />
			</div>
		</section>
	)
}
