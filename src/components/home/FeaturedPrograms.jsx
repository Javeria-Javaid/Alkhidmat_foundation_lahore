import React from 'react';
import './FeaturedPrograms.css';

import disasterImg from '../../assets/disaster_management_program.png';
import healthImg from '../../assets/health_services_program.png';
import educationImg from '../../assets/education_program.png';
import washImg from '../../assets/wash_program.png';
import orphanImg from '../../assets/Orphan_Care_program.png';
import banoqabilImg from '../../assets/banoqabil_program.jpeg';
import microfinanceImg from '../../assets/islamic_microfinance_program.png';
import communityImg from '../../assets/community_services_program.png';

const programs = [
  {
    id: 1,
    title: 'Disaster Management',
    desc: 'Rapid response and relief during emergencies and natural disasters.',
    status: 'ACTIVE PROGRAM',
    color: '#f97316', // orange
    image: disasterImg
  },
  {
    id: 2,
    title: 'Health Services',
    desc: 'Accessible healthcare services and medical support for communities in need.',
    status: 'ACTIVE PROGRAM',
    color: '#3b82f6', // blue
    image: healthImg
  },
  {
    id: 3,
    title: 'Education Program',
    desc: 'Quality education and scholarships for a brighter and independent future.',
    status: 'ACTIVE PROGRAM',
    color: '#22c55e', // green
    image: educationImg
  },
  {
    id: 4,
    title: 'WASH Program',
    desc: 'Clean water, sanitation and hygiene initiatives for healthier communities.',
    status: 'ACTIVE PROGRAM',
    color: '#06b6d4', // cyan
    image: washImg
  },
  {
    id: 5,
    title: 'Orphan Care Program',
    desc: 'Providing care, protection and a loving home for orphans.',
    status: 'ACTIVE PROGRAM',
    color: '#a855f7', // purple
    image: orphanImg
  },
  {
    id: 6,
    title: 'Bano Qabil Program',
    desc: 'Skill development and vocational training for youth empowerment and self-reliance.',
    status: 'ACTIVE PROGRAM',
    color: '#eab308', // yellow
    image: banoqabilImg
  },
  {
    id: 7,
    title: 'Islamic Microfinance',
    desc: 'Interest-free loans and financial support to uplift families and small businesses.',
    status: 'ACTIVE PROGRAM',
    color: '#3b82f6', // blue
    image: microfinanceImg
  },
  {
    id: 8,
    title: 'Community Services',
    desc: 'Community welfare initiatives that bring hope and improve lives locally.',
    status: 'ACTIVE PROGRAM',
    color: '#ec4899', // pink
    image: communityImg
  }
];

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
                   <img src={program.image} alt={program.title} className="program-card__img" />
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
