import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Healthcare.css';
import {
  healthcareHeroStats,
  healthcareImpactCounters,
  healthcareServices,
  healthcareTimeline,
  healthcareDoctors,
  healthcareFaqs,
} from '../data/healthcareData';
import heroDoctorImg from '../assets/health_services_program.png';
import missionImg from '../assets/akfl-1-new.png';
import storyChildImg from '../assets/akfl-3.jpeg';
import videoThumbImg from '../assets/akfl-2-new.png';
import doc1Img from '../assets/akfl-1.jpeg';
import doc2Img from '../assets/akfl-2.jpeg';
import doc3Img from '../assets/akfl-3.jpeg';
import doc4Img from '../assets/banoqabil_program.jpeg';
import gallery1 from '../assets/health_services_program.png';
import gallery2 from '../assets/akfl-1.jpeg';
import gallery3 from '../assets/akfl-2.jpeg';
import gallery4 from '../assets/wash_img.png';
import gallery5 from '../assets/disaster_management.png';

const doctorImages = [doc1Img, doc2Img, doc3Img, doc4Img];

function Healthcare() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="hc-page">

      {/* ── 1. HERO ── */}
      <section className="hc-hero" aria-label="Healthcare Hero">
        <div className="container hc-hero__inner">
          <div className="hc-hero__content">
            <h1 className="hc-hero__title">
              Delivering Quality<br />
              <span className="hc-hero__title--highlight">Healthcare with Compassion</span>
            </h1>
            <p className="hc-hero__desc">
              Alkhidmat Foundation Pakistan is committed to providing accessible and compassionate healthcare services to millions across Pakistan.
            </p>
            <div className="hc-hero__actions">
              <a href="#donate-banner" className="btn hc-hero__btn-primary">
                Support Healthcare
              </a>
              <a href="#video-highlights" className="btn hc-hero__btn-outline">
                Watch Our Impact
              </a>
            </div>
          </div>
          <div className="hc-hero__visual">
            <div className="hc-hero__img-wrap">
              <img src={heroDoctorImg} alt="Doctor with young patient" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HERO STATS BAR ── */}
      <section className="hc-stats" aria-label="Healthcare Stats">
        <div className="container">
          <div className="hc-stats__grid">
            {healthcareHeroStats.map((stat) => (
              <div className="hc-stats__card" key={stat.id}>
                <div className="hc-stats__icon-bg" aria-hidden="true" />
                <strong className="hc-stats__value">{stat.value}</strong>
                <span className="hc-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MISSION & IMPACT ── */}
      <section className="hc-mission section" aria-labelledby="mission-heading">
        <div className="container hc-mission__inner">
          <div className="hc-mission__visual">
            <div className="hc-mission__circle-img">
              <img src={missionImg} alt="Doctor consulting patient online" />
            </div>
          </div>
          <div className="hc-mission__content">
            <h2 id="mission-heading">Healthcare Mission</h2>
            <p>
              We Alkhidmat Foundation Pakistan to support health infrastructure, diagnostic facilities, emergency relief services to enable healthcare accessibility for vulnerable communities across Pakistan.
            </p>

            <div className="hc-impact-box">
              <h3>Healthcare Impact</h3>
              <p className="hc-impact-sub">Medical Healthcare</p>
              <div className="hc-impact__grid">
                {healthcareImpactCounters.map((item) => (
                  <div className="hc-impact__item" key={item.label}>
                    <strong className="hc-impact__value">{item.value}</strong>
                    <span className="hc-impact__label">{item.label}</span>
                    <div className="hc-impact__bar">
                      <div className="hc-impact__fill" style={{ width: item.progress }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. HEALTHCARE SERVICES ── */}
      <section className="hc-services section" aria-labelledby="services-heading">
        <div className="container">
          <div className="hc-section-header">
            <h2 id="services-heading">Healthcare Services</h2>
            <p className="section-subtitle">Providing comprehensive medical services to communities in need</p>
          </div>
          <div className="hc-services__grid">
            {healthcareServices.map((service) => (
              <div className="hc-services__card" key={service.id}>
                <div className="hc-services__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SUCCESS STORIES ── */}
      <section className="hc-stories" aria-label="Patient Success Stories">
        <div className="container">
          <div className="hc-stories__card">
            <div className="hc-stories__bg-img">
              <img src={storyChildImg} alt="Child smiling after healthcare treatment" />
            </div>
            <div className="hc-stories__content">
              <span className="hc-stories__quote-icon">“</span>
              <blockquote>
                "Alkhidmat's medical camp provided my son with immediate treatment when we had no access to healthcare."
              </blockquote>
              <div className="hc-stories__author">
                <strong>Simran Riaz</strong>
                <span>Alkhidmat Beneficiary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VIDEO HIGHLIGHTS ── */}
      <section id="video-highlights" className="hc-video section" aria-labelledby="video-heading">
        <div className="container text-center">
          <h2 id="video-heading" className="section-title">Video Highlights</h2>
          <div className="hc-video__card">
            <img src={videoThumbImg} alt="Healthcare documentary video thumbnail" />
            <div className="hc-video__overlay">
              <span className="hc-video__title">Featured Healthcare Documentary</span>
              <button className="hc-video__play" aria-label="Play healthcare video">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. GALLERY ── */}
      <section className="hc-gallery section" aria-labelledby="gallery-heading">
        <div className="container text-center">
          <h2 id="gallery-heading" className="section-title">Gallery</h2>
          <div className="hc-gallery__grid">
            <div className="hc-gallery__item hc-gallery__item--large">
              <img src={gallery1} alt="Medical clinic" />
            </div>
            <div className="hc-gallery__item">
              <img src={gallery2} alt="Doctor treating child" />
            </div>
            <div className="hc-gallery__item">
              <img src={gallery3} alt="Medical camp" />
            </div>
            <div className="hc-gallery__item">
              <img src={gallery4} alt="Doctor consultation" />
            </div>
            <div className="hc-gallery__item">
              <img src={gallery5} alt="Ambulance unit" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. HEALTHCARE JOURNEY (TIMELINE) ── */}
      <section className="hc-timeline section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="hc-section-header text-center">
            <h2 id="timeline-heading">Healthcare Journey</h2>
          </div>
          <div className="hc-timeline__vertical">
            {healthcareTimeline.map((item, index) => (
              <div className="hc-timeline__item" key={item.stage}>
                <div className="hc-timeline__dot" aria-hidden="true" />
                <div className="hc-timeline__content">
                  <h3>{item.stage}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. VOLUNTEERS / DOCTORS ── */}
      <section className="hc-doctors section" aria-labelledby="doctors-heading">
        <div className="container text-center">
          <h2 id="doctors-heading" className="section-title">Volunteers</h2>
          <p className="section-subtitle">Dedicated medical professionals serving humanity across Pakistan.</p>

          <div className="hc-doctors__grid">
            {healthcareDoctors.map((doc, i) => (
              <div className="hc-doctors__card" key={doc.id}>
                <div className="hc-doctors__img">
                  <img src={doctorImages[i]} alt={doc.name} />
                </div>
                <div className="hc-doctors__body">
                  <h3>{doc.name}</h3>
                  <p className="hc-doctors__role">{doc.role}</p>
                  <p className="hc-doctors__desc">{doc.desc}</p>
                  <a href="#show-more" className="hc-doctors__link">Show more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. JOIN OUR MEDICAL MISSION CTA ── */}
      <section className="hc-mission-cta" aria-label="Join Medical Mission">
        <div className="container text-center">
          <h2>Join Our Medical Mission</h2>
          <p>Alkhidmat Foundation Pakistan is a humanitarian organization dedicated to providing healthcare services.</p>
          <a href="#contact" className="btn hc-mission-cta__btn">Join Now</a>
        </div>
      </section>

      {/* ── 11. TRANSPARENCY SECTION ── */}
      <section className="hc-transparency section" aria-labelledby="transparency-heading">
        <div className="container text-center">
          <h2 id="transparency-heading" className="section-title">Transparency</h2>
          <p className="section-subtitle">Financial statement and reports audited by professionals.</p>

          <div className="hc-transparency__grid">
            {/* Chart 1 */}
            <div className="hc-transparency__card">
              <h3>Expenditures by Sector</h3>
              <div className="hc-chart-mockup">
                <div className="hc-chart-donut" />
                <ul className="hc-chart-legend">
                  <li><span className="dot dot--blue" /> Emergency Care</li>
                  <li><span className="dot dot--green" /> Maternal Health</li>
                  <li><span className="dot dot--orange" /> Diagnostics</li>
                  <li><span className="dot dot--purple" /> Medicine Relief</li>
                </ul>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="hc-transparency__card">
              <h3>Expectations by Donors</h3>
              <div className="hc-chart-line-mockup">
                <svg viewBox="0 0 300 150" fill="none" width="100%" height="150">
                  <path d="M10 120 Q 80 40, 150 80 T 290 20" stroke="#0254a4" strokeWidth="3" fill="none"/>
                  <path d="M10 120 Q 80 40, 150 80 T 290 20 L 290 150 L 10 150 Z" fill="rgba(2,84,164,0.1)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ACCORDION ── */}
      <section className="hc-faq section" aria-labelledby="hc-faq-heading">
        <div className="container">
          <div className="hc-faq__list">
            {healthcareFaqs.map((faq, index) => (
              <div key={faq.q} className={`hc-faq__item ${openFaq === index ? 'hc-faq__item--open' : ''}`}>
                <button className="hc-faq__q" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span className="hc-faq__icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && <div className="hc-faq__a"><p>{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. DONATION CTA BANNER ── */}
      <section id="donate-banner" className="hc-donate-banner" aria-label="Every Donation Helps Save Lives">
        <div className="hc-donate-banner__bg">
          <img src={heroDoctorImg} alt="Doctor caring for patient" />
          <div className="hc-donate-banner__overlay" />
        </div>
        <div className="container hc-donate-banner__inner text-center">
          <h2>Every Donation Helps Save Lives</h2>
          <p>Your generosity helps us provide healthcare services to vulnerable families.</p>
          <div className="hc-donate-banner__actions">
            <a href="#donate" className="btn hc-donate-banner__btn-white">Support Healthcare</a>
            <a href="#contact" className="btn hc-donate-banner__btn-outline">Contact Medical</a>
          </div>
        </div>
      </section>

      {/* ── 14. CONTACT SECTION ── */}
      <section id="contact" className="hc-contact section" aria-labelledby="contact-heading">
        <div className="container hc-contact__inner">
          <div className="hc-contact__info">
            <h2 id="contact-heading">Contact</h2>
            <p>Contact Info to Attend Service</p>

            <div className="hc-contact__details">
              <div className="hc-contact__item">
                <span className="hc-contact__icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@alkhidmat.com.pk">info@alkhidmat.com.pk</a>
                </div>
              </div>
              <div className="hc-contact__item">
                <span className="hc-contact__icon">☎</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+923000771601">+92 300 0771601</a>
                </div>
              </div>
              <div className="hc-contact__item">
                <span className="hc-contact__icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Alkhidmat Markaz, 106/M Block Gulberg III, Lahore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hc-contact__form-card">
            {submitted ? (
              <div className="hc-contact__success">Thank you! Your message has been sent.</div>
            ) : (
              <form onSubmit={handleContactSubmit} className="hc-contact__form">
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <textarea rows="4" required placeholder="Find your message"></textarea>
                <button type="submit" className="hc-contact__submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 15. CERTIFICATIONS ── */}
      <section className="hc-certifications section" aria-label="Certifications">
        <div className="container text-center">
          <h2 className="section-title">Certifications</h2>
          <div className="hc-certifications__grid">
            <div className="hc-certifications__item">
              <span className="hc-certifications__icon">⚙</span>
              <strong>Kafalat ASA</strong>
            </div>
            <div className="hc-certifications__item">
              <span className="hc-certifications__icon">🤝</span>
              <strong>Pakistan Philanthropy</strong>
            </div>
            <div className="hc-certifications__item">
              <span className="hc-certifications__icon">🏛</span>
              <strong>Government Recognized</strong>
            </div>
            <div className="hc-certifications__item">
              <span className="hc-certifications__icon">🌐</span>
              <strong>International Standards</strong>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Healthcare;
