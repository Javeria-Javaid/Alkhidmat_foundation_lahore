import React from 'react';
import Header from './components/layout/Header';
import CampaignHeroSection from './components/home/CampaignHeroSection';
import ImpactStatistics from './components/home/ImpactStatistics';
import FeaturedPrograms from './components/home/FeaturedPrograms';
import SuccessStories from './components/home/SuccessStories';
import LatestNews from './components/home/LatestNews';
import TransparencyReport from './components/home/TransparencyReport';
import Partners from './components/home/Partners';
import Newsletter from './components/home/Newsletter';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* 1. Header / Navbar */}
      <Header />
      
      <main>
        <CampaignHeroSection />
        
        {/* 3. Impact Statistics */}
        <ImpactStatistics />
        
        {/* 4. Featured Programs */}
        <FeaturedPrograms />
        
        {/* 6. Success Stories */}
        <SuccessStories />
        
        {/* 7. Latest News */}
        <LatestNews />
        
        {/* 8. Transparency & Annual Report (Featured Donations) */}
        <TransparencyReport />
        
        {/* 9. Partners (Infrastructure Carousel) */}
        <Partners />
        
        {/* 10. Newsletter */}
        <Newsletter />
      </main>
      
      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
