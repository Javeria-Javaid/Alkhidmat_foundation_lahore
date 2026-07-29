import React from 'react';
import CampaignHeroSection from '../components/home/CampaignHeroSection';
import ProgramsSlider from '../components/home/ProgramsSlider';
import ImpactStatistics from '../components/home/ImpactStatistics';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import SuccessStories from '../components/home/SuccessStories';
import LatestNews from '../components/home/LatestNews';
import TransparencyReport from '../components/home/TransparencyReport';
import Partners from '../components/home/Partners';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="home-hero-area">
        <CampaignHeroSection />
        <ProgramsSlider />
      </div>
      <ImpactStatistics />
      <SuccessStories />
      <FeaturedPrograms />
      <LatestNews />
      <TransparencyReport />
      <Partners />
    </main>
  );
}

export default Home;
