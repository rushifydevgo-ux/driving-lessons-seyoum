import { useState } from 'react'
import Icon from './Icon.jsx'

export default function Nav({ onNav, current }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Lessons' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'book', label: 'Book a lesson' },
    { id: 'contact', label: 'Contact' },
  ]
  return (
    <header className="bmw-topnav">
      <div className="bmw-topnav-inner">
        <div className="rd-logo" onClick={() => onNav('home')}>
          <div className="rd-logo-mark">S</div>
          <div className="rd-logo-text">
            <strong>Driving Lessons with Seyoum</strong>
            <span>San Jose, California</span>
          </div>
        </div>
        <nav className="bmw-topnav-menu">
          {links.map(l => (
            <a
              key={l.id}
              className="bmw-topnav-link"
              style={current === l.id ? { borderBottomColor: 'var(--bmw-primary)', fontWeight: 700 } : null}
              onClick={() => onNav(l.id)}
            >{l.label}</a>
          ))}
        </nav>
        <div className="bmw-topnav-right">
          <a href="tel:+14083403952" className="rd-nav-phone">
            <Icon name="phone" size={14} />
            (408) 340‑3952
          </a>
        </div>
      </div>
    </header>
  )
}
