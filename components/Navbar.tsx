'use client'

import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Monogram } from './Monogram'

type Props = { darkMode: boolean; toggleTheme: () => void }

const links = [
	{ text: 'Home', href: '#home' },
	{ text: 'Details', href: '#details' },
	{ text: 'Gallery', href: '#gallery' },
	{ text: 'Travel', href: '#travel' },
	{ text: 'RSVP', href: '#rsvp' }
]

export function Navbar({ darkMode, toggleTheme }: Props) {
	const [open, setOpen] = useState(false)

	return (
		<header className='absolute inset-x-0 top-0 z-40 text-[#fff5e9]'>
			<nav
				className='mx-auto grid h-[82px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-10 lg:px-20'
				aria-label='Main navigation'
			>
				<div className='hidden items-center gap-7 lg:flex xl:gap-10'>
					{links.slice(0, 3).map((link) => (
						<a key={link.href} href={link.href} className='nav-link'>
							{link.text}
						</a>
					))}
				</div>
				<button
					type='button'
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
					aria-controls='wedding-mobile-menu'
					onClick={() => setOpen((v) => !v)}
					className='relative flex h-11 w-11 items-center justify-center lg:hidden'
				>
					{open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
				</button>
				<a
					href='#home'
					aria-label='Larry and Andrea — Home'
					className='col-start-2 flex h-[69px] w-[69px] items-center justify-center sm:h-[76px] sm:w-[76px]'
				>
					<Monogram priority className='h-[66px] w-[66px] opacity-95 sm:h-[74px] sm:w-[74px]' />
				</a>
				<div className='col-start-3 flex items-center justify-end gap-5 xl:gap-10'>
					<div className='hidden items-center gap-7 lg:flex xl:gap-10'>
						{links.slice(3).map((link) => (
							<a key={link.href} href={link.href} className='nav-link'>
								{link.text}
							</a>
						))}
					</div>
					<button
						type='button'
						onClick={toggleTheme}
						aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
						title={darkMode ? 'Light theme' : 'Dark theme'}
						className='flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
					>
						{darkMode ? <Sun size={20} strokeWidth={1.4} /> : <Moon size={20} strokeWidth={1.4} />}
					</button>
				</div>
			</nav>
			{open && (
				<div
					id='wedding-mobile-menu'
					className='mx-4 rounded-2xl border border-white/15 bg-[#261b15]/95 px-6 py-5 shadow-2xl backdrop-blur-lg lg:hidden'
				>
					<div className='flex flex-col gap-1'>
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className='block py-3 text-[12px] uppercase tracking-[0.2em]'
							>
								{link.text}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	)
}
