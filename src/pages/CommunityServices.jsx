import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommunityServices.css';
import {
  communityHeroStats,
  communityServicesList,
  communityImpactStats,
  communityFaqs,
} from '../data/communityServicesData';
import heroImg from '../assets/akfl-1-new.png';
import aboutImg from '../assets/akfl-2-new.png';
import videoThumb from '../assets/akfl-3.jpeg';

function CommunityServices() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="cs-page">

      {/* ── 1. HERO ── */}
      <section className="cs-hero" aria-label="Community Services Hero">
        <div className="cs-hero__bg">
          <img src={heroImg} alt="Community services distribution" className="cs-hero__left-img" />
          <div className="cs-hero__overlay" />
        </div>
        <div className="container cs-hero__inner">
          <div className="cs-hero__content">
            <span className="cs-hero__badge">
              COMMUNITY SERVICES
            </span>
            <h1 className="cs-hero__title">
              Community<br />
              <span className="cs-hero__title--green">Services</span>
            </h1>
            <p className="cs-hero__desc">
              Building stronger communities through humanitarian support, healthcare, education and social welfare programs that improve lives across Pakistan.
            </p>
            <div className="cs-hero__actions">
              <a href="#assistance-form" className="btn cs-hero__btn-primary">
                Apply Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <Link to="/contact" className="btn cs-hero__btn-outline">
                Contact Us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side floating support card */}
          <div className="cs-hero__card">
            <div className="cs-hero__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              </svg>
            </div>
            <h3>Need Community<br />Support?</h3>
            <p>We are here to help you and your family.</p>
            <a href="#assistance-form" className="cs-hero__card-btn">
              Apply Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. FLOATING STATS BAR ── */}
      <section className="cs-stats" aria-label="Community Statistics">
        <div className="container">
          <div className="cs-stats__card">
            <div className="cs-stats__grid">
              {communityHeroStats.map((stat) => (
                <div className="cs-stats__item" key={stat.id}>
                  <div className="cs-stats__icon">{stat.icon}</div>
                  <div>
                    <strong className="cs-stats__value">{stat.value}</strong>
                    <span className="cs-stats__label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT SECTION ── */}
      <section className="cs-about section" aria-labelledby="about-heading">
        <div className="container cs-about__inner">
          <div className="cs-about__visual">
            <div className="cs-about__img-wrap">
              <img src={aboutImg} alt="Alkhidmat workers in community" />
            </div>
          </div>
          <div className="cs-about__content">
            <p className="cs-about__tag">ABOUT COMMUNITY SERVICES</p>
            <h2 id="about-heading">Building Better Communities</h2>
            <p>
              Pakistan faces numerous social challenges, including poverty, limited access to healthcare, education, and essential community services.
            </p>
            <p>
              Alkhidmat Community Services works to improve lives through sustainable welfare programs, empowering vulnerable families and promoting long-term community development.
            </p>
            <ul className="cs-about__grid-list">
              <li>
                <span className="cs-about__check">✓</span>
                <span>Community Welfare</span>
              </li>
              <li>
                <span className="cs-about__check">✓</span>
                <span>Social Development</span>
              </li>
              <li>
                <span className="cs-about__check">✓</span>
                <span>Health Support</span>
              </li>
              <li>
                <span className="cs-about__check">✓</span>
                <span>Emergency Relief</span>
              </li>
              <li>
                <span className="cs-about__check">✓</span>
                <span>Educational Assistance</span>
              </li>
              <li>
                <span className="cs-about__check">✓</span>
                <span>Sustainable Impact</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. COMMUNITY PROGRAMS / SERVICES ── */}
      <section className="cs-programs section" aria-labelledby="programs-heading">
        <div className="container">
          <div className="cs-section-header text-center">
            <p className="cs-programs__tag">OUR PROGRAMS</p>
            <h2 id="programs-heading">Our Community Services</h2>
          </div>
          <div className="cs-programs__grid">
            {communityServicesList.map((service) => (
              <div className="cs-programs__card" key={service.id}>
                <div className="cs-programs__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="cs-programs__arrow" aria-label={`More about ${service.title}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT SECTION ── */}
      <section className="cs-impact" aria-label="Community Impact">
        <div className="container">
          <div className="cs-impact__card">
            <p className="cs-impact__tag">OUR IMPACT</p>
            <div className="cs-impact__grid">
              {communityImpactStats.map((stat) => (
                <div className="cs-impact__item" key={stat.label}>
                  <strong className="cs-impact__value">{stat.value}</strong>
                  <span className="cs-impact__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TRANSFORMATION STORY ── */}
      <section className="cs-story section" aria-labelledby="story-heading">
        <div className="container cs-story__inner">
          <div className="cs-story__video">
            <div className="cs-story__img-wrap">
              <img src={videoThumb} alt="Community transformation story video thumbnail" />
              <button className="cs-story__play" aria-label="Play community story video">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
          </div>
          <div className="cs-story__content">
            <p className="cs-story__tag">COMMUNITY TRANSFORMATION STORIES</p>
            <h2 id="story-heading">See the Change We Create Together</h2>
            <p>
              Every act of kindness creates a ripple of change. Watch how our programs are transforming lives and bringing hope to communities across Pakistan.
            </p>
            <a href="#video" className="btn cs-story__btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. ASSISTANCE FORM ── */}
      <section className="cs-form-section section" id="assistance-form" aria-labelledby="form-heading">
        <div className="container cs-form__inner">
          {/* Left panel */}
          <div className="cs-form__info">
            <p className="cs-form__tag">APPLY FOR COMMUNITY ASSISTANCE</p>
            <h2 id="form-heading">Need Community Support?</h2>
            <p>
              If you or someone you know needs assistance through our Community Services Program, please fill out the form and our team will get in touch with you shortly.
            </p>
            <ul className="cs-form__checks">
              <li><span className="cs-form__check">✓</span> Easy & Simple Application</li>
              <li><span className="cs-form__check">✓</span> Secure & Confidential Information</li>
              <li><span className="cs-form__check">✓</span> Quick Response</li>
              <li><span className="cs-form__check">✓</span> Dedicated Support Team</li>
            </ul>
          </div>

          {/* Right panel form */}
          <div className="cs-form__card">
            {submitted ? (
              <div className="cs-form__success">
                <h3>Application Submitted!</h3>
                <p>Thank you. Our team will verify your information and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cs-form">
                <div className="cs-form__row">
                  <div className="cs-form__group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="Enter your full name" />
                  </div>
                  <div className="cs-form__group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="03XX XXXXXXX" />
                  </div>
                </div>

                <div className="cs-form__row">
                  <div className="cs-form__group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="Enter your email" />
                  </div>
                  <div className="cs-form__group">
                    <label>City *</label>
                    <select required>
                      <option value="">Select your city</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                    </select>
                  </div>
                </div>

                <div className="cs-form__row">
                  <div className="cs-form__group">
                    <label>Service Required *</label>
                    <select required>
                      <option value="">Select a service</option>
                      <option value="Community Welfare">Community Welfare</option>
                      <option value="Community Iftar">Community Iftar</option>
                      <option value="Winter Packages">Winter Packages</option>
                      <option value="Shadi Box">Shadi Box</option>
                      <option value="Wheelchair Support">Wheelchair Support</option>
                      <option value="Masjid Construction">Masjid Construction</option>
                    </select>
                  </div>
                  <div className="cs-form__group">
                    <label>CNIC (Optional)</label>
                    <input type="text" placeholder="Enter CNIC number" />
                  </div>
                </div>

                <div className="cs-form__group">
                  <label>Message</label>
                  <textarea rows="3" placeholder="Describe your request..."></textarea>
                </div>

                <button type="submit" className="cs-form__submit-btn">
                  Apply Now ✈
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ── */}
      <section className="cs-faq section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="cs-section-header text-center">
            <h2 id="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="cs-faq__grid">
            {communityFaqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`cs-faq__item ${openFaq === index ? 'cs-faq__item--open' : ''}`}
              >
                <button className="cs-faq__question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <svg
                    className="cs-faq__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="cs-faq__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="cs-cta" aria-label="Community Services CTA">
        <div className="container cs-cta__inner">
          <div className="cs-cta__left">
            <div className="cs-cta__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <div>
              <h2>Together We Can Build Better Communities</h2>
              <p>Join us in making a meaningful difference through compassion, service and community support.</p>
            </div>
          </div>
          <div className="cs-cta__actions">
            <a href="#assistance-form" className="btn cs-cta__btn-primary">
              Apply Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#donate" className="btn cs-cta__btn-green">
              Donate Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default CommunityServices;
