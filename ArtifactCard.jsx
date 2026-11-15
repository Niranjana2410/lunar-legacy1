import { Link } from 'react-router-dom';
import './ArtifactCard.css';

const STATUS_LABELS = {
  permanent:      'Remains on Surface',
  decommissioned: 'Decommissioned',
  active:         'Active',
};

export default function ArtifactCard({ artifact }) {
  const { id, name, shortName, mission, destination, status, statusType,
          category, tags, narrative, image, landingDate } = artifact;

  const year = landingDate ? new Date(landingDate).getFullYear() : '—';

  return (
    <Link to={`/artifact/${id}`} className="artifact-card card">
      <div className="artifact-card__image">
        <img
          src={image?.url}
          alt={image?.caption || name}
          loading="lazy"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div className="artifact-card__overlay" />
        <span className={`artifact-card__body badge badge-${destination.toLowerCase()}`}>
          {destination}
        </span>
      </div>

      <div className="artifact-card__body-content">
        <div className="artifact-card__meta">
          <span className="mono" style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>{mission}</span>
          <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{year}</span>
        </div>

        <h3 className="artifact-card__name">{shortName || name}</h3>
        <p className="artifact-card__narrative">{narrative?.slice(0, 110)}…</p>

        <div className="artifact-card__footer">
          <span className={`artifact-card__status`}>
            <span className={`status-dot ${statusType}`} />
            {STATUS_LABELS[statusType] || statusType}
          </span>
          <span className="artifact-card__category badge badge-grey">{category}</span>
        </div>
      </div>
    </Link>
  );
}
