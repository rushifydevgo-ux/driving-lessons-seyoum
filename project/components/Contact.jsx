/* global React */

function Contact() {
  return (
    <section className="bmw-section bmw-section--light" data-screen-label="05 Contact" id="contact-section">
      <div className="bmw-container">
        <div className="rd-contact-grid">
          <div className="rd-contact-aside">
            <span className="bmw-eyebrow">Contact</span>
            <h2 className="bmw-section-title">Call, text, or book online.</h2>
            <p>
              Easiest way to reach me is by phone — call or text and I'll get back to you the same
              day. If you already know when you'd like a lesson, the booking widget above goes
              straight to my calendar.
            </p>

            <ul className="rd-contact-list">
              <li className="rd-contact-item">
                <div className="rd-contact-item-icon"><Icon name="phone" size={18} /></div>
                <div className="rd-contact-item-body">
                  <span className="rd-contact-item-label">Phone</span>
                  <a className="rd-contact-item-value" href="tel:+14083403952">(408) 340‑3952</a>
                  <span className="rd-contact-item-sub">Call or text · same-day reply</span>
                </div>
              </li>
              <li className="rd-contact-item">
                <div className="rd-contact-item-icon"><Icon name="pin" size={18} /></div>
                <div className="rd-contact-item-body">
                  <span className="rd-contact-item-label">Service area</span>
                  <span className="rd-contact-item-value">San Jose &amp; South Bay</span>
                  <span className="rd-contact-item-sub">Pickup included anywhere within ~15 miles</span>
                </div>
              </li>
              <li className="rd-contact-item">
                <div className="rd-contact-item-icon"><Icon name="clock" size={18} /></div>
                <div className="rd-contact-item-body">
                  <span className="rd-contact-item-label">Hours</span>
                  <span className="rd-contact-item-value">Mon – Sat · 7am – 7pm</span>
                  <span className="rd-contact-item-sub">Sundays off</span>
                </div>
              </li>
              <li className="rd-contact-item">
                <div className="rd-contact-item-icon"><Icon name="cash" size={18} /></div>
                <div className="rd-contact-item-body">
                  <span className="rd-contact-item-label">Payment</span>
                  <span className="rd-contact-item-value">Cash only</span>
                  <span className="rd-contact-item-sub">No cards, apps, or transfers</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="rd-contact-card-art">
            <div className="rd-contact-card-art-slot">
              <image-slot
                id="contact-photo"
                placeholder="Drop a photo: Seyoum, the car, or a San Jose road"
                shape="rect"
              ></image-slot>
            </div>
            <div className="rd-contact-card-art-cta">
              <div>
                <div className="bmw-label" style={{color: 'var(--bmw-on-dark-soft)', marginBottom: 6}}>Prefer to talk first?</div>
                <div className="rd-contact-card-art-cta-num">(408) 340‑3952</div>
              </div>
              <a className="bmw-btn bmw-btn--primary" href="tel:+14083403952">
                <Icon name="phone" size={14} />
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
