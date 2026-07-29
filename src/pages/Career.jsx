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
              <a href="#why-join" className="btn btn-outline career-btn-outline">
                Why Join Us?
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

      {/* 2. Statistics Strip */}
      <section className="career-stats">
        <div className="container">
          <div className="career-stats__grid">
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <span className="career-stats__number">30+</span>
              <span className="career-stats__label">Years of Service</span>
            </div>
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <span className="career-stats__number">Millions</span>
              <span className="career-stats__label">Lives Impacted</span>
            </div>
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span className="career-stats__number">Across</span>
              <span className="career-stats__label">Pakistan</span>
            </div>
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
              </div>
              <span className="career-stats__number">5,000+</span>
              <span className="career-stats__label">Dedicated Staff</span>
            </div>
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <span className="career-stats__number">1 Mission</span>
              <span className="career-stats__label">Humanity First</span>
            </div>
            <div className="career-stats__item">
              <div className="career-stats__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <span className="career-stats__number">Countless</span>
              <span className="career-stats__label">Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="career-about section">
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
              Explore Our Culture
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Why Join Section */}
      <section id="why-join" className="career-why section bg-light">
        <div className="container text-center">
          <p className="section-tag">WHY JOIN ALKHIDMAT FOUNDATION LAHORE?</p>
          <h2>Grow Your Career. Change Lives.</h2>
          <div className="career-why__grid">
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
              <h3>Meaningful Impact</h3>
              <p>Your work directly contributes to positive change in communities.</p>
            </div>
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
              <h3>Learning Opportunities</h3>
              <p>We invest in your growth through training and professional development.</p>
            </div>
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <h3>Supportive Culture</h3>
              <p>Work in a collaborative, respectful and inclusive environment.</p>
            </div>
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
              <h3>Career Growth</h3>
              <p>Clear career paths and opportunities to advance.</p>
            </div>
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
              <h3>Work-Life Balance</h3>
              <p>We value your time and well-being.</p>
            </div>
            <div className="career-why__card">
              <div className="icon-wrap"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <h3>Job Security</h3>
              <p>Be part of a reputable organization committed to long-term missions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}
      <section id="open-positions" className="career-jobs section">
        <div className="container">
          <div className="text-center">
            <p className="section-tag">OPEN POSITIONS</p>
            <h2>Explore Current Opportunities</h2>
          </div>
          <div className="career-jobs__table-wrap">
            <table className="career-jobs__table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Apply</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Program Officer</td>
                  <td>Community Services</td>
                  <td>Lahore</td>
                  <td>Full Time</td>
                  <td><button className="btn btn-outline btn-sm">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></td>
                </tr>
                <tr>
                  <td>HR Officer</td>
                  <td>Human Resources</td>
                  <td>Lahore</td>
                  <td>Full Time</td>
                  <td><button className="btn btn-outline btn-sm">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></td>
                </tr>
                <tr>
                  <td>Finance Officer</td>
                  <td>Finance</td>
                  <td>Lahore</td>
                  <td>Full Time</td>
                  <td><button className="btn btn-outline btn-sm">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></td>
                </tr>
                <tr>
                  <td>IT Support Executive</td>
                  <td>Information Technology</td>
                  <td>Lahore</td>
                  <td>Full Time</td>
                  <td><button className="btn btn-outline btn-sm">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></td>
                </tr>
                <tr>
                  <td>Field Coordinator</td>
                  <td>Community Services</td>
                  <td>Multiple Cities</td>
                  <td>Full Time</td>
                  <td><button className="btn btn-outline btn-sm">Apply Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 career-jobs__all">
            <button className="btn btn-outline">
              View All Open Positions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="career-cta">
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
