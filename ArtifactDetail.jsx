import { useParams, Link } from 'react-router-dom';
import artifacts from '../data/artifacts.json';
import EvidenceRoom from '../components/EvidenceRoom';
import MissionTimeline from '../components/MissionTimeline';
import './ArtifactDetail.css';

const STATUS_LABELS = {
  permanent:      'Remains on Surface',
  decommissioned: 'Decommissioned',
  active:         'Active',
};

function InfoRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="info-row">
      <span className="info-row__label mono">{label}</span>
      <span className="info-row__value">{value}</span>
    </div>
  );
}

export default function ArtifactDetail() {
  const { id } = useParams();
  const artifact = artifacts.find(a => a.id === id);

  if (!artifact) {
    return (
      <div className="artifact-notfound container">
        <h2>Artifact not found</h2>
        <p>The record for <code>{id}</code> does not exist in the archive.</p>
        <Link to="/archive" className="btn btn-outline">← Back to Archive</Link>
      </div>
    );
  }

  const {
    name, shortName, mission, destination, type, agency,
    manufacturer, launchDate, landingDate, missionEndDate,
    mass_kg, dimensions, purpose, crew, status, statusType,
    lastKnownActivity, scientificContribution, whatHappenedToIt,
    nasaSourceUrl, nssdcId, image, narrative, coordinates, category,
  } = artifact;

  return (
    <div className="artifact-detail page-enter">
      {/* Hero */}
      <div className="artifact-detail__hero">
        <div className="artifact-detail__hero-bg">
          {image?.url && (
            <img src={image.url} alt={image.caption} className="artifact-detail__hero-img" />
          )}
          <div className="artifact-detail__hero-overlay" />
        </div>
        <div className="artifact-detail__hero-content container">
          <Link to="/archive" className="artifact-detail__back">← Archive</Link>
          <span className={`badge badge-${destination.toLowerCase()}`}>{destination}</span>
          <span className="badge badge-grey" style={{ marginLeft: '0.5rem' }}>{category}</span>
          <h1 className="artifact-detail__title">{name}</h1>
          <p className="artifact-detail__mission mono">{mission} · {agency}</p>
          <div className={`artifact-detail__status-badge badge badge-${statusType === 'permanent' ? 'grey' : 'gold'}`}>
            <span className={`status-dot ${statusType}`} />
            {STATUS_LABELS[statusType] || statusType}
          </div>
        </div>
      </div>

      <div className="container artifact-detail__body">
        <div className="artifact-detail__layout">
          {/* Main column */}
          <main className="artifact-detail__main">
            {/* Narrative */}
            <section className="artifact-section">
              <div className="section-label">The Story</div>
              <p className="artifact-narrative">{narrative}</p>
            </section>

            <div className="divider" />

            {/* Purpose */}
            <section className="artifact-section">
              <div className="section-label">Original Purpose</div>
              <p className="artifact-detail__body-text">{purpose}</p>
            </section>

            {/* Scientific Contribution */}
            <section className="artifact-section">
              <div className="section-label">Scientific Contribution</div>
              <p className="artifact-detail__body-text">{scientificContribution}</p>
            </section>

            {/* What Happened */}
            <section className="artifact-section">
              <div className="section-label">What Happened to It</div>
              <p className="artifact-detail__body-text">{whatHappenedToIt}</p>
            </section>

            {/* Last Known Activity */}
            <section className="artifact-section artifact-section--highlight">
              <div className="section-label">Last Known Activity</div>
              <p className="artifact-detail__body-text">{lastKnownActivity}</p>
            </section>

            {/* Timeline */}
            <MissionTimeline artifact={artifact} />

            {/* Evidence Room */}
            <EvidenceRoom artifact={artifact} />
          </main>

          {/* Sidebar */}
          <aside className="artifact-detail__sidebar">
            <div className="sidebar-card">
              <div className="sidebar-card__title mono">Mission Data</div>
              <div className="sidebar-card__rows">
                <InfoRow label="Type"         value={type} />
                <InfoRow label="Mission"      value={mission} />
                <InfoRow label="Agency"       value={agency} />
                <InfoRow label="Manufacturer" value={manufacturer} />
                <InfoRow label="Destination"  value={destination} />
                <InfoRow label="Launched"     value={launchDate} />
                <InfoRow label="Landed"       value={landingDate} />
                <InfoRow label="Mission End"  value={missionEndDate} />
                <InfoRow label="Mass"         value={typeof mass_kg === 'number' ? `${mass_kg} kg` : (mass_kg && !mass_kg.startsWith('unknown') ? mass_kg : 'Unknown')} />
                <InfoRow label="Dimensions"   value={dimensions} />
                {crew && <InfoRow label="Crew" value={crew.join(', ')} />}
              </div>
            </div>

            {coordinates && (
              <div className="sidebar-card">
                <div className="sidebar-card__title mono">Location</div>
                <div className="sidebar-card__rows">
                  <InfoRow label="Site"   value={coordinates.label} />
                  {coordinates.lat !== undefined && (
                    <InfoRow label="Coords"
                      value={`${coordinates.lat}°, ${coordinates.lon}°`}
                    />
                  )}
                </div>
                <div className="sidebar-card__source mono">
                  Source: {coordinates.source}
                </div>
                <Link to="/atlas" className="btn btn-outline" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                  View on Atlas →
                </Link>
              </div>
            )}

            <div className="sidebar-card">
              <div className="sidebar-card__title mono">NASA Sources</div>
              <a href={nasaSourceUrl} target="_blank" rel="noopener noreferrer" className="sidebar-source-link">
                Primary NASA Source ↗
              </a>
              {nssdcId && (
                <a
                  href={`https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=${nssdcId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-source-link"
                >
                  NSSDCA ID: {nssdcId} ↗
                </a>
              )}
            </div>

            <Link to="/compare" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
              ⚖ Compare This Mission
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
