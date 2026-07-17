import React from 'react';
import './Partners.css';

const projects = [
  {
    id: 1,
    location: 'KARACHI',
    title: 'Aghosh Complex Karachi',
    bgClass: 'bg-project-1'
  },
  {
    id: 2,
    location: 'THARPARKAR, SINDH',
    title: 'Tharparkar Water Desalination Plant',
    bgClass: 'bg-project-2'
  },
  {
    id: 3,
    location: 'PESHAWAR, KPK',
    title: 'Alkhidmat Welfare Complex Peshawar',
    bgClass: 'bg-project-3'
  },
  {
    id: 4,
    location: 'LAHORE, PUNJAB',
    title: 'Bano Qabil IT Labs Lahore',
    bgClass: 'bg-project-4'
  },
  {
    id: 5,
    location: 'MULTAN, PUNJAB',
    title: 'Disaster Management Warehouse Multan',
    bgClass: 'bg-project-5'
  },
  {
    id: 6,
    location: 'GILGIT, BALTISTAN',
    title: 'Alkhidmat Welfare Hospital Gilgit',
    bgClass: 'bg-project-6'
  }
];

function Partners() {
  return (
    <section className="partners-section section">
      <div className="text-center mb-5">
        <span className="section-tag">NATION BUILDING</span>
        <h2 className="section-title">Engineering Sustainable Infrastructure</h2>
        <p className="section-subtitle mx-auto">
          Building state-of-the-art facilities and essential infrastructure that uplift communities, restore dignity, and create lasting impact across Pakistan.
        </p>
      </div>

      <div className="carousel-container">
        <button className="carousel-nav prev" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="carousel-track-wrapper">
          <div className="carousel-track">
            {projects.map((project, index) => (
              <div key={project.id} className={`carousel-card ${index === 2 || index === 3 ? 'active' : ''}`}>
                <div className={`carousel-card__bg ${project.bgClass}`}></div>
                <div className="carousel-card__content">
                  <div className="carousel-card__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {project.location}
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-nav next" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </section>
  );
}

export default Partners;
