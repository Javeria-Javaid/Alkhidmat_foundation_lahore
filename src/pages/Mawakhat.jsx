import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="mw-hero__bg">
          <img src={heroManImg} alt="Elderly man supported by Mawakhat program" className="mw-hero__man-img" />
          <div className="mw-hero__overlay" />
        </div>

        <div className="container mw-hero__inner">
          <div className="mw-hero__content">
            <span className="mw-hero__badge">
              MAWAKHAT PROGRAM
            </span>
            <h1 className="mw-hero__title">
              Restoring Dignity.<br />
              <span className="mw-hero__title--blue">Rebuilding Lives.</span>
            </h1>
            <p className="mw-hero__desc">
              Alkhidmat Mawakhat is a year-round welfare program dedicated to rehabilitating the homeless and less privileged through shelter, food, clothing, and medical care across Pakistan.
            </p>
            <div className="mw-hero__actions">
              <a href="#donate-panel" className="btn mw-hero__btn-primary">
                Donate for Mawakhat ♡
              </a>
              <a href="#about" className="btn mw-hero__btn-outline">
                How You Can Help →
              </a>
            </div>
          </div>

          {/* Right Floating Donation Widget */}
          <div className="mw-hero__widget">
            <div className="mw-hero__widget-header">
              <span className="mw-hero__widget-icon">🤲</span>
              <div>
                <h3>Support Our Cause</h3>
                <p>Your support can bring shelter, food and care to those who have no one.</p>
              </div>
            </div>

            <div className="mw-hero__widget-dropdown">
              <label>I want to support</label>
              <select>
                <option>Provide Food</option>
                <option>Provide Shelter</option>
                <option>Provide Clothing</option>
                <option>Provide Medical Care</option>
              </select>
            </div>

            <div className="mw-hero__widget-amounts">
              {['PKR 500', 'PKR 1,000', 'PKR 2,500', 'PKR 5,000', 'Other'].map((amt) => (
                <button
                  key={amt}
                  className={`mw-widget-amt ${selectedWidgetAmount === amt ? 'mw-widget-amt--active' : ''}`}
                  onClick={() => setSelectedWidgetAmount(amt)}
                >
                  {amt}
                </button>
              ))}
            </div>

            <a href="#donate-panel" className="mw-hero__widget-btn">
              Donate Now ♡
            </a>
            <p className="mw-hero__policy">🔒 100% Donation Policy</p>
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
                <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
              View All Centres →
            </a>
          </div>

          <div className="mw-map__card">
            <div className="mw-map__card-header">
              <h3>Pakistan Coverage</h3>
            </div>
            <div className="mw-map__card-body">
              {/* Map SVG representation */}
              <div className="mw-map__svg-wrap">
                <svg viewBox="0 0 350 320" className="mw-map__svg">
                  <path
                    d="M120,30 L160,20 L210,35 L250,25 L280,55 L300,90 L310,130
                       L330,150 L340,190 L330,220 L320,250 L300,270 L270,300
                       L240,310 L190,300 L160,280 L130,250 L100,210 L80,180
                       L70,140 L90,80 Z"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  {/* Pin glowing dots */}
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

              {/* Province list side */}
              <div className="mw-map__province-list">
                {mawakhatProvinces.map((prov) => (
                  <div className="mw-map__province-item" key={prov.name}>
                    <span className="mw-province__pin">📍</span>
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
              View More Stories →
            </a>
          </div>

          <div className="mw-stories__grid">
            {mawakhatStories.map((story, i) => (
              <div className="mw-stories__card" key={story.id}>
                <div className="mw-stories__img-wrap">
                  <img src={storyImages[i]} alt={story.title} />
                  <span className="mw-stories__badge">{story.tag}</span>
                </div>
                <div className="mw-stories__body">
                  <h3>{story.title}</h3>
                  <p>{story.desc}</p>
                  <a href="#read" className="mw-stories__read-link">Read Story →</a>
                </div>
              </div>
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
                    className={`mw-panel-amt ${selectedPanelAmount === item.amount ? 'mw-panel-amt--active' : ''}`}
                    onClick={() => setSelectedPanelAmount(item.amount)}
                  >
                    <strong>{item.amount}</strong>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <button className="mw-donate-panel__submit-btn">
                Donate Now for Mawakhat ♡
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Mawakhat;
