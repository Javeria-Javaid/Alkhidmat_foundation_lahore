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
  const tabsContainerRef = useRef(null);
  
  // Touch Swipe Refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Scroll active tab into view (horizontal only, prevents vertical page jump)
  useEffect(() => {
    const activeTab = tabsRef.current[currentIndex];
    const container = tabsContainerRef.current;
    if (activeTab && container) {
      const containerWidth = container.offsetWidth;
      const tabOffsetLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      
      const scrollPosition = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
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
              <div className="slider-content-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px 20px' }}>
                <div className="slider-center" style={{ textAlign: 'center' }}>
                  <h3 className="slider-heading" style={{ fontSize: '1.35rem', color: 'var(--navy)', margin: 0, fontWeight: 700 }}>{activeSlide.program.heading}</h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation */}
          <div className="slider-bottom-nav">
            <div className="nav-tabs" ref={tabsContainerRef}>
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
