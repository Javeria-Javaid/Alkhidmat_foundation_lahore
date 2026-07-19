import React, { useState } from 'react';
import './DonationPanel.css';

function DonationPanel({ activeCampaign, campaigns, onCampaignChange }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  if (!activeCampaign) return null;

  const handlePrev = () => {
    const currentIndex = campaigns.findIndex(c => c.id === activeCampaign.id);
    const newIndex = (currentIndex - 1 + campaigns.length) % campaigns.length;
    onCampaignChange(campaigns[newIndex].id);
  };

  const handleNext = () => {
    const currentIndex = campaigns.findIndex(c => c.id === activeCampaign.id);
    const newIndex = (currentIndex + 1) % campaigns.length;
    onCampaignChange(campaigns[newIndex].id);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormError('');
    setFormSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validation
    if (formData.name.trim().length < 3) {
      setFormError('Full Name must be at least 3 characters long.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setFormError('Please enter a valid phone number (10-15 digits).');
      return;
    }

    if (!activeCampaign || !activeCampaign.id) {
      setFormError('Please select a valid cause.');
      return;
    }

    // Simulate API call
    setFormSuccess('Thank you for your generous donation. Redirecting to secure payment gateway...');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="donation-panel-wrapper container" id="donate-section">
      <div className="donation-panel">
        
        {/* LEFT NAV ARROW */}
        <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous Campaign">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        {/* LEFT CONTEXT PANEL */}
        <div className="donation-panel__context" key={`context-${activeCampaign.id}`}>
          <div className="appeal-tag">
            <span className="yellow-dot"></span>
            {activeCampaign.category}
          </div>
          <h2 className="donation-panel__title">{activeCampaign.donationTitle}</h2>
          <p className="donation-panel__desc">{activeCampaign.donationDescription}</p>
          
          <div className="donation-panel__badges">
            {activeCampaign.badges.map((badge, idx) => (
              <span key={idx} className="badge-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* DESKTOP SEPARATOR */}
        <div className="donation-panel__divider"></div>

        {/* RIGHT FORM PANEL */}
        <div className="donation-panel__form-section">
          {formError && <div className="form-alert form-alert--error">{formError}</div>}
          {formSuccess && <div className="form-alert form-alert--success">{formSuccess}</div>}
          
          <form className="donation-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Full Name" required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email Address" required />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+92 300 0000000" required />
                </div>
              </div>

              <div className="form-group">
                <label>Select Cause</label>
                <div className="input-wrapper select-wrapper">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  <select 
                    value={activeCampaign.id} 
                    onChange={(e) => onCampaignChange(e.target.value)}
                    required
                  >
                    {campaigns.map(camp => (
                      <option key={camp.id} value={camp.id}>{camp.formCause}</option>
                    ))}
                  </select>
                  <svg className="select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>

            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-donate">
                DONATE NOW
              </button>
            </div>
          </form>

          {/* TRUST STRIP */}
          <div className="trust-strip">
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Secure Donation
            </div>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              256-bit SSL Encryption
            </div>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Trusted by 2M+ donors
            </div>
          </div>

        </div>

        {/* RIGHT NAV ARROW */}
        <button className="nav-arrow next" onClick={handleNext} aria-label="Next Campaign">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

      </div>
    </div>
  );
}

export default DonationPanel;
