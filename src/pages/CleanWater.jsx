import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CleanWater.css';
import ProgramHero from '../components/shared/ProgramHero';
import { cleanWaterStats, waterServices, impactTableData } from '../data/cleanWaterData';
import waterImg from '../assets/wash_program.png';

function CleanWater() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <main className="cw-page">

      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Pure Water."
        titleHighlight="Healthy Communities."
        description="Ensuring access to clean and safe drinking water for every community. We build sustainable water filtration plants, hand pumps, and solar wells that bring health, hope, and dignity to thousands."
        primaryCtaText="Donate for Clean Water"
        secondaryCtaText="Our Water Projects"
        primaryCtaHref="/ways-to-donate"
        secondaryCtaHref="#about-clean-water"
        heroImage={waterImg}
        widgetTitle="Provide Clean Water"
        widgetSubtitle="Your donation installs water filtration plants and hand pumps in water-scarce regions."
        supportOptions={[
          'Water Filtration Plant',
          'Submersible Water Pump',
          'Community Hand Pump',
          'Solar Water Well',
        ]}
        stats={cleanWaterStats.slice(0, 5).map(s => ({ icon: s.icon, value: s.value, label: s.label }))}
      />
      {/* ── 3. ABOUT SECTION ── */}
      <section id="about-clean-water" className="cw-about section" aria-labelledby="about-heading">
        <div className="container cw-about__inner">
          <div className="cw-about__content">
            <h2 id="about-heading">
              About <span className="cw-about__highlight">Alkhidmat Clean Water Program</span>
            </h2>
            <p>
              Pakistan is on its way to become a water deficient country as it already stands at 30th position among the most water-deficient countries of the world. Safe drinking water is one of Pakistan's most immediate and crucial problems that demands earliest actions to be taken for its resolution.
            </p>
            <p>
              Alkhidmat Foundation Pakistan is practically active to ensure the provision of clean drinking water by installing hand pumps, water wells and water filtration plants in the remote areas of Pakistan.
            </p>
          </div>
          <div className="cw-about__visual">
            <div className="cw-about__img-wrap">
              <img src={waterImg} alt="Child drinking clean water" />
              {!playVideo && (
                <button
                  className="cw-about__play"
                  onClick={() => setPlayVideo(true)}
                  aria-label="Play video about Clean Water Program"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WATER SERVICES ── */}
      <section className="cw-services section" aria-labelledby="services-heading">
        <div className="container">
          <div className="cw-section-header text-center">
            <h2 id="services-heading">
              Our <span className="cw-services__accent">Water Services</span>
            </h2>
          </div>
          <div className="cw-services__grid">
            {waterServices.map((service) => (
              <div className="cw-services__card" key={service.id}>
                <div className="cw-services__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT TABLE ── */}
      <section className="cw-impact section" aria-labelledby="impact-heading">
        <div className="container">
          <div className="cw-section-header text-center">
            <h2 id="impact-heading">Our Impact in Numbers</h2>
            <div className="cw-impact__divider" aria-hidden="true" />
          </div>
          <div className="cw-impact__table-wrap">
            <table className="cw-impact__table" aria-label="Impact statistics table">
              <thead>
                <tr className="cw-impact__table-header">
                  <th scope="col">Clean Water Program Overview</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {impactTableData.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? 'cw-impact__row--light' : 'cw-impact__row--dark'}
                  >
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>



    </main>
  );
}

export default CleanWater;
