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
		url: 'https://www.ayreshotels.com/ayres-hotel-fountain-valley'
	},
	{
		id: 'westin-south-coast-plaza',
		eyebrow: 'An elevated stay',
		name: 'The Westin South Coast Plaza',
		location: 'Costa Mesa',
		address: '686 Anton Boulevard, Costa Mesa, CA 92626',
		description:
			'A polished full-service hotel near shopping, restaurants, and the Segerstrom Center for the Arts.',
		url: 'https://www.marriott.com/en-us/hotels/snawi-the-westin-south-coast-plaza-costa-mesa/overview/'
	},
	{
		id: 'pacific-inn',
		eyebrow: 'By the coast',
		name: 'The Pacific Inn',
		location: 'Seal Beach',
		address: '600 Marina Drive, Seal Beach, CA 90740',
		description:
			'A relaxed boutique option near Seal Beach Main Street and the pier for guests making a weekend of it.',
		url: 'https://www.thepacificinn.com/'
	}
] as const

/** Verified local spots, chosen for geographic and cuisine variety. */
export const recommendedRestaurants = [
	{
		id: 'hangout-seal-beach',
		name: 'The Hangout Restaurant & Beach Bar',
		location: 'Seal Beach',
		category: 'Brunch by the beach',
		address: '901 Ocean Avenue, Seal Beach, CA 90740',
		description:
			'A laid-back spot across from the Seal Beach Pier for breakfast, comfort food, and ocean views.',
		url: 'https://www.thehangoutrestaurant.com/'
	},
	{
		id: 'walts-wharf',
		name: 'Walt’s Wharf',
		location: 'Seal Beach',
		category: 'Coastal seafood',
		address: '201 Main Street, Seal Beach, CA 90740',
		description: 'A classic Main Street seafood restaurant, a short walk from the beach.',
		url: 'https://www.waltswharf.com/'
	},
	{
		id: 'brodard',
		name: 'Brodard Restaurant',
		location: 'Fountain Valley',
		category: 'Vietnamese favorites',
		address: '16105 Brookhurst Street, Fountain Valley, CA 92708',
		description:
			'A lively Vietnamese restaurant known for its grilled pork spring rolls and flavorful dipping sauce.',
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

/** Details not decided by the couple are explicit, editable placeholders. */
export const guestDetails = {
	/** Leave blank until an actual registry destination is selected. */
	registryUrl: process.env.NEXT_PUBLIC_REGISTRY_URL?.trim() || '',
	registryMessage: "Registry information will be shared here when it's ready.",
	dressCode: 'Dress code details coming soon.',
	ceremonyParking:
		"Parking instructions for Old Ranch Country Club will be shared after they're confirmed with the venue.",
	receptionParking: 'Paracel Events & Catering lists complimentary self-parking for guests.',
	foodAllergies:
		"If you have a food allergy or dietary restriction, please let Larry or Andrea know as early as possible, ideally before the RSVP deadline. We'll check possible accommodations with our caterer; an allergen-free kitchen cannot be guaranteed.",
	/** Optional guest-contact email for allergy/dietary questions. */
	contactEmail: process.env.NEXT_PUBLIC_WEDDING_CONTACT_EMAIL?.trim() || ''
} as const
