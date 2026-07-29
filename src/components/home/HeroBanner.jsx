import React from 'react';
import './HeroBanner.css';

function HeroBanner({ campaign, campaigns, onCampaignChange }) {
  if (!campaign) return null;

  return (
    <section className="hero-banner">
      <div className="hero-banner__backgrounds" aria-hidden="true">
        {campaigns.map((item) => (
          <div
            key={item.id}
            className={`hero-banner__bg-layer${item.id === campaign.id ? ' hero-banner__bg-layer--active' : ''}`}
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          />
        ))}
      </div>
      <div className="hero-banner__bg-overlay"></div>
      
      <div className="container hero-banner__inner">
        <div className="hero-banner__top">
          {/* LEFT COLUMN: Content */}
          <div className="hero-banner__content">
            <h1 className="hero-banner__title" key={`title-${campaign.id}`}>
              <span className="hero-banner__title-desktop">
                {campaign.heroHeadingPrefix.replace('\n', ' ')}
                <span className="text-primary">{campaign.heroHighlight}</span>
                {campaign.heroHeadingSuffix}
              </span>
              <span className="hero-banner__title-mobile">
                {campaign.heroHeadingPrefix}
                <span className="text-primary">{campaign.heroHighlight}</span>
                {campaign.heroHeadingSuffix}
              </span>
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
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
