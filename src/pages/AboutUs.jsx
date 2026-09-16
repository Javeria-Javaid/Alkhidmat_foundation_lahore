import React from 'react';
import './AboutUs.css';

import img1 from '../assets/akfl-1-new.png';
import img2 from '../assets/wash_img.png';

function AboutUs() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <span className="badge badge-blue">ABOUT ALKHIDMAT</span>
            <h1 className="about-hero__title">Empowering Communities, Restoring Dignity.</h1>
            <p className="about-hero__desc">
              For over three decades, Alkhidmat Foundation Pakistan has been working relentlessly to uplift lives and build stronger, more resilient communities across Pakistan.
            </p>
            <div className="about-hero__actions">
              <a href="#journey" className="btn btn-primary">Explore Our Journey &rarr;</a>
              <a href="/contact" className="btn btn-outline btn-outline--white">Support Our Mission <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
            </div>
          </div>
          <div className="about-hero__single-image" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div className="single-img" style={{ backgroundImage: `url(${img1})`, height: '500px', width: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vm-section">
        <div className="vm-container">
          <div className="vm-header">
            <h2 className="vm-title">Our mission and vision statement</h2>
            <p className="vm-subtitle">
              This section describes the desired future position of Alkhidmat Foundation by defining our purpose, goals, and unwavering commitment to humanity.
            </p>
          </div>

          <div className="vm-composition">
            {/* Left Card: Vision */}
            <div className="vm-box vm-box--vision">
              <div className="vm-box__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3.5"></circle>
                </svg>
              </div>
              <h3 className="vm-box__title">Vision</h3>
              <p className="vm-box__text">
                To foster a self-reliant and compassionate society where everyone has the opportunity to live with dignity and hope.
              </p>
            </div>

            {/* Center Beneficiary Image with subtle brand backing */}
            <div className="vm-center">
              <div className="vm-center__backdrop" />
              <img 
                src={img2} 
                alt="Alkhidmat beneficiary child drinking clean water" 
                className="vm-center__img" 
                loading="lazy" 
              />
            </div>

            {/* Right Card: Mission */}
            <div className="vm-box vm-box--mission">
              <div className="vm-box__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="vm-box__title">Mission</h3>
              <p className="vm-box__text">
                To serve humanity unconditionally through sustainable and impactful programs in education, healthcare, and social welfare.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Leadership */}
      <section className="leadership-section container">
        <span className="badge badge-blue">LEADERSHIP</span>
        <h2>Guided by Compassion. Driven by Integrity.</h2>
        
        <div className="president-quote">
          <div className="president-img" style={{background: '#64748b'}}></div>
          <div className="quote-content">
            <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <blockquote>Our purpose is simple yet profound — to serve humanity with sincerity and to build a society where everyone has the opportunity to live with dignity and hope.</blockquote>
            <div className="president-signature">
              <div>
                <strong>Dr. Hafiz Muhammad Saad</strong>
                <span>President, Alkhidmat Foundation Pakistan</span>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_placeholder.svg" alt="Signature" style={{height: '40px', opacity: 0.5}} />
            </div>
          </div>
        </div>

        <h3 className="mt-5 mb-4">Executive Team & Board Members</h3>
        <div className="team-grid">
          {[
            {name: 'Engr. Muhammad Aamir Iqbal', role: 'Vice President'},
            {name: 'Dr. Farhat Abbas', role: 'Secretary General'},
            {name: 'Mr. Waseem Ahmed', role: 'Treasurer'},
            {name: 'Mr. Muhammad Zubair', role: 'General Manager'},
            {name: 'Mrs. Samina Zafar', role: 'Director Programs'}
          ].map(member => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar" style={{background: '#e2e8f0'}}></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <a href="#" className="linkedin-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}

export default AboutUs;
