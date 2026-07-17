import React from 'react';
import './LatestNews.css';

function LatestNews() {
  return (
    <section className="latest-news section">
      <div className="container">
        <div className="latest-news__header">
          <div>
            <span className="section-tag">NEWS, UPDATES & LIVE SOCIAL FEED</span>
            <h2 className="section-title">Stay Updated, Stay Connected</h2>
            <p className="section-subtitle">
              Explore our latest news, field stories, press releases, and moments of impact from across Pakistan and beyond.
            </p>
          </div>
        </div>

        <div className="news-layout">
          {/* Main News Grid (Left) */}
          <div className="news-grid">
            {/* Tall Card */}
            <div className="news-card news-card--tall">
              <div className="news-card__bg bg-flood"></div>
              <div className="news-card__content">
                <span className="news-badge badge-blue">FIELD UPDATE</span>
                <h3>Alkhidmat Team Provides Relief in Flood-Hit Areas of Sindh</h3>
                <span className="news-date">May 28, 2025</span>
              </div>
            </div>
            
            {/* 4 Small Cards */}
            <div className="news-subgrid">
              <div className="news-card news-card--small">
                <div className="news-card__bg bg-health"></div>
                <div className="news-card__content">
                  <span className="news-badge badge-cyan">HEALTH</span>
                  <h4>Free Medical Camp Serves Hundreds in Remote Villages</h4>
                  <span className="news-date">May 26, 2025</span>
                </div>
              </div>
              
              <div className="news-card news-card--small">
                <div className="news-card__bg bg-edu"></div>
                <div className="news-card__content">
                  <span className="news-badge badge-blue">EDUCATION</span>
                  <h4>New School Facility Inaugurated in South Punjab</h4>
                  <span className="news-date">May 24, 2025</span>
                </div>
              </div>
              
              <div className="news-card news-card--small">
                <div className="news-card__bg bg-water"></div>
                <div className="news-card__content">
                  <span className="news-badge badge-cyan">WASH</span>
                  <h4>Clean Water Projects Bring Hope to Thar Communities</h4>
                  <span className="news-date">May 22, 2025</span>
                </div>
              </div>
              
              <div className="news-card news-card--small">
                <div className="news-card__bg bg-relief"></div>
                <div className="news-card__content">
                  <span className="news-badge badge-gold">RELIEF</span>
                  <h4>Food Packages Distributed to Needy Families in Lahore</h4>
                  <span className="news-date">May 20, 2025</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Feed (Right) */}
          <div className="social-feed">
            <div className="social-feed__header">
              <div>
                <h3>Live from Our Socials</h3>
                <p>Real-time updates from our official channels</p>
              </div>
              <div className="social-icons">
                <a href="#" className="color-fb"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="color-tw"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                <a href="#" className="color-ig"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="#" className="color-yt"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg></a>
              </div>
            </div>
            
            <div className="social-feed__list">
              <div className="social-post">
                <div className="social-post__header">
                  <div className="social-post__author">
                    <div className="social-post__avatar bg-tw">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </div>
                    <strong>@AlkhidmatOrg</strong>
                  </div>
                  <span className="social-post__time">2h ago</span>
                </div>
                <p>Your Zakat can change a life. Help us support orphans and deserving families this Ramadan. <a href="#">#Zakat</a> <a href="#">#Ramadan2025</a></p>
              </div>
              
              <div className="social-post">
                <div className="social-post__header">
                  <div className="social-post__author">
                    <div className="social-post__avatar bg-ig">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </div>
                    <strong>@alkhidmatfoundation</strong>
                  </div>
                  <span className="social-post__time">4h ago</span>
                </div>
                <p>Our volunteers are on the ground delivering relief and hope to flood affectees in Dera Ghazi Khan.</p>
              </div>
              
              <div className="social-post">
                <div className="social-post__header">
                  <div className="social-post__author">
                    <div className="social-post__avatar bg-fb">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <strong>Alkhidmat Foundation Pakistan</strong>
                  </div>
                  <span className="social-post__time">6h ago</span>
                </div>
                <p>Another successful Eye Camp completed in Mardan. 350+ patients screened and treated free of cost.</p>
              </div>
            </div>
            
            <a href="#" className="btn btn-outline btn-full">
              View All Updates
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
