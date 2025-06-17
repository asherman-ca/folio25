import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Geist } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	variable: '--font-roboto-sans',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
})

const geist = Geist({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Alex Sherman',
	description: 'Alex Sherman - Software Engineer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} antialiased h-screen flex`}>
				{children}
			</body>
		</html>
	)
}
