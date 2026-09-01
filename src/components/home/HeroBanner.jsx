import React, { useState, useEffect } from 'react';
import './HeroBanner.css';
import heroBg from '../../assets/home_page/hero_banner.png';

function HeroBanner() {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  
  useEffect(() => {
    const text1 = "Serving Humanity.";
    const text2 = "Building a Better Future.";
    let current1 = '';
    let current2 = '';
    let index1 = 0;
    let index2 = 0;
    let timeoutId;

    const type2 = () => {
      if (index2 < text2.length) {
        current2 += text2.charAt(index2);
        setTypedText2(current2);
        index2++;
        timeoutId = setTimeout(type2, 50);
      }
    };

    const type1 = () => {
      if (index1 < text1.length) {
        current1 += text1.charAt(index1);
        setTypedText1(current1);
        index1++;
        timeoutId = setTimeout(type1, 50);
      } else {
        timeoutId = setTimeout(type2, 200);
      }
    };

    type1();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-banner__backgrounds" aria-hidden="true">
        <div
          className="hero-banner__bg-layer hero-banner__bg-layer--active"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>
      
      <div className="container hero-banner__inner">
        <div className="hero-banner__top">
          {/* LEFT COLUMN: Content */}
          <div className="hero-banner__content">
            <h1 className="hero-banner__title" style={{ color: 'var(--primary-blue)' }}>
              <div className="typewriter-line">{typedText1}</div>
              <div className="typewriter-line">{typedText2}</div>
            </h1>
            
            <div className="hero-banner__actions">
              <a href="#donate-section" className="btn btn-primary">
                DONATE NOW
              </a>
              <a href="#programs-section" className="btn btn-outline">
                EXPLORE PROGRAMS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
