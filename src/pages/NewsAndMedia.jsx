import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsAndMedia.css';
import {
  featuredStory,
  newsCategories,
  newsArticles,
  statistics,
  videos,
  mediaGallery,
  pressReleases
} from '../data/newsMediaData';

// Background image for hero
import heroBg from '../assets/volunteer/hero_bg.jpg';

function NewsAndMedia() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter news articles based on selected category
  const filteredArticles = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Render Statistics Icons
  const renderStatIcon = (type) => {
    switch (type) {
      case 'news':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M16 8h2" />
            <path d="M16 12h2" />
            <path d="M16 16h2" />
            <path d="M6 8h6v8H6z" />
          </svg>
        );
      case 'media':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <path d="M23 7a2 2 0 0 0-2.45-1.45L11 8.75 3.45 6.25A2 2 0 0 0 1 8.2v10.6a2 2 0 0 0 2.45 1.95L11 18.25l7.55 2.5A2 2 0 0 0 21 18.8V8.2a2 2 0 0 0-1.45-1.95L11 8.75V3" />
            <path d="M11 8.75l-5 1.65" />
            <path d="M11 11.25l-5 1.65" />
            <path d="M11 13.75l-5 1.65" />
            <path d="M11 8.75l5 1.65" />
            <path d="M11 11.25l5 1.65" />
            <path d="M11 13.75l5 1.65" />
          </svg>
        );
      case 'lives':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case 'service':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="news-media-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="nm-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="nm-hero__overlay" />
        <div className="container nm-hero__container">
          <nav className="nm-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="nm-breadcrumbs__separator">&gt;</span>
            <span className="nm-breadcrumbs__current">News & Media</span>
          </nav>
          <h1 className="nm-hero__title">News & Media</h1>
          <p className="nm-hero__description">
            Stay updated with our latest humanitarian efforts, success stories, media coverage, and organizational announcements.
          </p>
        </div>
      </section>

      {/* ── 2. FEATURED STORY ── */}
      <section className="nm-featured-section">
        <div className="container">
          <div className="nm-featured-card">
            <div className="nm-featured-card__image-container">
              <img src={featuredStory.image} alt={featuredStory.title} className="nm-featured-card__image" />
            </div>
            <div className="nm-featured-card__content">
              <span className="nm-featured-card__badge">{featuredStory.category}</span>
              <h2 className="nm-featured-card__title">{featuredStory.title}</h2>
              <div className="nm-featured-card__meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" className="nm-meta-icon">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{featuredStory.date}</span>
              </div>
              <p className="nm-featured-card__excerpt">{featuredStory.excerpt}</p>
              <Link to={featuredStory.link} className="btn nm-btn-primary">
                Read Story
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CATEGORY FILTERS ── */}
      <section className="nm-filters-section">
        <div className="container">
          <div className="nm-filters">
            {newsCategories.map(category => (
              <button
                key={category}
                className={`nm-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NEWS GRID ── */}
      <section className="nm-grid-section">
        <div className="container">
          <div className="nm-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="nm-article-card">
                <div className="nm-article-card__image-wrapper">
                  <img src={article.image} alt={article.title} className="nm-article-card__image" />
                  <span className="nm-article-card__category">{article.category}</span>
                </div>
                <div className="nm-article-card__content">
                  <div className="nm-article-card__date">{article.date}</div>
                  <h3 className="nm-article-card__title">{article.title}</h3>
                  <p className="nm-article-card__desc">{article.description}</p>
                  <Link to={article.link} className="nm-article-card__link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="nm-grid-empty">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. STATISTICS SECTION ── */}
      <section className="nm-stats-section">
        <div className="container">
          <div className="nm-stats-grid">
            {statistics.map(stat => (
              <div key={stat.id} className="nm-stat-card">
                <div className="nm-stat-card__icon-wrapper">
                  {renderStatIcon(stat.icon)}
                </div>
                <div className="nm-stat-card__value">{stat.value}</div>
                <div className="nm-stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. VIDEO GALLERY ── */}
      <section className="nm-videos-section">
        <div className="container">
          <div className="nm-section-header">
            <h2 className="nm-section-title">Video Gallery</h2>
            <Link to="#" className="nm-section-link">
              View All Videos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="nm-video-grid">
            {videos.map(video => (
              <div key={video.id} className="nm-video-card">
                <div className="nm-video-card__thumbnail-container">
                  <img src={video.image} alt={video.title} className="nm-video-card__thumbnail" />
                  <div className="nm-video-card__play-btn" aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span className="nm-video-card__duration">{video.duration}</span>
                </div>
                <div className="nm-video-card__info">
                  <h3 className="nm-video-card__title">{video.title}</h3>
                  <p className="nm-video-card__subtitle">{video.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. MEDIA GALLERY ── */}
      <section className="nm-gallery-section">
        <div className="container">
          <div className="nm-section-header">
            <h2 className="nm-section-title">Media Gallery</h2>
            <Link to="#" className="nm-section-link">
              View All Photos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="nm-gallery-grid">
            {mediaGallery.map(item => (
              <div key={item.id} className="nm-gallery-item">
                <img src={item.image} alt={item.alt} className="nm-gallery-image" />
                <div className="nm-gallery-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" className="nm-gallery-zoom-icon">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PRESS RELEASES TIMELINE ── */}
      <section className="nm-press-section">
        <div className="container">
          <div className="nm-section-header">
            <h2 className="nm-section-title">Press Releases</h2>
            <Link to="#" className="nm-section-link">
              View All Releases
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="nm-press-timeline">
            {pressReleases.map(release => (
              <div key={release.id} className="nm-press-item">
                <div className="nm-press-marker" />
                <div className="nm-press-date">{release.date}</div>
                <div className="nm-press-content">
                  <h3 className="nm-press-title">{release.title}</h3>
                  <p className="nm-press-summary">{release.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default NewsAndMedia;
