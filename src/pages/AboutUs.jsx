import React from 'react';
import './AboutUs.css';

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
              <a href="/contact" className="btn btn-outline">Support Our Mission <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
            </div>
          </div>
          <div className="about-hero__collage">
            <div className="collage-col">
              <div className="collage-img shape-pill" style={{ background: '#e2e8f0', height: '240px' }}></div>
            </div>
            <div className="collage-col mt-2">
              <div className="collage-img shape-pill" style={{ background: '#cbd5e1', height: '320px' }}></div>
            </div>
            <div className="collage-col">
              <div className="collage-img shape-pill" style={{ background: '#94a3b8', height: '300px' }}></div>
            </div>
            <div className="collage-col mt-4">
              <div className="collage-img shape-pill" style={{ background: '#64748b', height: '220px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission container">
        <div className="vm-card">
          <div className="vm-icon bg-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
          <div className="vm-text">
            <h3>Our Vision</h3>
            <p>A compassionate, empowered, and self-reliant society where every individual can live a life of dignity, hope and opportunity.</p>
          </div>
        </div>
        <div className="vm-card border-green">
          <div className="vm-icon bg-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          </div>
          <div className="vm-text">
            <h3>Our Mission</h3>
            <p>To serve humanity through sustainable programs and emergency relief, focusing on education, healthcare, livelihood, social welfare and disaster management.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values container">
        <div className="value-item">
          <div className="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></div>
          <div>
            <h4>Transparency</h4>
            <p>We operate with honesty and accountability in every step we take.</p>
          </div>
        </div>
        <div className="value-item">
          <div className="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
          <div>
            <h4>Inclusivity</h4>
            <p>We believe in equal opportunity and respect for all individuals.</p>
          </div>
        </div>
        <div className="value-item">
          <div className="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
          <div>
            <h4>Rapid Response</h4>
            <p>We act swiftly in times of crisis to deliver immediate relief.</p>
          </div>
        </div>
        <div className="value-item">
          <div className="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
          <div>
            <h4>Dignity</h4>
            <p>We uphold the dignity of every individual we serve.</p>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section id="journey" className="journey-section container">
        <div className="journey-header">
          <span className="badge badge-blue">OUR JOURNEY</span>
          <h2>A Legacy of Service<br/>and Impact</h2>
          <p>From a small initiative to a nationwide humanitarian network — our journey continues with your trust.</p>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-img" style={{background: '#cbd5e1'}}></div>
              <div className="timeline-text">
                <span className="timeline-year">1990</span>
                <h3>The Genesis Foundation</h3>
                <p>Alkhidmat Foundation Pakistan was established with a mission to serve humanity selflessly.</p>
              </div>
            </div>
          </div>
          
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-text text-right">
                <span className="timeline-year">1997</span>
                <h3>Expanding Humanitarian Services</h3>
                <p>Expanded our services to education, healthcare, and social welfare programs across Pakistan.</p>
              </div>
              <div className="timeline-img" style={{background: '#94a3b8'}}></div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-img" style={{background: '#cbd5e1'}}></div>
              <div className="timeline-text">
                <span className="timeline-year">2005</span>
                <h3>Community Empowerment</h3>
                <p>Launched sustainable livelihood programs to empower communities and reduce poverty.</p>
              </div>
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

      {/* Governance */}
      <section className="governance-section container">
        <div className="gov-grid">
          <div className="gov-card col-span-1">
            <span className="badge badge-blue">GOVERNANCE & TRANSPARENCY</span>
            <h3>Governance Structure</h3>
            <p>A strong governance framework ensures accountability, transparency, and ethical management at every level of our organization.</p>
            <div className="gov-diagram" style={{height: '120px', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-sm text-gray-500">Diagram View</span>
            </div>
          </div>
          <div className="gov-card col-span-1 bg-dark text-white">
            <h3>Audited Reports</h3>
            <p>We maintain complete financial transparency. Download our annual audited reports.</p>
            <div className="pdf-icon-large mt-4">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <button className="btn btn-green mt-4 w-100"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download Annual Report</button>
          </div>
          <div className="gov-card col-span-1">
            <h3>Accountability Framework</h3>
            <p>Our monitoring and evaluation system ensures that resources are used responsibly and reach those who need them most.</p>
            <div className="mt-4" style={{display: 'flex', justifyContent: 'center', opacity: 0.5}}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
