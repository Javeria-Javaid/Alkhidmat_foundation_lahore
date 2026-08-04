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
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => {
            const cardContent = (
              <>
                <div className="program-card__header">
                  <div className="program-card__header-left">
                    <span className="program-card__tag">{program.tag}</span>
                  </div>
                  <div className="program-card__arrow-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="program-card__image-container">
                  <img src={program.image} alt={program.label} className="program-card__img" />
                  {program.badgeText && <span className="program-card__badge">{program.badgeText}</span>}
                </div>

                <div className="program-card__body">
                  <h3 className="program-card__title">{program.label}</h3>
                  <p className="program-card__desc">{program.description}</p>
                </div>

                <div className="program-card__footer">
                  <div className="program-card__stats">
                    <span className="program-card__stat-val">{program.statValue || '15K+'}</span>
                    <span className="program-card__stat-lbl">{program.statLabel || 'Beneficiaries'}</span>
                  </div>
                  <Link 
                    to="/#donate-section" 
                    className="program-card__donate-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const element = document.getElementById('donate-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Donate
                  </Link>
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
