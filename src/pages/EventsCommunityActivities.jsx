import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsCommunityActivities.css';

/* ── assets ─────────────────────────────────────────────────────── */
import heroMainImg    from '../assets/community_services_program.png';
import heroImg2       from '../assets/health_services_program.png';
import heroImg3       from '../assets/akfl-1-new.png';
import heroImg4       from '../assets/education_program.png';
import heroImg5       from '../assets/akfl-2-new.png';

import ev1Img         from '../assets/akfl-1.jpeg';
import ev2Img         from '../assets/banoqabil_program.jpeg';
import ev3Img         from '../assets/akfl-2.jpeg';

import featuredImg    from '../assets/community_services_program.png';

import act1Img        from '../assets/disaster_management_program.png';
import act2Img        from '../assets/hero-bg-emergency-relief.png';
import act3Img        from '../assets/health_services_program.png';
import act4Img        from '../assets/education_program.png';
import act5Img        from '../assets/akfl-2-new.png';

import ctaBgImg       from '../assets/akfl-1-new.png';

/* ── static data ─────────────────────────────────────────────────── */
const upcomingEvents = [
  {
    id: 1,
    dates: ['14 Aug', '15 Aug', '16 Aug'],
    showDate: true,
    title: 'Mera Brand Pakistan',
    location: 'Alkhidmat Headquarters, Lahore',
    time: '9:00 AM – 5:00 PM',
    description:
      'A national celebration promoting Pakistani brands, businesses and entrepreneurship through community engagement and awareness activities.',
    img: ev1Img,
  },
  {
    id: 2,
    dates: [],
    showDate: false,
    title: 'Graduation Ceremony',
    location: 'Alkhidmat Learning Centre, Lahore',
    time: '10:00 AM – 1:00 PM',
    description:
      'Celebrating the achievements of our students and program graduates in a memorable ceremony honouring their hard work and dedication.',
    img: ev2Img,
  },
  {
    id: 3,
    dates: [],
    showDate: false,
    title: 'BanoQabil Upcoming Batch',
    location: 'Alkhidmat Markaz, Gulberg III, Lahore',
    time: '9:00 AM – 3:00 PM',
    description:
      'Enrolment opening for the next BanoQabil digital skills batch — empowering youth with modern technology and vocational training.',
    img: ev3Img,
  },
];

const categories = [
  {
    id: 1,
    color: 'red',
    title: 'Blood Donation',
    description: 'Save lives through blood donation drives',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 2,
    color: 'green',
    title: 'Food Distribution',
    description: 'Ration & food packages for needy families',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    id: 3,
    color: 'blue',
    title: 'Education',
    description: 'Seminars, workshops & awareness sessions',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    id: 4,
    color: 'cyan',
    title: 'Medical Camps',
    description: 'Free medical checkups and health services',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 5,
    color: 'green',
    title: 'Environment',
    description: 'Tree plantations and environmental drives',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.18L5 21l4-1 2 3c2-2 4.5-5.5 7-8"/>
        <path d="M17 8l2-7-7 2"/>
      </svg>
    ),
  },
  {
    id: 6,
    color: 'blue',
    title: 'Volunteer Programs',
    description: 'Volunteer training and community organising',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const recentActivities = [
  { id: 1, img: act1Img, title: 'Ramazan Food Distribution', date: 'March 2026',     location: 'Lahore' },
  { id: 2, img: act2Img, title: 'Flood Relief Campaign',      date: 'September 2025', location: 'Punjab' },
  { id: 3, img: act3Img, title: 'Free Medical Camp',          date: 'June 2025',      location: 'Lahore' },
  { id: 4, img: act4Img, title: 'Tree Plantation Drive',      date: 'May 2025',       location: 'Lahore' },
  { id: 5, img: act5Img, title: 'Orphan Support Program',     date: 'April 2025',     location: 'Lahore' },
];

const faqs = [
  { id: 1, q: 'How can I register for an event?', a: 'You can register for any event by clicking the "Register Now" button on the event card or by filling out the contact form below with your details and the event you are interested in.' },
  { id: 2, q: 'Is Alkhidmat events free?', a: 'Most of our community events are completely free to attend. Some specialised seminars or conferences may have a nominal registration fee. Please check individual event details for any applicable charges.' },
  { id: 3, q: 'Can students volunteer in events?', a: 'Absolutely! We warmly welcome student volunteers. Students can participate in event organisation, community outreach, and various support roles.' },
  { id: 4, q: 'How can organisations collaborate with Alkhidmat?', a: 'Organisations interested in collaboration can contact us via the form below or email us directly at info@alkhidmat.com.pk.' },
  { id: 5, q: 'How can I receive updates about upcoming events?', a: 'Follow our official social media channels and subscribe to our newsletter to stay updated about upcoming events, community activities, and volunteer opportunities across Lahore.' },
];

/* ── icons ───────────────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const ChevronDown = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const LocPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
function EventsCommunityActivities() {
  const [openFaq, setOpenFaq]   = useState(null);
  const [form, setForm]         = useState({ fullName: '', email: '', phone: '', event: '', message: '' });

  const handleForm = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <main className="ec-page">

      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <section className="ec-hero" aria-labelledby="ec-hero-h1">
        <div className="ec-hero__overlay" aria-hidden="true" />

        <div className="container ec-hero__inner">
          {/* left */}
          <div className="ec-hero__content">
            <h1 id="ec-hero-h1" className="ec-hero__title">
              Events &amp; Community<br />Activities
            </h1>
            <p className="ec-hero__desc">
              Stay connected with Alkhidmat Foundation Lahore's upcoming events, awareness campaigns,
              volunteer activities, fundraising drives, educational seminars and humanitarian initiatives.
            </p>
            <div className="ec-hero__btns">
              <a href="#ec-upcoming" className="btn btn-primary ec-hero__btn">
                View Upcoming Events <ArrowRight />
              </a>
              <Link to="/alkhidmat-volunteer" className="btn ec-hero__btn ec-hero__btn--ghost">
                Become a Volunteer <ArrowRight />
              </Link>
            </div>
          </div>

          {/* right – collage */}
          <div className="ec-hero__collage" aria-hidden="true">
            <div className="ec-hero__col-main">
              <img src={heroMainImg} alt="" />
            </div>
            <div className="ec-hero__col-grid">
              <div className="ec-hero__col-cell"><img src={heroImg2} alt="" /></div>
              <div className="ec-hero__col-cell"><img src={heroImg3} alt="" /></div>
              <div className="ec-hero__col-cell"><img src={heroImg4} alt="" /></div>
              <div className="ec-hero__col-cell"><img src={heroImg5} alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. STATS STRIP
      ════════════════════════════════════════ */}
      <section className="ec-stats" aria-label="Key statistics">
        <div className="container">
          <div className="ec-stats__grid">

            <div className="ec-stats__item">
              <span className="ec-stats__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <strong className="ec-stats__num">50+</strong>
              <span className="ec-stats__lbl">Events Organized Annually</span>
            </div>

            <div className="ec-stats__item">
              <span className="ec-stats__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              <strong className="ec-stats__num">20,000+</strong>
              <span className="ec-stats__lbl">Community Participants</span>
            </div>

            <div className="ec-stats__item">
              <span className="ec-stats__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </span>
              <strong className="ec-stats__num">100+</strong>
              <span className="ec-stats__lbl">Charity Drives</span>
            </div>

            <div className="ec-stats__item">
              <span className="ec-stats__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <strong className="ec-stats__num">Lahore</strong>
              <span className="ec-stats__lbl">Primary Operations</span>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. UPCOMING EVENTS
      ════════════════════════════════════════ */}
      <section id="ec-upcoming" className="ec-upcoming section" aria-labelledby="ec-upcoming-h2">
        <div className="container">

          <div className="ec-section-hdr">
            <div>
              <span className="section-tag">UPCOMING EVENTS</span>
              <h2 id="ec-upcoming-h2" className="section-title">Upcoming Events</h2>
            </div>
            <Link to="/events-community-activities" className="ec-view-all">
              View All Events <ChevronRight />
            </Link>
          </div>

          <div className="ec-events-grid">
            {upcomingEvents.map((ev) => (
              <article key={ev.id} className="ec-event-card">
                <div className="ec-event-card__img">
                  <img src={ev.img} alt={ev.title} loading="lazy" />
                  {ev.showDate && (
                    <div className="ec-event-card__badge">
                      {ev.dates.map((d) => (
                        <span key={d} className="ec-event-card__badge-date">{d}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="ec-event-card__body">
                  <h3 className="ec-event-card__title">{ev.title}</h3>
                  <div className="ec-event-card__meta">
                    <span><LocPin /> {ev.location}</span>
                    <span><ClockIcon /> {ev.time}</span>
                  </div>
                  <p className="ec-event-card__desc">{ev.description}</p>
                  <div className="ec-event-card__btns">
                    <a href="#" className="btn btn-outline btn-sm">View Details</a>
                    <a href="#" className="btn btn-primary btn-sm">Register Now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          4. FEATURED EVENT
      ════════════════════════════════════════ */}
      <section className="ec-featured section" aria-labelledby="ec-featured-h2">
        <div className="container">
          <div className="ec-featured__inner">

            {/* image */}
            <div className="ec-featured__img-wrap">
              <img src={featuredImg} alt="Annual Volunteer Conference 2026" loading="lazy" />
              <div className="ec-featured__img-tag">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                VOLUNTEER CONFERENCE 2026
              </div>
            </div>

            {/* content */}
            <div className="ec-featured__content">
              <span className="section-tag section-tag--white">FEATURED EVENT</span>
              <h2 id="ec-featured-h2" className="ec-featured__title">
                Annual Volunteer Conference 2026
              </h2>
              <p className="ec-featured__desc">
                A dedicated gathering celebrating the efforts of Alkhidmat volunteers and introducing
                future community initiatives across Lahore.
              </p>

              <div className="ec-featured__details">
                <div className="ec-featured__detail">
                  <CalIcon />
                  <div>
                    <strong>13 September 2026</strong>
                    <span>(Saturday)</span>
                  </div>
                </div>
                <div className="ec-featured__detail">
                  <LocPin />
                  <div>
                    <strong>Pearl Continental</strong>
                    <span>Hotel, Lahore</span>
                  </div>
                </div>
                <div className="ec-featured__detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div>
                    <strong>500+ Expected</strong>
                    <span>Participants</span>
                  </div>
                </div>
              </div>

              <p className="ec-featured__speakers-label">Guest Speakers</p>
              <div className="ec-featured__speakers">
                <div className="ec-featured__speaker">
                  <div className="ec-featured__spk-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Dr. Hafiz Saeed</strong>
                    <span>President, Alkhidmat Foundation</span>
                  </div>
                </div>
                <div className="ec-featured__speaker">
                  <div className="ec-featured__spk-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Engr. Bilal Sahan</strong>
                    <span>Senior Programs, Alkhidmat Foundation</span>
                  </div>
                </div>
              </div>

              <div className="ec-featured__btns">
                <a href="#" className="btn btn-primary">
                  Register Now <ArrowRight />
                </a>
                <a href="#" className="btn btn-outline ec-featured__dl-btn">
                  Download Schedule
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. EVENT CATEGORIES
      ════════════════════════════════════════ */}
      <section className="ec-cats section bg-light" aria-labelledby="ec-cats-h2">
        <div className="container text-center">
          <span className="section-tag">EVENT CATEGORIES</span>
          <h2 id="ec-cats-h2" className="section-title">Types of Events We Organise</h2>
          <div className="ec-cats__grid">
            {categories.map((c) => (
              <div key={c.id} className={`ec-cat-card ec-cat-card--${c.color}`}>
                <div className="ec-cat-card__icon">{c.icon}</div>
                <h3 className="ec-cat-card__title">{c.title}</h3>
                <p className="ec-cat-card__desc">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. RECENT ACTIVITIES
      ════════════════════════════════════════ */}
      <section className="ec-recent section" aria-labelledby="ec-recent-h2">
        <div className="container">
          <div className="ec-section-hdr">
            <div>
              <span className="section-tag">HIGHLIGHTS FROM PREVIOUS EVENTS</span>
              <h2 id="ec-recent-h2" className="section-title">Our Recent Activities</h2>
            </div>
            <a href="#" className="ec-view-all">
              View All Galleries <ChevronRight />
            </a>
          </div>

          <div className="ec-recent__grid">
            {recentActivities.map((a) => (
              <article key={a.id} className="ec-act-card">
                <div className="ec-act-card__img">
                  <img src={a.img} alt={a.title} loading="lazy" />
                  <div className="ec-act-card__overlay" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                </div>
                <div className="ec-act-card__body">
                  <h4 className="ec-act-card__title">{a.title}</h4>
                  <div className="ec-act-card__meta">
                    <span><CalIcon /> {a.date}</span>
                    <span><LocPin /> {a.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. MAKE A DIFFERENCE CTA BANNER
      ════════════════════════════════════════ */}
      <section className="ec-diff-banner" aria-label="Make a difference">
        <div className="container">
          <div className="ec-diff-banner__inner">
            <div className="ec-diff-banner__content">
              <h2 className="ec-diff-banner__title">Make a Difference Today</h2>
              <p className="ec-diff-banner__desc">
                Whether you're a student, professional, or retiree, your time and skills
                can bring hope and change to thousands of lives.
              </p>
              <div className="ec-diff-banner__btns">
                <Link to="/alkhidmat-volunteer" className="btn btn-primary ec-diff-banner__btn">
                  Become a Volunteer
                </Link>
                <a href="#" className="btn ec-diff-banner__btn ec-diff-banner__btn--ghost">
                  Apply Now <ArrowRight />
                </a>
              </div>
            </div>
            <div className="ec-diff-banner__img" aria-hidden="true">
              <img src={ctaBgImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. FAQ + CONTACT
      ════════════════════════════════════════ */}
      <section className="ec-faq-contact section" aria-label="FAQ and contact">
        <div className="container">
          <div className="ec-faq-contact__grid">

            {/* FAQ */}
            <div className="ec-faq">
              <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
              <div className="ec-faq__list">
                {faqs.map((faq) => (
                  <div key={faq.id} className={`ec-faq__item${openFaq === faq.id ? ' open' : ''}`}>
                    <button
                      className="ec-faq__q"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      aria-expanded={openFaq === faq.id}
                      id={`ec-faq-btn-${faq.id}`}
                      aria-controls={`ec-faq-ans-${faq.id}`}
                    >
                      {faq.q}
                      <ChevronDown className={`ec-faq__chevron${openFaq === faq.id ? ' rotated' : ''}`} />
                    </button>
                    <div
                      id={`ec-faq-ans-${faq.id}`}
                      role="region"
                      aria-labelledby={`ec-faq-btn-${faq.id}`}
                      className="ec-faq__a"
                    >
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="ec-contact">
              <span className="section-tag">NEED MORE INFORMATION</span>
              <h3 className="ec-contact__title">Get In Touch With Us</h3>

              <div className="ec-contact__info">
                <div className="ec-contact__info-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <span>+92 300 0771601</span>
                    <span>+92 42 35441516</span>
                  </div>
                </div>
                <div className="ec-contact__info-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>info@alkhidmat.com.pk</span>
                </div>
                <div className="ec-contact__info-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Alkhidmat Markaz, 106/M Block Gulberg III, Lahore, Punjab, Pakistan</span>
                </div>
              </div>

              <form className="ec-contact__form" onSubmit={handleSubmit} noValidate aria-label="Event inquiry form">
                <div className="ec-contact__row">
                  <div className="ec-contact__field">
                    <label htmlFor="ec-fn">Full Name</label>
                    <input id="ec-fn" name="fullName" type="text" placeholder="Your full name" value={form.fullName} onChange={handleForm} required />
                  </div>
                  <div className="ec-contact__field">
                    <label htmlFor="ec-em">Email Address</label>
                    <input id="ec-em" name="email" type="email" placeholder="Your email" value={form.email} onChange={handleForm} required />
                  </div>
                </div>
                <div className="ec-contact__row">
                  <div className="ec-contact__field">
                    <label htmlFor="ec-ph">Phone Number</label>
                    <input id="ec-ph" name="phone" type="tel" placeholder="0300-0000000" value={form.phone} onChange={handleForm} />
                  </div>
                  <div className="ec-contact__field">
                    <label htmlFor="ec-ev">Event Interested In</label>
                    <input id="ec-ev" name="event" type="text" placeholder="Select an event" value={form.event} onChange={handleForm} />
                  </div>
                </div>
                <div className="ec-contact__field ec-contact__field--full">
                  <label htmlFor="ec-msg">Message</label>
                  <textarea id="ec-msg" name="message" rows="4" placeholder="Write your message here..." value={form.message} onChange={handleForm} />
                </div>
                <button type="submit" className="btn btn-primary ec-contact__submit">
                  Submit Inquiry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. BOTTOM CTA – JOIN OUR MISSION
      ════════════════════════════════════════ */}
      <section className="ec-bottom-cta" aria-label="Join our mission">
        <div className="container ec-bottom-cta__inner">
          <div className="ec-bottom-cta__icon" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <div className="ec-bottom-cta__text">
            <h2 className="ec-bottom-cta__title">Join Our Mission</h2>
            <p className="ec-bottom-cta__desc">
              Be part of Alkhidmat Foundation Lahore's journey of serving humanity through meaningful
              events and community engagement.
            </p>
          </div>
          <div className="ec-bottom-cta__btns">
            <Link to="/events-community-activities" className="btn btn-outline ec-bottom-cta__btn">
              View All Events <ArrowRight />
            </Link>
            <Link to="/alkhidmat-volunteer" className="btn ec-bottom-cta__btn ec-bottom-cta__btn--white">
              Become a Volunteer <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default EventsCommunityActivities;
