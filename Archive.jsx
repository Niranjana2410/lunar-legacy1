import { useState, useMemo } from 'react';
import ArtifactCard from '../components/ArtifactCard';
import artifacts from '../data/artifacts.json';
import './Archive.css';

const BODIES   = ['All', 'Moon', 'Mars'];
const CATS     = ['All', ...new Set(artifacts.map(a => a.category))];

export default function Archive() {
  const [body,   setBody]   = useState('All');
  const [cat,    setCat]    = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return artifacts.filter(a => {
      const matchBody   = body === 'All' || a.destination === body;
      const matchCat    = cat  === 'All' || a.category === cat;
      const matchSearch = !search ||
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.mission.toLowerCase().includes(search.toLowerCase()) ||
        a.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchBody && matchCat && matchSearch;
    });
  }, [body, cat, search]);

  return (
    <div className="archive page-enter">
      <div className="archive__hero">
        <div className="container">
          <div className="section-label">The Artifact Archive</div>
          <h1>Abandoned <span className="text-gold">Machines</span></h1>
          <p className="archive__sub">
            {artifacts.length} documented artifacts across the Moon and Mars.
            Every profile is built from verified NASA and NSSDCA records.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filters */}
        <div className="archive__filters">
          <div className="archive__search">
            <span className="archive__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, mission, or tag…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="archive__search-input"
            />
          </div>
          <div className="archive__filter-group">
            <label className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>DESTINATION</label>
            <div className="archive__pills">
              {BODIES.map(b => (
                <button
                  key={b}
                  className={`archive__pill${body === b ? ' archive__pill--active' : ''}`}
                  onClick={() => setBody(b)}
                >{b}</button>
              ))}
            </div>
          </div>
          <div className="archive__filter-group">
            <label className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>TYPE</label>
            <div className="archive__pills">
              {CATS.map(c => (
                <button
                  key={c}
                  className={`archive__pill${cat === c ? ' archive__pill--active' : ''}`}
                  onClick={() => setCat(c)}
                >{c}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="archive__count mono">
          {filtered.length} artifact{filtered.length !== 1 ? 's' : ''} found
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="archive__grid">
            {filtered.map(a => (
              <ArtifactCard key={a.id} artifact={a} />
            ))}
          </div>
        ) : (
          <div className="archive__empty">
            <span>◎</span>
            <p>No artifacts match your filters.</p>
            <button className="btn btn-ghost" onClick={() => { setBody('All'); setCat('All'); setSearch(''); }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
