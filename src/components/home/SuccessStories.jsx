import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';

import palestineImg from '../../assets/featured_causes_section(Home_Page)/palestine_.jpeg';
import healthImg from '../../assets/featured_causes_section(Home_Page)/health_services.jpeg';
import waterImg from '../../assets/featured_causes_section(Home_Page)/clean_water.jpeg';
import orphanImg from '../../assets/featured_causes_section(Home_Page)/orphan_sponsorship.jpeg';
import educationImg from '../../assets/featured_causes_section(Home_Page)/education_support.jpeg';

const featuredCauses = [
  {
    id: 'gaza',
    title: 'Rebuild Gaza',
    desc: 'Support emergency relief and rebuilding efforts.',
    image: palestineImg,
    badge: 'URGENT APPEAL',
    type: 'large',
    link: '#',
    objectPosition: 'center',
  },
  {
    id: 'health',
    title: 'Health Services',
    desc: 'Providing quality healthcare services to underserved communities.',
    image: healthImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    iconClass: 'icon-blue',
    type: 'wide',
    link: '#',
    objectPosition: 'center',
  },
  {
    id: 'water',
    title: 'Clean Water Projects',
    desc: 'Delivering clean water and sanitation facilities to communities in need.',
    image: waterImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    ),
    iconClass: 'icon-cyan',
    type: 'normal',
    link: '#',
    objectPosition: 'center',
  },
  {
    id: 'orphan',
    title: 'Orphan Sponsorship',
    desc: 'Supporting orphaned children with education, care, and a brighter future.',
    image: orphanImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    iconClass: 'icon-green',
    type: 'normal',
    link: '#',
    objectPosition: 'center',
  },
  {
    id: 'education',
    title: 'Education Support',
    desc: 'Providing quality education and resources to underprivileged children.',
    image: educationImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    iconClass: 'icon-yellow',
    type: 'normal',
    link: '#',
    objectPosition: 'center',
  },
];

function SuccessStories() {

  return (
    <section className="success-stories">
      
      {/* Volunteer Section */}
      <div className="volunteer-section" id="volunteer-section">
        <div className="container volunteer-section__inner">
          <div className="volunteer-section__content">
            <h2 className="volunteer-section__title">
              Be the Change: Join<br />
              80,000+ Global Volunteers
            </h2>
            <p className="volunteer-section__desc">
              Alkhidmat's power lies in its hands-on network. From disaster rescue operations to local educational bootcamps, our volunteers are on the ground making real-time differences every day.
            </p>
            
            <div className="volunteer-section__actions">
              <Link to="/alkhidmat-volunteer" className="btn btn-primary">
                Register as Volunteer
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </Link>
              <Link to="/events-community-activities" className="btn btn-outline btn-outline--white">
                View Past Event Gallery
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </Link>
            </div>
            
            <div className="volunteer-section__stats">
              <div className="stat-item">
                <div className="stat-icon bg-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <strong>80,000+</strong>
                  <span>Active Volunteers</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon bg-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <strong>Across</strong>
                  <span>Pakistan & Beyond</span>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon bg-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <div>
                  <strong>Countless Lives</strong>
                  <span>Impacted Together</span>
                </div>
              </div>
            </div>
          </div>
          <div className="volunteer-section__video">
            <div className="video-player">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6ZBzkHsmzaI?si=sInh4fnj7kSkuVFs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Causes Grid */}
      <div className="featured-causes section">
        <div className="container">
          <div className="featured-causes__grid">
            
            <div className="cause-intro">
              <h2 className="cause-intro__title">Your Support Creates Lasting Impact</h2>
              <p className="cause-intro__desc">
                Every contribution helps us continue our mission of serving humanity through essential programs and initiatives.
              </p>
              <a href="#" className="btn-link">Explore All Programs &rarr;</a>
            </div>
            
            {featuredCauses.map((cause) => {
              const cardClass = `cause-card cause-card--dark ${
                cause.type === 'large' ? 'cause-card--large' : cause.type === 'wide' ? 'cause-card--wide' : ''
              }`;

              return (
                <div key={cause.id} className={cardClass}>
                  <div className="cause-card__bg">
                    <img 
                      src={cause.image} 
                      alt={cause.title} 
                      style={{ 
                        objectPosition: cause.objectPosition,
                        filter: 'brightness(1.02) contrast(1.05) saturate(1.04)'
                      }} 
                    />
                  </div>
                  <div className="cause-card__content">
                    {cause.badge && <span className="badge badge-yellow">{cause.badge}</span>}
                    {cause.icon && <div className={`cause-icon ${cause.iconClass}`}>{cause.icon}</div>}
                    <h3>{cause.title}</h3>
                    <p>{cause.desc}</p>
                    {cause.type === 'large' ? (
                      <a href={cause.link} className="btn btn-white">
                        Donate Now
                      </a>
                    ) : (
                      <a href={cause.link} className="link-arrow">
                        Donate Now &rarr;
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default SuccessStories;
