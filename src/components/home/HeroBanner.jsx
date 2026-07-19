import React from 'react';
import './HeroBanner.css';

function HeroBanner({ campaign }) {
  if (!campaign) return null;

  return (
    <section className="hero-banner">
      <div className="hero-banner__bg-overlay"></div>
      
      <div className="container hero-banner__inner">
        {/* LEFT COLUMN: Content */}
        <div className="hero-banner__content">
          
          <h1 className="hero-banner__title" key={`title-${campaign.id}`}>
            {campaign.heroHeadingPrefix}
            <span className="text-primary">{campaign.heroHighlight}</span>
            {campaign.heroHeadingSuffix}
          </h1>
          
          <p className="hero-banner__desc" key={`desc-${campaign.id}`}>
            {campaign.heroDescription}
          </p>
          
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
        
        {/* RIGHT COLUMN: Visual Collage */}
        <div className="hero-banner__visual">
          <div className="hero-collage" key={`img-${campaign.id}`}>
             <div className="hero-collage__bg-shape"></div>
             <img src={campaign.image} alt={campaign.label} className="hero-collage__main-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
