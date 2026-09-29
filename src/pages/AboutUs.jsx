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
                  <circle cx="12" cy="2"></circle>
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
          <div className="president-card__body">
            <h2 className="president-card__title">President's Message</h2>
            <svg className="president-card__quote-icon" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="president-card__quote">
              "The year 2025 was another impactful year for Alkhidmat Foundation Pakistan. Guided by compassion, we served millions through health, education, orphan care, WASH, microfinance, and the Bano Qabil program. Flood-affected families received emergency relief and rehabilitation, while climate initiatives included large-scale tree plantations. The nationwide expansion of Bano Qabil further empowered youth with skills for dignified livelihoods. Globally, Alkhidmat Foundation delivered relief aid worth over Rs 9 billion in Gaza and launched a Rs 15 billion ’Rebuild Gaza’ campaign, also supporting affected and oppressed communities in Sudan, Bangladesh, and Sri Lanka."
            </blockquote>
            <div className="president-card__author">
              <div className="president-card__author-info">
                <strong className="president-card__name">Prof. Dr. Hafeez ur Rahman</strong>
                <span className="president-card__role">President, Alkhidmat Foundation Pakistan</span>
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

      {/* Core Guiding Principles (Editorial Layout) */}
      <section className="about-principles-section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="principles-header">
            <h2 id="principles-heading" className="principles-title">Our Core Guiding Principles</h2>
            <p className="principles-intro">
              Every initiative, relief drive, and humanitarian program at Alkhidmat is anchored in deeply rooted values that prioritize service, compassion, and accountability.
            </p>
          </div>

          <div className="principles-grid">
            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">01</span>
              <h3 className="principle-title">Sincerity of Purpose</h3>
              <span className="principle-term">Ikhlas</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Serving humanity selflessly with pure intention, seeking only the pleasure of the Almighty and the genuine uplift of vulnerable families.
              </p>
            </article>

            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">02</span>
              <h3 className="principle-title">Trust & Stewardship</h3>
              <span className="principle-term">Amanat & Diyanat</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Honoring public donations as a sacred trust, maintained through meticulous financial discipline, transparency, and strict accountability.
              </p>
            </article>

            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">03</span>
              <h3 className="principle-title">Human Dignity</h3>
              <span className="principle-term">Hurmat-e-Insaniyat</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Delivering assistance with profound empathy and respect, ensuring that every beneficiary receives support without compromising their self-esteem.
              </p>
            </article>

            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">04</span>
              <h3 className="principle-title">Universal Inclusivity</h3>
              <span className="principle-term">Khidmat Bila Tafreeq</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Extending open humanitarian care to every individual in distress across Pakistan, free from discrimination of ethnicity, religion, or background.
              </p>
            </article>

            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">05</span>
              <h3 className="principle-title">Excellence in Action</h3>
              <span className="principle-term">Ihsan</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Continuously raising our benchmarks in emergency rescue, modern health facilities, and professional education programs like Bano Qabil.
              </p>
            </article>

            <article className="principle-item" tabIndex="0">
              <span className="principle-num" aria-hidden="true">06</span>
              <h3 className="principle-title">Sustainable Empowerment</h3>
              <span className="principle-term">Kafalat</span>
              <div className="principle-rule" aria-hidden="true" />
              <p className="principle-desc">
                Fostering genuine economic independence rather than perpetual reliance through interest-free microfinance, skill centers, and clean water.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
