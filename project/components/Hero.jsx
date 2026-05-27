/* global React */

function Hero({ onBook, onPricing }) {
  return (
    <section className="rd-hero-light" data-screen-label="01 Hero">
      <div className="bmw-container">
        <div className="rd-hero-light-inner">
          <div className="rd-hero-light-copy">
            <span className="bmw-eyebrow">San Jose · Solo instructor · DMV-licensed</span>
            <h1 className="rd-hero-light-title">
              Learn to drive in San Jose. <span className="rd-hero-light-accent">Taught with patience.</span>
            </h1>
            <p className="rd-hero-light-sub">
              One-on-one lessons with Seyoum — a single, experienced instructor who picks you up,
              teaches at your pace, and gets you ready for the road test. Beginners welcome.
            </p>
            <div className="rd-hero-cta-row">
              <button className="bmw-btn bmw-btn--primary" onClick={onBook}>
                Book a lesson
              </button>
              <button className="bmw-btn bmw-btn--secondary" onClick={onPricing}>
                See pricing
              </button>
            </div>
            <div className="rd-hero-light-meta">
              <a href="tel:+14083403952" className="rd-hero-meta-phone">
                <Icon name="phone" size={16} />
                <span>
                  <span className="rd-hero-meta-phone-label">Call or text</span>
                  <span className="rd-hero-meta-phone-num">(408) 340‑3952</span>
                </span>
              </a>
              <div className="rd-hero-meta-divider" />
              <div className="rd-hero-meta-cash">
                <Icon name="cash" size={16} />
                <span>
                  <span className="rd-hero-meta-phone-label">Payment</span>
                  <span className="rd-hero-meta-phone-num">Cash only</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rd-hero-light-photo">
            <div className="rd-hero-photo-slot-light">
              <image-slot
                id="hero-photo"
                placeholder="Drop a photo of Seyoum or the lesson car here"
                shape="rect"
              ></image-slot>
            </div>
            <div className="rd-hero-light-photo-tag">
              <div className="rd-hero-light-photo-tag-row">
                <span className="bmw-label">Service area</span>
                <span className="rd-hero-light-photo-tag-val">San Jose &amp; South Bay</span>
              </div>
              <div className="rd-hero-light-photo-tag-row">
                <span className="bmw-label">Vehicle</span>
                <span className="rd-hero-light-photo-tag-val">Dual-control sedan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
