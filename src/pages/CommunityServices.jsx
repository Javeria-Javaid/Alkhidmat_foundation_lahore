import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunityServices.css';
import ProgramHero from '../components/shared/ProgramHero';
import {
  communityHeroStats,
  communityServicesList,
  communityFaqs,
} from '../data/communityServicesData';
import heroImg from '../assets/community_services_program.png';

function CommunityServices() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="cs-page">

      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Empowering Communities."
        titleHighlight="Rebuilding Lives."
        description="Building stronger communities through humanitarian support, healthcare, education and social welfare programs that improve lives across Pakistan."
        primaryCtaText="Donate for Community Services"
        primaryCtaHref="/ways-to-donate"
        secondaryCtaText="Our Programs"
        secondaryCtaHref="#programs-heading"
        heroImage={heroImg}
        widgetTitle="Support Community Welfare"
        widgetSubtitle="Your donation supports winter relief packages, masjid construction, wedding support boxes, and wheelchairs."
        supportOptions={[
          'Winter Blanket Package',
          'Shadi wedding box',
          'Wheelchair Donation',
          'Masjid Construction Fund',
        ]}
        stats={communityHeroStats.map(s => ({ icon: s.icon, value: s.value, label: s.label }))}
      />

      {/* ── 3. ABOUT SECTION ── */}
      <section className="cs-about section" aria-labelledby="about-heading">
        <div className="container cs-about__inner">
          <div className="cs-about__visual">
            <div className="cs-about__img-wrap">
              <img src={heroImg} alt="Alkhidmat workers in community" />
            </div>
          </div>
          <div className="cs-about__content">
            <h2 id="about-heading">Building Better Communities</h2>
            <p>
              Pakistan faces numerous social challenges, including poverty, limited access to healthcare, education, and essential community services.
            </p>
            <p>
              Alkhidmat Community Services works to improve lives through sustainable welfare programs, empowering vulnerable families and promoting long-term community development.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. COMMUNITY PROGRAMS / SERVICES ── */}
      <section className="cs-programs section" aria-labelledby="programs-heading">
        <div className="container">
          <div className="cs-section-header text-center">
            <h2 id="programs-heading">Our Community Services</h2>
            <p className="cs-programs__subtitle">
              Supporting families and communities across Lahore through welfare assistance, seasonal relief and initiatives that help people live with dignity.
            </p>
          </div>

          <div className="cs-editorial-grid">
            {/* 1. FEATURED CARD: Community Welfare (Spans 2 cols on Desktop) */}
            {(() => {
              const featured = communityServicesList.find(s => s.featured) || communityServicesList[0];
              if (!featured) return null;
              return (
                <article className="cs-editorial-card cs-editorial-card--featured" key={featured.id}>
                  <div className="cs-editorial-card__img-wrap">
                    <img 
                      src={featured.image} 
                      alt={featured.imageAlt} 
                      className="cs-editorial-card__img"
                      style={{ objectPosition: featured.imgPos }}
                      loading="lazy"
                    />
                    <div className="cs-editorial-card__img-overlay" />
                    <span className="cs-editorial-card__featured-badge">Featured Initiative</span>
                  </div>
                  <div className="cs-editorial-card__body">
                    <div className="cs-editorial-card__header">
                      <span className="cs-editorial-card__tagline">{featured.tagline}</span>
                      <h3 className="cs-editorial-card__title">{featured.title}</h3>
                    </div>
                    <p className="cs-editorial-card__desc">{featured.description}</p>
                    <div className="cs-editorial-card__footer">
                      <Link to={featured.route} className="cs-editorial-card__link">
                        <span>{featured.ctaText}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* 2. SUPPORTING CARDS: Community Iftar */}
            {(() => {
              const iftar = communityServicesList.find(s => s.id === 2);
              if (!iftar) return null;
              return (
                <article className="cs-editorial-card cs-editorial-card--supporting" key={iftar.id}>
                  <div className="cs-editorial-card__img-wrap">
                    <img 
                      src={iftar.image} 
                      alt={iftar.imageAlt} 
                      className="cs-editorial-card__img"
                      style={{ objectPosition: iftar.imgPos }}
                      loading="lazy"
                    />
                    <div className="cs-editorial-card__img-overlay" />
                  </div>
                  <div className="cs-editorial-card__body">
                    <div className="cs-editorial-card__header">
                      <span className="cs-editorial-card__tagline">{iftar.tagline}</span>
                      <h3 className="cs-editorial-card__title">{iftar.title}</h3>
                    </div>
                    <p className="cs-editorial-card__desc">{iftar.description}</p>
                    <div className="cs-editorial-card__footer">
                      <Link to={iftar.route} className="cs-editorial-card__link">
                        <span>{iftar.ctaText}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* 3, 4, 5. SUPPORTING CARDS: Winter Packages, Shadi Box, Wheelchair Support */}
            {communityServicesList.filter(s => [3, 4, 5].includes(s.id)).map(service => (
              <article className="cs-editorial-card cs-editorial-card--supporting" key={service.id}>
                <div className="cs-editorial-card__img-wrap">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="cs-editorial-card__img"
                    style={{ objectPosition: service.imgPos }}
                    loading="lazy"
                  />
                  <div className="cs-editorial-card__img-overlay" />
                </div>
                <div className="cs-editorial-card__body">
                  <div className="cs-editorial-card__header">
                    <span className="cs-editorial-card__tagline">{service.tagline}</span>
                    <h3 className="cs-editorial-card__title">{service.title}</h3>
                  </div>
                  <p className="cs-editorial-card__desc">{service.description}</p>
                  <div className="cs-editorial-card__footer">
                    <Link to={service.route} className="cs-editorial-card__link">
                      <span>{service.ctaText}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* 6. SUPPORTING CARD: Masjid Construction */}
            {(() => {
              const masjid = communityServicesList.find(s => s.id === 6);
              if (!masjid) return null;
              return (
                <article className="cs-editorial-card cs-editorial-card--supporting cs-editorial-card--masjid" key={masjid.id}>
                  <div className="cs-editorial-card__img-wrap">
                    <img 
                      src={masjid.image} 
                      alt={masjid.imageAlt} 
                      className="cs-editorial-card__img"
                      style={{ objectPosition: masjid.imgPos }}
                      loading="lazy"
                    />
                    <div className="cs-editorial-card__img-overlay" />
                  </div>
                  <div className="cs-editorial-card__body">
                    <div className="cs-editorial-card__header">
                      <span className="cs-editorial-card__tagline">{masjid.tagline}</span>
                      <h3 className="cs-editorial-card__title">{masjid.title}</h3>
                    </div>
                    <p className="cs-editorial-card__desc">{masjid.description}</p>
                    <div className="cs-editorial-card__footer">
                      <Link to={masjid.route} className="cs-editorial-card__link">
                        <span>{masjid.ctaText}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* 7. HIGH-IMPACT SECTION DONATION BANNER (Spans 2 cols on Desktop) */}
            <aside className="cs-editorial-banner" aria-label="Support Community Services Appeal">
              <div className="cs-editorial-banner__content">
                <span className="cs-editorial-banner__tag">COMMUNITY SUPPORT APPEAL</span>
                <h3 className="cs-editorial-banner__title">
                  Help Uplift Lahore's Vulnerable Families
                </h3>
                <p className="cs-editorial-banner__desc">
                  Your general donations, Sadaqah, and Zakat provide direct sustenance, winter protection, marriage assistance, and wheelchairs to those who need it most.
                </p>
                <div className="cs-editorial-banner__action">
                  <Link to="/ways-to-donate" className="cs-editorial-banner__btn">
                    <span>Donate to Community Services</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ── */}
      <section className="cs-faq section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="cs-section-header text-center">
            <h2 id="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="cs-faq__grid">
            {communityFaqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`cs-faq__item ${openFaq === index ? 'cs-faq__item--open' : ''}`}
              >
                <button className="cs-faq__question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <svg
                    className="cs-faq__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="cs-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}

export default CommunityServices;
