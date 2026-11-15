import './EvidenceRoom.css';

export default function EvidenceRoom({ artifact }) {
  const {
    verifiedFacts = [],
    unknownFacts = [],
    nasaSourceUrl,
    nssdcId,
    additionalSources = [],
    evidenceLevel,
    coordinates,
    image,
  } = artifact;

  const evidenceColors = { high: '#60d090', medium: '#c9a84c', low: '#e06060' };
  const evidenceColor  = evidenceColors[evidenceLevel] || evidenceColors.medium;

  return (
    <section className="evidence-room">
      <div className="evidence-room__header">
        <div className="section-label">Evidence Room</div>
        <h2>What We Know — And What We Don't</h2>
        <p className="evidence-room__intro">
          Every claim in this profile is grounded in a verifiable NASA source.
          Facts marked <span style={{ color: '#60d090' }}>✓</span> are directly supported by official records.
          Items marked <span style={{ color: 'var(--gold)' }}>?</span> are genuinely unknown or unverified.
        </p>
        <div className="evidence-room__level">
          <span className="mono" style={{ color: 'var(--text-muted)' }}>Evidence Level</span>
          <span className="badge" style={{ background: `${evidenceColor}20`, color: evidenceColor }}>
            {evidenceLevel?.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="evidence-room__grid">
        {/* Verified Facts */}
        <div className="evidence-panel">
          <div className="evidence-panel__title">
            <span style={{ color: '#60d090' }}>✓</span> Verified Facts
          </div>
          <div className="evidence-panel__content">
            {verifiedFacts.map((fact, i) => (
              <div className="fact-verified" key={i}>
                <span className="icon">✓</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Unknown */}
        <div className="evidence-panel">
          <div className="evidence-panel__title">
            <span style={{ color: 'var(--gold)' }}>?</span> What Remains Unknown
          </div>
          <div className="evidence-panel__content">
            {unknownFacts.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                No significant unknowns documented for this artifact.
              </p>
            ) : unknownFacts.map((fact, i) => (
              <div className="fact-unknown" key={i}>
                <span className="icon">?</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="evidence-sources">
        <div className="evidence-sources__title mono">NASA Primary Sources</div>
        <div className="evidence-sources__list">
          <a href={nasaSourceUrl} target="_blank" rel="noopener noreferrer" className="evidence-source-link">
            <span className="evidence-source-link__badge">PRIMARY</span>
            <span>{nasaSourceUrl}</span>
            <span className="evidence-source-link__arrow">↗</span>
          </a>
          {nssdcId && (
            <a
              href={`https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=${nssdcId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="evidence-source-link"
            >
              <span className="evidence-source-link__badge">NSSDCA</span>
              <span>NSSDCA ID: {nssdcId}</span>
              <span className="evidence-source-link__arrow">↗</span>
            </a>
          )}
          {additionalSources.map((url, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="evidence-source-link">
              <span className="evidence-source-link__badge">SOURCE</span>
              <span className="evidence-source-link__url">{url}</span>
              <span className="evidence-source-link__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Coordinates */}
      {coordinates && (
        <div className="evidence-coords">
          <div className="evidence-coords__label mono">Documented Location</div>
          <div className="evidence-coords__value">
            <span>{coordinates.label}</span>
            {coordinates.lat !== undefined && (
              <span className="mono" style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>
                {coordinates.lat}°, {coordinates.lon}°
              </span>
            )}
            <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              Source: {coordinates.source}
            </span>
          </div>
        </div>
      )}

      {/* Image Attribution */}
      {image && (
        <div className="evidence-attribution">
          <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            Image: {image.caption} — Credit: {image.credit} — {image.license}
          </span>
        </div>
      )}

      {/* Disclaimer */}
      <div className="evidence-disclaimer">
        <span>⚠</span>
        <span>
          This profile does not claim live API integration. All data is sourced from NASA public records
          and NSSDCA archives. No telemetry, exact final positions, or unverified events are presented
          as fact. Where information is uncertain, it is labelled as unknown.
        </span>
      </div>
    </section>
  );
}
