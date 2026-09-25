import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Healthcare.css';
import ProgramHero from '../components/shared/ProgramHero';
import {
  healthcareHeroStats,
  healthcareServices,
  healthcareFaqs,
} from '../data/healthcareData';
import heroDoctorImg from '../assets/health_services_program.png';
import storyChildImg from '../assets/akfl-3.jpeg';


function Healthcare() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  
  return (
    <main className="hc-page">

      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Delivering Quality."
        titleHighlight="Healthcare with Compassion."
        description="Alkhidmat Foundation Pakistan is committed to providing accessible, high-quality, and compassionate healthcare services, diagnostic centers, and hospitals to millions across Pakistan."
        primaryCtaText="Support Healthcare"
        secondaryCtaText="Our Medical Services"
        primaryCtaHref="/ways-to-donate"
        secondaryCtaHref="#services-heading"
        heroImage={heroDoctorImg}
        widgetTitle="Support Medical Care"
        widgetSubtitle="Your donation sponsors medical expenses, hospital operations, free clinics, and medicine."
        supportOptions={[
          'Sponsor a Medical Camp',
          'Support Mother & Child Care',
          'Sponsor a Free Clinic',
          'General Healthcare Fund',
        ]}
        stats={healthcareHeroStats.map(s => ({ icon: null, value: s.value, label: s.label }))}
      />

      {/* ── 4. HEALTHCARE SERVICES ── */}
      <section className="hc-services section" aria-labelledby="services-heading">
        <div className="container">
          <div className="hc-section-header">
            <h2 id="services-heading">Healthcare Services</h2>
          </div>
          <div className="hc-services__grid">
            {healthcareServices.map((service) => (
              <div className="hc-services__card" key={service.id}>
                <div className="hc-services__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── 10. JOIN OUR MEDICAL MISSION CTA ── */}
      <section className="hc-mission-cta" aria-label="Join Medical Mission">
        <div className="container text-center">
          <h2>Join Our Medical Mission</h2>
          <p>Alkhidmat Foundation Pakistan is a humanitarian organization dedicated to providing healthcare services.</p>
          <Link to="/ways-to-donate" className="btn hc-mission-cta__btn">Support Medical Care</Link>
        </div>
      </section>

      {/* ── 12. FAQ ACCORDION ── */}
      <section className="hc-faq section" aria-labelledby="hc-faq-heading">
        <div className="container">
          <div className="hc-faq__list">
            {healthcareFaqs.map((faq, index) => (
              <div key={faq.q} className={`hc-faq__item ${openFaq === index ? 'hc-faq__item--open' : ''}`}>
                <button className="hc-faq__q" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span className="hc-faq__icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && <div className="hc-faq__a"><p>{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>
  );
}

export default Healthcare;

