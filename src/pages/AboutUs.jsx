import { Link } from 'react-router-dom';
import React from 'react';
import './AboutUs.css';

import img1 from '../assets/akfl-1-new.png';
import img2 from '../assets/wash_img.png';

function AboutUs() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <h1 className="about-hero__title">Empowering Communities, Restoring Dignity.</h1>
            <p className="about-hero__desc">
              For over three decades, Alkhidmat Foundation Pakistan has been working relentlessly to uplift lives and build stronger, more resilient communities across Pakistan.
            </p>
            <div className="about-hero__actions">
              <a href="#mission-vision" className="btn btn-primary">Our Mission & Vision &rarr;</a>
              <Link to="/contact" className="btn btn-outline btn-outline--white">Support Our Mission</Link>
            </div>
          </div>
          <div className="about-hero__single-image" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="single-img" style={{ backgroundImage: `url(${img1})`, height: '500px', width: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="mission-vision" className="vm-section">
        <div className="container vm-container">
          <div className="vm-header">
            <h2 className="vm-title">Our Mission & Vision</h2>
            <p className="vm-subtitle">
              Guided by compassion, dignity, and service, our mission and vision reflect our commitment to empowering communities and building a more self-reliant society.
            </p>
          </div>

          <div className="vm-composition">
            {/* Left Card: Vision */}
            <div className="vm-box vm-box--vision">
              <div className="vm-box__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3.5"></circle>
                </svg>
              </div>
              <h3 className="vm-box__title">Vision</h3>
              <p className="vm-box__text">
                To foster a self-reliant and compassionate society where everyone has the opportunity to live with dignity and hope.
              </p>
            </div>

            {/* Center Beneficiary Image with subtle brand backing */}
            <div className="vm-center">
              <div className="vm-center__backdrop" />
              <img 
                src={img2} 
                alt="Alkhidmat beneficiary child drinking clean water" 
                className="vm-center__img" 
                loading="lazy" 
              />
            </div>

            {/* Right Card: Mission */}
            <div className="vm-box vm-box--mission">
              <div className="vm-box__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="vm-box__title">Mission</h3>
              <p className="vm-box__text">
                To serve humanity unconditionally through sustainable and impactful programs in education, healthcare, and social welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Executive Statement */}
      <section className="about-president-section container">
        <div className="president-card">
          <div className="president-card__badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>President's Message</span>
          </div>
          <div className="president-card__body">
            <svg className="president-card__quote-icon" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="president-card__quote">
              "The year 2025 was another impactful year for Alkhidmat Foundation Pakistan. Guided by compassion, we served millions through health, education, orphan care, WASH, microfinance, and the Bano Qabil program. Flood-affected families received emergency relief and rehabilitation, while climate initiatives included large-scale tree plantations. The nationwide expansion of Bano Qabil further empowered youth with skills for dignified livelihoods. Globally, Alkhidmat Foundation delivered relief aid worth over Rs 9 billion in Gaza and launched a Rs 15 billion ’Rebuild Gaza’ campaign, also supporting affected and oppressed communities in Sudan, Bangladesh, and Sri Lanka."
            </blockquote>
            <div className="president-card__author">
              <div className="president-card__author-info">
                <div className="president-card__avatar-badge" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <strong className="president-card__name">Prof. Dr. Hafeez ur Rahman</strong>
                  <span className="president-card__role">President, Alkhidmat Foundation Pakistan</span>
                </div>
              </div>
              <a 
                href="https://alkhidmat.org/about-us/introduction/president-message" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="president-card__link"
              >
                <span>Read Official Message</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Guiding Principles */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="about-section-badge">ETHICAL FOUNDATION</span>
            <h2 className="about-section-title">Our Core Guiding Principles</h2>
            <p className="about-section-subtitle">
              Every initiative, relief drive, and humanitarian program at Alkhidmat is anchored in deeply rooted values that prioritize service, compassion, and accountability.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Sincerity of Purpose</h3>
                  <span className="value-card__tag">Ikhlas</span>
                </div>
                <p className="value-card__desc">
                  Serving humanity selflessly with pure intention, seeking only the pleasure of the Almighty and the genuine uplift of vulnerable families.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--amber">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Trust & Stewardship</h3>
                  <span className="value-card__tag">Amanat & Diyanat</span>
                </div>
                <p className="value-card__desc">
                  Honoring public donations as a sacred trust, maintained through meticulous financial discipline, transparency, and strict accountability.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--emerald">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Human Dignity</h3>
                  <span className="value-card__tag">Hurmat-e-Insaniyat</span>
                </div>
                <p className="value-card__desc">
                  Delivering assistance with profound empathy and respect, ensuring that every beneficiary receives support without compromising their self-esteem.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Universal Inclusivity</h3>
                  <span className="value-card__tag">Khidmat Bila Tafreeq</span>
                </div>
                <p className="value-card__desc">
                  Extending open humanitarian care to every individual in distress across Pakistan, free from discrimination of ethnicity, religion, or background.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--rose">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Excellence in Action</h3>
                  <span className="value-card__tag">Ihsan</span>
                </div>
                <p className="value-card__desc">
                  Continuously raising our benchmarks in emergency rescue, modern health facilities, and professional education programs like Bano Qabil.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-card__icon-wrap value-card__icon--cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="value-card__content">
                <div className="value-card__header">
                  <h3 className="value-card__title">Sustainable Empowerment</h3>
                  <span className="value-card__tag">Kafalat</span>
                </div>
                <p className="value-card__desc">
                  Fostering genuine economic independence rather than perpetual reliance through interest-free microfinance, skill centers, and clean water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
