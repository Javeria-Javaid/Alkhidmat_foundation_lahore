import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-content">
            <h2>Join Our Newsletter</h2>
            <p>Subscribe to receive updates on our latest projects, campaigns, and emergency appeals directly in your inbox.</p>
          </div>
          {subscribed ? (
            <div style={{ color: '#ffffff', background: 'rgba(255,255,255,0.2)', padding: '12px 20px', borderRadius: '8px', fontWeight: 600 }}>
              ✓ Thank you for subscribing to Alkhidmat updates!
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
