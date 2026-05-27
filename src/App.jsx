import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const pricingRef = useRef(null)
  const bookRef = useRef(null)
  const contactRef = useRef(null)
  const [current, setCurrent] = useState('home')

  const refs = { home: homeRef, services: servicesRef, pricing: pricingRef, book: bookRef, contact: contactRef }

  const scrollTo = (id) => {
    const el = refs[id]?.current
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setCurrent(id)
  }

  useEffect(() => {
    const onScroll = () => {
      const order = ['contact', 'book', 'pricing', 'services', 'home']
      const y = window.scrollY + 100
      for (const id of order) {
        const el = refs[id]?.current
        if (el && el.offsetTop <= y) {
          setCurrent(id)
          return
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="rd-app">
      <Nav onNav={scrollTo} current={current} />
      <main>
        <div ref={homeRef}><Hero onBook={() => scrollTo('book')} onPricing={() => scrollTo('pricing')} /></div>
        <div ref={servicesRef}><Services onBook={() => scrollTo('book')} /></div>
        <div ref={pricingRef}><Pricing onBook={() => scrollTo('book')} /></div>
        <div ref={bookRef}><Booking /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer onNav={scrollTo} />
    </div>
  )
}
