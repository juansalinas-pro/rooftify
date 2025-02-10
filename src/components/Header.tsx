"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const navItems = [
    { name: "Inicio", sectionId: "hero" },
    { name: "¿Cómo puedes invertir?", sectionId: "how-it-works" },
    { name: "¿Qué hacemos?", sectionId: "what-we-do" },
    { name: "Ventajas", sectionId: "advantages" },
    { name: "¿Por qué Paraguay?", sectionId: "paraguay" },
    { name: "Preguntas frecuentes", sectionId: "faq" },
    { name: "Empieza hoy mismo", sectionId: "start-today" },
  ]

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <header
      className={`bg-white py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-lg bg-white/70" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors flex items-center"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(4)%20(2)-8CXmIjfynSf8zTCjPdrkzHtjEdNGLf.png"
            alt="Rooftify Logo"
            width={36}
            height={24}
            className="object-contain"
          />
          Rooftify
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.sectionId)
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Button
                key={item.sectionId}
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors justify-start"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

