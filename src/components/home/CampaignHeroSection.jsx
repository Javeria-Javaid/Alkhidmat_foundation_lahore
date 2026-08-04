import React, { useEffect } from 'react';
import HeroBanner from './HeroBanner';

function CampaignHeroSection({ currentIndex, setCurrentIndex, sharedCauses }) {
  useEffect(() => {
    // Preload background and content images
    sharedCauses.forEach((cause) => {
      const imgBg = new Image();
      imgBg.src = cause.hero.backgroundImage;
      const imgFg = new Image();
      imgFg.src = cause.hero.image;
    });
  }, [sharedCauses]);

  const handleCampaignChange = (campaignId) => {
    const newIndex = sharedCauses.findIndex(c => c.hero.id === campaignId);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  };

  const activeCampaign = sharedCauses[currentIndex].hero;
  const campaignsList = sharedCauses.map(c => c.hero);

  return (
    <div className="campaign-hero-section" id="donate-section">
      <HeroBanner
        campaign={activeCampaign}
        campaigns={campaignsList}
        onCampaignChange={handleCampaignChange}
      />
    </div>
  );
}

export default CampaignHeroSection;
