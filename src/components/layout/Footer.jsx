import React from 'react';
import logo from '../../assets/weblogo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Contact Bar */}
      <div className="footer__contact-bar">
        <div className="container footer__contact-inner">
          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M2 4l10 10L22 4"></path></svg>
            </div>
            <div className="footer__contact-content">
              <h4>Support Email</h4>
              <a href="mailto:info@alkhidmat.com.pk">info@alkhidmat.com.pk</a>
              <a href="mailto:admin@alkhidmat.com.pk">admin@alkhidmat.com.pk</a>
            </div>
          </div>

          <div className="footer__contact-divider"></div>

          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="footer__contact-content">
              <h4>Phone Support</h4>
              <a href="tel:+923000771601">+92 300 0771601</a>
              <a href="tel:+924235441516">+92 42 35441516</a>
            </div>
          </div>

          <div className="footer__contact-divider"></div>

          <div className="footer__contact-item">
            <div className="footer__contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="footer__contact-content">
              <h4>Location</h4>
              <p>Alkhidmat Markaz, 106/M Block Gulberg<br />III Lahore, Punjab, Pakistan.</p>
            </div>
          </div>

          <div className="footer__contact-divider"></div>

          <div className="footer__contact-item footer__contact-chat">
            <div className="footer__contact-content">
              <h4>Need Help?</h4>
              <p>We're here to help you<br />24/7.</p>
            </div>
            <button className="btn-chat">
              Chat with us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          <div className="footer__col footer__col-brand">
            <img src={logo} alt="Alkhidmat Foundation Pakistan" className="footer__logo" />
            <p className="footer__desc">
              Alkhidmat Foundation Pakistan is one of the leading, non-profit organizations, fully dedicated to humanitarian services since 1990.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Our Programs</h4>
            <ul className="footer__links">
              <li><a href="#">Palestine Emergency Appeal</a></li>
              <li><a href="#">BanoQabil</a></li>
              <li><a href="#">Orphan Care Program</a></li>
              <li><a href="#">Clean Water Program</a></li>
              <li><a href="#">Community Services</a></li>
              <li><a href="#">Disaster Management</a></li>
              <li><a href="#">Health Services</a></li>
              <li><a href="#">Education Program</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>About Us</h4>
            <ul className="footer__links">
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Our Mission & Vision</a></li>
              <li><a href="#">Our History</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Transparency Reports</a></li>
              <li><a href="#">Annual Reports</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get Involved</h4>
            <ul className="footer__links">
              <li><a href="#">Campaigns</a></li>
              <li><a href="#">Ways to Donate</a></li>
              <li><a href="#">Volunteer With Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>News & Media</h4>
            <ul className="footer__links">
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Photo Gallery</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Media Coverage</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Whistleblower Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 1990–2026 Alkhidmat Foundation Pakistan. All Rights Reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
            <span className="divider">|</span>
            <a href="#">Whistleblower Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
