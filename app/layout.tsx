import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SRIJAL',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/logo srijal.png', // Or '/favicon.png' if you're using PNG
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
