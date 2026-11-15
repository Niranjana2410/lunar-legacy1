import { Link } from 'react-router-dom';
import ArtifactCard from '../components/ArtifactCard';
import artifacts from '../data/artifacts.json';
import './Home.css';

const featured = artifacts.filter(a => a.featuredOnHome);

const STATS = [
  { value: '8',      label: 'Artifacts Documented' },
  { value: '55+',    label: 'Years on Lunar Surface' },
  { value: '45 km',  label: 'Farthest Mars Drive' },
  { value: '72',     label: 'Ingenuity Flights' },
];

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero star-bg">
        <div className="hero__bg" />
        <div className="hero__content container">
          <div className="hero__label section-label animate-fadeUp animate-delay-1">
            NASA Space Apps Challenge 2026
          </div>
          <h1 className="hero__title animate-fadeUp animate-delay-2">
            <span className="text-gold">Lunar</span> Legacy
          </h1>
          <p className="hero__tagline animate-fadeUp animate-delay-2">
            The Digital Archaeology of Space Exploration
          </p>
          <p className="hero__statement animate-fadeUp animate-delay-3">
            Every abandoned machine has a story.<br />
            <em>Let's uncover it.</em>
          </p>
          <p className="hero__body animate-fadeUp animate-delay-3">
            Scattered across the Moon and Mars are more than 50 pieces of human technology —
            landers, rovers, helicopters, science stations — left exactly where their missions ended.
            This is their archive.
          </p>
          <div className="hero__actions animate-fadeUp animate-delay-4">
            <Link to="/archive" className="btn btn-primary">
              Explore the Forgotten Missions ↗
            </Link>
            <Link to="/atlas" className="btn btn-outline">
              View the Atlas
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            {STATS.map((s, i) => (
              <div key={i} className="home-stat">
                <div className="home-stat__value text-gold">{s.value}</div>
                <div className="home-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="section home-featured">
        <div className="container">
          <div className="section-label">Featured Artifacts</div>
          <div className="home-featured__header">
            <h2>The Forgotten Frontier</h2>
            <Link to="/archive" className="btn btn-ghost">View All Artifacts →</Link>
          </div>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {featured.map(a => (
              <ArtifactCard key={a.id} artifact={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Concept ── */}
      <section className="section home-concept">
        <div className="container">
          <div className="home-concept__inner">
            <div className="home-concept__text">
              <div className="section-label">Our Approach</div>
              <h2>Digital Archaeology</h2>
              <p>
                Traditional space history focuses on the people and the moments of success.
                Lunar Legacy focuses on what was left behind — and what it tells us.
              </p>
              <p>
                Every artifact profile is built from verified NASA and NSSDCA records.
                We distinguish between confirmed facts, educated interpretation, and genuine unknowns.
                Nothing is invented.
              </p>
              <div className="home-concept__features">
                {[
                  ['🔬', 'Evidence Room', 'Source-verified facts for every artifact'],
                  ['🗺', 'Lunar Atlas',   'Interactive map of confirmed locations'],
                  ['📅', 'Timelines',     'Key events from launch to final rest'],
                  ['⚖',  'Compare',       'Side-by-side mission comparisons'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="home-concept__feature">
                    <span className="home-concept__feature-icon">{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="home-concept__quote">
              <blockquote>
                "We came in peace for all mankind."
              </blockquote>
              <cite>— Apollo 11 plaque, still on the Moon at Tranquility Base</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section home-cta">
        <div className="container">
          <div className="home-cta__inner">
            <h2>Start Exploring</h2>
            <p>Choose an artifact, follow the evidence, and discover the story behind the machine.</p>
            <div className="home-cta__links">
              <Link to="/archive"  className="btn btn-primary">Browse All Artifacts</Link>
              <Link to="/timeline" className="btn btn-outline">View Mission Timelines</Link>
              <Link to="/compare"  className="btn btn-ghost">Compare Missions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
