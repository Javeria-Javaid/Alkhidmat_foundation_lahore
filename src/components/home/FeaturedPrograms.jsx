import React from 'react';
import './FeaturedPrograms.css';

const programs = [
  {
    id: 1,
    title: 'Disaster Management',
    desc: 'Rapid response and relief during emergencies and natural disasters.',
    status: 'ACTIVE PROGRAM',
    color: '#f97316' // orange
  },
  {
    id: 2,
    title: 'Health Services',
    desc: 'Accessible healthcare services and medical support for communities in need.',
    status: 'ACTIVE PROGRAM',
    color: '#3b82f6' // blue
  },
  {
    id: 3,
    title: 'Education Program',
    desc: 'Quality education and scholarships for a brighter and independent future.',
    status: 'ACTIVE PROGRAM',
    color: '#22c55e' // green
  },
  {
    id: 4,
    title: 'WASH Program',
    desc: 'Clean water, sanitation and hygiene initiatives for healthier communities.',
    status: 'ACTIVE PROGRAM',
    color: '#06b6d4' // cyan
  },
  {
    id: 5,
    title: 'Orphan Care Program',
    desc: 'Providing care, protection and a loving home for orphans.',
    status: 'ACTIVE PROGRAM',
    color: '#a855f7' // purple
  },
  {
    id: 6,
    title: 'Bano Qabil Program',
    desc: 'Skill development and vocational training for youth empowerment and self-reliance.',
    status: 'ACTIVE PROGRAM',
    color: '#eab308' // yellow
  },
  {
    id: 7,
    title: 'Islamic Microfinance',
    desc: 'Interest-free loans and financial support to uplift families and small businesses.',
    status: 'ACTIVE PROGRAM',
    color: '#3b82f6' // blue
  },
  {
    id: 8,
    title: 'Community Services',
    desc: 'Community welfare initiatives that bring hope and improve lives locally.',
    status: 'ACTIVE PROGRAM',
    color: '#ec4899' // pink
  }
];

function FeaturedPrograms() {
  return (
    <section className="featured-programs section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Specialized Programs</h2>
          <p className="section-subtitle mx-auto">
            Targeted, life-changing initiatives engineered for lasting socio-economic development across all provinces.
          </p>
          <div className="heart-divider">
            <div className="heart-line"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-blue)" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <div className="heart-line"></div>
          </div>
        </div>

        <div className="programs-grid">
          {programs.map(program => (
            <div key={program.id} className="program-card">
              <div className="program-card__content">
                <span className="program-card__status" style={{ color: program.color, borderColor: program.color }}>
                  {program.status}
                </span>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__desc">{program.desc}</p>
              </div>
              <div className="program-card__visual">
                <div className="program-card__image-wrapper" style={{ borderTopColor: program.color }}>
                   <div className="program-card__image-placeholder" style={{ backgroundColor: `${program.color}20` }}>
                      {/* Image placeholder */}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
