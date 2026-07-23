import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CleanWater.css';
import { cleanWaterStats, waterServices, impactTableData, projectLocations } from '../data/cleanWaterData';
import waterImg from '../assets/wash_img.png';
import heroChildImg from '../assets/akfl-2.jpeg';

function CleanWater() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <main className="cw-page">

      {/* ── 1. HERO ── */}
      <section className="cw-hero" aria-label="Clean Water Program Hero">
        <div className="cw-hero__bg">
          <img src={heroChildImg} alt="Child with clean water" className="cw-hero__left-img" />
          <div className="cw-hero__overlay" />
        </div>
        <div className="container cw-hero__inner">
          <nav className="cw-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cw-breadcrumb__sep">›</span>
            <Link to="#">Our Programs</Link>
            <span className="cw-breadcrumb__sep">›</span>
            <span>Clean Water Program</span>
          </nav>
          <div className="cw-hero__content">
            <p className="cw-hero__pretitle">Alkhidmat</p>
            <h1 className="cw-hero__title">
              CLEAN WATER<br />
              <span className="cw-hero__title--accent">PROGRAM</span>
            </h1>
            <p className="cw-hero__desc">
              Ensuring access to clean and safe drinking water for every community. We build sustainable water solutions that bring health, hope, and dignity to thousands.
            </p>
          </div>
          <div className="cw-hero__icon-wrap" aria-hidden="true">
            <div className="cw-hero__icon">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M32 4L8 24v36h48V24L32 4z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2"/>
                <path d="M26 60V40h12v20" stroke="white" strokeWidth="2"/>
                <path d="M20 36c0-6.627 12-18 12-18s12 11.373 12 18a12 12 0 01-24 0z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="cw-stats" aria-label="Program Statistics">
        <div className="container">
          <div className="cw-stats__card">
            <div className="cw-stats__grid">
              {cleanWaterStats.slice(0, 6).map((stat) => (
                <div className="cw-stats__item" key={stat.id}>
                  <div className="cw-stats__icon">{stat.icon}</div>
                  <div>
                    <strong className="cw-stats__value">{stat.value}</strong>
                    <span className="cw-stats__label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cw-stats__grid cw-stats__grid--bottom">
              {cleanWaterStats.slice(6).map((stat) => (
                <div className="cw-stats__item" key={stat.id}>
                  <div className="cw-stats__icon">{stat.icon}</div>
                  <div>
                    <strong className="cw-stats__value">{stat.value}</strong>
                    <span className="cw-stats__label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT SECTION ── */}
      <section className="cw-about section" aria-labelledby="about-heading">
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
            <p className="section-subtitle">Sustainable solutions for a healthier tomorrow</p>
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

      {/* ── 6. PROJECT LOCATIONS (MAP) ── */}
      <section className="cw-map section" aria-labelledby="map-heading">
        <div className="container">
          <div className="cw-section-header text-center">
            <h2 id="map-heading">
              Project <span className="cw-map__accent">Locations</span>
            </h2>
            <p className="section-subtitle">Delivering clean water across Pakistan</p>
          </div>
          <div className="cw-map__inner">
            {/* Left: Location List */}
            <div className="cw-map__list-card">
              <h3 className="cw-map__list-title">Our Project Locations</h3>
              <ul className="cw-map__list">
                {projectLocations.map((loc) => (
                  <li key={loc.name} className="cw-map__list-item">
                    <span className="cw-map__list-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <strong>{loc.name}</strong>
                      <span>{loc.projects}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pakistan SVG Map */}
            <div className="cw-map__visual">
              <svg
                viewBox="0 0 500 520"
                className="cw-map__svg"
                aria-label="Map of Pakistan showing project locations"
                role="img"
              >
                {/* Pakistan outline – simplified shape */}
                <path
                  className="cw-map__country"
                  d="M180,30 L220,20 L270,35 L310,25 L350,55 L370,90 L380,130
                     L400,150 L420,160 L430,200 L420,230 L440,260 L450,290
                     L440,320 L430,350 L420,370 L400,380 L380,400 L360,420
                     L340,450 L310,470 L280,480 L250,490 L220,480 L190,460
                     L170,440 L150,410 L130,380 L120,350 L100,320 L90,290
                     L80,260 L95,230 L85,200 L100,170 L110,140 L120,110
                     L130,80 L150,55 L170,40 Z"
                  fill="#e8f0fb"
                  stroke="#0254a4"
                  strokeWidth="2"
                />
                {/* Afghanistan border top */}
                <path
                  className="cw-map__border"
                  d="M110,110 L80,120 L60,150 L50,200 L60,240 L80,260"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />
                {/* India border right */}
                <path
                  className="cw-map__border"
                  d="M420,230 L440,250 L460,300 L470,350 L460,390 L440,420"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />

                {/* Province labels */}
                <text x="270" y="110" className="cw-map__province-label" textAnchor="middle" fontSize="11" fill="#64748b">Gilgit-Baltistan</text>
                <text x="180" y="200" className="cw-map__province-label" textAnchor="middle" fontSize="11" fill="#64748b">KPK</text>
                <text x="310" y="260" className="cw-map__province-label" textAnchor="middle" fontSize="11" fill="#64748b">Punjab</text>
                <text x="155" y="360" className="cw-map__province-label" textAnchor="middle" fontSize="11" fill="#64748b">Balochistan</text>
                <text x="340" y="420" className="cw-map__province-label" textAnchor="middle" fontSize="11" fill="#64748b">Sindh</text>
                <text x="390" y="195" className="cw-map__province-label" textAnchor="middle" fontSize="9" fill="#64748b">AJK</text>

                {/* Province pin markers */}
                {[
                  { cx: 270, cy: 90, label: 'GB' },
                  { cx: 190, cy: 175, label: 'KPK' },
                  { cx: 315, cy: 245, label: 'Punjab' },
                  { cx: 160, cy: 340, label: 'Balochistan' },
                  { cx: 330, cy: 400, label: 'Sindh' },
                  { cx: 385, cy: 180, label: 'AJK' },
                ].map((pin) => (
                  <g key={pin.label}>
                    <circle cx={pin.cx} cy={pin.cy} r="8" fill="#0254a4" opacity="0.15" />
                    <circle cx={pin.cx} cy={pin.cy} r="5" fill="#0254a4" />
                    <circle cx={pin.cx} cy={pin.cy} r="2.5" fill="white" />
                  </g>
                ))}

                {/* Country labels neighbors */}
                <text x="55" y="160" fontSize="10" fill="#9ca3af" transform="rotate(-30,55,160)">AFGHANISTAN</text>
                <text x="450" y="270" fontSize="10" fill="#9ca3af" transform="rotate(90,450,270)">INDIA</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ── */}
      <section className="cw-cta" aria-label="Call to action - Help Bring Clean Water">
        <div className="container cw-cta__inner">
          <div className="cw-cta__left">
            <div className="cw-cta__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <div>
              <h2>Help Us Bring Clean Water</h2>
              <p>Your support can provide clean and safe drinking water to communities in need.</p>
            </div>
          </div>
          <div className="cw-cta__actions">
            <a href="#donate" className="btn cw-cta__btn-primary">Donate Now</a>
            <a href="#sponsor" className="btn cw-cta__btn-outline">Sponsor a Project</a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default CleanWater;
