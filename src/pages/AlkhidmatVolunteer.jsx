import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartHandshake, Heart, GraduationCap, ShieldAlert, Medal, Network } from 'lucide-react';
import './AlkhidmatVolunteer.css';

/* ── Asset Imports ── */
import heroBgImg from '../assets/volunteer/hero_bg.jpg';
import whyJoinImg from '../assets/volunteer/why_join.jpg';
import driveTreeImg from '../assets/volunteer/drive_tree.jpg';
import driveFoodImg from '../assets/volunteer/drive_food.jpg';
import driveMedicalImg from '../assets/volunteer/drive_medical.jpg';
import ayeshaImg from '../assets/volunteer/ayesha.jpg';

import gal1 from '../assets/events/flood_relief.png';
import gal2 from '../assets/events/volunteer-1.png';
import gal3 from '../assets/events/volunteer_conference.png';
import gal4 from '../assets/volunteer/drive_food.jpg';
import gal5 from '../assets/volunteer/drive_tree.jpg';
import gal6 from '../assets/volunteer/drive_medical.jpg';
import gal7 from '../assets/events/ramzan.png';
import gal8 from '../assets/events/plantation.png';
import gal9 from '../assets/events/medical.png';

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

const HexagonImpactWheel = () => {
  const nodes = [
    { title: 'Certificates & Recognition', desc: 'Earn volunteer certificates for your contributions.', colorClass: 'vol-hex__text--amber', position: 'top', tooltipPos: 'top' },
    { title: 'Leadership', desc: 'Develop teamwork and leadership abilities.', colorClass: 'vol-hex__text--sky', position: 'top-right', tooltipPos: 'right' },
    { title: 'Disaster Relief', desc: 'Become part of emergency rescue missions.', colorClass: 'vol-hex__text--red', position: 'bottom-right', tooltipPos: 'right' },
    { title: 'Professional Training', desc: 'Receive structured volunteer orientation.', colorClass: 'vol-hex__text--gray', position: 'bottom', tooltipPos: 'bottom' },
    { title: 'Serve Humanity', desc: 'Make a meaningful impact on communities.', colorClass: 'vol-hex__text--blue', position: 'bottom-left', tooltipPos: 'left' },
    { title: 'Networking', desc: 'Work alongside community leaders.', colorClass: 'vol-hex__text--teal', position: 'top-left', tooltipPos: 'left' },
  ];

  return (
    <section className="vol-hex-section">
      <div className="container">
        <div className="vol-hex-mobile-header">
          <h2 className="section-title text-center">Why Volunteer With Alkhidmat?</h2>
        </div>
        <div className="vol-hex-grid">
          {/* Left Column Image */}
          <motion.div 
            className="vol-hex-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="vol-hex-image-wrapper">
              <img src={whyJoinImg} alt="Why Join Alkhidmat" className="vol-hex-hero-img" />
            </div>
          </motion.div>

          {/* Right Column Honeycomb */}
          <div className="vol-hex-radial-wrapper">
            {/* Animated SVG Connectors */}
            <svg className="vol-hex-connectors" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
              <motion.line x1="500" y1="500" x2="500" y2="150" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
              <motion.line x1="500" y1="500" x2="800" y2="325" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
              <motion.line x1="500" y1="500" x2="800" y2="675" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
              <motion.line x1="500" y1="500" x2="500" y2="850" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
              <motion.line x1="500" y1="500" x2="200" y2="675" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
              <motion.line x1="500" y1="500" x2="200" y2="325" stroke="rgba(2, 84, 164, 0.25)" strokeWidth="3" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }} />
            </svg>

            {/* Center Hexagon */}
            <motion.div 
              className="vol-hex-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="vol-hex-drop-shadow vol-hex-drop-shadow--center">
                <div className="vol-hex-shape vol-hex-shape--large">
                  <div className="vol-hex-shape__inner vol-hex-shape__inner--center">
                    <h3>WHY JOIN</h3>
                    <h2>ALKHIDMAT?</h2>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Satellite Hexagons */}
            {nodes.map((node, i) => (
              <motion.div 
                key={i} 
                className={`vol-hex-satellite vol-hex-satellite--${node.position}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), type: 'spring', stiffness: 100 }}
              >
                <div className="vol-hex-drop-shadow">
                  <div className="vol-hex-shape vol-hex-shape--small">
                    <div className="vol-hex-shape__inner vol-hex-shape__inner--small">
                      <h4 className={`vol-hex-title ${node.colorClass}`}>{node.title}</h4>
                    </div>
                  </div>
                </div>
                <div className={`vol-hex-desc-tooltip vol-hex-desc-tooltip--${node.tooltipPos}`}>
                  <p className="vol-hex-desc">{node.desc}</p>
                </div>
              </motion.div>
            ))}
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
      <HexagonImpactWheel />

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

      {/* ── 4 & 5. HOW IT WORKS & UPCOMING DRIVES ── */}
      <section className="section vol-journey-drives">
        <div className="container vol-jd__container">
          {/* Left Column: Volunteer Journey */}
          <div className="vol-journey">

            <h2 className="section-title">Start Your Volunteer Journey</h2>

            <div className="vol-journey__timeline">
              <div className="vol-journey__step">
                <div className="vol-journey__badge">1</div>
                <div className="vol-journey__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="vol-journey__step-title">Apply Online</h3>
                <p className="vol-journey__step-desc">Fill out the volunteer registration form.</p>
              </div>

              <div className="vol-journey__step">
                <div className="vol-journey__badge">2</div>
                <div className="vol-journey__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="vol-journey__step-title">Application Review</h3>
                <p className="vol-journey__step-desc">Our team will review your application.</p>
              </div>

              <div className="vol-journey__step">
                <div className="vol-journey__badge">3</div>
                <div className="vol-journey__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <h3 className="vol-journey__step-title">Orientation Session</h3>
                <p className="vol-journey__step-desc">Attend an orientation and training session.</p>
              </div>

              <div className="vol-journey__step">
                <div className="vol-journey__badge">4</div>
                <div className="vol-journey__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="vol-journey__step-title">Join Activities</h3>
                <p className="vol-journey__step-desc">Start participating in volunteer activities.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Drives */}
          <div className="vol-drives">
            <div className="vol-drives__header">
              <div>

                <h2 className="section-title">Join Our Next Volunteer Drive</h2>
              </div>
              <Link to="/events-community-activities" className="vol-drives__link">
                View All Drives &rarr;
              </Link>
            </div>

            <div className="vol-drives__grid">
              {/* Drive Card 1 */}
              <div className="vol-drive-card">
                <div className="vol-drive-card__img">
                  <img src={driveTreeImg} alt="Tree Plantation Drive" loading="lazy" />
                </div>
                <div className="vol-drive-card__body">
                  <h3>Tree Plantation Drive</h3>
                  <div className="vol-drive-card__meta">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      Lahore
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      12 Sept 2026
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      120 Volunteers Needed
                    </span>
                  </div>
                  <button onClick={() => setShowModal(true)} className="btn btn-primary vol-drive-card__btn">
                    Register Now &rarr;
                  </button>
                </div>
              </div>

              {/* Drive Card 2 */}
              <div className="vol-drive-card">
                <div className="vol-drive-card__img">
                  <img src={driveFoodImg} alt="Food Distribution" loading="lazy" />
                </div>
                <div className="vol-drive-card__body">
                  <h3>Food Distribution</h3>
                  <div className="vol-drive-card__meta">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      Faisalabad
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      25 Sept 2026
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      80 Volunteers Needed
                    </span>
                  </div>
                  <button onClick={() => setShowModal(true)} className="btn btn-primary vol-drive-card__btn">
                    Register Now &rarr;
                  </button>
                </div>
              </div>

              {/* Drive Card 3 */}
              <div className="vol-drive-card">
                <div className="vol-drive-card__img">
                  <img src={driveMedicalImg} alt="Medical Camp" loading="lazy" />
                </div>
                <div className="vol-drive-card__body">
                  <h3>Medical Camp</h3>
                  <div className="vol-drive-card__meta">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      Multan
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                      5 Oct 2026
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      Doctors & Volunteers
                    </span>
                  </div>
                  <button onClick={() => setShowModal(true)} className="btn btn-primary vol-drive-card__btn">
                    Register Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. IMPACT STATISTICS ── */}
      <section className="section vol-impact">
        <div className="container">
          <div className="vol-impact__banner">
            <div className="vol-impact__header">

              <h2 className="section-title">Your Time Creates a Lasting Impact</h2>
            </div>

            <div className="vol-impact__grid">
              <div className="vol-impact__item">
                <div className="vol-impact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="vol-impact__text">
                  <h3>12,500+</h3>
                  <p>Registered Volunteers</p>
                </div>
              </div>

              <div className="vol-impact__item">
                <div className="vol-impact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <div className="vol-impact__text">
                  <h3>950+</h3>
                  <p>Campaigns Completed</p>
                </div>
              </div>

              <div className="vol-impact__item">
                <div className="vol-impact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="vol-impact__text">
                  <h3>2 Million+</h3>
                  <p>Lives Impacted</p>
                </div>
              </div>

              <div className="vol-impact__item">
                <div className="vol-impact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="vol-impact__text">
                  <h3>50+</h3>
                  <p>Cities Covered</p>
                </div>
              </div>
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
                <img src={gal1} alt="Volunteer activity 1" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal2} alt="Volunteer activity 2" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal3} alt="Volunteer activity 3" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal4} alt="Volunteer activity 4" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal5} alt="Volunteer activity 5" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal6} alt="Volunteer activity 6" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal7} alt="Ramzan Food Distribution" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal8} alt="Tree Plantation" loading="lazy" />
              </div>
              <div className="vol-gallery__item">
                <img src={gal9} alt="Medical Camp" loading="lazy" />
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
