/* global React */

const SERVICES = [
  {
    n: "01",
    title: "Beginner & first-time drivers",
    desc:
      "If you've never sat in the driver's seat, we start there. Empty lots first — mirrors, pedals, signals — then quiet residential streets, then real San Jose traffic. You set the pace, and we don't move on until you're comfortable.",
    bullets: [
      "Mirror-and-pedals fundamentals",
      "Parking lot drills before street time",
      "Residential routes, then traffic",
      "Confidence-building, not rushing",
    ],
    duration: "2 hours",
    level: "No experience required",
  },
  {
    n: "02",
    title: "Road test prep & pickup",
    desc:
      "I drive the exact DMV routes here in San Jose — Senter Road, Capitol Expressway, the surrounding streets — so on test day nothing surprises you. Pickup at the DMV included, and the lesson car is yours to use for the road test itself.",
    bullets: [
      "DMV route walkthroughs",
      "Parallel parking refinement",
      "Pickup at the test site",
      "Use of car for the road test",
    ],
    duration: "2 hours",
    level: "Pre-test",
  },
];

function Services({ onBook }) {
  return (
    <section className="bmw-section bmw-section--light" data-screen-label="02 Services" id="services-section">
      <div className="bmw-container">
        <div className="rd-sec-head">
          <span className="bmw-eyebrow">What I teach</span>
          <h2>Two lesson types. One instructor.</h2>
          <p className="rd-sec-head-sub">
            I keep it focused on what most students actually need: learning to drive from scratch, or
            getting test-ready. Every lesson is 2 hours, one-on-one, in a dual-control car.
          </p>
        </div>
        <div className="rd-service-grid-2">
          {SERVICES.map((s) => (
            <article key={s.n} className="rd-service-card-lg">
              <div className="rd-service-num">{s.n} —</div>
              <h3 className="rd-service-title-lg">{s.title}</h3>
              <p className="rd-service-desc-lg">{s.desc}</p>
              <ul className="rd-service-bullets">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="rd-service-foot">
                <div className="rd-service-foot-meta">
                  <span className="bmw-label">Duration</span>
                  <strong>{s.duration}</strong>
                </div>
                <div className="rd-service-foot-meta">
                  <span className="bmw-label">Level</span>
                  <strong>{s.level}</strong>
                </div>
                <button className="bmw-btn bmw-btn--text" onClick={onBook}>Book this</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
