/* global React */

function Footer({ onNav }) {
  return (
    <footer className="rd-footer">
      <div className="bmw-container">
        <div className="rd-footer-top">
          <div className="rd-footer-brand">
            <div className="rd-logo" style={{cursor:'default'}}>
              <div className="rd-logo-mark" style={{background: 'var(--bmw-on-dark)', color: 'var(--bmw-ink)'}}>S</div>
              <div className="rd-logo-text">
                <strong style={{color: 'var(--bmw-on-dark)'}}>Driving Lessons with Seyoum</strong>
                <span style={{color: 'var(--bmw-on-dark-soft)'}}>San Jose, California</span>
              </div>
            </div>
            <p className="rd-footer-blurb">
              One-on-one driving lessons in San Jose and the South Bay. Beginner-friendly. DMV-licensed.
              Cash only.
            </p>
          </div>

          <div className="rd-footer-cols">
            <div className="rd-footer-col">
              <div className="rd-footer-col-title">Site</div>
              <ul>
                <li><a onClick={() => onNav("services")}>Lessons</a></li>
                <li><a onClick={() => onNav("pricing")}>Pricing</a></li>
                <li><a onClick={() => onNav("book")}>Book a lesson</a></li>
                <li><a onClick={() => onNav("contact")}>Contact</a></li>
              </ul>
            </div>
            <div className="rd-footer-col">
              <div className="rd-footer-col-title">Contact</div>
              <ul>
                <li><a href="tel:+14083403952">(408) 340‑3952</a></li>
                <li><span>Mon – Sat · 7am – 7pm</span></li>
                <li><span>San Jose &amp; South Bay</span></li>
                <li><span>Cash only · no apps</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rd-footer-meta">
          <span>© {new Date().getFullYear()} Driving Lessons with Seyoum. All rights reserved.</span>
          <span>DMV-licensed · Commercial insurance carried</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
