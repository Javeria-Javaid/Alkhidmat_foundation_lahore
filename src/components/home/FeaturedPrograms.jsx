import React from 'react';
import './FeaturedPrograms.css';
import { Link } from 'react-router-dom';
import { programs } from '../../data/programs';

function FeaturedPrograms() {
  return (
    <section className="featured-programs section" id="programs-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Specialized Programs</h2>
          <p className="section-subtitle mx-auto">
            Targeted, life-changing initiatives engineered for lasting socio-economic development across all provinces.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => {
            const cardContent = (
              <>
                <div className="program-card__content">
                  <span
                    className="program-card__status"
                    style={{
                      color: program.isExternal ? '#d97706' : (index === 0 ? '#0254a4' : 'var(--primary-blue)'),
                      borderColor: program.isExternal ? '#f59e0b' : (index === 0 ? '#0254a4' : 'var(--primary-blue)'),
                    }}
                  >
                    {program.isExternal ? 'OFFICIAL WEBSITE ↗' : 'ACTIVE PROGRAM'}
                  </span>
                  <h3 className="program-card__title">
                    {program.label}
                    {program.isExternal && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </h3>
                  <p className="program-card__desc">{program.description}</p>
                </div>
                <div className="program-card__visual">
                  <div className="program-card__image-wrapper" style={{ borderTopColor: index === 0 ? '#ffc107' : 'var(--primary-blue)' }}>
                    <img src={program.image} alt={program.label} className="program-card__img" />
                  </div>
                </div>
              </>
            );

            if (program.isExternal) {
              return (
                <a
                  href={program.href}
                  key={program.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="program-card"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link to={program.href} key={program.label} className="program-card">
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
