import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Sho School
        </Link>

        <nav className="nav nav-desktop" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <Link key={link.id} to={`/#${link.id}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary btn-nav-cta">
            相談する
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span aria-hidden="true" className={`nav-toggle-bars${isOpen ? ' is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile${isOpen ? ' is-open' : ''}`}
        aria-label="モバイルナビゲーション"
        hidden={!isOpen}
      >
        <div className="nav-mobile-inner container">
          {navLinks.map((link) => (
            <Link key={link.id} to={`/#${link.id}`} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary" onClick={closeMenu}>
            相談する
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
