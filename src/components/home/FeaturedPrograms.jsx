import React, { useState, useRef, useEffect } from 'react';
import './FeaturedPrograms.css';
import { Link } from 'react-router-dom';
import { programs } from '../../data/programs';

function FeaturedPrograms() {
  const [activeProgram, setActiveProgram] = useState(0);
  const hoverTimeoutRef = useRef(null);
  const accordionRef = useRef(null);

  // Clear hover timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveProgram(index);
    }, 110);
  };

  const handleMouseLeaveAccordion = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveProgram(0);
    }, 150);
  };

  const handleFocus = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveProgram(index);
  };

  const handleNext = () => {
    setActiveProgram((prev) => (prev + 1) % programs.length);
  };

  const handlePrev = () => {
    setActiveProgram((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleDonateClick = (e) => {
    e.stopPropagation();
    const element = document.getElementById('donate-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-programs section" id="programs-section" aria-label="Our Specialized Programs">
      <div className="container fp-container">
        {/* Section Header */}
        <div className="fp-header text-center">
          <h2 className="section-title fp-title">Our Specialized Programs</h2>
          <p className="fp-subtitle">
            Explore our comprehensive humanitarian initiatives empowering communities, providing relief, and building sustainable futures across Pakistan.
          </p>
        </div>

        {/* Desktop / Tablet Horizontal Image Accordion */}
        <div 
          className="fp-accordion-wrapper"
          ref={accordionRef}
          onMouseLeave={handleMouseLeaveAccordion}
          role="region"
          aria-label="Programs Interactive Gallery"
        >
          <div className="fp-accordion">
            {programs.map((program, index) => {
              const isExpanded = activeProgram === index;

              return (
                <div
                  key={program.label}
                  className={`fp-panel ${isExpanded ? 'fp-panel--expanded' : 'fp-panel--collapsed'}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => setActiveProgram(index)}
                  onFocus={() => handleFocus(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={`${program.label} program`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProgram(index);
                    }
                  }}
                >
                  {/* Background Photograph */}
                  <img
                    src={program.image}
                    alt={program.label}
                    className="fp-panel__bg"
                    style={{
                      '--program-image-position': isExpanded 
                        ? (program.objectPositionExpanded || program.imagePosition || 'center') 
                        : (program.objectPositionCollapsed || program.collapsedPosition || program.imagePosition || 'center'),
                      objectPosition: 'var(--program-image-position)'
                    }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Dark Gradients */}
                  <div className="fp-panel__overlay" />
                  <div className="fp-panel__hover-overlay" />

                  {/* Collapsed Minimal Identifier */}
                  {!isExpanded && (
                    <div className="fp-collapsed-label" aria-hidden="true">
                      <span className="fp-collapsed-title">{program.label}</span>
                    </div>
                  )}

                  {/* Expanded Content Details */}
                  {isExpanded && (
                    <div className="fp-expanded-content">
                      <div className="fp-expanded-top"></div>

                      <div className="fp-expanded-body">
                        <h3 className="fp-expanded-title">{program.label}</h3>
                        <p className="fp-expanded-desc">{program.description}</p>

                        {/* Impact Stat */}
                        <div className="fp-stat-pill">
                          <span className="fp-stat-val">{program.statValue || '15K+'}</span>
                          <span className="fp-stat-lbl">{program.statLabel || 'Beneficiaries'}</span>
                        </div>

                        {/* Action CTAs */}
                        <div className="fp-expanded-actions">
                          {program.isExternal ? (
                            <a
                              href={program.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fp-btn fp-btn--primary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Explore Program
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </a>
                          ) : (
                            <Link
                              to={program.href}
                              className="fp-btn fp-btn--primary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Explore Program
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </Link>
                          )}

                          <Link
                            to="/#donate-section"
                            className="fp-btn fp-btn--donate"
                            onClick={handleDonateClick}
                          >
                            Donate
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls for quick prev/next navigation */}
          <div className="fp-nav-controls" aria-label="Program Navigation">
            <button 
              type="button" 
              className="fp-nav-btn fp-nav-btn--prev" 
              onClick={handlePrev}
              aria-label="Previous Program"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <span className="fp-nav-indicator">
              <strong>{String(activeProgram + 1).padStart(2, '0')}</strong> / {String(programs.length).padStart(2, '0')}
            </span>
            <button 
              type="button" 
              className="fp-nav-btn fp-nav-btn--next" 
              onClick={handleNext}
              aria-label="Next Program"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Swipe Card Carousel */}
        <div className="fp-mobile-carousel" role="region" aria-label="Programs Mobile Carousel">
          <div className="fp-mobile-track">
            {programs.map((program, idx) => (
              <div key={program.label} className="fp-mobile-card">
                <div className="fp-mobile-card__media">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="fp-mobile-card__img"
                    style={{ objectPosition: program.imagePosition || 'center' }}
                    loading="lazy"
                  />
                  <div className="fp-mobile-card__overlay" />
                  <span className="fp-mobile-card__badge">{program.tag || 'ALKHIDMAT'}</span>
                </div>

                <div className="fp-mobile-card__content">
                  <div className="fp-mobile-card__stat">
                    <span className="fp-mobile-card__stat-val">{program.statValue || '15K+'}</span>
                    <span className="fp-mobile-card__stat-lbl">{program.statLabel || 'Beneficiaries'}</span>
                  </div>
                  <h3 className="fp-mobile-card__title">{program.label}</h3>
                  <p className="fp-mobile-card__desc">{program.description}</p>

                  <div className="fp-mobile-card__actions">
                    {program.isExternal ? (
                      <a
                        href={program.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fp-btn fp-btn--primary fp-btn--sm"
                      >
                        Explore
                      </a>
                    ) : (
                      <Link to={program.href} className="fp-btn fp-btn--primary fp-btn--sm">
                        Explore
                      </Link>
                    )}
                    <Link
                      to="/#donate-section"
                      className="fp-btn fp-btn--donate fp-btn--sm"
                      onClick={handleDonateClick}
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;
