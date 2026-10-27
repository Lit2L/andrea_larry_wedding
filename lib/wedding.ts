/** All guest-facing wedding content lives here. */
export const wedding = {
	names: 'Larry & Andrea',
	dateLabel: 'Saturday, May 22, 2027',
	locationLabel: 'Southern California',
	/** 12:00 PM PDT on May 22 is 19:00 UTC. The offset is deliberate. */
	weddingDateISO: '2027-05-22T12:00:00-07:00',
	rsvpBy: 'March 3, 2027',
	rsvpUrl: process.env.NEXT_PUBLIC_RSVP_URL?.trim() || '',
	intro: "Under the moon & stars, we'd love to celebrate with you.",
	ceremony: {
		label: 'The Ceremony',
		name: 'Old Ranch Country Club',
		city: 'Seal Beach, California',
		date: 'Saturday, May 22, 2027',
		time: '12:00 PM',
		address: '3901 Lampson Avenue, Seal Beach, CA 90740',
		mapQuery: 'Old Ranch Country Club, 3901 Lampson Ave, Seal Beach, CA',
		/** Replace null with '/images/ceremony.webp' when you supply a photo. */
		image: null as string | null
	},
	reception: {
		label: 'The Reception',
		name: 'Paracel Events & Catering',
		city: 'Westminster, California',
		date: 'Saturday, May 22, 2027',
		time: 'To follow',
		address: '15583–15589 Brookhurst Street, Westminster, CA 92683',
		mapQuery: 'Paracel Events & Catering, 15583 Brookhurst St, Westminster, CA',
		/** Replace null with '/images/reception.webp' when you supply a photo. */
		image: null as string | null
	},
	gallery: [
		{
			src: '/images/larry-andrea-hero.webp',
			alt: 'Larry and Andrea sharing dinner together'
		}
		// Add more photos: { src: "/images/our-photo-2.webp", alt: "..." }
	]
} as const

export function mapsUrl(address: string) {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
