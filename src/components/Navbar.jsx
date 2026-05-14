import React, { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#cta' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-sage-gradient flex items-center justify-center text-white text-sm font-display font-semibold select-none">
            A
          </span>
          <div className="leading-tight">
            <p className="font-display font-semibold text-sage-700 text-base leading-none">
              {SITE_CONFIG.name}
            </p>
            <p className="text-[10px] text-sage-500 font-body uppercase tracking-widest">
              {SITE_CONFIG.title}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-sage-700 hover:text-sage-500 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-full bg-sage-600 text-white text-sm font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-hover"
          >
            Agendar consulta
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-sage-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-sage-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-sage-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-sage-100 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sage-700 font-body text-sm py-2 border-b border-sage-50"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 py-3 text-center rounded-full bg-sage-600 text-white text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  )
}
