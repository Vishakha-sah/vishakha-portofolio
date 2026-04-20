import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vishakha Sah — AI/ML Engineer',
  description:
    'Computer Science undergraduate at KIIT specializing in AI/ML. Building intelligent systems at the intersection of research and real-world impact.',
  keywords: [
    'Vishakha Sah',
    'AI Engineer',
    'ML Engineer',
    'Deep Learning',
    'Computer Vision',
    'KIIT',
    'Portfolio',
  ],
  authors: [{ name: 'Vishakha Sah' }],
  openGraph: {
    title: 'Vishakha Sah — AI/ML Engineer',
    description:
      'Computer Science undergraduate at KIIT specializing in AI/ML. Building intelligent systems at the intersection of research and real-world impact.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishakha Sah — AI/ML Engineer',
    description:
      'Computer Science undergraduate at KIIT specializing in AI/ML. Building intelligent systems at the intersection of research and real-world impact.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
