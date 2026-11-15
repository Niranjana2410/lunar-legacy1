import { useState } from 'react';
import { Link } from 'react-router-dom';
import artifacts from '../data/artifacts.json';
import './Compare.css';

const COMPARE_FIELDS = [
  { key: 'type',         label: 'Equipment Type' },
  { key: 'destination',  label: 'Destination' },
  { key: 'mission',      label: 'Mission' },
  { key: 'agency',       label: 'Agency' },
  { key: 'launchDate',   label: 'Launch Date' },
  { key: 'landingDate',  label: 'Landing Date' },
  { key: 'missionEndDate', label: 'Mission End' },
  { key: 'mass_kg',      label: 'Mass' },
  { key: 'purpose',      label: 'Purpose' },
  { key: 'scientificContribution', label: 'Scientific Contribution' },
  { key: 'statusType',   label: 'Current Status' },
  { key: 'lastKnownActivity', label: 'Last Known Activity' },
];

const STATUS_LABELS = {
  permanent:      'Remains on Surface',
  decommissioned: 'Decommissioned',
};

function formatValue(key, val) {
  if (val === null || val === undefined) return <em style={{ color: 'var(--text-muted)' }}>Not available</em>;
  if (key === 'mass_kg') {
    if (typeof val === 'number') return `${val} kg`;
    if (val.toString().startsWith('unknown')) return <em style={{ color: 'var(--text-muted)' }}>Unknown</em>;
    return val;
  }
  if (key === 'statusType') return STATUS_LABELS[val] || val;
  return val;
}

export default function Compare() {
  const [leftId,  setLeftId]  = useState(artifacts[0].id);
  const [rightId, setRightId] = useState(artifacts[4].id);

  const left  = artifacts.find(a => a.id === leftId);
  const right = artifacts.find(a => a.id === rightId);

  const isSame = leftId === rightId;

  return (
    <div className="compare page-enter">
      <div className="compare__hero">
        <div className="container">
          <div className="section-label">Compare Missions</div>
          <h1>Mission <span className="text-gold">Comparison</span></h1>
          <p className="compare__sub">
            Select two artifacts to compare their mission data side by side.
            Only fields with available, comparable information are shown.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Selectors */}
        <div className="compare__selectors">
          <div className="compare__selector">
            <label className="mono">Mission A</label>
            <select
              value={leftId}
              onChange={e => setLeftId(e.target.value)}
              className="compare__select"
            >
              {artifacts.map(a => (
                <option key={a.id} value={a.id}>{a.shortName || a.name}</option>
              ))}
            </select>
          </div>
          <div className="compare__vs">VS</div>
          <div className="compare__selector">
            <label className="mono">Mission B</label>
            <select
              value={rightId}
              onChange={e => setRightId(e.target.value)}
              className="compare__select"
            >
              {artifacts.map(a => (
                <option key={a.id} value={a.id}>{a.shortName || a.name}</option>
              ))}
            </select>
          </div>
        </div>

        {isSame && (
          <div className="compare__warning">
            ⚠ You've selected the same artifact twice. Choose two different missions to compare.
          </div>
        )}

        {!isSame && (
          <>
            {/* Header cards */}
            <div className="compare__headers">
              {[left, right].map((a, i) => (
                <div key={i} className="compare__header-card">
                  <div className="compare__header-img">
                    <img src={a.image?.url} alt={a.image?.caption} />
                  </div>
                  <div className="compare__header-body">
                    <span className={`badge badge-${a.destination.toLowerCase()}`}>{a.destination}</span>
                    <h3>{a.name}</h3>
                    <div className="mono" style={{ color: 'var(--gold)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      {a.mission}
                    </div>
                    <Link to={`/artifact/${a.id}`} className="btn btn-ghost" style={{ marginTop: '1rem', fontSize: '0.78rem' }}>
                      Full Profile →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="compare__table">
              {COMPARE_FIELDS.map(({ key, label }) => {
                const lv = left[key];
                const rv = right[key];
                if (lv == null && rv == null) return null;
                return (
                  <div key={key} className="compare__row">
                    <div className="compare__row-label mono">{label}</div>
                    <div className="compare__row-left">
                      {formatValue(key, lv)}
                    </div>
                    <div className="compare__row-right">
                      {formatValue(key, rv)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Duration comparison if both have dates */}
            {left.landingDate && left.missionEndDate && right.landingDate && right.missionEndDate && (
              <div className="compare__duration">
                <div className="section-label">Mission Duration Comparison</div>
                {[left, right].map((a) => {
                  const days = Math.round(
                    (new Date(a.missionEndDate) - new Date(a.landingDate)) / 86400000
                  );
                  const pct = Math.min(100, days / 5500 * 100);
                  return (
                    <div key={a.id} className="duration-bar">
                      <div className="duration-bar__label">
                        <span>{a.shortName || a.name}</span>
                        <span className="mono" style={{ color: 'var(--gold)' }}>{days.toLocaleString()} days on surface</span>
                      </div>
                      <div className="duration-bar__track">
                        <div
                          className="duration-bar__fill"
                          style={{ width: `${pct}%`, background: a.destination === 'Moon' ? 'var(--silver-dim)' : '#e88060' }}
                        />
                      </div>
                    </div>
                  );
                })}
                <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Duration calculated from landingDate to missionEndDate in artifact records.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
