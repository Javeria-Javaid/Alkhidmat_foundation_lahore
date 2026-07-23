import React, { useState } from 'react';
import './BanoQabil.css';
import heroImg from '../assets/banoqabil_program.jpeg';

// Data arrays for modularity
const stats = [
  { id: 1, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, number: '1.5M+', label: 'Registered Students' },
  { id: 2, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>, number: '100K+', label: 'Graduates' },
  { id: 3, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>, number: '175', label: 'IT Centers' },
  { id: 4, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, number: '65', label: 'Districts' },
];

const features = [
  'Industry Relevant Courses',
  'Professional Trainers',
  'Career Guidance',
  'Hands-on Projects',
  'Internship Opportunities',
  'Nationwide Campuses'
];

const courses = [
  { id: 1, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, title: 'Web Development', desc: 'Learn to build modern, responsive and dynamic websites.' },
  { id: 2, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>, title: 'Graphic Designing', desc: 'Create stunning visuals and designs for digital platforms.' },
  { id: 3, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, title: 'Digital Marketing', desc: 'Master SEO, social media and digital marketing strategies.' },
  { id: 4, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>, title: 'Cyber Security', desc: 'Learn to protect systems, networks and data from cyber threats.' },
  { id: 5, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a9 9 0 0 0-9 9v2c0 3 2 5 5 5h1a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3h1c3 0 5-2 5-5v-2a9 9 0 0 0-9-9z"></path></svg>, title: 'Artificial Intelligence', desc: 'Explore AI concepts and build intelligent applications.' },
  { id: 6, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, title: 'Freelancing', desc: 'Learn freelancing skills and work on global marketplaces.' },
];

const admissionSteps = [
  { id: 1, title: 'Apply Online', desc: 'Fill out the online application form.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
  { id: 2, title: 'Aptitude Test', desc: 'Appear in the aptitude test to assess skills.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15L11 17L15 13"></path></svg> },
  { id: 3, title: 'Interview', desc: 'Shortlisted candidates will be called for interview.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
  { id: 4, title: 'Training', desc: 'Selected students join the professional training program.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> },
  { id: 5, title: 'Incubation', desc: 'Work on real projects and enhance your practical skills.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> },
  { id: 6, title: 'Internship / Job', desc: 'Get internship opportunities and job placement.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
];

const whyChoose = [
  { id: 1, title: 'Free Education', desc: '100% free quality education for everyone regardless of background.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
  { id: 2, title: 'Career Opportunities', desc: 'We help you unlock better career and freelancing opportunities.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
  { id: 3, title: 'Nationwide Network', desc: '175+ IT centers in 65 districts across Pakistan.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> },
  { id: 4, title: 'Expert Trainers', desc: 'Learn from industry experts and experienced professionals.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
  { id: 5, title: 'Practical Projects', desc: 'Work on real-world projects to build your portfolio.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
  { id: 6, title: 'Recognized Certifications', desc: 'Receive certificates that add value to your career.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg> },
];

function BanoQabil() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.name.length < 3) {
      setFormStatus({ type: 'error', message: 'Name must be at least 3 characters long.' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    if (formData.phone.length < 10) {
      setFormStatus({ type: 'error', message: 'Please enter a valid phone number.' });
      return;
    }
    
    // Success
    setFormStatus({ type: 'success', message: 'Your enrollment inquiry has been submitted successfully!' });
    setFormData({ name: '', email: '', phone: '', city: '', course: '', message: '' });
    
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <main className="banoqabil-page">
      {/* 1. Hero Section */}
      <section className="bq-hero">
        <div className="container">
          <div className="bq-hero__content">
            <div className="bq-hero__left">
              <div className="bq-hero__badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                <span>BANO QABIL | FREE IT EDUCATION</span>
              </div>
              <h1 className="bq-hero__title">
                Become Future Ready<br/>
                with <span className="text-highlight">Free IT Education</span>
              </h1>
              <p className="bq-hero__desc">
                Join Pakistan's largest free IT education initiative and build your career with industry-focused digital skills.
              </p>
              <div className="bq-hero__actions">
                <a href="#enroll" className="btn btn-primary">
                  Enroll Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="https://banoqabil.pk/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-outline--light">
                  Visit Official Website
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>
              </div>
            </div>
            <div className="bq-hero__right">
              <div className="bq-hero__image-wrapper">
                <div className="bq-hero__overlay"></div>
                <img src={heroImg} alt="BanoQabil Students" className="bq-hero__img" />
                <div className="bq-hero__decorative-box"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <div className="bq-stats-wrapper">
        <div className="container">
          <div className="bq-stats">
            {stats.map(stat => (
              <div key={stat.id} className="bq-stat-item">
                <div className="bq-stat-icon">{stat.icon}</div>
                <div className="bq-stat-text">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. About BanoQabil */}
      <section className="bq-about section">
        <div className="container">
          <div className="bq-about__inner">
            <div className="bq-about__visual">
              <img src={heroImg} alt="Empowering Youth" className="bq-about__img" />
              <button className="bq-about__play-btn" aria-label="Play video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </div>
            <div className="bq-about__content">
              <span className="section-tag section-tag--blue">ABOUT BANO QABIL</span>
              <h2 className="section-title">Empowering Pakistan's Youth</h2>
              <p className="bq-about__desc">
                Bano Qabil is an initiative by Alkhidmat Foundation Pakistan offering completely free IT and digital skills education to empower youth with modern technology and prepare them for a successful future.
              </p>
              <ul className="bq-features-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">Learn More About Us &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Courses */}
      <section className="bq-courses section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag section-tag--blue">POPULAR COURSES</span>
            <h2 className="section-title">Learn In-Demand Digital Skills</h2>
          </div>
          <div className="bq-courses-grid">
            {courses.map(course => (
              <div key={course.id} className="bq-course-card">
                <div className="bq-course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <a href="#" className="link-arrow">Explore &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Admission Process */}
      <section className="bq-process section">
        <div className="container text-center">
          <span className="section-tag section-tag--blue">YOUR JOURNEY</span>
          <h2 className="section-title mb-5">Our Admission Process</h2>
          
          <div className="bq-timeline">
            {admissionSteps.map((step, index) => (
              <div key={step.id} className="bq-step">
                <div className="bq-step__icon">
                  {step.icon}
                </div>
                <div className="bq-step__number">0{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose BanoQabil */}
      <section className="bq-why-choose section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag section-tag--yellow">WHY CHOOSE BANO QABIL?</span>
            <h2 className="section-title text-white">Benefits of the Program</h2>
          </div>
          <div className="bq-why-grid">
            {whyChoose.map(item => (
              <div key={item.id} className="bq-why-card">
                <div className="bq-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact & Enrollment Section */}
      <section id="enroll" className="bq-contact section">
        <div className="container">
          <div className="bq-contact__inner">
            <div className="bq-contact__info">
              <span className="section-tag section-tag--blue">GET IN TOUCH</span>
              <h2 className="section-title">Contact Us & Enroll Today</h2>
              <p className="bq-contact__desc">Have questions? Reach out to us or send your inquiry through the form.</p>
              
              <div className="bq-contact__details">
                <div className="bq-contact__item">
                  <div className="bq-contact__item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <strong>Office</strong>
                    <p>Alkhidmat Foundation Head Office<br/>3km Khayaban-e-Jinnah, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="bq-contact__item">
                  <div className="bq-contact__item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>info@banoqabil.org</p>
                  </div>
                </div>
                <div className="bq-contact__item">
                  <div className="bq-contact__item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>+92 32 8888 8515</p>
                  </div>
                </div>
                <div className="bq-contact__item">
                  <div className="bq-contact__item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <strong>Working Hours</strong>
                    <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bq-contact__form">
              <form onSubmit={handleFormSubmit} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-control" placeholder="Your email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" className="form-control" placeholder="03XX XXXXXXX" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <select name="city" className="form-control" value={formData.city} onChange={handleInputChange} required>
                      <option value="">Select your city</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Course Interested In</label>
                  <select name="course" className="form-control" value={formData.course} onChange={handleInputChange} required>
                    <option value="">Select a course</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" placeholder="Write your message here..." value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                
                {formStatus.message && (
                  <div className={`form-alert form-alert--${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button type="submit" className="btn btn-primary btn-full">
                  Submit Inquiry
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="bq-cta-banner">
        <div className="container">
          <div className="bq-cta-banner__inner">
            <div className="bq-cta-banner__content">
              <div className="bq-cta-banner__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.5 10.5L21 3"></path><path d="M16 2.5l5.5.5.5 5.5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
              </div>
              <div>
                <h2>Ready to Start Your IT Journey?</h2>
                <p>Join thousands of successful students and build your future with in-demand digital skills.</p>
              </div>
            </div>
            <div className="bq-cta-banner__actions">
              <a href="#enroll" className="btn btn-white">
                Enroll Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </a>
              <a href="https://banoqabil.pk/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-outline--white">
                Visit Official Website
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default BanoQabil;
