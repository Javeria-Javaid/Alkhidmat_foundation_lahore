import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterManagement.css';
import ProgramHero from '../components/shared/ProgramHero';
import { disasterHeroStats, disasterFloatingStats, disasterServices } from '../data/disasterData';
import heroImg from '../assets/disaster_management_program.png';

function DisasterManagement() {
  return (
    <main className="dm-page">

      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Respond. Relieve."
        titleHighlight="Restore Lives."
        description="From the first moment of crisis to long-term recovery, Alkhidmat is on the ground—delivering emergency aid, shelter, medical care, and hope to communities when they need it most."
        primaryCtaText="Donate for Relief"
        secondaryCtaText="Our Mission"
        primaryCtaHref="/ways-to-donate"
        secondaryCtaHref="#mission-heading"
        heroImage={heroImg}
        widgetTitle="Disaster Relief Support"
        widgetSubtitle="Your support helps us respond faster and save more lives during emergencies."
        supportOptions={[
          'Emergency Food Package',
          'Shelter & Tents',
          'Medical Relief Camp',
          'General Disaster Relief Fund',
        ]}
        stats={disasterFloatingStats.map(s => ({ icon: s.icon, value: s.value, label: s.label }))}
      />

      {/* ── 3. MISSION SECTION ── */}
      <section className="dm-mission section" aria-labelledby="mission-heading">
        <div className="container dm-mission__inner">
          <div className="dm-mission__content">
            <p className="dm-mission__tag">ABOUT OUR MISSION</p>
            <h2 id="mission-heading">
              Standing with Communities<br />in Their Toughest Times
            </h2>
            <p>
              Natural disasters can strike without warning—but our commitment never wavers. Alkhidmat Disaster Management Program works across Pakistan to provide timely relief and comprehensive support to affected families. We not only respond to emergencies but also help communities rebuild stronger and more resilient.
            </p>
            <ul className="dm-mission__checks" aria-label="Key capabilities">
              {[
                'Rapid response & emergency relief',
                'Coordination with local & national partners',
                'Rehabilitation & long-term recovery support',
              ].map((item) => (
                <li key={item}>
                  <span className="dm-mission__check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="#16a34a" width="16" height="16">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#services" className="dm-mission__btn btn">
              Learn More About Our Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="dm-mission__visual" style={{ textAlign: 'center' }}>
            <img 
              src={heroImg} 
              alt="Disaster Management Program" 
              style={{ width: '75%', height: 'auto', borderRadius: '20px', objectFit: 'cover', display: 'inline-block', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES GRID ── */}
      <section id="services" className="dm-services section" aria-labelledby="services-heading">
        <div className="container">
          <div className="dm-services__header text-center">
            <p className="dm-services__tag">● WHAT WE DO</p>
            <h2 id="services-heading">Our Disaster Management Services</h2>
          </div>
          <div className="dm-services__grid">
            {disasterServices.map((service) => (
              <div className="dm-services__card" key={service.id}>
                <div className="dm-services__card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}

export default DisasterManagement;
