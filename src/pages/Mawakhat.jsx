import React, { useState } from 'react';
import './Mawakhat.css';
import {
  mawakhatFloatingStats,
  mawakhatServices,
  mawakhatProvinces,
  mawakhatStories,
  mawakhatDonationAmounts,
} from '../data/mawakhatData';
import heroManImg from '../assets/serve_humanity.png';
import centerImg from '../assets/mawakhat.png';
import story1Img from '../assets/akfl-1.jpeg';
import story2Img from '../assets/akfl-2.jpeg';
import story3Img from '../assets/akfl-3.jpeg';

const storyImages = [story1Img, story2Img, story3Img];

function Mawakhat() {
  const [selectedWidgetAmount, setSelectedWidgetAmount] = useState('PKR 1,000');
  const [selectedPanelAmount, setSelectedPanelAmount] = useState('PKR 1,000');

  return (
    <main className="mw-page">

      {/* ── 1. HERO ── */}
      <section className="mw-hero" aria-label="Mawakhat Program Hero">
        <div className="container mw-hero__inner">
          <div className="mw-hero__content">
            <span className="mw-hero__badge">MAWAKHAT PROGRAM</span>
            <h1 className="mw-hero__title">
              Restoring Dignity.<br />
              <span className="mw-hero__title--blue">Rebuilding Lives.</span>
            </h1>
            <p className="mw-hero__desc">
              Alkhidmat Mawakhat is a year-round welfare program dedicated to rehabilitating the homeless and less privileged through shelter, food, clothing, and medical care across Pakistan.
            </p>
            <div className="mw-hero__actions">
              <a href="#donate-panel" className="btn mw-hero__btn-primary">
                Donate for Mawakhat
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </a>
              <a href="#about" className="btn mw-hero__btn-outline">
                How You Can Help
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mw-hero__visual" aria-hidden="true">
            <img src={heroManImg} alt="" className="mw-hero__man-img" />
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
                <h3>Support Our Cause</h3>
                <p>Your support can bring shelter, food and care to those who have no one.</p>
              </div>
            </div>

            <div className="mw-hero__widget-dropdown">
              <label htmlFor="mw-support-type">I want to support</label>
              <select id="mw-support-type" defaultValue="Provide Food">
                <option>Provide Food</option>
                <option>Provide Shelter</option>
                <option>Provide Clothing</option>
                <option>Provide Medical Care</option>
              </select>
            </div>

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

            <a href="#donate-panel" className="mw-hero__widget-btn">
              Donate Now
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
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
      <section className="mw-stats" aria-label="Mawakhat Statistics">
        <div className="container">
          <div className="mw-stats__card">
            <div className="mw-stats__grid">
              {mawakhatFloatingStats.map((stat) => (
                <div className="mw-stats__item" key={stat.label}>
                  <div className="mw-stats__icon">{stat.icon}</div>
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

      {/* ── 3. ABOUT MAWAKHAT ── */}
      <section id="about" className="mw-about section" aria-labelledby="about-heading">
        <div className="container mw-about__inner">
          <div className="mw-about__visual">
            <div className="mw-about__img-wrap">
              <img src={centerImg} alt="Alkhidmat Mawakhat Centre building" />
              <button className="mw-about__play" aria-label="Play Mawakhat documentary">
                <svg viewBox="0 0 24 24" fill="#0254a4" width="28" height="28">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mw-about__content">
            <p className="mw-about__tag">ABOUT MAWAKHAT</p>
            <h2 id="about-heading">
              A Shelter of Hope<br />for the Hopeless
            </h2>
            <p>
              Thousands of people in Pakistan sleep on the streets every night—facing hunger, extreme weather, illness, and social neglect.
            </p>
            <p>
              Alkhidmat Mawakhat Program provides them with safe shelter, nutritious food, clean clothing, and basic healthcare. Our centers operate 24/7, offering not just relief but respect and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICE CARDS ── */}
      <section className="mw-services section" aria-label="Mawakhat Services">
        <div className="container">
          <div className="mw-services__grid">
            {mawakhatServices.map((service) => (
              <div className="mw-services__card" key={service.id}>
                <div className="mw-services__icon">{service.icon}</div>
                <div className="mw-services__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. NATIONWIDE NETWORK (MAP & CENTRES) ── */}
      <section className="mw-map-section section" aria-labelledby="map-heading">
        <div className="container mw-map__inner">
          <div className="mw-map__content">
            <p className="mw-map__tag">OUR MAWAKHAT CENTRES</p>
            <h2 id="map-heading">
              A Nationwide Network<br />of Compassion
            </h2>
            <p>
              From major cities to small towns, Alkhidmat Mawakhat centers are a source of warmth, care, and dignity for thousands.
            </p>
            <a href="#all-centres" className="btn mw-map__btn">
              View All Centres
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="mw-map__card">
            <div className="mw-map__card-header">
              <h3>Pakistan Coverage</h3>
            </div>
            <div className="mw-map__card-body">
              <div className="mw-map__svg-wrap">
                <svg viewBox="0 0 350 320" className="mw-map__svg" aria-hidden="true">
                  <path
                    d="M120,30 L160,20 L210,35 L250,25 L280,55 L300,90 L310,130
                       L330,150 L340,190 L330,220 L320,250 L300,270 L270,300
                       L240,310 L190,300 L160,280 L130,250 L100,210 L80,180
                       L70,140 L90,80 Z"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  {[
                    { x: 210, y: 70 },
                    { x: 160, y: 120 },
                    { x: 250, y: 160 },
                    { x: 140, y: 220 },
                    { x: 270, y: 240 },
                    { x: 285, y: 120 },
                    { x: 190, y: 140 },
                  ].map((pin, i) => (
                    <circle key={i} cx={pin.x} cy={pin.y} r="5" fill="#22c55e" className="mw-ping-dot" />
                  ))}
                </svg>
              </div>

              <div className="mw-map__province-list">
                {mawakhatProvinces.map((prov) => (
                  <div className="mw-map__province-item" key={prov.name}>
                    <span className="mw-province__pin" aria-hidden="true">📍</span>
                    <div>
                      <strong>{prov.name}</strong>
                      <span>{prov.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. STORIES OF CHANGE ── */}
      <section className="mw-stories section" aria-labelledby="stories-heading">
        <div className="container">
          <div className="mw-stories__header">
            <div>
              <p className="mw-stories__tag">MAWAKHAT STORIES</p>
              <h2 id="stories-heading">Stories of Change</h2>
            </div>
            <a href="#more-stories" className="btn mw-stories__btn-link">
              View More Stories
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div className="mw-stories__grid">
            {mawakhatStories.map((story, i) => (
              <article className="mw-stories__card" key={story.id}>
                <div className="mw-stories__img-wrap">
                  <img src={storyImages[i]} alt={story.title} />
                  <div className="mw-stories__overlay">
                    <span className="mw-stories__badge">{story.tag}</span>
                    <h3>{story.title}</h3>
                    <p>{story.desc}</p>
                    <a href="#read" className="mw-stories__read-link">
                      Read Story
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DONATION BANNER ── */}
      <section id="donate-panel" className="mw-donate-panel" aria-label="Mawakhat Donation Panel">
        <div className="container">
          <div className="mw-donate-panel__card">
            <div className="mw-donate-panel__left">
              <div className="mw-donate-panel__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
              </div>
              <p className="mw-donate-panel__tag">YOU CAN MAKE A DIFFERENCE</p>
              <h2>Your Support Can Change Lives</h2>
              <p>A small act of kindness can bring warmth, food, and hope to someone in need.</p>
            </div>

            <div className="mw-donate-panel__right">
              <div className="mw-donate-panel__grid">
                {mawakhatDonationAmounts.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    className={`mw-panel-amt ${selectedPanelAmount === item.amount ? 'mw-panel-amt--active' : ''}`}
                    onClick={() => setSelectedPanelAmount(item.amount)}
                  >
                    <strong>{item.amount}</strong>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <button type="button" className="mw-donate-panel__submit-btn">
                Donate Now for Mawakhat
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Mawakhat;
