/** Guest-facing wedding guide. Review time-sensitive details before May 2027. */

/** Suggestions only: no room blocks or wedding rates are promised. */
export const recommendedHotels = [
	{
		id: 'ayres-fountain-valley',
		eyebrow: 'Easy & convenient',
		name: 'Ayres Hotel Fountain Valley',
		location: 'Fountain Valley',
		address: '17550 Brookhurst Street, Fountain Valley, CA 92708',
		description:
			'A comfortable home base near Westminster, with complimentary breakfast and hotel parking.',
		image: '/travel/ayres-hotel-fountain-valley.jpg',
		url: 'https://www.ayreshotels.com/ayres-hotel-fountain-valley'
	}
] as const

/** Verified local spots, chosen for geographic and cuisine variety. */
export const recommendedRestaurants = [
	{
		id: 'pho',
		name: 'Pho Ha Noi FV',
		location: 'Fountain Valley',
		category: 'If you want Pho',
		address: '18380 Brookhurst St, Fountain Valley, CA 92708',
		description: 'They hook it up here.',
		image: '/travel/pho-ha-noi-fv.jpg',
		url: 'https://www.thehangoutrestaurant.com/'
	},
	{
		id: 'egg-noodles',
		name: 'Mai Phát Mì Gia',
		location: 'Westminster',
		category: 'If you want Mì (Egg Noodles)',
		address: '9191 Bolsa Ave, Ste 104-105, Westminster, CA 92683',
		description: 'Egg noodles',
		image: '/images/MaiPhatNoodle.webp',
		url: 'https://www.waltswharf.com/'
	},
	{
		id: 'brodard',
		name: 'Brodard Restaurant',
		location: 'Fountain Valley',
		category: 'Vietnamese favorites',
		address: '16105 Brookhurst Street, Fountain Valley, CA 92708',
		description: 'Little Saigon staple.',
		image: '/travel/brodard-restaurant.jpg',
		url: 'https://www.brodardrestaurant.net/'
	},
	{
		id: 'pho-79',
		name: 'Phở 79',
		location: 'Westminster',
		category: 'A bowl of phở',
		address: '8894 Bolsa Avenue, Westminster, CA 92683',
		description:
			'A longtime Little Saigon institution for a comforting bowl of Vietnamese noodle soup.',
		image: '/travel/pho-79.jpg',
		url: 'https://guide.michelin.com/us/en/california/westminster_2880089/restaurant/pho-79'
	}
] as const

export const nearbyAirports = [
	{
		code: 'SNA',
		name: 'John Wayne Airport',
		city: 'Orange County',
		note: 'A convenient choice for guests flying into Orange County.',
		url: 'https://www.ocair.com/'
	},
	{
		code: 'LGB',
		name: 'Long Beach Airport',
		city: 'Long Beach',
		note: 'A smaller airport worth checking for flights into the coastal area.',
		url: 'https://www.longbeach.gov/lgb/'
	},
	{
		code: 'LAX',
		name: 'Los Angeles International Airport',
		city: 'Los Angeles',
		note: 'Another option, especially for guests comparing long-distance flights; allow more time for the drive.',
		url: 'https://www.flylax.com/'
	}
] as const

export const guestDetails = {
	registryUrl: process.env.NEXT_PUBLIC_REGISTRY_URL?.trim() || '',
	registryMessage: "Registry information will be shared here when it's ready.",
	dressCode: 'Dress code details coming soon.',
	ceremonyParking:
		"Parking instructions for Old Ranch Country Club will be shared after they're confirmed with the venue.",
	receptionParking: 'Paracel Events & Catering lists complimentary self-parking for guests.',
	foodAllergies:
		"If you have a food allergy or dietary restriction, please let Larry or Andrea know as early as possible, ideally before the RSVP deadline. We'll check possible accommodations with our caterer; an allergen-free kitchen cannot be guaranteed.",
	contactEmail: process.env.NEXT_PUBLIC_WEDDING_CONTACT_EMAIL?.trim() || ''
} as const
