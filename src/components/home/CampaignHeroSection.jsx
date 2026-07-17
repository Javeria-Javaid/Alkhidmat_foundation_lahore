import React, { useState, useEffect } from 'react';
import HeroBanner from './HeroBanner';
import DonationPanel from './DonationPanel';
import { campaigns } from '../../data/campaigns';

function CampaignHeroSection() {
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate campaigns
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCampaignIndex((prevIndex) => (prevIndex + 1) % campaigns.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle manual campaign selection from donation form
  const handleCampaignChange = (campaignId) => {
    const newIndex = campaigns.findIndex(c => c.id === campaignId);
    if (newIndex !== -1) {
      setActiveCampaignIndex(newIndex);
      setIsAutoPlaying(false); // Pause auto-rotation on manual interaction
    }
  };

  const activeCampaign = campaigns[activeCampaignIndex];

  return (
    <div className="campaign-hero-section">
      <HeroBanner campaign={activeCampaign} />
      <DonationPanel 
        activeCampaign={activeCampaign} 
        campaigns={campaigns}
        onCampaignChange={handleCampaignChange} 
      />
    </div>
  );
}

export default CampaignHeroSection;
