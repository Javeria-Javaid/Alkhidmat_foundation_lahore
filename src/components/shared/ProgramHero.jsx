import React, { useState } from 'react';
import './ProgramHero.css';

function ProgramHero({
  badge,
  titleMain,
  titleHighlight,
  description,
  primaryCtaText,
  secondaryCtaText = 'How You Can Help',
  primaryCtaHref = '#donate-section',
  secondaryCtaHref = '#about',
  heroImage,
  widgetTitle = 'Support Our Cause',
  widgetSubtitle = 'Your support can bring shelter, food and care to those who have no one.',
  supportOptions = ['General Donation', 'Provide Support', 'Monthly Sponsorship', 'Emergency Care'],
  stats = [],
}) {
  const [selectedWidgetAmount, setSelectedWidgetAmount] = useState('PKR 1,000');

  const defaultPrimaryCtaText = primaryCtaText || `Donate for ${badge || 'Program'}`;

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="mw-hero" aria-label={`${badge || 'Program'} Hero`}>
        <div className="container mw-hero__inner">
          <div className="mw-hero__content">
            {badge && <span className="mw-hero__badge">{badge}</span>}
            <h1 className="mw-hero__title">
              {titleMain}
              {titleHighlight && (
                <>
                  <br />
                  <span className="mw-hero__title--blue">{titleHighlight}</span>
                </>
              )}
            </h1>
            <p className="mw-hero__desc">{description}</p>
            <div className="mw-hero__actions">
              <a href={primaryCtaHref} className="btn mw-hero__btn-primary">
                {defaultPrimaryCtaText}
              </a>
              <a href={secondaryCtaHref} className="btn mw-hero__btn-outline">
                {secondaryCtaText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>



          {/* Right Floating Donation Widget */}
          <div className="mw-hero__widget">
            <div className="mw-hero__widget-header">
              <span className="mw-hero__widget-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0254a4" strokeWidth="2" width="28" height="28">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              <div>
                <h3>{widgetTitle}</h3>
                <p>{widgetSubtitle}</p>
              </div>
            </div>

            {supportOptions && supportOptions.length > 0 && (
              <div className="mw-hero__widget-dropdown">
                <label htmlFor="program-support-type">I want to support</label>
                <select id="program-support-type" defaultValue={supportOptions[0]}>
                  {supportOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="mw-hero__widget-amounts">
              {['PKR 500', 'PKR 1,000', 'PKR 2,500', 'PKR 5,000'].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`mw-widget-amt ${selectedWidgetAmount === amt ? 'mw-widget-amt--active' : ''}`}
                  onClick={() => setSelectedWidgetAmount(amt)}
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="mw-hero__widget-other">
              <input type="text" placeholder="Other Amount" aria-label="Other donation amount" />
            </div>

            <a href={primaryCtaHref} className="mw-hero__widget-btn">
              Donate Now
            </a>
            <p className="mw-hero__policy">
              <svg viewBox="0 0 24 24" fill="#16a34a" width="14" height="14" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              100% Donation Policy
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FLOATING STATS BAR ── */}
      {stats && stats.length > 0 && (
        <section className="mw-stats" aria-label="Program Statistics">
          <div className="container">
            <div className="mw-stats__card">
              <div className="mw-stats__grid">
                {stats.map((stat, idx) => (
                  <div className="mw-stats__item" key={stat.label || idx}>
                    {stat.icon && <div className="mw-stats__icon">{stat.icon}</div>}
                    <div>
                      <strong className="mw-stats__value">{stat.value}</strong>
                      <span className="mw-stats__label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProgramHero;
