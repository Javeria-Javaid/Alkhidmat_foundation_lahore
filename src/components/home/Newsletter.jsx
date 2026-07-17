import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-content">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe to receive updates on our latest projects, campaigns, and emergency appeals directly in your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
