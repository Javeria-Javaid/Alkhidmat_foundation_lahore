import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';
import heroImg from '../assets/community_services_program.png'; // Reusing as placeholder
import aboutImg from '../assets/akfl-2-new.png'; // Reusing as placeholder

function Career() {
  return (
    <main className="career-page">
      {/* 1. Hero Section */}
      <section className="career-hero">
        <div className="career-hero__bg">
          <img src={heroImg} alt="Alkhidmat Careers" />
          <div className="career-hero__overlay"></div>
        </div>
        <div className="container career-hero__inner">
          <div className="career-hero__content">
            <h1>Careers</h1>
            <h2>Build a Meaningful Career,<br /><span className="text-highlight">Make a Real Impact</span></h2>
            <p>Join Alkhidmat Foundation Lahore and be part of a mission that is transforming lives and building stronger communities across Pakistan.</p>
            <div className="career-hero__actions">
              <a href="#open-positions" className="btn btn-primary career-btn">
                View Open Positions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#about-us" className="btn btn-outline career-btn-outline">
                About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
          <div className="career-hero__card">
            <div className="career-hero__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <h3>Be Part of Change</h3>
            <p>Work with passion.<br />Serve humanity.<br />Inspire hope.</p>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about-us" className="career-about section">
        <div className="container career-about__inner">
          <div className="career-about__visual">
            <div className="career-about__img-wrap">
              <img src={aboutImg} alt="Alkhidmat team" />
            </div>
          </div>
          <div className="career-about__content">
            <p className="section-tag">ABOUT US</p>
            <h2>More Than a Job,<br />It's a Mission</h2>
            <p>At Alkhidmat Foundation Lahore, we believe in serving humanity with compassion, transparency, and dedication. Our team works together to deliver sustainable solutions in education, healthcare, disaster relief, community services, and more.</p>
            <p>When you join us, you don't just build a career — you become part of a family committed to making Pakistan a better place for all.</p>
            <ul className="career-about__list">
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Purpose-Driven Work</li>
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Inclusive Environment</li>
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Positive Impact</li>
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Work-Life Balance</li>
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Learning & Growth</li>
              <li><span className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span> Career Advancement</li>
            </ul>
            <a href="#open-positions" className="btn btn-primary">
              View Opportunities
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section id="open-positions" className="career-jobs section">
        <div className="container">
          <div className="text-center">
            <h2>Explore Current Opportunities</h2>
          </div>
          <div className="career-empty-state">
            <div className="career-empty-state__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>No Openings Currently</h3>
            <p>
              There are currently no job openings available at this time. Please check back later or submit your CV below and we will keep you in mind for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section id="submit-cv" className="career-cta">
        <div className="container">
          <div className="career-cta__inner">
            <div className="career-cta__left">
              <div className="career-cta__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="career-cta__text">
                <h2>Don't See the Right Role?</h2>
                <p>We are always looking for passionate individuals.<br />Send us your CV and <strong>we'll keep you in mind</strong> for future opportunities.</p>
              </div>
            </div>
            <div className="career-cta__right">
              <button className="btn career-cta__btn">
                Submit Your CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <div className="career-cta__doc-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Career;
