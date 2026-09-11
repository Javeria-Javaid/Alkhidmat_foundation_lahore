import React, { useState } from 'react';
import './Mawakhat.css';
import ProgramHero from '../components/shared/ProgramHero';
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
  const [selectedPanelAmount, setSelectedPanelAmount] = useState('PKR 1,000');

  return (
    <main className="mw-page">

      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Restoring Dignity."
        titleHighlight="Rebuilding Lives."
        description="Alkhidmat Mawakhat is a year-round welfare program dedicated to rehabilitating the homeless and less privileged through shelter, food, clothing, and medical care across Pakistan."
        primaryCtaText="Donate for Mawakhat"
        secondaryCtaText="How You Can Help"
        primaryCtaHref="#donate-panel"
        secondaryCtaHref="#about"
        heroImage={heroManImg}
        widgetTitle="Support Our Cause"
        widgetSubtitle="Your support can bring shelter, food and care to those who have no one."
        supportOptions={[
          'Provide Food',
          'Provide Shelter',
          'Provide Clothing',
          'Provide Medical Care',
        ]}
        stats={mawakhatFloatingStats.map(s => ({ icon: s.icon, value: s.value, label: s.label }))}
      />

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
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Mawakhat;
