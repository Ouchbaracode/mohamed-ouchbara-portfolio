"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold neon-text">
            MO
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:neon-text transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              Let's Connect
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:neon-text transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mt-4 px-4 py-2 text-center rounded-full neon-border hover:bg-blue-400 hover:text-black transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Connect
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

