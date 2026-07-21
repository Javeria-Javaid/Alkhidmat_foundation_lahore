import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programs';
import './PalestineEmergencyAppeal.css';

import collageImg from '../assets/rebuild_gaza.png';
import medicalImg from '../assets/health_services_program.png';
import foodImg from '../assets/akfl-1-new.png';
import waterImg from '../assets/wash_img.png';
import shelterImg from '../assets/disaster_management.png';
import volunteerImg from '../assets/akfl-2-new.png';
import childrenImg from '../assets/akfl-3.jpeg';
import reliefImg from '../assets/serve_humanity.png';

const reliefOperations = [
  { title: 'Medical Assistance', description: 'Supporting access to essential healthcare for families affected by the crisis.', image: medicalImg, icon: '✚' },
  { title: 'Food Distribution', description: 'Delivering nourishing food packages to families facing severe shortages.', image: foodImg, icon: '⌁' },
  { title: 'Clean Water', description: 'Helping communities access safe drinking water and hygiene support.', image: waterImg, icon: '◌' },
  { title: 'Emergency Shelter', description: 'Providing shelter and essential relief items to displaced families.', image: shelterImg, icon: '⌂' },
];

const impactStats = [
  { value: '75,000+', label: 'Families Assisted', icon: '♧' },
  { value: '75,000+', label: 'Food Packs Distributed', icon: '▦' },
  { value: '240', label: 'Water Projects', icon: '◈' },
  { value: '12,500+', label: 'Medical Treatments', icon: '✚' },
  { value: '1,500+', label: 'Volunteers', icon: '♧' },
  { value: '350+', label: 'Emergency Shelters', icon: '⌂' },
];

const galleryItems = [
  { image: foodImg, category: 'Food Distribution', title: 'Aid reaches families in need' },
  { image: volunteerImg, category: 'Volunteers', title: 'Standing with Palestine' },
  { image: medicalImg, category: 'Medical Camps', title: 'Care when it matters most' },
  { image: childrenImg, category: 'Children', title: 'Protecting hope for children' },
  { image: shelterImg, category: 'Emergency Shelter', title: 'A safe place to recover' },
  { image: reliefImg, category: 'Aid Delivery', title: 'Relief delivered with dignity' },
];

function Icon({ children }) {
  return <span className="palestine-icon" aria-hidden="true">{children}</span>;
}

function PalestineEmergencyAppeal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="palestine-page">
      <section className="palestine-hero">
        <div className="container palestine-hero__inner">
          <div className="palestine-hero__content reveal-up">
            <span className="section-tag palestine-hero__badge">Palestine Emergency Appeal</span>
            <h1>Stand with Palestine.<br /><span>Be their hope today.</span></h1>
            <p>Support Palestinian families facing displacement, violence, and humanitarian crisis with food, healthcare, clean water, shelter, and emergency assistance.</p>
            <div className="palestine-hero__actions">
              <a className="btn btn-primary" href="#donate-section">Donate Now <span aria-hidden="true">→</span></a>
              <a className="btn btn-outline" href="#overview">Learn More <span aria-hidden="true">↓</span></a>
            </div>
            <div className="palestine-hero__stats">
              <div><strong>75,000+</strong><span>People assisted</span></div>
              <div><strong>1,500+</strong><span>Active volunteers</span></div>
              <div><strong>24/7</strong><span>Humanitarian response</span></div>
            </div>
          </div>
          <div className="palestine-hero__visual reveal-scale">
            <div className="palestine-hero__brush"></div>
            <img src={collageImg} alt="Humanitarian support in Palestine" />
            <div className="palestine-hero__floating-card"><span>URGENT AID</span><strong>Every donation delivers hope.</strong></div>
          </div>
        </div>
      </section>

      <section id="overview" className="palestine-section palestine-overview">
        <div className="container palestine-overview__grid">
          <div className="palestine-overview__copy reveal-up">
            <span className="section-tag">Emergency overview</span>
            <h2>Crisis update: standing with Palestine</h2>
            <p>Palestine is a land steeped in history, culture, and strife. For decades, Palestinian people have endured displacement, violence, restricted movement, and the denial of fundamental rights.</p>
            <p>This is not only a political issue; it is a humanitarian crisis that demands urgent attention and action. Families need access to food, healthcare, education, clean water, and protection from violence.</p>
            <ul className="palestine-check-list">
              <li><Icon>✓</Icon> Support families affected by conflict and displacement.</li>
              <li><Icon>✓</Icon> Respond to urgent humanitarian needs with dignity.</li>
              <li><Icon>✓</Icon> Stand for justice, peace, and a better future.</li>
            </ul>
            <a className="btn btn-outline" href="#donate-section">Join the appeal <span aria-hidden="true">→</span></a>
          </div>
          <div className="palestine-overview__images reveal-scale">
            <img src={foodImg} alt="Food assistance for families" />
            <img src={volunteerImg} alt="Volunteers supporting relief work" />
            <img src={reliefImg} alt="Emergency aid delivery" />
            <img src={medicalImg} alt="Medical humanitarian assistance" />
          </div>
        </div>
      </section>

      <section className="palestine-section palestine-operations">
        <div className="container">
          <div className="palestine-section-heading reveal-up">
            <div><span className="section-tag">Our response</span><h2>Current relief operations</h2></div>
            <p>From emergency support to long-term recovery, every response is shaped around the needs of Palestinian families.</p>
          </div>
          <div className="palestine-operation-grid">
            {reliefOperations.map((operation) => (
              <article className="palestine-operation-card reveal-up" key={operation.title}>
                <div className="palestine-card-image"><img src={operation.image} alt={operation.title} /><span>{operation.icon}</span></div>
                <div className="palestine-card-body"><h3>{operation.title}</h3><p>{operation.description}</p><a href="#donate-section">Learn More <span aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="palestine-section palestine-impact">
        <div className="container">
          <div className="text-center reveal-up"><span className="section-tag">Our impact</span><h2>Hope measured in lives changed</h2><p className="section-subtitle">Your generosity turns into practical assistance for families and communities affected by crisis.</p></div>
          <div className="palestine-impact-grid">
            {impactStats.map((stat) => <div className="palestine-impact-card reveal-up" key={stat.label}><Icon>{stat.icon}</Icon><div><strong>{stat.value}</strong><span>{stat.label}</span></div><em>Campaign impact</em></div>)}
          </div>
        </div>
      </section>

      <section className="palestine-section palestine-story">
        <div className="container palestine-story__grid">
          <div className="palestine-story__image reveal-scale"><img src={childrenImg} alt="A Palestinian family receiving support" /></div>
          <div className="palestine-story__copy reveal-up"><span className="section-tag">Human stories</span><h2>When help arrives, hope feels possible again.</h2><p>Behind every appeal is a family trying to protect their children, find safety, and hold on to dignity. Alkhidmat’s humanitarian response helps communities through immediate assistance and compassionate support.</p><p>Peace cannot be imposed; it must be built on mutual understanding, respect, and compassion. Your support helps keep that hope alive.</p><a className="btn btn-primary" href="#donate-section">Read their stories <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section className="palestine-section palestine-gallery">
        <div className="container"><div className="text-center reveal-up"><span className="section-tag">Relief gallery</span><h2>Snapshots of solidarity</h2><p className="section-subtitle">A closer look at the people, volunteers, and aid behind this emergency response.</p></div><div className="palestine-gallery__grid">{galleryItems.map((item, index) => <figure className={`palestine-gallery__item palestine-gallery__item--${index + 1} reveal-scale`} key={item.title}><img src={item.image} alt={item.title} /><figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption></figure>)}</div></div>
      </section>

      <section className="palestine-urgent"><div className="container palestine-urgent__inner"><div><span className="palestine-urgent__label">Urgent</span><h2>Stand with Palestine</h2><p>Every donation delivers hope.</p></div><a href="#donate-section" className="btn btn-yellow">Donate Now <span aria-hidden="true">→</span></a></div></section>

      <section id="donate-section" className="palestine-section palestine-contact"><div className="container"><div className="palestine-contact__card"><div className="palestine-contact__info"><span className="section-tag section-tag--white">Contact & donation</span><h2>Join us in making a difference.</h2><p>Reach our Lahore team for donation support, campaign information, or emergency assistance.</p><div className="palestine-contact__details"><a href="mailto:info@alkhidmat.com.pk"><Icon>✉</Icon><span><b>Email</b>info@alkhidmat.com.pk</span></a><a href="tel:+923000771601"><Icon>☎</Icon><span><b>Phone</b>+92 300 0771601</span></a><a href="https://wa.me/923000771601"><Icon>◉</Icon><span><b>WhatsApp</b>+92 300 0771601</span></a><div><Icon>⌖</Icon><span><b>Office</b>Alkhidmat Markaz, 106/M Block Gulberg III Lahore</span></div></div></div><div className="palestine-contact__form"><h3>Send a message</h3>{submitted && <div className="palestine-form-success">Thank you. Our team will be in touch shortly.</div>}<form onSubmit={handleSubmit}><div className="palestine-form-row"><label>Name<input name="name" required placeholder="Your full name" /></label><label>Email<input type="email" name="email" required placeholder="Your email address" /></label></div><div className="palestine-form-row"><label>Phone<input type="tel" name="phone" placeholder="Your phone number" /></label><label>Emergency contact<input name="emergency" placeholder="Optional" /></label></div><label>Message<textarea name="message" required rows="5" placeholder="How can we help?"></textarea></label><button className="btn btn-primary" type="submit">Send Message <span aria-hidden="true">→</span></button></form></div></div></div></section>

      <section className="palestine-related"><div className="container"><div className="text-center"><span className="section-tag">Where we work</span><h2>Explore our programs</h2></div><div className="palestine-related__grid">{programs.slice(1, 5).map((program) => <Link to={program.href} className="palestine-related__item" key={program.label}><img src={program.image} alt="" /><span>{program.label}</span><b>→</b></Link>)}</div></div></section>
    </main>
  );
}

export default PalestineEmergencyAppeal;
