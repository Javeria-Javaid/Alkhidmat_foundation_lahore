import React from 'react';
import './ActiveCampaigns.css';

const campaigns = [
  {
    id: 1,
    title: 'REBUILD GAZA',
    desc: 'Support families affected by the ongoing crisis.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    ),
    colorClass: 'icon-blue'
  },
  {
    id: 2,
    title: 'ZAKAT',
    desc: 'Fulfill your obligation and empower the needy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
    colorClass: 'icon-gold'
  },
  {
    id: 3,
    title: 'WASH',
    desc: 'Provide clean water and promote hygiene.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
    ),
    colorClass: 'icon-cyan'
  },
  {
    id: 4,
    title: 'EMERGENCY RELIEF',
    desc: 'Responding quickly to save lives in times of crisis.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect><path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M12 11v4"></path><path d="M10 13h4"></path></svg>
    ),
    colorClass: 'icon-red'
  }
];

function ActiveCampaigns() {
  return (
    <section className="active-campaigns">
      <div className="active-campaigns__wave"></div>
      
      <div className="container active-campaigns__container">
        
        <button className="nav-btn prev" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="active-campaigns__inner">
          
          <div className="active-campaigns__featured">
            <div className="featured-appeal">
              <div className="featured-appeal__tag">
                <span className="dot"></span> CURRENT APPEAL
              </div>
              <h2 className="featured-appeal__title">REBUILD GAZA</h2>
              <p className="featured-appeal__desc">
                Help families rebuild their lives and restore hope for a better future.
              </p>
              <a href="#" className="btn btn-primary btn-white">
                DONATE NOW
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="active-campaigns__divider"></div>

          <div className="active-campaigns__grid">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className={`campaign-card ${campaign.id === 1 ? 'active' : ''}`}>
                <div className={`campaign-icon ${campaign.colorClass}`}>
                  {campaign.icon}
                </div>
                <h3 className="campaign-title">{campaign.title}</h3>
                <p className="campaign-desc">{campaign.desc}</p>
                {campaign.id === 1 && <div className="campaign-active-bar"></div>}
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  );
}

export default ActiveCampaigns;
