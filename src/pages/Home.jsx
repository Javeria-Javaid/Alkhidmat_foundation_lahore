import React from 'react';
import CampaignHeroSection from '../components/home/CampaignHeroSection';
import ImpactStatistics from '../components/home/ImpactStatistics';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import SuccessStories from '../components/home/SuccessStories';
import LatestNews from '../components/home/LatestNews';
import TransparencyReport from '../components/home/TransparencyReport';
import Partners from '../components/home/Partners';
import Newsletter from '../components/home/Newsletter';

function Home() {
  return (
    <main>
      <CampaignHeroSection />
      <ImpactStatistics />
      <FeaturedPrograms />
      <SuccessStories />
      <LatestNews />
      <TransparencyReport />
      <Partners />
      <Newsletter />
    </main>
  );
}

export default Home;
