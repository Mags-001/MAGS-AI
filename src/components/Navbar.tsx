import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Products / Demos', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'How I Work', href: '#process' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Mags.Ai home">
          Mags<span>.Ai</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="menu-toggle-label">Menu</span>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div id="primary-navigation" className={`nav-links${isOpen ? ' is-open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}