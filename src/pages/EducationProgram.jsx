import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EducationProgram.css';
import {
  educationHeroStats,
  donationAmounts,
  panelDonationAmounts,
  schoolsNetworkItems,
  scholarshipItems,
  vocationalItems,
  studentStories,
} from '../data/educationData';
import studentImg from '../assets/education_program.png';
import graduateImg from '../assets/akfl-1.jpeg';

function EducationProgram() {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [panelAmount, setPanelAmount] = useState(5000);

  return (
    <main className="ep-page">

      {/* ── 1. HERO ── */}
      <section className="ep-hero" aria-label="Education Program Hero">
        <div className="container ep-hero__inner">

          {/* Left Content */}
          <div className="ep-hero__left">
            <span className="ep-hero__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              EDUCATION PROGRAM
            </span>
            <h1 className="ep-hero__title">
              Illuminating Minds.<br />
              <span className="ep-hero__title--blue">Breaking<br />Generational<br />Poverty Cycles.</span>
            </h1>
            <p className="ep-hero__desc">
              We believe every child deserves quality education, skills, and opportunities to build a better future for themselves, their families, and their communities.
            </p>

            {/* Stats Row */}
            <div className="ep-hero__stats">
              {educationHeroStats.map((stat) => (
                <div className="ep-hero__stat" key={stat.label}>
                  <div className="ep-hero__stat-icon">{stat.icon}</div>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Donation Widget */}
          <div className="ep-hero__right">
            {/* Decorative dots */}
            <div className="ep-hero__dots" aria-hidden="true">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="ep-hero__dot" />
              ))}
            </div>
            <div className="ep-hero__img-wrap">
              <img src={studentImg} alt="Students in classroom" />
            </div>

            {/* Donation Widget */}
            <div className="ep-hero__widget" role="complementary" aria-label="Donation widget">
              <div className="ep-hero__widget-header">
                <div className="ep-hero__widget-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0254a4" strokeWidth="2" width="22" height="22">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <p className="ep-hero__widget-title">Support a Child's Education</p>
                  <p className="ep-hero__widget-sub">Your support can change a life forever.</p>
                </div>
              </div>

              <div className="ep-hero__amounts">
                {donationAmounts.map((amt) => (
                  <button
                    key={amt.value}
                    className={`ep-hero__amount-btn ${selectedAmount === amt.value ? 'ep-hero__amount-btn--active' : ''}`}
                    onClick={() => setSelectedAmount(amt.value)}
                    aria-pressed={selectedAmount === amt.value}
                  >
                    {amt.label}
                  </button>
                ))}
              </div>

              <a href="#donate" className="ep-hero__donate-btn">
                Donate Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <p className="ep-hero__secure">
                <svg viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" width="13" height="13">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                100% Secure Donation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THREE INFO CARDS ── */}
      <section className="ep-cards section" aria-label="Education program areas">
        <div className="container ep-cards__grid">

          {/* Card 1: Schools Network */}
          <div className="ep-card ep-card--blue">
            <div className="ep-card__header">
              <div className="ep-card__icon ep-card__icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <h2>Alkhidmat<br />Schools Network</h2>
              </div>
            </div>
            <p>Building and managing quality schools from primary to higher secondary level, especially in underserved areas.</p>
            <ul className="ep-card__list">
              {schoolsNetworkItems.map((item) => (
                <li key={item.label}>
                  <span className="ep-card__list-icon">{item.icon}</span>
                  <span>
                    <strong>{item.label}</strong>
                    <em>{item.detail}</em>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#schools" className="ep-card__link">
              Explore Schools
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Card 2: Scholarship Scheme */}
          <div className="ep-card ep-card--green">
            <div className="ep-card__header">
              <div className="ep-card__icon ep-card__icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <div>
                <h2>Alfalah<br />Scholarship Scheme</h2>
              </div>
            </div>
            <p>Empowering deserving students through financial support to pursue their academic dreams.</p>
            <ul className="ep-card__list">
              {scholarshipItems.map((item) => (
                <li key={item.label}>
                  <span className="ep-card__list-icon">{item.icon}</span>
                  <span>
                    <strong>{item.label}</strong>
                    <em>{item.detail}</em>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#scholarship" className="ep-card__link">
              View Eligibility Criteria
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Card 3: Vocational Institutes */}
          <div className="ep-card ep-card--purple">
            <div className="ep-card__header">
              <div className="ep-card__icon ep-card__icon--purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div>
                <h2>Vocational Training<br />Institutes</h2>
              </div>
            </div>
            <p>Providing practical skills and training for youth to become self-reliant and job ready.</p>
            <ul className="ep-card__list">
              {vocationalItems.map((item) => (
                <li key={item.label}>
                  <span className="ep-card__list-icon">{item.icon}</span>
                  <span>
                    <strong>{item.label}</strong>
                    <em>{item.detail}</em>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#vocational" className="ep-card__link">
              Training Programs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. VIDEO + SUCCESS STORIES ── */}
      <section className="ep-stories" aria-label="Student success stories">
        <div className="container ep-stories__inner">

          {/* Left: Video */}
          <div className="ep-stories__video-col">
            <div className="ep-stories__video-card">
              <img src={graduateImg} alt="Graduate student success story" />
              <div className="ep-stories__video-overlay">
                <blockquote className="ep-stories__quote">
                  "From a remote village to an Engineering University degree."
                </blockquote>
                <button className="ep-stories__play" aria-label="Play student success story video">
                  <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
                <p className="ep-stories__quote-sub">Alkhidmat's scholarship changed my life and my family's future.</p>
              </div>
              {/* Video controls bar */}
              <div className="ep-stories__controls" aria-hidden="true">
                <div className="ep-stories__controls-bar">
                  <button>▶</button>
                  <button>⏭</button>
                  <div className="ep-stories__progress">
                    <div className="ep-stories__progress-fill" />
                  </div>
                  <button>🔊</button>
                  <button>⛶</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stories */}
          <div className="ep-stories__right">
            <div className="ep-stories__header">
              <div>
                <h2>Student Success Stories</h2>
                <p>Real journeys. Real impact. Real futures transformed.</p>
              </div>
              <div className="ep-stories__nav" aria-label="Navigate stories">
                <button aria-label="Previous story">‹</button>
                <button aria-label="Next story">›</button>
              </div>
            </div>
            <div className="ep-stories__cards">
              {studentStories.map((story) => (
                <div className="ep-stories__card" key={story.id}>
                  <div className="ep-stories__card-avatar" aria-hidden="true">
                    <div className="ep-stories__avatar-placeholder">
                      {story.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ep-stories__card-body">
                    <h3>{story.name}</h3>
                    <p className="ep-stories__card-location">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {story.location}
                    </p>
                    <p className="ep-stories__card-scholarship">
                      <span className="ep-stories__card-badge">{story.scholarship}</span>
                    </p>
                    <p className="ep-stories__card-program">{story.program}</p>
                    <a href="#story" className="ep-stories__card-link">
                      View Full Story
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. DONATION PANEL ── */}
      <section className="ep-donate" aria-label="Education donation panel" id="donate">
        <div className="container">
          <div className="ep-donate__inner">
            {/* Background icons */}
            <div className="ep-donate__bg-icons" aria-hidden="true">
              {['📚', '✏️', '🎓', '📖', '✏️', '📚', '🎓'].map((icon, i) => (
                <span key={i} className="ep-donate__bg-icon">{icon}</span>
              ))}
            </div>

            <div className="ep-donate__text text-center">
              <h2>Invest in Education, Build a Better Tomorrow</h2>
              <p>Your donation provides books, uniforms, scholarships, and skills for a brighter future.</p>
            </div>

            <div className="ep-donate__amounts">
              {panelDonationAmounts.map((amt) => (
                <button
                  key={amt.value}
                  className={`ep-donate__amount-btn ${panelAmount === amt.value ? 'ep-donate__amount-btn--active' : ''}`}
                  onClick={() => setPanelAmount(amt.value)}
                  aria-pressed={panelAmount === amt.value}
                >
                  <span className="ep-donate__amount-label">{amt.label}</span>
                  <span className="ep-donate__amount-sub">{amt.sublabel}</span>
                </button>
              ))}
            </div>

            <div className="ep-donate__cta">
              <a href="#process" className="ep-donate__btn">
                Process Education Donation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            <div className="ep-donate__badges">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" width="14" height="14">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                100% Zakat Compliant
              </span>
              <span className="ep-donate__badge-sep">•</span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" width="14" height="14">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Secure & Transparent
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default EducationProgram;
