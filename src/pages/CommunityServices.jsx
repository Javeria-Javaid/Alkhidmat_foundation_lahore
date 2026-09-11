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
        primaryCtaHref="#donate-section"
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
            <p className="cs-about__tag">ABOUT COMMUNITY SERVICES</p>
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
            <p className="cs-programs__tag">OUR PROGRAMS</p>
            <h2 id="programs-heading">Our Community Services</h2>
          </div>
          <div className="cs-programs__grid">
            {communityServicesList.map((service) => (
              <div className="cs-programs__card" key={service.id}>
                <div className="cs-programs__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
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
