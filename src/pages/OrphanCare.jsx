import React from 'react';
import './OrphanCare.css';
import ProgramHero from '../components/shared/ProgramHero';
import orphanHeroImg from '../assets/Orphan_Care_program.png';
import orphanCareBgImg from '../assets/serve_humanity.png';
import story1Img from '../assets/akfl-1.jpeg';
import story2Img from '../assets/akfl-2.jpeg';
import story3Img from '../assets/akfl-3.jpeg';

const orphanStats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: '23,000+',
    label: 'Orphans Sponsored Across Pakistan',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    value: '100%',
    label: 'Educational & Healthcare Coverage',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
    value: '50+',
    label: 'Aghosh Family Homes & Centers',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    value: '24/7',
    label: 'Holistic Character & Welfare Support',
  },
];

function OrphanCare() {
  return (
    <main className="orphan-page">
      {/* ── 1. MASTER HERO SECTION ── */}
      <ProgramHero
        badge=""
        titleMain="Protecting Future."
        titleHighlight="Transforming Young Lives."
        description="Alkhidmat Orphan Care Program provides holistic care, quality education, healthcare, and emotional nurture to orphaned children across Pakistan, empowering them to become confident leaders."
        primaryCtaText="Sponsor an Orphan"
        secondaryCtaText="Learn About Aghosh Homes"
        primaryCtaHref="#donate-section"
        secondaryCtaHref="#about-orphan-care"
        heroImage={orphanHeroImg}
        widgetTitle="Sponsor an Orphan"
        widgetSubtitle="Your monthly sponsorship covers quality schooling, healthcare, clothes, and character development."
        supportOptions={[
          'Sponsor an Orphan (PKR 4,500/mo)',
          'Aghosh Home Education Support',
          'Medical & Health Assistance',
          'General Orphan Care Fund',
        ]}
        stats={orphanStats}
      />

      {/* ── 2. ABOUT ORPHAN CARE ── */}
      <section id="about-orphan-care" className="section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ color: '#0254a4', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem' }}>
                COMPREHENSIVE CHILD CARE
              </span>
              <h2 className="section-title" style={{ marginTop: '12px', fontSize: '2.2rem', color: '#0a2a5e' }}>
                Nurturing Hope for Fatherless Children
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.7, marginTop: '16px' }}>
                Alkhidmat Orphan Care Program operates two key models: Family-Based Orphan Care (supporting orphans within their own homes with their mothers) and Aghosh Homes (state-of-the-art boarding schools providing world-class facilities).
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.7, marginTop: '12px' }}>
                We ensure that lack of resources never stops a child from achieving their dreams. From primary schooling to university scholarships, we walk alongside them every step of the way.
              </p>
            </div>
            <div>
              <img
                src={orphanCareBgImg}
                alt="Alkhidmat Orphan Care"
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 12px 32px rgba(2,84,164,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY PILLARS ── */}
      <section className="section" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Pillars of Our Support</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                title: 'Education & Learning',
                desc: 'School tuition fees, books, uniforms, laptop distribution, and career counseling.',
                img: story1Img,
              },
              {
                title: 'Health & Nutrition',
                desc: 'Quarterly medical checkups, balanced daily diet, and emergency hospital care.',
                img: story2Img,
              },
              {
                title: 'Character & Mentorship',
                desc: 'Moral training, sports activities, summer camps, and psychological counseling.',
                img: story3Img,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: '#f8fafc',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <img src={pillar.img} alt={pillar.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#0a2a5e', marginBottom: '8px' }}>{pillar.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default OrphanCare;
