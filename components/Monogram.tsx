import Image from 'next/image'

type Props = {
	className?: string
	priority?: boolean
}

/** The original transparent black artwork, inverted to warm ivory in dark sections. */
export function Monogram({ className = '', priority = false }: Props) {
	return (
		<Image
			src='/images/la-monogram.webp'
			width={1141}
			height={1087}
			priority={priority}
			alt=''
			aria-hidden='true'
			className={`h-auto w-full object-contain brightness-0 invert ${className}`}
		/>
	)
}
