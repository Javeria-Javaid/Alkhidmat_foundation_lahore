import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterManagement.css';
import { disasterHeroStats, disasterFloatingStats, missionCards, disasterServices } from '../data/disasterData';
import heroImg from '../assets/disaster_management.png';
import img1 from '../assets/akfl-1.jpeg';
import img2 from '../assets/akfl-2.jpeg';
import img3 from '../assets/akfl-3.jpeg';
import img4 from '../assets/akfl-1-new.png';
import img5 from '../assets/akfl-2-new.png';

const galleryImages = [
  { src: img1, alt: 'Disaster relief workers helping flood victims' },
  { src: img2, alt: 'Volunteers distributing food packages' },
  { src: img3, alt: 'Medical camp for displaced families' },
  { src: img4, alt: 'Shelter construction after earthquake' },
  { src: img5, alt: 'Alkhidmat team on ground during emergency' },
];

const missionImages = [img1, img2, img3];

function DisasterManagement() {
  return (
    <main className="dm-page">

      {/* ── 1. HERO ── */}
      <section className="dm-hero" aria-label="Disaster Management Program Hero">
        <div className="dm-hero__bg">
          <img src={heroImg} alt="Disaster relief operations" />
          <div className="dm-hero__overlay" />
        </div>
        <div className="container dm-hero__inner">
          <div className="dm-hero__left">
            <nav className="dm-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="#">Our Programs</Link>
              <span>›</span>
              <span>Disaster Management</span>
            </nav>
            <p className="dm-hero__badge">
              <span className="dm-hero__dot" aria-hidden="true" />
              ALKHIDMAT DISASTER MANAGEMENT
            </p>
            <h1 className="dm-hero__title">
              Respond. Relieve.<br />
              <span className="dm-hero__title--blue">Restore Lives.</span>
            </h1>
            <p className="dm-hero__desc">
              From the first moment of crisis to long-term recovery, Alkhidmat is on the ground—delivering emergency aid, shelter, medical care, and hope to communities when they need it most.
            </p>
            <div className="dm-hero__stats">
              {disasterHeroStats.map((stat) => (
                <div className="dm-hero__stat" key={stat.label}>
                  <div className="dm-hero__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="24" height="24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Donation Card */}
          <div className="dm-hero__card" role="complementary" aria-label="Donation prompt">
            <div className="dm-hero__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" width="32" height="32">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Be the First<br />to Make a Difference</h3>
            <p>Your support helps us respond faster and save more lives.</p>
            <a href="#donate" className="dm-hero__card-btn">
              Donate for Relief
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <p className="dm-hero__card-policy">
              <svg viewBox="0 0 24 24" fill="#16a34a" width="14" height="14">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              100% Donation Policy
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FLOATING STATS BAR ── */}
      <section className="dm-stats" aria-label="Impact statistics">
        <div className="container">
          <div className="dm-stats__card">
            {disasterFloatingStats.map((stat) => (
              <div className="dm-stats__item" key={stat.label}>
                <div className="dm-stats__icon">{stat.icon}</div>
                <div>
                  <strong className="dm-stats__value">{stat.value}</strong>
                  <span className="dm-stats__label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="dm-mission__cards">
            {missionCards.map((card, i) => (
              <div className="dm-mission__card" key={card.id}>
                <div className="dm-mission__card-img">
                  <img src={missionImages[i]} alt={card.title} />
                </div>
                <div className="dm-mission__card-body">
                  <p className="dm-mission__card-title">
                    {card.title}
                    <span className="dm-mission__card-dot" style={{ background: card.dot }} aria-hidden="true" />
                  </p>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
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
                <button className="dm-services__card-arrow" aria-label={`Learn more about ${service.title}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY STRIP ── */}
      <section className="dm-gallery section" aria-labelledby="gallery-heading">
        <div className="container dm-gallery__inner">
          <div className="dm-gallery__left">
            <p className="dm-gallery__tag">OUR GROUND IMPACT</p>
            <h2 id="gallery-heading">Snapshots of Hope</h2>
            <p>Every image tells a story of courage, compassion, and change. See how your support creates real impact on the ground.</p>
            <a href="#gallery-full" className="dm-gallery__link">
              View Full Gallery
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
          <div className="dm-gallery__strip" role="list" aria-label="Gallery of disaster relief images">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div className="dm-gallery__img-wrap" key={i} role="listitem">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
            <button className="dm-gallery__arrow" aria-label="View next gallery images">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <section className="dm-cta" aria-label="Call to action">
        <div className="container dm-cta__inner">
          <div className="dm-cta__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
          </div>
          <div className="dm-cta__text">
            <h2>Together, We Can Save More Lives</h2>
            <p>Your generosity helps us reach more families and rebuild more communities.</p>
          </div>
          <div className="dm-cta__actions">
            <a href="#donate" className="dm-cta__btn-primary">
              Donate Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#sponsor" className="dm-cta__btn-outline">
              Sponsor a Relief Pack
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default DisasterManagement;
