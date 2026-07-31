import React, { useState, useEffect, useRef } from 'react';
import {
  CreditCard,
  Building2,
  Smartphone,
  Zap,
  Globe2,
  CalendarSync,
  Building,
  Truck,
  Moon,
  AlertTriangle,
  ShieldCheck,
  FileCheck2,
  Award,
  Users,
  Heart,
  Search,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Play,
} from 'lucide-react';
import {
  impactStats,
  donationMethods,
  donationProcess,
  impactHighlights,
  waysFaqItems,
} from '../data/waysToDonateData';
import globalReliefMap from '../assets/global-relief-map.png';
import './WaysToDonate.css';

// ---------- Icon map ----------
const IconMap = {
  CreditCard, Building2, Smartphone, Zap, Globe2, CalendarSync,
  Building, Truck, Moon, AlertTriangle, ShieldCheck, FileCheck2,
  Award, Users, Heart, Search, DollarSign, CheckCircle2, TrendingUp,
};

// ---------- Animated counter ----------
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''));
          const prefix = end.replace(/[0-9.]+.*/, '');
          const sfx = end.replace(/^[^0-9]*[0-9.]+/, '');
          let start = 0;
          const step = numericEnd / (duration / 16);
          const timer = setInterval(() => {
            start = Math.min(start + step, numericEnd);
            setCount({ val: start, prefix, sfx });
            if (start >= numericEnd) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = count
    ? `${count.prefix}${Number.isInteger(parseFloat(count.val)) ? Math.floor(count.val) : count.val.toFixed(0)}${count.sfx}`
    : '0';

  return <span ref={ref}>{display}</span>;
}

// ---------- Progress bar ----------
function ProgressBar({ raised, goal }) {
  const pct = Math.min((raised / goal) * 100, 100).toFixed(1);
  return (
    <div className="prog-track">
      <div className="prog-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

function formatPKR(n) {
  if (n >= 10000000) return `₨${(n / 10000000).toFixed(1)}Cr`;
  if (n >= 100000) return `₨${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₨${(n / 1000).toFixed(0)}K`;
  return `₨${n}`;
}

// =============================================
// MAIN COMPONENT
// =============================================
export default function WaysToDonate() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="wtd-page">

      {/* ======== 1. HERO ======== */}
      <section className="wtd-hero">
        <div className="wtd-hero__bg-layers">
          <div className="wtd-hero__photo" />
          <div className="wtd-hero__gradient" />
          <div className="wtd-hero__glow-tl" />
          <div className="wtd-hero__glow-br" />
          <div className="wtd-hero__grid-overlay" />
        </div>

        <div className="container wtd-hero__inner">
          <div className="wtd-hero__content">
            <div className="wtd-hero__badge">
              <Sparkles size={14} />
              <span>10 Ways to Make a Difference</span>
            </div>

            <h1 className="wtd-hero__title">
              Every Path Leads to<br />
              <span className="wtd-hero__accent">One Purpose</span>
            </h1>

            <p className="wtd-hero__subtitle">
              Whether you give online, bank-transfer, donate in Zakat, or send relief from abroad —
              every contribution reaches the most vulnerable communities across Pakistan and beyond.
            </p>

            <div className="wtd-hero__actions">
              <a href="/donate" className="btn wtd-btn-primary">
                <Heart size={18} fill="currentColor" />
                Donate Now
              </a>
              <a href="#ways-section" className="btn wtd-btn-secondary">
                Explore Ways to Give <ArrowRight size={16} />
              </a>
            </div>

            <div className="wtd-hero__trust-row">
              <div className="wtd-trust-chip">
                <ShieldCheck size={15} className="chip-icon green" />
                <span>Secure SSL</span>
              </div>
              <div className="wtd-trust-chip">
                <Award size={15} className="chip-icon gold" />
                <span>FBR Certified</span>
              </div>
              <div className="wtd-trust-chip">
                <FileCheck2 size={15} className="chip-icon blue" />
                <span>Annual Audit</span>
              </div>
              <div className="wtd-trust-chip">
                <Users size={15} className="chip-icon purple" />
                <span>25M+ Impacted</span>
              </div>
            </div>
          </div>


        </div>

        <a href="#impact-story" className="wtd-scroll-arrow">
          <ChevronDown size={22} />
        </a>
      </section>

      {/* ======== 2. WHY YOUR DONATION MATTERS ======== */}
      <section className="wtd-impact-story section" id="impact-story">
        <div className="wtd-impact-story__bg-shape" />
        <div className="container">
          <div className="wtd-impact-story__header text-center">
            <span className="section-tag">Why Give with Alkhidmat?</span>
            <h2 className="section-title wtd-gradient-text">Your Donation Matters</h2>

          </div>

          {/* Stats counters */}
          <div className="wtd-stats-grid">
            {impactStats.map((s, i) => (
              <div className="wtd-stat-card" key={i} style={{ '--i': i }}>
                <div className="wtd-stat-card__value">
                  <AnimatedCounter end={s.value} />
                </div>
                <div className="wtd-stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Editorial feature strip */}
          <div className="wtd-story-strip">
            <div className="story-strip__image-col">
              <div className="story-strip__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"
                  alt="Alkhidmat humanitarian work"
                  className="story-strip__img"
                />
                <div className="story-strip__img-badge">
                  <Heart size={14} fill="currentColor" />
                  <span>Est. 1990 — 34+ Years</span>
                </div>
              </div>
            </div>
            <div className="story-strip__text-col">
              <div className="story-strip__tag">Our Commitment</div>
              <h3 className="story-strip__heading">
                Every Rupee Reaches Those Who Need It Most
              </h3>
              <p className="story-strip__body">
                With 600+ district offices and 50,000+ dedicated volunteers, Alkhidmat delivers
                humanitarian aid at scale — from flood relief in Sindh to surgical camps in KPK
                and orphan care across Punjab. Our audited financials prove what we promise:
                98 paisas of every rupee you donate goes directly to beneficiaries.
              </p>
              <div className="story-strip__highlights">
                {[
                  { icon: '✅', text: 'Audited by independent firms annually' },
                  { icon: '✅', text: 'Shariah Board certified Zakat distribution' },
                  { icon: '✅', text: 'UN ECOSOC & ICRC recognized' },
                  { icon: '✅', text: 'Active in 60+ countries for international relief' },
                ].map((h, i) => (
                  <div key={i} className="story-highlight">
                    <span className="story-highlight__icon">{h.icon}</span>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
              <a href="/donate" className="btn wtd-btn-primary mt-1">
                Start Your Impact <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======== 3. WAYS TO DONATE — MAIN SECTION ======== */}
      <section className="wtd-methods-section section" id="ways-section">
        <div className="wtd-methods-section__bg" />
        <div className="container">
          <div className="wtd-methods-section__header text-center">
            <span className="section-tag">Choose Your Channel</span>
            <h2 className="section-title">10 Ways to Give</h2>

          </div>

          <div className="wtd-methods-masonry">
            {donationMethods.map((method, idx) => {
              const IconComp = IconMap[method.icon];
              const isActive = activeMethod === method.id;
              return (
                <div
                  key={method.id}
                  className={`wtd-method-card ${isActive ? 'wtd-method-card--active' : ''} ${hoveredCard === method.id ? 'wtd-method-card--hovered' : ''}`}
                  style={{ '--accent': method.accentColor, '--bg': method.bgAccent, '--delay': `${idx * 60}ms` }}
                  onClick={() => setActiveMethod(isActive ? null : method.id)}
                  onMouseEnter={() => setHoveredCard(method.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="method-card__glow" />
                  <div className="method-card__top">
                    <div className="method-card__icon-wrap">
                      {IconComp && <IconComp size={26} />}
                    </div>
                    <span className={`method-card__badge method-card__badge--${method.badgeColor}`}>
                      {method.badge}
                    </span>
                  </div>

                  <div className="method-card__body">
                    <div className="method-card__tagline">{method.tagline}</div>
                    <h3 className="method-card__title">{method.title}</h3>
                    <p className="method-card__desc">{method.description}</p>
                  </div>

                  <div className={`method-card__expanded ${isActive ? 'method-card__expanded--open' : ''}`}>
                    <div className="method-card__highlights">
                      {method.highlights.map((h, i) => (
                        <span key={i} className="method-hl-chip">
                          <CheckCircle2 size={12} />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={method.anchor} className="method-card__cta">
                    {method.cta} <ArrowRight size={14} />
                  </a>

                  <div className="method-card__expand-hint">
                    {isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== 4. GLOBAL RELIEF NETWORK ======== */}
      <section className="wtd-global-section section" id="global-network">
        <div className="wtd-global-section__bg" />
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Worldwide Reach</span>
            <h2 className="section-title">International Donations</h2>
          </div>

          <div className="wtd-global-map-wrapper">
            <div className="wtd-global-map-container">
              <img
                src={globalReliefMap}
                alt="International Donations - Global Relief Network"
                className="wtd-global-map-img"
              />
              {/* Animated glowing pulse dots on key locations */}
              <div className="wtd-map-pulse" style={{ top: '35%', left: '48%' }} /> {/* Pakistan */}
              <div className="wtd-map-pulse wtd-map-pulse--delay1" style={{ top: '42%', left: '18%' }} />
              <div className="wtd-map-pulse wtd-map-pulse--delay2" style={{ top: '30%', left: '52%' }} />
              <div className="wtd-map-pulse wtd-map-pulse--delay3" style={{ top: '55%', left: '72%' }} />
              <div className="wtd-map-pulse wtd-map-pulse--delay4" style={{ top: '28%', left: '78%' }} />
            </div>

            <div className="wtd-global-stats-row">
              <div className="wtd-global-stat">
                <Globe2 size={20} className="wtd-global-stat__icon" />
                <div className="wtd-global-stat__text">
                  <strong>60+</strong>
                  <span>Countries Reached</span>
                </div>
              </div>
              <div className="wtd-global-stat">
                <Users size={20} className="wtd-global-stat__icon" />
                <div className="wtd-global-stat__text">
                  <strong>25M+</strong>
                  <span>Lives Impacted</span>
                </div>
              </div>
              <div className="wtd-global-stat">
                <Heart size={20} className="wtd-global-stat__icon" />
                <div className="wtd-global-stat__text">
                  <strong>600+</strong>
                  <span>Districts Active</span>
                </div>
              </div>
              <div className="wtd-global-stat">
                <ShieldCheck size={20} className="wtd-global-stat__icon" />
                <div className="wtd-global-stat__text">
                  <strong>34+</strong>
                  <span>Years of Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== 5. DONATION PROCESS ======== */}
      <section className="wtd-process-section section">
        <div className="wtd-process-section__bg" />
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-tag">Simple Steps</span>
            <h2 className="section-title">How Donation Works</h2>

          </div>

          <div className="wtd-process-timeline">
            {donationProcess.map((step, idx) => {
              const Icon = IconMap[step.icon];
              return (
                <div key={step.step} className="wtd-process-step" style={{ '--step-color': step.color, '--step-i': idx }}>
                  <div className="process-step__connector" />
                  <div className="process-step__node">
                    <div className="process-step__circle">
                      {Icon && <Icon size={24} />}
                    </div>
                    <div className="process-step__num">{step.step}</div>
                  </div>
                  <div className="process-step__content">
                    <h4 className="process-step__title">{step.title}</h4>
                    <p className="process-step__desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== 6. IMPACT SECTION ======== */}
      <section className="wtd-impact-section section" id="impact">
        <div className="wtd-impact-section__bg" />
        <div className="container">
          <div className="wtd-impact-section__inner">
            <div className="wtd-impact-section__left">
              <span className="section-tag section-tag--white">Real Impact</span>
              <h2 className="wtd-impact-title">See What Your Donation Does</h2>
              <p className="wtd-impact-subtitle">
                No donation is too small. Every rupee is a step toward food, water, education, and dignity.
              </p>

              <div className="wtd-impact-cards">
                {impactHighlights.map((item, i) => (
                  <div key={i} className="wtd-impact-chip" style={{ '--chip-color': item.color, '--chip-i': i }}>
                    <div className="impact-chip__emoji">{item.icon}</div>
                    <div className="impact-chip__text">
                      <strong className="impact-chip__amount">{item.amount}</strong>
                      <span className="impact-chip__desc">{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/donate" className="btn wtd-btn-white-outline mt-2">
                Make Your Impact <ArrowRight size={16} />
              </a>
            </div>

            <div className="wtd-impact-section__right">
              <div className="wtd-impact-photo-stack">
                <div className="impact-photo impact-photo--main">
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80"
                    alt="Humanitarian impact"
                  />
                </div>
                <div className="impact-photo impact-photo--secondary">
                  <img
                    src="https://images.unsplash.com/photo-1469571486292-b53601020a8a?w=400&auto=format&fit=crop&q=80"
                    alt="Relief work"
                  />
                </div>
                <div className="impact-stat-bubble">
                  <div className="impact-bubble__value">25M+</div>
                  <div className="impact-bubble__label">Lives Changed</div>
                </div>
                <div className="impact-year-badge">Since 1990</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ======== 8. FAQ ======== */}
      <section className="wtd-faq-section section">
        <div className="wtd-faq-section__bg" />
        <div className="container">
          <div className="wtd-faq-inner">
            <div className="wtd-faq-header">
              <span className="section-tag">Got Questions?</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about donating to Alkhidmat Foundation.
              </p>
              <a href="/contact" className="btn wtd-btn-primary" style={{ marginTop: '24px' }}>
                Contact Support <ArrowRight size={16} />
              </a>
            </div>

            <div className="wtd-faq-list">
              {waysFaqItems.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`wtd-faq-item ${isOpen ? 'wtd-faq-item--open' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="faq-item__header">
                      <span className="faq-item__q">{item.question}</span>
                      <span className="faq-item__toggle">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </div>
                    <div className={`faq-item__body ${isOpen ? 'faq-item__body--open' : ''}`}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======== 9. FINAL CTA ======== */}
      <section className="wtd-final-cta">
        <div className="wtd-final-cta__bg-photo" />
        <div className="wtd-final-cta__overlay" />
        <div className="wtd-final-cta__glow" />
        <div className="container wtd-final-cta__inner">
          <div className="wtd-final-cta__content">
            <div className="wtd-final-cta__badge">
              <Heart size={14} fill="currentColor" />
              <span>Your Generosity, Their Tomorrow</span>
            </div>
            <h2 className="wtd-final-cta__title">
              Every Contribution<br />
              <span className="wtd-final-cta__accent" style={{ background: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: '#ffffff', color: '#ffffff' }}>Creates Hope</span>
            </h2>
            <p className="wtd-final-cta__body">
              Join over 4.8 million donors worldwide who trust Alkhidmat Foundation
              to deliver compassion where it's needed most. Your gift today changes
              a life forever.
            </p>
            <div className="wtd-final-cta__actions">
              <a href="/donate" className="btn wtd-btn-cta-primary">
                <Heart size={18} fill="currentColor" />
                Donate Now
              </a>
              <a href="/contact" className="btn wtd-btn-cta-secondary">
                Talk to Us <ArrowRight size={16} />
              </a>
            </div>
            <div className="wtd-final-cta__micro">
              <ShieldCheck size={14} className="micro-icon" />
              <span>Secure · Transparent · 98% to Beneficiaries · FBR Certified</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
