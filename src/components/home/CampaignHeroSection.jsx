import React from 'react';
import HeroBanner from './HeroBanner';

function CampaignHeroSection({ children }) {
  return (
    <div className="campaign-hero-section" id="donate-section">
      <HeroBanner>
        {children}
      </HeroBanner>
    </div>
  );
}

export default CampaignHeroSection;
