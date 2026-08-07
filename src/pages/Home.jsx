import React, { useState, useEffect, useRef } from 'react';
import CampaignHeroSection from '../components/home/CampaignHeroSection';
import ProgramsSlider from '../components/home/ProgramsSlider';
import ImpactStatistics from '../components/home/ImpactStatistics';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import SuccessStories from '../components/home/SuccessStories';
import LatestNews from '../components/home/LatestNews';
import TransparencyReport from '../components/home/TransparencyReport';
import Partners from '../components/home/Partners';
import { sharedCauses } from '../data/sharedCauses';
import './Home.css';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sharedCauses.length);
    }, 6000);
  };

  // Synchronized Autoplay Timer
  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentIndex]);

  // Synchronized Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? sharedCauses.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % sharedCauses.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main>
      <div 
        className="home-hero-area"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CampaignHeroSection 
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          sharedCauses={sharedCauses}
        />
        <ProgramsSlider 
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          sharedCauses={sharedCauses}
        />
      </div>
      <FeaturedPrograms />
      <SuccessStories />
      <ImpactStatistics />
      <LatestNews />
      <TransparencyReport />
      <Partners />
    </main>
  );
}

export default Home;
