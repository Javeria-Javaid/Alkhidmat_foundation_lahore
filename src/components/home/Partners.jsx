import React from 'react';
import './Partners.css';

const projects = [
  {
    id: 1,
    location: 'LAHORE, PUNJAB',
    title: 'Central Punjab Regional Office',
    subtext: 'Block J-2, Johar Town, Lahore',
    bgClass: 'bg-project-2'
  },
  {
    id: 2,
    location: 'LAHORE, PUNJAB',
    title: 'Alkhidmat Head Office',
    subtext: '3 KM Khayaban-e-Jinnah, next to water filtration plant, Dream Villas, Lahore, 54000',
    bgClass: 'bg-project-4'
  },
  {
    id: 3,
    location: 'LAHORE, PUNJAB',
    title: 'Alkhidmat Markaz',
    subtext: '106/M Block, Gulberg III, Lahore',
    bgClass: 'bg-project-3'
  }
];

function Partners() {
  return (
    <section className="partners-section section">
      <div className="text-center mb-5">
        <h2 className="section-title">Our Core Centers in Lahore</h2>
      </div>

      <div className="carousel-container" style={{ justifyContent: 'center' }}>
        <div className="carousel-track-wrapper">
          <div className="carousel-track">
            {projects.map((project, index) => (
              <div key={project.id} className={`carousel-card ${index === 1 ? 'active' : ''}`}>
                <div className={`carousel-card__bg ${project.bgClass}`}></div>
                <div className="carousel-card__content">
                  <div className="carousel-card__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {project.location}
                  </div>
                  <h3>{project.title}</h3>
                  {project.subtext && <p className="carousel-card__subtext">{project.subtext}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
