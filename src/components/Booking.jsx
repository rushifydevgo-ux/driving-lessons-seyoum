import { useState, useMemo } from 'react'
import Icon from './Icon.jsx'

function fmtDate(d) {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}
function fmtTime12(t24) {
  const [h, m] = t24.split(':').map(Number)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`
}
function pad(n) { return String(n).padStart(2, '0') }

const TIMES_MORNING = ['07:00', '09:00', '11:00']
const TIMES_AFTERNOON = ['13:00', '15:00', '17:00']

function CalendarPicker({ value, onChange }) {
  const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }, [])
  const [view, setView] = useState(() => {
    const d = value ? new Date(value + 'T00:00:00') : new Date()
    return { y: d.getFullYear(), m: d.getMonth() }
  })
  const monthName = new Date(view.y, view.m, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const firstDow = new Date(view.y, view.m, 1).getDay()
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < firstDow; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const goPrev = () => {
    const m = view.m === 0 ? 11 : view.m - 1
    const y = view.m === 0 ? view.y - 1 : view.y
    setView({ y, m })
  }
  const goNext = () => {
    const m = view.m === 11 ? 0 : view.m + 1
    const y = view.m === 11 ? view.y + 1 : view.y
    setView({ y, m })
  }

  const isPrevDisabled = view.y === today.getFullYear() && view.m === today.getMonth()

  return (
    <div className="rd-cal">
      <div className="rd-cal-head">
        <span className="rd-cal-month">{monthName}</span>
        <div className="rd-cal-nav">
          <button onClick={goPrev} disabled={isPrevDisabled} aria-label="Previous month">
            <Icon name="chevronLeft" size={14} />
          </button>
          <button onClick={goNext} aria-label="Next month">
            <Icon name="chevronRight" size={14} />
          </button>
        </div>
      </div>
      <div className="rd-cal-grid">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
          <div key={d} className="rd-cal-dow">{d}</div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />
          const cellDate = new Date(view.y, view.m, d)
          const iso = `${view.y}-${pad(view.m + 1)}-${pad(d)}`
          const isPast = cellDate < today
          const isSunday = cellDate.getDay() === 0
          const disabled = isPast || isSunday
          const isSel = value === iso
          const isToday = cellDate.getTime() === today.getTime()
          return (
            <button
              key={i}
              className={'rd-cal-day' + (isSel ? ' is-selected' : '') + (isToday ? ' is-today' : '') + (disabled ? ' is-disabled' : ' is-available')}
              disabled={disabled}
              onClick={() => onChange(iso)}
            >{d}</button>
          )
        })}
      </div>
      <div className="rd-cal-legend">
        <span><i className="rd-cal-legend-dot rd-cal-legend-dot--available" /> Available</span>
        <span><i className="rd-cal-legend-dot rd-cal-legend-dot--off" /> Sundays off</span>
      </div>
    </div>
  )
}

export default function Booking() {
  const [step, setStep] = useState(0)
  const [dateISO, setDateISO] = useState('')
  const [time, setTime] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', notes: '' })
  const [errors, setErrors] = useState({})

  const PRICE = 440
  const SERVICE_NAME = 'Driving lesson · 2 hours'

  const validateDetails = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone'
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.location.trim()) e.location = 'Where should Seyoum pick you up?'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goNext = () => {
    if (step === 0 && (!dateISO || !time)) return
    if (step === 1 && !validateDetails()) return
    setStep(s => Math.min(s + 1, 2))
  }
  const goBack = () => setStep(s => Math.max(s - 1, 0))
  const reset = () => {
    setStep(0)
    setDateISO(''); setTime('')
    setForm({ name: '', phone: '', email: '', location: '', notes: '' })
  }

  const dateObj = dateISO ? new Date(dateISO + 'T00:00:00') : null

  return (
    <section className="rd-book-band" data-screen-label="04 Booking">
      <div className="bmw-container">
        <div className="rd-sec-head rd-sec-head--center">
          <span className="bmw-eyebrow">Book a lesson</span>
          <h2>Pick a time. It goes on Seyoum's calendar.</h2>
          <p className="rd-sec-head-sub">
            Choose any open slot below. Once confirmed, Seyoum will text you to finalize the
            appointment. No deposit, no card — payment is cash at the lesson.
          </p>
        </div>

        <div className="rd-book-shell">
          <div className="rd-book-shell-head">
            <div className="rd-book-shell-head-left">
              <div className="rd-book-shell-avatar">S</div>
              <div>
                <div className="rd-book-shell-title">Seyoum · Driving Instructor</div>
                <div className="rd-book-shell-sub">
                  <Icon name="clock" size={12} /> 2 hours
                  <span className="rd-dot-sep">•</span>
                  <Icon name="pin" size={12} /> San Jose, CA
                  <span className="rd-dot-sep">•</span>
                  <Icon name="cash" size={12} /> ${PRICE} cash
                </div>
              </div>
            </div>
            <div className="rd-book-shell-stepper">
              <span className={'rd-book-shell-step' + (step >= 0 ? ' is-active' : '')}>1 · Time</span>
              <span className="rd-book-shell-step-divider" />
              <span className={'rd-book-shell-step' + (step >= 1 ? ' is-active' : '')}>2 · Details</span>
              <span className="rd-book-shell-step-divider" />
              <span className={'rd-book-shell-step' + (step >= 2 ? ' is-active' : '')}>3 · Confirm</span>
            </div>
          </div>

          <div className="rd-book-shell-body">
            {step === 0 && (
              <div className="rd-book-step-time">
                <div className="rd-book-step-time-left">
                  <CalendarPicker value={dateISO} onChange={(d) => { setDateISO(d); setTime('') }} />
                </div>
                <div className="rd-book-step-time-right">
                  <div className="rd-time-col-head">
                    {dateObj ? fmtDate(dateObj) : 'Select a date'}
                  </div>
                  {dateObj ? (
                    <>
                      <div className="rd-time-col-section">
                        <div className="bmw-label rd-time-col-label">Morning</div>
                        <div className="rd-time-col-grid">
                          {TIMES_MORNING.map(t => {
                            const dayOfMonth = parseInt(dateISO.split('-')[2], 10)
                            const booked = (dayOfMonth % 4 === 0 && t === '09:00')
                            return (
                              <button
                                key={t}
                                disabled={booked}
                                className={'rd-time-pill' + (time === t ? ' is-selected' : '')}
                                onClick={() => setTime(t)}
                              >
                                {fmtTime12(t)}
                                {booked && <span className="rd-time-pill-tag">Booked</span>}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                      <div className="rd-time-col-section">
                        <div className="bmw-label rd-time-col-label">Afternoon</div>
                        <div className="rd-time-col-grid">
                          {TIMES_AFTERNOON.map(t => {
                            const dayOfMonth = parseInt(dateISO.split('-')[2], 10)
                            const booked = (dayOfMonth % 3 === 0 && t === '15:00')
                            return (
                              <button
                                key={t}
                                disabled={booked}
                                className={'rd-time-pill' + (time === t ? ' is-selected' : '')}
                                onClick={() => setTime(t)}
                              >
                                {fmtTime12(t)}
                                {booked && <span className="rd-time-pill-tag">Booked</span>}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                      <div className="rd-time-col-footnote">
                        All times Pacific. Lessons are 2 hours including pickup &amp; drop-off.
                      </div>
                      <div className="rd-book-actions" style={{ marginTop: 'auto' }}>
                        <div />
                        <button
                          className="bmw-btn bmw-btn--primary"
                          disabled={!time}
                          onClick={goNext}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="rd-time-col-empty">
                      <Icon name="calendar" size={28} stroke={1.5} />
                      <p>Pick a date on the left to see open slots.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="rd-book-step-details">
                <div className="rd-book-step-details-summary">
                  <Icon name="calendar" size={14} />
                  <strong>{fmtDate(dateObj)}</strong>
                  <span className="rd-dot-sep">•</span>
                  <strong>{fmtTime12(time)}</strong>
                  <button className="rd-book-step-details-edit" onClick={goBack}>change</button>
                </div>

                <div className="rd-field-grid">
                  <div className="rd-field">
                    <label className="rd-field-label">Full name <span className="rd-req">*</span></label>
                    <input className="bmw-input" type="text" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Alex Martinez" />
                    {errors.name && <span className="rd-field-error">{errors.name}</span>}
                  </div>
                  <div className="rd-field">
                    <label className="rd-field-label">Phone <span className="rd-req">*</span></label>
                    <input className="bmw-input" type="tel" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(408) 555‑0199" />
                    {errors.phone && <span className="rd-field-error">{errors.phone}</span>}
                  </div>
                </div>
                <div className="rd-field">
                  <label className="rd-field-label">Pickup address <span className="rd-req">*</span></label>
                  <input className="bmw-input" type="text" value={form.location}
                    onChange={e => setForm({ ...form, location: e.target.value })} placeholder="1234 The Alameda, San Jose, CA" />
                  {errors.location && <span className="rd-field-error">{errors.location}</span>}
                </div>
                <div className="rd-field">
                  <label className="rd-field-label">Email <span className="rd-req-soft">(optional)</span></label>
                  <input className="bmw-input" type="email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} placeholder="alex@example.com" />
                  {errors.email && <span className="rd-field-error">{errors.email}</span>}
                </div>
                <div className="rd-field">
                  <label className="rd-field-label">Anything I should know? <span className="rd-req-soft">(optional)</span></label>
                  <textarea className="bmw-input rd-textarea"
                    rows={3}
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    placeholder="Your experience level, what you want to focus on, anxieties to work around…" />
                </div>

                <div className="rd-book-actions">
                  <button className="bmw-btn bmw-btn--secondary" onClick={goBack}>Back</button>
                  <button className="bmw-btn bmw-btn--primary" onClick={goNext}>Review</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="rd-confirm">
                <div className="rd-confirm-icon"><Icon name="check" size={28} stroke={3} /></div>
                <h3>You're on the calendar.</h3>
                <p>
                  Seyoum will text {form.phone} within a few hours to confirm and share his exact ETA on
                  the day. Bring cash on the day of the lesson.
                </p>
                <div className="rd-confirm-card">
                  <div className="rd-confirm-row">
                    <span className="bmw-label">Lesson</span>
                    <strong>{SERVICE_NAME}</strong>
                  </div>
                  <div className="rd-confirm-row">
                    <span className="bmw-label">When</span>
                    <strong>{fmtDate(dateObj)}<br />{fmtTime12(time)} — {fmtTime12(`${parseInt(time.split(':')[0]) + 2}:00`)}</strong>
                  </div>
                  <div className="rd-confirm-row">
                    <span className="bmw-label">Pickup</span>
                    <strong style={{ textAlign: 'right', maxWidth: '60%' }}>{form.location}</strong>
                  </div>
                  <div className="rd-confirm-row">
                    <span className="bmw-label">Student</span>
                    <strong>{form.name}<br />{form.phone}</strong>
                  </div>
                  <div className="rd-confirm-row rd-confirm-row--total">
                    <span>Due at the lesson · cash only</span>
                    <span>${PRICE}</span>
                  </div>
                </div>
                <div className="rd-confirm-helper">
                  <Icon name="phone" size={14} />
                  Need to change something? Call or text Seyoum at <strong>(408) 340‑3952</strong>.
                </div>
                <button className="bmw-btn bmw-btn--text" style={{ marginTop: 32 }} onClick={reset}>
                  Book another lesson
                </button>
              </div>
            )}
          </div>

          <div className="rd-book-shell-foot">
            <span>Free reschedule with 24h notice · Cash payment at the lesson · (408) 340‑3952</span>
          </div>
        </div>
      </div>
    </section>
  )
}
