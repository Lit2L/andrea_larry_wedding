'use client'

import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { Celebration } from '@/components/Celebration'
import { Gallery } from '@/components/Gallery'
import { Travel } from '@/components/Travel'
import { RSVP } from '@/components/RSVP'
import { Footer } from '@/components/Footer'

export default function Home() {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<main className='wedding' data-theme={darkMode ? 'night' : 'day'}>
			<Hero darkMode={darkMode} toggleTheme={() => setDarkMode((v) => !v)} />
			<Celebration />
			{/* <Gallery /> */}
			<Travel />
			<RSVP />
			<Footer />
		</main>
	)
}
