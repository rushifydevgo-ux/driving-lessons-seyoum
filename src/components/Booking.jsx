import { useEffect } from 'react'

// Replace this URL with Seyoum's real Calendly link once his account is set up
const CALENDLY_URL = 'https://calendly.com/seyoum-driving/driving-lesson'

export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="rd-book-band" data-screen-label="04 Booking">
      <div className="bmw-container">
        <div className="rd-sec-head rd-sec-head--center">
          <span className="bmw-eyebrow">Book a lesson</span>
          <h2>Pick a time. It goes on Seyoum's calendar.</h2>
          <p className="rd-sec-head-sub">
            Choose any open slot below. The appointment syncs straight to Seyoum's Google Calendar
            and you'll get a confirmation automatically. No deposit, no card — payment is cash at
            the lesson.
          </p>
        </div>
        <div className="rd-book-shell" style={{ overflow: 'hidden' }}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  )
}
