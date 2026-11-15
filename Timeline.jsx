import { useState } from 'react';
import { Link } from 'react-router-dom';
import artifacts from '../data/artifacts.json';
import './Timeline.css';

// Flatten all events with artifact reference, sort by date
const allEvents = artifacts
  .flatMap(a =>
    (a.timeline || []).map(ev => ({
      ...ev,
      artifactId:   a.id,
      artifactName: a.shortName || a.name,
      destination:  a.destination,
      mission:      a.mission,
    }))
  )
  .filter(ev => ev.date && !ev.date.includes('present'))
  .sort((a, b) => new Date(a.date) - new Date(b.date));

const DESTINATIONS = ['All', 'Moon', 'Mars'];

export default function Timeline() {
  const [filter, setFilter] = useState('All');

  const events = filter === 'All'
    ? allEvents
    : allEvents.filter(e => e.destination === filter);

  return (
    <div className="timeline-page page-enter">
      <div className="timeline-hero">
        <div className="container">
          <div className="section-label">The Last Chapter</div>
          <h1>Mission <span className="text-gold">Timeline</span></h1>
          <p className="timeline-sub">
            A unified chronology of every significant event across all archived missions —
            from first launches to final silences.
          </p>
          <div className="timeline-filters">
            {DESTINATIONS.map(d => (
              <button
                key={d}
                className={`archive__pill${filter === d ? ' archive__pill--active' : ''}`}
                onClick={() => setFilter(d)}
              >{d}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="timeline-track">
          {events.map((ev, i) => {
            const year = ev.date.slice(0, 4);
            const prevYear = i > 0 ? events[i - 1].date.slice(0, 4) : null;
            const showYear = year !== prevYear;
            return (
              <div key={i}>
                {showYear && (
                  <div className="timeline-year">
                    <span className="text-gold">{year}</span>
                  </div>
                )}
                <div className={`timeline-entry${!ev.verified ? ' timeline-entry--unverified' : ''}`}>
                  <div className="timeline-entry__dot" />
                  <div className="timeline-entry__card">
                    <div className="timeline-entry__header">
                      <Link to={`/artifact/${ev.artifactId}`} className="timeline-entry__artifact">
                        {ev.artifactName}
                      </Link>
                      <span className={`badge badge-${ev.destination.toLowerCase()}`}>
                        {ev.destination}
                      </span>
                      {!ev.verified && (
                        <span className="badge badge-grey" style={{ fontSize: '0.6rem' }}>UNVERIFIED</span>
                      )}
                    </div>
                    <div className="timeline-entry__date mono">
                      {ev.date}
                      {ev.eventTime && <span style={{ color: 'var(--gold)', marginLeft: '0.5rem' }}>{ev.eventTime}</span>}
                    </div>
                    <p className="timeline-entry__text">{ev.event}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
