import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Droplets, 
  HeartHandshake, 
  Ambulance, 
  GraduationCap, 
  Coins, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import './ProgramsSlider.css';

// Import local images
import communityImg from '../../assets/community_services.png';
import healthImg from '../../assets/health_page_1.jpeg';
import cleanWaterImg from '../../assets/clean_water.png';
import washImg from '../../assets/wash_img.png';
import rebuildGazaImg from '../../assets/rebuild_gaza.png';
import disasterImg from '../../assets/disaster_management.png';
import orphanCareImg from '../../assets/Orphan_Care.png';
import educationImg from '../../assets/education_program.jpeg';

const slideData = [
  {
    id: 'overview',
    tabIcon: <HeartHandshake className="nav-tab-icon" />,
    tabLabel: 'Overview',
    topLabel: '',
    heading: 'Transforming Lives Through Every Program',
    description: 'Providing comprehensive humanitarian aid, emergency relief, and sustainable development programs across Pakistan and globally.',
    imageBg: communityImg,
    imageFg: healthImg,
    glassLabel: 'Global Impact',
    stats: [
      { value: '2.5M+', label: 'Lives Impacted' },
      { value: '150+', label: 'Cities Served' },
      { value: '25+', label: 'Years of Service' }
    ],
    btnPrimary: 'Explore Programs',
    btnSecondary: 'Donate Now'
  },
  {
    id: 'wash',
    tabIcon: <Droplets className="nav-tab-icon" />,
    tabLabel: 'WASH',
    topLabel: 'CLEAN WATER PROGRAM',
    heading: 'Safe Drinking Water For Vulnerable Communities',
    description: 'Installing solar-powered water filtration plants, hand pumps, and deep wells in remote areas facing severe water scarcity.',
    imageBg: cleanWaterImg,
    imageFg: washImg,
    glassLabel: 'WASH Initiative',
    stats: [
      { value: '15K+', label: 'Water Projects' },
      { value: '3M+', label: 'Daily Beneficiaries' },
      { value: '100%', label: 'Tested Safe' }
    ],
    btnPrimary: 'Learn More',
    btnSecondary: 'Donate to WASH'
  },
  {
    id: 'gaza',
    tabIcon: <HeartHandshake className="nav-tab-icon" />,
    tabLabel: 'Gaza Appeal',
    topLabel: '',
    heading: 'Urgent Gaza Relief & Rebuilding Efforts',
    description: 'Providing immediate hot meals, medical supplies, clean drinking water, and winter clothing to displaced Palestinian families with transparent field tracking.',
    imageBg: rebuildGazaImg,
    imageFg: communityImg,
    glassLabel: 'Gaza Emergency Response',
    stats: [
      { value: '850K+', label: 'Meals Distributed' },
      { value: '120+', label: 'Relief Convoys' },
      { value: '100%', label: 'Direct Delivery' }
    ],
    btnPrimary: 'Support Gaza Appeal',
    btnSecondary: 'Donate Relief'
  },
  {
    id: 'emergency',
    tabIcon: <Ambulance className="nav-tab-icon" />,
    tabLabel: 'Emergency',
    topLabel: '',
    heading: 'Rapid Response Medical & Rescue Network',
    description: 'Equipped with 300+ ambulances, flood response boats, and mobile medical units ready to reach disaster-struck regions across Pakistan within minutes.',
    imageBg: disasterImg,
    imageFg: healthImg,
    glassLabel: 'Disaster Emergency Fleet',
    stats: [
      { value: '300+', label: 'Ambulance Fleet' },
      { value: '24/7', label: 'Emergency Hotline' },
      { value: '500K+', label: 'Rescue Missions' }
    ],
    btnPrimary: 'Emergency Network',
    btnSecondary: 'Support Rescue'
  },
  {
    id: 'education',
    tabIcon: <GraduationCap className="nav-tab-icon" />,
    tabLabel: 'Education',
    topLabel: '',
    heading: 'Orphan Care & Quality Education Access',
    description: 'Sponsoring orphan education, state-of-the-art schools, Aghosh orphan homes, and vocational training centers to build resilient futures for deserving youth.',
    imageBg: orphanCareImg,
    imageFg: educationImg,
    glassLabel: 'Aghosh Orphan Care',
    stats: [
      { value: '23,000+', label: 'Orphans Sponsored' },
      { value: '18', label: 'Aghosh Homes' },
      { value: '98%', label: 'School Retention' }
    ],
    btnPrimary: 'Sponsor an Orphan',
    btnSecondary: 'Donate Education'
  }
];

function ProgramsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideData.length);
    }, 6000);
  };

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const activeSlide = slideData[currentIndex];

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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
                {/* Left: Image Collage */}
                <div className="slider-left">
                  <img src={activeSlide.imageBg} alt="" className="slider-left-bg" />
                  <div className="slider-left-overlay"></div>
                  <img src={activeSlide.imageFg} alt="" className="slider-left-fg" />
                </div>

                {/* Center: Content */}
                <div className="slider-center">
                  {activeSlide.topLabel && (
                    <div className="slider-top-label">
                      <span style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-blue)', display: 'inline-block'}}></span>
                      {activeSlide.topLabel}
                    </div>
                  )}
                  <h3 className="slider-heading">{activeSlide.heading}</h3>
                  <p className="slider-desc">{activeSlide.description}</p>
                  
                  <div className="slider-stats">
                    {activeSlide.stats.map((stat, idx) => (
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
                      {activeSlide.btnPrimary}
                    </button>
                    <button className="slider-btn slider-btn-secondary">
                      {activeSlide.btnSecondary}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation */}
          <div className="slider-bottom-nav">
            <div className="nav-tabs">
              {slideData.map((slide, index) => (
                <button 
                  key={slide.id}
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
                {slideData.map((_, index) => (
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
