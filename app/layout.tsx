"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 dark:bg-blue-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Siddhant Jain
              </Link>
              <ul className="flex space-x-4 items-center">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="hover:underline">
                    Education & Experience
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4">
            <p>&copy; 2025 Siddhant Jain. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

