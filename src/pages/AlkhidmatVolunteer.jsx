import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Compass, ShieldAlert, GraduationCap, HeartHandshake } from 'lucide-react';
import './AlkhidmatVolunteer.css';

/* ── Asset Imports ── */
import heroBgImg from '../assets/volunteer/hero_bg.jpg';
import whyJoinImg from '../assets/volunteer/why_join.jpg';
import ayeshaImg from '../assets/volunteer/ayesha.jpg';

import gal1 from '../assets/events/flood_relief.png';
import gal2 from '../assets/events/volunteer-1.png';
import gal3 from '../assets/events/orphan.png';
import gal4 from '../assets/events/ramzan.png';
import gal5 from '../assets/events/plantation.png';
import gal6 from '../assets/events/medical.png';

const serviceAreas = [
  {
    id: 1,
    title: 'Healthcare Camps',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Education Programs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Food Distribution',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Plantation Drives',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" />
        <path d="M12 13a7 7 0 0 0-7-7c0 4 3 7 7 7z" />
        <path d="M12 13a7 7 0 0 1 7-7c0 4-3 7-7 7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Emergency Relief',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Community Welfare',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const faqData = [
  {
    q: 'How can I become a volunteer?',
    a: 'You can register online by clicking the "Register as Volunteer" button, filling out the simple application form, and attending our orientation session.',
  },
  {
    q: 'Is volunteering free?',
    a: 'Yes, volunteering with Alkhidmat Foundation is completely free. We do not charge any registration or membership fees.',
  },
  {
    q: 'Can families volunteer together?',
    a: 'Yes! Families are warmly encouraged to volunteer together in community drives, tree plantation activities, and food distribution programs.',
  },
  {
    q: 'Do I need previous experience to volunteer?',
    a: 'No prior experience is required. We welcome individuals from all backgrounds and provide orientation and training prior to campaigns.',
  },
  {
    q: 'Can students volunteer?',
    a: 'Absolutely! Student volunteers play a vital role in our campaigns. We provide flexible schedules and official volunteer certificates.',
  },
  {
    q: 'How can I stay updated about drives?',
    a: 'Once registered, you will be connected to our local volunteer network and receive updates via WhatsApp broadcasts, email, and social media.',
  },
];

const testimonials = [
  {
    quote: "Serving with Alkhidmat has changed my perspective. Every campaign reminds me that even a few hours of service can bring hope to someone's life.",
    author: "Ayesha Khan",
    role: "Volunteer Since 2022",
    rating: 5,
    avatar: ayeshaImg,
  },
  {
    quote: "Being part of the medical relief camp in Flood relief drive was one of the most fulfilling experiences of my life. Alkhidmat's organization is top notch.",
    author: "Dr. Usman Ali",
    role: "Medical Volunteer Since 2021",
    rating: 5,
    avatar: ayeshaImg,
  },
];

const HexagonImpactWheel = ({ onRegister }) => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'certs',
      title: 'Certificates & Recognition',
      desc: 'Earn volunteer certificates and accredited recognition for your contributions.',
      icon: Award,
      pos: { x: 250, y: 88, left: '50%', top: '17.6%' },
      tooltipPos: 'top',
    },
    {
      id: 'leadership',
      title: 'Leadership',
      desc: 'Lead relief squads, coordinate drives, and develop real-world management skills.',
      icon: Compass,
      pos: { x: 390.3, y: 169, left: '78%', top: '33.8%' },
      tooltipPos: 'right',
    },
    {
      id: 'disaster',
      title: 'Disaster Relief',
      desc: 'Be a first responder in emergencies, rescue operations, and rapid relief missions.',
      icon: ShieldAlert,
      pos: { x: 390.3, y: 331, left: '78%', top: '66.2%' },
      tooltipPos: 'right',
    },
    {
      id: 'training',
      title: 'Professional Training',
      desc: 'Receive structured volunteer orientation, safety workshops, and humanitarian skills.',
      icon: GraduationCap,
      pos: { x: 250, y: 412, left: '50%', top: '82.4%' },
      tooltipPos: 'bottom',
    },
    {
      id: 'humanity',
      title: 'Serve Humanity',
      desc: 'Make a direct, tangible difference in the lives of vulnerable families across Pakistan.',
      icon: HeartHandshake,
      pos: { x: 109.7, y: 331, left: '22%', top: '66.2%' },
      tooltipPos: 'left',
    },
    {
      id: 'networking',
      title: 'Networking',
      desc: 'Connect with mentors, doctors, humanitarians, and like-minded community changemakers.',
      icon: Users,
      pos: { x: 109.7, y: 169, left: '22%', top: '33.8%' },
      tooltipPos: 'left',
    },
  ];

  return (
    <section className="vol-hex-section" id="why-join-section">
      <div className="container">
        {/* 1. Centered Section Heading above both columns */}
        <div className="vol-hex-header text-center">
          <h2 className="section-title">Why Volunteer With Alkhidmat?</h2>
          <p className="section-subtitle">
            Serve communities, build meaningful connections, and grow through experiences that create lasting impact.
          </p>
        </div>

        <div className="vol-hex-grid">
          {/* 2. Left Column: Volunteer Photograph */}
          <div className="vol-hex-image-col">
            <div className="vol-hex-image-wrapper">
              <img 
                src={whyJoinImg} 
                alt="Alkhidmat volunteers serving the community" 
                className="vol-hex-hero-img" 
                loading="lazy"
              />
              <div className="vol-hex-photo-overlay">
                <span className="vol-hex-photo-badge">Together in Service</span>
                <p className="vol-hex-photo-caption">
                  Join volunteers working where they're needed most.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Right Column: Connected Hexagon Ecosystem + CTA */}
          <div className="vol-hex-diagram-col">
            {/* Desktop / Tablet Radial Ecosystem */}
            <div className="vol-hex-radial-wrapper" role="region" aria-label="Benefits Ecosystem">
              {/* Connector lines from center (250, 250) to each benefit */}
              <svg 
                className="vol-hex-connectors" 
                viewBox="0 0 500 500" 
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <filter id="hex-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#0254a4" floodOpacity="0.5" />
                  </filter>
                </defs>
                {nodes.map((node, i) => {
                  const isActive = activeNode === i;
                  return (
                    <line
                      key={node.id}
                      x1="250"
                      y1="250"
                      x2={node.pos.x}
                      y2={node.pos.y}
                      className={`vol-hex-connector-line ${isActive ? 'is-active' : ''}`}
                      filter={isActive ? 'url(#hex-glow)' : undefined}
                    />
                  );
                })}
              </svg>

              {/* Central Hexagon */}
              <div className="vol-hex-center" aria-hidden="true">
                <div className="vol-hex-drop-shadow vol-hex-drop-shadow--center">
                  <div className="vol-hex-shape vol-hex-shape--large">
                    <div className="vol-hex-shape__inner vol-hex-shape__inner--center">
                      <span className="vol-hex-center-tag">WHY</span>
                      <h3 className="vol-hex-center-title">ALKHIDMAT?</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 Outer Benefit Hexagons */}
              {nodes.map((node, i) => {
                const IconComponent = node.icon;
                const isActive = activeNode === i;
                return (
                  <div
                    key={node.id}
                    className="vol-hex-satellite-anchor"
                    style={{ left: node.pos.left, top: node.pos.top }}
                  >
                    <button
                      type="button"
                      className={`vol-hex-node-btn ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveNode(i)}
                      onMouseLeave={() => setActiveNode(null)}
                      onFocus={() => setActiveNode(i)}
                      onBlur={() => setActiveNode(null)}
                      aria-label={`${node.title}: ${node.desc}`}
                    >
                      <div className="vol-hex-drop-shadow">
                        <div className="vol-hex-shape vol-hex-shape--small">
                          <div className="vol-hex-shape__inner vol-hex-shape__inner--small">
                            <span className="vol-hex-icon-box">
                              <IconComponent size={20} strokeWidth={2} />
                            </span>
                            <span className="vol-hex-title">{node.title}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tooltip on hover/focus */}
                      <div className={`vol-hex-desc-tooltip vol-hex-desc-tooltip--${node.tooltipPos} ${isActive ? 'is-visible' : ''}`}>
                        <p className="vol-hex-desc">{node.desc}</p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Mobile Touch-Friendly Card Layout */}
            <div className="vol-hex-mobile-ecosystem">
              <div className="vol-hex-mobile-badge">
                <span>WHY ALKHIDMAT?</span>
              </div>
              <div className="vol-hex-mobile-grid">
                {nodes.map((node, i) => {
                  const IconComponent = node.icon;
                  const isActive = activeNode === i;
                  return (
                    <div 
                      key={node.id} 
                      className={`vol-hex-mobile-card ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveNode(activeNode === i ? null : i)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${node.title}: ${node.desc}`}
                    >
                      <div className="vol-hex-mobile-card__icon">
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                      <div className="vol-hex-mobile-card__content">
                        <h4>{node.title}</h4>
                        <p>{node.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. CTA underneath right-side diagram */}
            <div className="vol-hex-cta">
              <p className="vol-hex-cta__text">Ready to make a difference?</p>
              <button 
                type="button" 
                onClick={onRegister} 
                className="btn btn-primary vol-hex-cta__btn"
              >
                Become a Volunteer
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function AlkhidmatVolunteer() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStory, setActiveStory] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceArea: 'Healthcare Camps',
    notes: '',
  });

  const servicesRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollServices = (direction) => {
    if (servicesRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      servicesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        serviceArea: 'Healthcare Camps',
        notes: '',
      });
    }, 2500);
  };

  return (
    <div className="vol-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="vol-hero" style={{ backgroundImage: `url(${heroBgImg})` }}>
        <div className="vol-hero__overlay"></div>
        <div className="container vol-hero__container">
          <div className="vol-hero__content">
            <h1 className="vol-hero__title">
              Become an <br />
              <span className="vol-hero__highlight">Alkhidmat Volunteer</span>
            </h1>
            <p className="vol-hero__desc">
              Join thousands of volunteers working together to serve humanity through compassion, relief, education, healthcare, and community development.
            </p>
            <div className="vol-hero__actions">
              <button onClick={() => setShowModal(true)} className="btn btn-primary vol-hero__btn">
                Become a Volunteer
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <a href="#services-section" className="btn btn-outline btn-outline--white vol-hero__btn">
                Explore Opportunities
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Volunteer Statistics */}
            <div className="vol-hero__stats">
              <div className="vol-hero__stat-item">
                <div className="vol-hero__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="vol-hero__stat-text">
                  <strong>5,000+</strong>
                  <span>Active Volunteers</span>
                </div>
              </div>

              <div className="vol-hero__stat-divider"></div>

              <div className="vol-hero__stat-item">
                <div className="vol-hero__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="vol-hero__stat-text">
                  <strong>50+</strong>
                  <span>Cities</span>
                </div>
              </div>

              <div className="vol-hero__stat-divider"></div>

              <div className="vol-hero__stat-item">
                <div className="vol-hero__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="vol-hero__stat-text">
                  <strong>100+</strong>
                  <span>Community Drives Every Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY VOLUNTEER WITH US (HEXAGON WHEEL) ── */}
      <HexagonImpactWheel onRegister={() => setShowModal(true)} />

      {/* ── 3. CHOOSE YOUR AREA OF SERVICE ── */}
      <section className="section vol-services" id="services-section">
        <div className="container">
          <div className="vol-services__banner">
            <div className="vol-services__header">
              <div>
                <span className="vol-services__tag">VOLUNTEER OPPORTUNITIES</span>
                <h2 className="vol-services__title">Choose Your Area of Service</h2>
              </div>

              <div className="vol-services__arrows">
                <button
                  className="vol-services__arrow-btn"
                  onClick={() => scrollServices('left')}
                  aria-label="Scroll Left"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className="vol-services__arrow-btn"
                  onClick={() => scrollServices('right')}
                  aria-label="Scroll Right"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="vol-services__grid" ref={servicesRef}>
              {serviceAreas.map((area) => (
                <div key={area.id} className="vol-service-card">
                  <div className="vol-service-card__icon">{area.icon}</div>
                  <h3 className="vol-service-card__title">{area.title}</h3>
                  <button
                    className="vol-service-card__btn"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, serviceArea: area.title }));
                      setShowModal(true);
                    }}
                    aria-label={`Register for ${area.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 & 8. VOLUNTEER STORIES & EVENT GALLERY ── */}
      <section className="section vol-stories-gallery">
        <div className="container vol-sg__container">
          {/* Volunteer Stories Column */}
          <div className="vol-stories">
            <div className="vol-stories__header">
              <div>

                <h2 className="section-title">Voices of Our Volunteers</h2>
              </div>
              <a href="#testimonial" className="vol-stories__link">View All Stories &rarr;</a>
            </div>

            <div className="vol-testimonial-card" id="testimonial">
              <div className="vol-testimonial-card__quote-mark">“</div>
              <div className="vol-testimonial-card__inner">
                <div className="vol-testimonial-card__avatar">
                  <img src={testimonials[activeStory].avatar} alt={testimonials[activeStory].author} />
                </div>
                <div className="vol-testimonial-card__content">
                  <p className="vol-testimonial-card__text">
                    "{testimonials[activeStory].quote}"
                  </p>
                  <h4 className="vol-testimonial-card__name">{testimonials[activeStory].author}</h4>
                  <span className="vol-testimonial-card__role">{testimonials[activeStory].role}</span>
                  <div className="vol-testimonial-card__stars">
                    {[...Array(testimonials[activeStory].rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="vol-testimonial-card__controls">
                <div className="vol-testimonial-card__dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${activeStory === index ? 'active' : ''}`}
                      onClick={() => setActiveStory(index)}
                      aria-label={`Go to story ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="vol-testimonial-card__arrows">
                  <button
                    className="arrow-btn"
                    onClick={() => setActiveStory((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    aria-label="Previous story"
                  >
                    ‹
                  </button>
                  <button
                    className="arrow-btn"
                    onClick={() => setActiveStory((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    aria-label="Next story"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Event Gallery Column */}
          <div className="vol-gallery">
            <div className="vol-gallery__header">
              <div>

                <h2 className="section-title">Moments of Service</h2>
              </div>
              <Link to="/events-community-activities" className="vol-gallery__link">View Full Gallery &rarr;</Link>
            </div>

            <div className="vol-gallery__grid">
              <div className="vol-gallery__item">
                <img src={gal1} alt="Flood relief efforts" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal2} alt="Volunteer team in action" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal3} alt="Orphan Care support activity" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal4} alt="Ramzan Food Distribution" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal5} alt="Tree Plantation drive" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal6} alt="Medical Camp volunteers" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="section vol-faq">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="vol-faq__grid">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`vol-faq__item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="vol-faq__question">
                  <h3>{faq.q}</h3>
                  <span className="vol-faq__toggle">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="vol-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. BOTTOM CTA SECTION ── */}
      <section className="vol-bottom-cta">
        <div className="container">
          <div className="vol-bottom-cta__inner">
            <div className="vol-bottom-cta__left">
              <div className="vol-bottom-cta__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div>
                <h2>Ready to Make a Difference?</h2>
                <p>Become part of a nationwide volunteer network dedicated to serving humanity and uplifting communities.</p>
              </div>
            </div>

            <div className="vol-bottom-cta__right">
              <button onClick={() => setShowModal(true)} className="btn btn-white vol-bottom-cta__btn">
                Register as Volunteer &rarr;
              </button>
              <Link to="/contact" className="btn btn-outline-white vol-bottom-cta__btn">
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. REGISTRATION MODAL ── */}
      {showModal && (
        <div className="vol-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="vol-modal" onClick={(e) => e.stopPropagation()}>
            <button className="vol-modal__close" onClick={() => setShowModal(false)}>
              &times;
            </button>

            {formSubmitted ? (
              <div className="vol-modal__success">
                <div className="vol-modal__success-icon">✓</div>
                <h3>Registration Submitted!</h3>
                <p>Thank you for signing up to volunteer with Alkhidmat Foundation. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="vol-modal__title">Register as Alkhidmat Volunteer</h3>
                <p className="vol-modal__sub">Join our volunteer network and help serve humanity across Pakistan.</p>

                <form onSubmit={handleFormSubmit} className="vol-modal__form">
                  <div className="vol-modal__field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="vol-modal__field-group">
                    <div className="vol-modal__field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="vol-modal__field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="vol-modal__field-group">
                    <div className="vol-modal__field">
                      <label>City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Lahore, Karachi, Islamabad..."
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="vol-modal__field">
                      <label>Preferred Service Area</label>
                      <select
                        name="serviceArea"
                        value={formData.serviceArea}
                        onChange={handleInputChange}
                      >
                        {serviceAreas.map((sa) => (
                          <option key={sa.id} value={sa.title}>
                            {sa.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="vol-modal__field">
                    <label>Additional Notes / Skills</label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Tell us briefly about your availability or skills..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary vol-modal__submit">
                    Submit Registration &rarr;
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AlkhidmatVolunteer;
