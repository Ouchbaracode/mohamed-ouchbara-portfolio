import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Mohamed Ouchbara - AI Developer & Software Engineer",
  description: "Portfolio of Mohamed Ouchbara, specializing in AI, machine learning, and software development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} text-white bg-black`}>{children}</body>
    </html>
  )
}



import './globals.css'