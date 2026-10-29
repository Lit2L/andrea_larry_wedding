/**
 * Guest-facing wedding guide.
 * Review time-sensitive details before May 2027.
 */

/**
 * Suggested hotels only.
 * No room blocks or wedding rates are promised.
 */
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
		imagePosition: 'center 35%',
		imageSize: 'cover',
		url: 'https://www.ayreshotels.com/ayres-hotel-fountain-valley'
	}
] as const

/**
 * Restaurant recommendations.
 *
 * menuPicks:
 *   Add your favorite menu items to each restaurant.
 *   Empty arrays display "Our favorites coming soon".
 *
 * imagePosition:
 *   Controls photo framing in Travel.tsx.
 *
 * imageSize:
 *   Controls CSS background sizing when used as a background.
 */
export const recommendedRestaurants = [
	{
		id: 'pho',
		name: 'Phở Ha Noi FV',
		// location: 'Fountain Valley',
		category: 'If you want Pho',
		address: '18380 Brookhurst St, Fountain Valley, CA 92708',
		description: 'They hook it up here.',
		image: '/travel/PhoHanoi.webp',
		imagePosition: 'center 45%',
		imageSize: 'cover',
		menuPicks: ['1LB Bone-In Short Rib Pho', 'Fresh Noodles', 'Chicken Pho'] as string[],
		url: 'https://phohanoi.com/'
	},
	{
		id: 'banhmi',
		name: 'Banh Mi Saigon',
		location: 'Westminster',
		category: 'Quick bites to-go',
		address: '16105 Brookhurst Street, Fountain Valley, CA 92708',
		description: 'Banh mi, Egg rolls, cafe su da',
		image: '/travel/BanhmiSaigon.webp',
		imagePosition: 'center 50%',
		imageSize: 'cover',
		menuPicks: ['Banh Mi', 'Egg Rolls'] as string[],
		url: 'https://www.brodardrestaurant.net/'
	},
	{
		id: 'egg-noodles',
		name: 'Mai Phát Mì Gia',
		location: 'Westminster',
		category: 'If you want Mì (Egg Noodles)',
		address: '9191 Bolsa Ave, Ste 104-105, Westminster, CA 92683',
		description: 'Egg noodles',
		image: '/travel/MaiPhat.webp',
		imagePosition: 'center center',
		imageSize: 'cover',
		menuPicks: ['Wonton Soup'] as string[],
		url: 'https://www.waltswharf.com/'
	},

	{
		id: 'american',
		name: 'Uncle Petes Cafe',
		location: 'Westminster',
		category: 'American Diner',
		address: '14276 Beach Blvd, Westminster, CA 92683',
		description: 'Our breakfast spot.',
		image: '/travel/UnclePetes.webp',
		imagePosition: 'center 40%',
		imageSize: 'cover',
		menuPicks: ['Chicken Fried Steak', 'Hash Browns', 'Pancakes'] as string[],
		url: 'https://www.eatatunclepetes.com'
	}
] as const

/**
 * Nearby airports for wedding guests.
 */
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

/**
 * Additional information for wedding guests.
 */
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
