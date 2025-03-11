import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"

import localFont from "next/font/local"

import Provider from "@/components/provider"

// https://github.com/github/mona-sans
const monaSans = localFont({
  src: "../../public/fonts/mona/Mona-Sans.woff2",
  variable: "--font-mona",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NextKit - A nextjs starter kit",
  description:
    "Accelerate web development with NextKit: a pre-configured Next.js, TypeScript, and Tailwind boilerplate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${inter.variable} ${geistMono.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
