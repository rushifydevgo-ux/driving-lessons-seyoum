import Icon from './Icon.jsx'

export default function Pricing({ onBook }) {
  return (
    <section className="bmw-section bmw-section--soft" data-screen-label="03 Pricing">
      <div className="bmw-container">
        <div className="rd-sec-head">
          <span className="bmw-eyebrow">Pricing</span>
          <h2>One package. One honest rate.</h2>
          <p className="rd-sec-head-sub">
            I keep pricing simple because that's how I'd want to be quoted myself. Three lessons,
            two hours each, paid in cash. No tiers, no add-ons, no surprise fees.
          </p>
        </div>

        <div className="rd-pricing-feature">
          <div className="rd-pricing-feature-left">
            <span className="bmw-eyebrow">Three-lesson package</span>
            <h3 className="rd-pricing-feature-title">3 lessons · 2 hours each</h3>
            <p className="rd-pricing-feature-sub">
              Most students get road-ready in a single package. That's six hours of one-on-one
              instruction, spread across three sessions on dates that work for you.
            </p>
            <ul className="rd-pricing-feature-list">
              <li>Six total hours of instruction (3 × 2 hr)</li>
              <li>One-on-one with Seyoum in a dual-control sedan</li>
              <li>Free pickup anywhere in San Jose / South Bay</li>
              <li>Flexible scheduling — book lessons one at a time</li>
              <li>Free reschedule with 24 hours notice</li>
              <li>Beginner-friendly or test-prep focused — your choice</li>
            </ul>
          </div>
          <div className="rd-pricing-feature-right">
            <div className="rd-pricing-feature-price-card">
              <div className="rd-pricing-feature-price-eyebrow">Full package</div>
              <div className="rd-pricing-feature-price-amount">
                <span className="rd-pricing-feature-price-currency">$</span>
                <span className="rd-pricing-feature-price-figure">440</span>
              </div>
              <div className="rd-pricing-feature-price-unit">for 3 lessons · 2 hours each</div>
              <div className="rd-pricing-feature-price-rate">
                Works out to <strong>$73 / hour</strong>
              </div>
              <button className="bmw-btn bmw-btn--primary rd-pricing-feature-cta" onClick={onBook}>
                Book the package
              </button>
              <div className="rd-pricing-feature-fineprint">
                Pay cash at the first lesson, or split across the three. No deposit required to book.
              </div>
            </div>
          </div>
        </div>

        <div className="rd-pricing-callout">
          <div className="rd-pricing-callout-icon">
            <Icon name="cash" size={28} stroke={1.75} />
          </div>
          <div className="rd-pricing-callout-body">
            <p className="rd-pricing-callout-title">Cash only · No apps, no cards</p>
            <p className="rd-pricing-callout-sub">
              Payment is cash, handed to me in person at the lesson. I don't accept cards, Venmo,
              Zelle, CashApp, or any digital payment. This keeps my overhead low so the rate stays
              honest. Receipts available on request.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
