import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Campaigns.css';

/* ─── ANIMATED COUNTER HOOK ─────────────────────────── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const prog = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setCount(Math.floor(eased * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── INTERSECTION OBSERVER HOOK ────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── DATA ──────────────────────────────────────────── */
const impactStats = [
  { value: 50,   suffix: '+',  label: 'Active Campaigns',    icon: '🎯', color: '#0254a4' },
  { value: 500,  suffix: '+',  label: 'Food Drives',         icon: '🍱', color: '#10b981' },
  { value: 100,  suffix: '+',  label: 'Education Programs',  icon: '📚', color: '#f59e0b' },
  { value: 250,  suffix: 'K+', label: 'Trees Planted',       icon: '🌳', color: '#0254a4' },
  { value: 1,    suffix: 'M+', label: 'Families Supported',  icon: '👨‍👩‍👧‍👦', color: '#10b981' },
  { value: 150,  suffix: '+',  label: 'Across Districts',    icon: '🏙️', color: '#f59e0b' },
];

const featuredCampaigns = [
  {
    id: 1,
    title: 'Alkhidmat Mega Plantation Drive 2025',
    category: 'Mega Plantation Drive',
    color: '#10b981',
    description: 'Support Alkhidmat Karachi\'s Citywide Mega Plantation Drive 2025 to make the city clean, green, and combat climate change.',
    raised: 6575,
    goal: 1000000,
    donors: 14,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tag: 'Active',
    urgency: 'active',
  },
  {
    id: 2,
    title: 'Gaza Emergency Appeal by Raah-e-Khair',
    category: 'Palestine Emergency Appeal',
    color: '#ef4444',
    description: 'Volunteers from all over Pakistan raising funds for Gaza medical aid, emergency meals and shelter support in collaboration with Alkhidmat.',
    raised: 177010,
    goal: 1000000,
    donors: 186,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    tag: 'Urgent',
    urgency: 'critical',
  },
  {
    id: 3,
    title: 'The Supporting Hands Gaza Fund',
    category: 'Palestine Emergency Appeal',
    color: '#0254a4',
    description: 'Collaborative emergency appeal supporting Alkhidmat Foundation\'s medical relief, dry ration distribution and emergency aid shipments.',
    raised: 285060,
    goal: 1100000,
    donors: 310,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    tag: 'Active',
    urgency: 'high',
  },
];

const categories = [
  { icon: '🌳', label: 'Plantation Drive',    count: 3,  color: '#10b981' },
  { icon: '🇵🇸', label: 'Palestine Relief',    count: 14, color: '#ef4444' },
  { icon: '🍽️', label: 'Food Distribution',  count: 18, color: '#0254a4' },
  { icon: '🏥', label: 'Healthcare',          count: 12, color: '#06b6d4' },
  { icon: '📖', label: 'Education',           count: 21, color: '#f59e0b' },
  { icon: '🤝', label: 'Community Welfare',   count: 15, color: '#8b5cf6' },
];

const activeCampaigns = [
  {
    id: 1,
    title: 'Alkhidmat Mega Plantation Drive 2025',
    desc: 'Combating climate change and greening Karachi with citywide plantation.',
    raised: 6575,
    goal: 1000000,
    color: '#10b981',
    tag: 'Active',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
  },
  {
    id: 2,
    title: 'Gaza Emergency Appeal',
    desc: 'Medical relief, meals and winter emergency packages for displaced families.',
    raised: 177010,
    goal: 1000000,
    color: '#ef4444',
    tag: 'Critical',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  },
  {
    id: 3,
    title: 'Lets Educate the Orphans',
    desc: 'Providing educational support, books, uniforms and tuition assistance.',
    raised: 26650,
    goal: 1320000,
    color: '#f59e0b',
    tag: 'Active',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
  },
];

const bigStats = [
  { value: 2,    suffix: 'M+', label: 'Lives Impacted',  icon: '❤️' },
  { value: 500,  suffix: '+',  label: 'Campaigns Run',    icon: '🎯' },
  { value: 1000, suffix: '+',  label: 'Volunteers',       icon: '🙌' },
  { value: 30,   suffix: '+',  label: 'Years of Service', icon: '🏆' },
];

const testimonials = [
  {
    quote: "Alkhidmat's campaigns have brought real change in our lives. Their dedication and transparency inspire our family and hope.",
    name: 'Fatima Ahmed',
    role: 'Beneficiary',
    location: 'Lahore',
    avatar: 'FA',
    color: '#0254a4',
    stars: 5,
  },
  {
    quote: "I've been donating to Alkhidmat for years. The impact reports are transparent and the work on the ground is remarkable.",
    name: 'Muhammad Ali',
    role: 'Recurring Donor',
    location: 'Karachi',
    avatar: 'MA',
    color: '#10b981',
    stars: 5,
  },
  {
    quote: "Volunteering with Alkhidmat during Ramadan was life-changing. The team is organized, passionate, and deeply committed.",
    name: 'Sara Malik',
    role: 'Volunteer',
    location: 'Islamabad',
    avatar: 'SM',
    color: '#f59e0b',
    stars: 5,
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', span: 'tall',   label: 'Food Drive' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', span: 'normal', label: 'Medical Camp' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', span: 'normal', label: 'Education' },
  { src: 'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&q=80',    span: 'wide',   label: 'Community' },
  { src: 'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?w=600&q=80', span: 'normal', label: 'Clean Water' },
  { src: 'https://images.unsplash.com/photo-1498771790868-5a6cfcd77e51?w=600&q=80', span: 'tall',   label: 'Winter Relief' },
];

const wayToHelp = [
  { icon: '💙', title: 'Donate',           desc: 'Every rupee funds critical programs that reach the most vulnerable.',   cta: 'Donate Now',  href: '/donate', color: '#0254a4' },
  { icon: '🙌', title: 'Volunteer',        desc: 'Give your time and skills to make a difference on the ground.',         cta: 'Join Us',     href: '#',       color: '#10b981' },
  { icon: '🤝', title: 'Partner With Us',  desc: 'Collaborate to scale impact through corporate partnerships.',           cta: 'Partner Now', href: '#',       color: '#f59e0b' },
  { icon: '📢', title: 'Spread the Word',  desc: 'Share campaigns on social media and help us reach more people.',        cta: 'Share Now',   href: '#',       color: '#8b5cf6' },
];

const faqs = [
  { q: 'How can I donate to a campaign?',        a: 'You can donate online via our secure Donate Now page, bank transfer, or visit any of our 150+ offices across Pakistan.' },
  { q: 'Where do my donations go?',              a: 'All funds are used for direct program delivery. We publish transparent impact reports with 96p in every £1 reaching beneficiaries.' },
  { q: 'Can I volunteer for campaigns?',         a: 'Absolutely! We welcome volunteers for field work, administration, and digital outreach. Register via our volunteer page.' },
  { q: 'Can companies partner with Alkhidmat?',  a: 'Yes. We offer CSR partnerships, co-branded campaigns, and Zakat/Sadqah collection programs for corporates.' },
  { q: 'Are donations tax-deductible?',          a: 'Alkhidmat Foundation is a registered charitable organization and donations qualify for tax exemption under section 2(36).' },
  { q: 'How do I start a campaign?',             a: 'Contact our campaigns team at campaigns@alkhidmat.com.pk to discuss community fundraising or peer-to-peer campaigns.' },
];

/* ─── HELPER FOR CURRENCY ───────────────────────────── */
function formatPKR(val) {
  if (val >= 1000000) {
    return `PKR ${(val / 1000000).toFixed(2)}M`;
  }
  return `PKR ${val.toLocaleString()}`;
}

/* ─── STAT CARD ─────────────────────────────────────── */
function StatCard({ stat, started }) {
  const count = useCounter(stat.value, 2000, started);
  return (
    <div className="camp-stat-card" style={{ '--stat-color': stat.color }}>
      <div className="camp-stat-card__icon">{stat.icon}</div>
      <div className="camp-stat-card__value">{count}{stat.suffix}</div>
      <div className="camp-stat-card__label">{stat.label}</div>
    </div>
  );
}

/* ─── BIG STAT ───────────────────────────────────────── */
function BigStat({ stat, started }) {
  const count = useCounter(stat.value, 2200, started);
  return (
    <div className="camp-big-stat">
      <div className="camp-big-stat__icon">{stat.icon}</div>
      <div className="camp-big-stat__value">{count}{stat.suffix}</div>
      <div className="camp-big-stat__label">{stat.label}</div>
    </div>
  );
}

/* ─── PROGRESS BAR ───────────────────────────────────── */
function ProgressBar({ raised, goal, color }) {
  const pct = Math.min((raised / goal) * 100, 100).toFixed(2);
  return (
    <div className="camp-progress">
      <div className="camp-progress__meta">
        <span style={{ color }} className="camp-progress__raised">{formatPKR(raised)} raised</span>
        <span className="camp-progress__goal">of {formatPKR(goal)}</span>
      </div>
      <div className="camp-progress__track">
        <div className="camp-progress__fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="camp-progress__pct">{pct}% funded</div>
    </div>
  );
}

/* ─── FAQ ITEM ───────────────────────────────────────── */
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`camp-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="camp-faq-item__q">
        <span className="camp-faq-item__num">0{index + 1}</span>
        <span>{q}</span>
        <svg className="camp-faq-item__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className="camp-faq-item__a">{a}</div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────── */
export default function Campaigns() {
  const [impactRef, impactInView]   = useInView(0.2);
  const [bigStatRef, bigStatInView] = useInView(0.2);
  const [activeFeat, setActiveFeat] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveFeat(p => (p + 1) % featuredCampaigns.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="campaigns-page">

      {/* 1. HERO */}
      <section className="camp-hero">
        <div className="camp-hero__bg" />
        <div className="camp-hero__overlay" />
        <div className="camp-hero__orb camp-hero__orb--1" />
        <div className="camp-hero__orb camp-hero__orb--2" />

        <div className="container camp-hero__inner">
          <div className="camp-hero__content">
            
            <h1 className="camp-hero__title">
              Campaigns That<br />
              <span className="camp-hero__accent">Change Lives Forever</span>
            </h1>
            <p className="camp-hero__desc">
              Every campaign at Alkhidmat Foundation Lahore is designed to bring hope, relief, education, healthcare,
              and empowerment to communities across Pakistan. Join hands with us to make a lasting impact.
            </p>
            <div className="camp-hero__ctas">
              <Link to="/donate" className="camp-btn camp-btn--primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Donate Now
              </Link>
              <a href="#active" className="camp-btn camp-btn--outline-white">
                Explore Campaigns
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
            

          </div>
          <div className="camp-hero__visual">
            <div className="camp-hero__photo-main">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Alkhidmat Campaign" />
              <div className="camp-hero__photo-overlay" />
            </div>
            
            
          </div>
        </div>

        <svg className="camp-hero__wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8faff" />
        </svg>
      </section>

      

      

      

      

      {/* 6. ACTIVE CAMPAIGNS */}
      <section className="camp-active section" id="active">
        <div className="container">
          <div className="camp-section-header text-center">
            
            <h2 className="section-title">Active Campaigns</h2>
          </div>
          <div className="camp-active-grid">
            {activeCampaigns.map(c => (
              <div key={c.id} className="camp-active-card" style={{ '--ac': c.color }}>
                <div className="camp-active-card__img-wrap">
                  <img src={c.image} alt={c.title} />
                  <div className="camp-active-card__img-overlay" />
                  <span className="camp-active-card__badge">{c.tag}</span>
                </div>
                <div className="camp-active-card__body">
                  <h4 className="camp-active-card__title">{c.title}</h4>
                  <p className="camp-active-card__desc">{c.desc}</p>
                  <ProgressBar raised={c.raised} goal={c.goal} color={c.color} />
                  <Link to="/donate" className="camp-btn camp-btn--primary camp-btn--sm camp-btn--full">Support Campaign →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* 9. GALLERY */}
      <section className="camp-gallery section">
        <div className="camp-gallery__bg" />
        <div className="container">
          <div className="camp-section-header text-center">
            <div className="section-tag">Moments of Impact</div>
            <h2 className="section-title">Campaign Gallery</h2>
          </div>
          <div className="camp-gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className={`camp-gallery-item camp-gallery-item--${img.span}`}>
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="camp-gallery-item__overlay"><span>{img.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* 12. FINAL CTA */}
      <section className="camp-cta">
        <div className="camp-cta__bg" />
        <div className="camp-cta__overlay" />
        <div className="camp-cta__orb camp-cta__orb--1" />
        <div className="camp-cta__orb camp-cta__orb--2" />
        <div className="container camp-cta__inner">
          
          <h2 className="camp-cta__title">
            Together We Can<br />
            <span className="camp-cta__accent">Reach More Lives</span>
          </h2>
          <p className="camp-cta__desc">
            Your support can help us continue our mission of serving humanity with compassion and dedication.
          </p>
          <div className="camp-cta__btns">
            <Link to="/donate" className="camp-btn camp-btn--white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Donate Now
            </Link>
            <a href="#" className="camp-btn camp-btn--outline-white">
              Become a Volunteer
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
          
        </div>
      </section>

    </main>
  );
}
