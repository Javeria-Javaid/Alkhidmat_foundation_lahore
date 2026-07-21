import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/weblogo.png';
import './Header.css';
import { programs } from '../../data/programs';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Where We Work',
    href: '#',
    children: [
      ...programs,
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Get Involved',
    href: '#',
    children: [
      { label: 'Campaigns', href: '#' },
      { label: 'Ways to Donate', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Events', href: '#' },
    ],
  },
  { label: 'News & Media', href: '#' },
  { label: 'Contact Us', href: '/contact' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <div className="header__topbar-left">
            <a href="tel:+923000771601" className="header__topbar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +92 300 0771601
            </a>
            <span className="header__topbar-divider">|</span>
            <a href="tel:+924235441516" className="header__topbar-item">+92 42 35441516</a>
            <a href="mailto:info@alkhidmat.com.pk" className="header__topbar-item header__topbar-email">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@alkhidmat.com.pk
            </a>
          </div>
          <div className="header__topbar-right">
            <span className="header__topbar-label">Stay Connected:</span>
            <div className="header__topbar-socials">
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header__nav" ref={dropdownRef}>
        <div className="container header__nav-inner">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Alkhidmat Foundation Lahore" />
          </Link>

          <ul className="header__menu">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={`header__menu-item ${item.children ? 'has-dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="header__menu-link"
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  }}
                >
                  {item.label}
                  {item.children && (
                    <svg className="header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </Link>
                {item.children && activeDropdown === index && (
                  <div className="header__dropdown">
                    <div className="header__dropdown-inner">
                      <div className="header__dropdown-header">
                        <h4>{item.label === 'Where We Work' ? 'All Programs' : item.label}</h4>
                        <p>{item.label === 'Where We Work' ? 'Our core humanitarian and welfare programs.' : 'Be a part of change and make an impact.'}</p>
                      </div>
                      <ul className="header__dropdown-list">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.href} className="header__dropdown-link">
                              <span>{child.label}</span>
                              <svg className="header__dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="header__actions">
            <Link to="/#donate-section" className="btn btn-primary header__donate-btn">
              Donate Now
            </Link>
            <Link to="/contact" className="btn btn-outline header__appointment-btn">
              Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`header__hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`header__mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="header__mobile-inner">
          <ul className="header__mobile-menu">
            {navItems.map((item, index) => (
              <li key={item.label} className="header__mobile-item">
                <button
                  className="header__mobile-link"
                  onClick={() => {
                    if (item.children) {
                      toggleDropdown(activeDropdown === index ? null : index);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.children && (
                    <svg className={`header__mobile-chevron ${activeDropdown === index ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </button>
                {item.children && activeDropdown === index && (
                  <ul className="header__mobile-submenu">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.href} className="header__mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="header__mobile-actions">
            <Link to="/#donate-section" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Donate Now
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && <div className="header__overlay" onClick={() => setMobileMenuOpen(false)} />}
    </header>
  );
}

export default Header;
