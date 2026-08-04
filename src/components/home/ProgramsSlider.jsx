import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import './ProgramsSlider.css';

function ProgramsSlider({ currentIndex, setCurrentIndex, sharedCauses }) {
  // Tab Refs for auto-scroll
  const tabsRef = useRef([]);
  
  // Touch Swipe Refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Scroll active tab into view
  useEffect(() => {
    if (tabsRef.current[currentIndex]) {
      tabsRef.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sharedCauses.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sharedCauses.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > threshold) {
      handleNext();
    } else if (distance < -threshold) {
      handlePrev();
    }
  };

  const activeSlide = sharedCauses[currentIndex];

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <section className="programs-slider-wrapper">
      <div className="programs-slider-sticky-container">
        <div 
          className="programs-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide.id}
              className="slide-content-wrapper"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="slider-content-row">
                {/* Left: Image Preview */}
                <div className="slider-left">
                  <img src={activeSlide.program.previewImage} alt={activeSlide.tabLabel} className="slider-left-img" />
                </div>

                {/* Center: Content */}
                <div className="slider-center">
                  <div className="slider-top-label">
                    {activeSlide.program.topLabel ? (
                      <>
                        <span style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-blue)', display: 'inline-block'}}></span>
                        {activeSlide.program.topLabel}
                      </>
                    ) : (
                      <span style={{visibility: 'hidden'}}>&nbsp;</span>
                    )}
                  </div>
                  <h3 className="slider-heading">{activeSlide.program.heading}</h3>
                  <p className="slider-desc">{activeSlide.program.description}</p>
                  
                  <div className="slider-stats">
                    {activeSlide.program.stats.map((stat, idx) => (
                      <div className="stat-card" key={idx}>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTAs and Trust */}
                <div className="slider-right">
                  <div className="slider-cta">
                    <button className="slider-btn slider-btn-primary">
                      {activeSlide.program.btnPrimary}
                    </button>
                    <button className="slider-btn slider-btn-secondary">
                      {activeSlide.program.btnSecondary}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation */}
          <div className="slider-bottom-nav">
            <div className="nav-tabs">
              {sharedCauses.map((slide, index) => (
                <button 
                  key={slide.id}
                  ref={el => tabsRef.current[index] = el}
                  className={`nav-tab ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                >
                  {slide.tabIcon}
                  {slide.tabLabel}
                </button>
              ))}
            </div>
            
            <div className="slider-controls">
              <div className="nav-arrows">
                <button className="nav-arrow-btn" onClick={handlePrev}>
                  <ChevronLeft size={16} />
                </button>
                <button className="nav-arrow-btn" onClick={handleNext}>
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="nav-dots">
                {sharedCauses.map((_, index) => (
                  <button 
                    key={index}
                    className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSlider;
