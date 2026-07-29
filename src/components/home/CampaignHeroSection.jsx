import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import { campaigns } from '../../data/campaigns';
import './CampaignHeroSection.css';

function CampaignHeroSection() {
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    campaigns.forEach((campaign) => {
      const img = new Image();
      img.src = campaign.backgroundImage;
    });
    campaigns.forEach((campaign) => {
      const img = new Image();
      img.src = campaign.image;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCampaignIndex((prevIndex) => (prevIndex + 1) % campaigns.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleCampaignChange = (campaignId) => {
    const newIndex = campaigns.findIndex(c => c.id === campaignId);
    if (newIndex !== -1) {
      setActiveCampaignIndex(newIndex);
      setIsAutoPlaying(false);
    }
  };

  const activeCampaign = campaigns[activeCampaignIndex];

  return (
    <div className="campaign-hero-section" id="donate-section">
      <HeroBanner
        campaign={activeCampaign}
        campaigns={campaigns}
        onCampaignChange={handleCampaignChange}
      />
    </div>
  );
}

export default CampaignHeroSection;
