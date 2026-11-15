import { useState } from 'react';
import { Link } from 'react-router-dom';
import artifacts from '../data/artifacts.json';
import './Atlas.css';

// SVG-based interactive map — no external library dependency needed
// Moon: simple equirectangular projection (lon -180→180, lat -90→90)
// We use known Maria and landmark labels for context

const MOON_ARTIFACTS  = artifacts.filter(a => a.body === 'moon'  && a.coordinates);
const MARS_ARTIFACTS  = artifacts.filter(a => a.body === 'mars'  && a.coordinates);

// Convert lat/lon to SVG x,y for a simple equirectangular map
function toXY(lat, lon, width, height) {
  const x = ((lon + 180) / 360) * width;
  const y = ((90  - lat)  / 180) * height;
  return { x, y };
}

const MOON_FEATURES = [
  { name: 'Mare Tranquillitatis', lat: 8,   lon: 31,  type: 'mare' },
  { name: 'Oceanus Procellarum',  lat: 10,  lon: -40, type: 'mare' },
  { name: 'Mare Imbrium',         lat: 33,  lon: -17, type: 'mare' },
  { name: 'Montes Apennines',     lat: 23,  lon: 2,   type: 'mountains' },
];
const MARS_FEATURES = [
  { name: 'Jezero Crater',        lat: 18.4,  lon: 77,    type: 'crater' },
  { name: 'Gusev Crater',         lat: -14.6, lon: 175.5, type: 'crater' },
  { name: 'Meridiani Planum',     lat: -1.9,  lon: 354.5, type: 'plain' },
  { name: 'Ares Vallis',          lat: 19,    lon: 33,    type: 'valley' },
];

function ArtifactMarker({ artifact, onClick, isSelected, mapW, mapH }) {
  const { coordinates, name, shortName, destination, statusType } = artifact;
  const { x, y } = toXY(coordinates.lat, coordinates.lon, mapW, mapH);
  const color = destination === 'Moon' ? '#c8d4e0' : '#e88060';
  const pulseColor = statusType === 'permanent' ? color : 'var(--gold)';

  return (
    <g
      className={`artifact-marker${isSelected ? ' artifact-marker--selected' : ''}`}
      transform={`translate(${x},${y})`}
      onClick={() => onClick(artifact)}
      style={{ cursor: 'pointer' }}
    >
      {/* Pulse ring */}
      <circle r="12" fill="none" stroke={pulseColor} strokeWidth="1" opacity="0.3" className="marker-pulse" />
      {/* Core */}
      <circle r="6" fill={color} stroke={isSelected ? 'var(--gold)' : 'rgba(0,0,0,0.5)'} strokeWidth={isSelected ? 2 : 1} />
      {/* Label */}
      <text
        x="10"
        y="4"
        fontSize="8"
        fill={isSelected ? 'var(--gold)' : color}
        fontFamily="'Space Mono', monospace"
        fontWeight={isSelected ? '700' : '400'}
      >
        {shortName || name}
      </text>
    </g>
  );
}

function FeatureLabel({ feature, mapW, mapH }) {
  const { x, y } = toXY(feature.lat, feature.lon, mapW, mapH);
  return (
    <text x={x} y={y} fontSize="7" fill="rgba(200,212,224,0.25)" fontFamily="'Inter', sans-serif" textAnchor="middle">
      {feature.name}
    </text>
  );
}

export default function Atlas() {
  const [view,     setView]     = useState('moon'); // 'moon' | 'mars'
  const [selected, setSelected] = useState(null);

  const displayArtifacts = view === 'moon' ? MOON_ARTIFACTS : MARS_ARTIFACTS;
  const features          = view === 'moon' ? MOON_FEATURES  : MARS_FEATURES;
  const mapW = 800, mapH = 400;

  const bgGradient = view === 'moon'
    ? ['#1a1f2e', '#2a3040']
    : ['#1a0e08', '#2a1a10'];

  return (
    <div className="atlas page-enter">
      <div className="atlas__hero">
        <div className="container">
          <div className="section-label">The Lunar Atlas</div>
          <h1>Where They <span className="text-gold">Rest</span></h1>
          <p className="atlas__sub">
            Interactive map of verified artifact locations across the Moon and Mars.
            Click any marker to explore the artifact's story.
            Coordinates sourced from NASA/NSSDCA records.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Body switcher */}
        <div className="atlas__switcher">
          <button
            className={`atlas__switch-btn${view === 'moon' ? ' atlas__switch-btn--active' : ''}`}
            onClick={() => { setView('moon'); setSelected(null); }}
          >
            ☽ Moon
          </button>
          <button
            className={`atlas__switch-btn${view === 'mars' ? ' atlas__switch-btn--active' : ''}`}
            onClick={() => { setView('mars'); setSelected(null); }}
          >
            ○ Mars
          </button>
        </div>

        <div className="atlas__layout">
          {/* Map */}
          <div className="atlas__map-wrap">
            <svg
              viewBox={`0 0 ${mapW} ${mapH}`}
              className="atlas__svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="bodyGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%"   stopColor={bgGradient[1]} />
                  <stop offset="100%" stopColor={bgGradient[0]} />
                </radialGradient>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d={`M ${mapW} 0 L 0 0 0 ${mapH}`} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
              </defs>

              {/* Background */}
              <rect width={mapW} height={mapH} fill="url(#bodyGrad)" rx="8" />
              <rect width={mapW} height={mapH} fill="url(#grid)" rx="8" />

              {/* Equator and meridian guides */}
              <line x1="0" y1={mapH / 2} x2={mapW} y2={mapH / 2} stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1={mapW / 2} y1="0" x2={mapW / 2} y2={mapH} stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" strokeDasharray="4 4" />

              {/* Degree labels */}
              {[-60,-30,0,30,60].map(lat => {
                const { y } = toXY(lat, 0, mapW, mapH);
                return <text key={lat} x="4" y={y + 3} fontSize="6" fill="rgba(255,255,255,0.2)" fontFamily="monospace">{lat}°</text>;
              })}
              {[-120,-60,0,60,120].map(lon => {
                const { x } = toXY(0, lon, mapW, mapH);
                return <text key={lon} x={x} y={mapH - 4} fontSize="6" fill="rgba(255,255,255,0.2)" fontFamily="monospace" textAnchor="middle">{lon}°</text>;
              })}

              {/* Feature labels */}
              {features.map(f => (
                <FeatureLabel key={f.name} feature={f} mapW={mapW} mapH={mapH} />
              ))}

              {/* Artifact markers */}
              {displayArtifacts.map(a => (
                <ArtifactMarker
                  key={a.id}
                  artifact={a}
                  onClick={setSelected}
                  isSelected={selected?.id === a.id}
                  mapW={mapW}
                  mapH={mapH}
                />
              ))}
            </svg>

            <div className="atlas__map-credit mono">
              Equirectangular projection · Coordinates from NASA/NSSDCA records
            </div>
          </div>

          {/* Info panel */}
          <div className="atlas__info">
            {selected ? (
              <div className="atlas__detail-card">
                <div className="atlas__detail-img">
                  <img src={selected.image?.url} alt={selected.image?.caption} />
                </div>
                <div className="atlas__detail-body">
                  <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.7rem', marginBottom: '0.4rem' }}>
                    {selected.mission}
                  </div>
                  <h3>{selected.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.75rem 0' }}>
                    {selected.narrative?.slice(0, 180)}…
                  </p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--silver-dim)' }}>Location:</strong> {selected.coordinates.label}
                  </div>
                  {selected.coordinates.lat !== undefined && (
                    <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--gold)', marginBottom: '1rem' }}>
                      {selected.coordinates.lat}°, {selected.coordinates.lon}°
                    </div>
                  )}
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    <span className={`status-dot ${selected.statusType}`} />
                    {selected.status}
                  </div>
                  <Link to={`/artifact/${selected.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Read Full Story →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="atlas__info-empty">
                <span style={{ fontSize: '2.5rem', opacity: 0.3 }}>◎</span>
                <p>Click a marker on the map to explore the artifact at that location.</p>
                <div className="atlas__legend">
                  <div className="atlas__legend-item">
                    <span className="atlas__legend-dot" style={{ background: '#c8d4e0' }} />
                    <span>Moon artifacts</span>
                  </div>
                  <div className="atlas__legend-item">
                    <span className="atlas__legend-dot" style={{ background: '#e88060' }} />
                    <span>Mars artifacts</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* List below */}
        <div className="atlas__list">
          <div className="section-label" style={{ marginTop: '3rem' }}>All Locations</div>
          <div className="atlas__list-grid">
            {displayArtifacts.map(a => (
              <button
                key={a.id}
                className={`atlas__list-item${selected?.id === a.id ? ' atlas__list-item--active' : ''}`}
                onClick={() => setSelected(a)}
              >
                <span className="mono" style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>{a.mission}</span>
                <span style={{ color: 'var(--silver)', fontSize: '0.9rem' }}>{a.shortName || a.name}</span>
                <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                  {a.coordinates.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
