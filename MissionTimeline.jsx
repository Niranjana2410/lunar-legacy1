import './MissionTimeline.css';

export default function MissionTimeline({ artifact }) {
  const { timeline = [], name } = artifact;

  if (!timeline.length) return null;

  return (
    <div className="mission-timeline">
      <div className="section-label">The Last Chapter</div>
      <h3 className="mission-timeline__heading">Mission Timeline</h3>
      <p className="mission-timeline__sub">
        Key events in {name}'s life — from launch to final rest.
      </p>
      <div className="mission-timeline__track">
        {timeline.map((event, i) => (
          <div key={i} className={`timeline-event${i === timeline.length - 1 ? ' timeline-event--last' : ''}`}>
            <div className="timeline-event__dot">
              {i === timeline.length - 1 ? '✦' : '◉'}
            </div>
            <div className="timeline-event__content">
              <div className="timeline-event__date mono">
                {event.date}
                {event.eventTime && (
                  <span style={{ color: 'var(--gold)', marginLeft: '0.5rem' }}>{event.eventTime}</span>
                )}
                {!event.verified && (
                  <span className="badge badge-grey" style={{ marginLeft: '0.5rem', fontSize: '0.6rem' }}>
                    UNVERIFIED
                  </span>
                )}
              </div>
              <div className="timeline-event__text">{event.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
