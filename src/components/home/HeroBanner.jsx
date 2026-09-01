import React from 'react';
import './HeroBanner.css';
import heroBg from '../../assets/home_page/hero_banner.png';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__backgrounds" aria-hidden="true">
        <div
          className="hero-banner__bg-layer hero-banner__bg-layer--active"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>
      <div className="hero-banner__bg-overlay"></div>
      
      <div className="container hero-banner__inner">
        <div className="hero-banner__top">
          {/* LEFT COLUMN: Content */}
          <div className="hero-banner__content">
            <h1 className="hero-banner__title" style={{ color: 'var(--primary-blue)' }}>
              Serving Humanity. Building a Better Future.
            </h1>
            
            <div className="hero-banner__actions">
              <a href="#donate-section" className="btn btn-primary">
                DONATE NOW
              </a>
              <a href="#programs-section" className="btn btn-outline">
                EXPLORE PROGRAMS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
            
            <div className="hero-banner__stats">
              <div className="hero-banner__stat-item">
                <div className="hero-banner__avatars">
                  <div className="avatar avatar-1"></div>
                  <div className="avatar avatar-2"></div>
                  <div className="avatar avatar-3"></div>
                  <div className="avatar avatar-4"></div>
                </div>
                <div className="hero-banner__stat-info">
                  <h3>2M+</h3>
                  <p>Lives Impacted</p>
                </div>
              </div>
              
              <div className="hero-banner__stat-divider"></div>
              
              <div className="hero-banner__stat-item">
                <div className="hero-banner__stat-info">
                  <h3>35+</h3>
                  <p>Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
