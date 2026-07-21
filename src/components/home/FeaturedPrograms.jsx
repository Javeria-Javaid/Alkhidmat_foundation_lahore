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
          {programs.map((program, index) => (
            <Link to={program.href} key={program.label} className="program-card">
              <div className="program-card__content">
                <span className="program-card__status" style={{ color: index === 0 ? '#0254a4' : 'var(--primary-blue)', borderColor: index === 0 ? '#0254a4' : 'var(--primary-blue)' }}>ACTIVE PROGRAM</span>
                <h3 className="program-card__title">{program.label}</h3>
                <p className="program-card__desc">{program.description}</p>
              </div>
              <div className="program-card__visual">
                <div className="program-card__image-wrapper" style={{ borderTopColor: index === 0 ? '#ffc107' : 'var(--primary-blue)' }}>
                   <img src={program.image} alt={program.label} className="program-card__img" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
