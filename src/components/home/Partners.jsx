import React from 'react';
import './Partners.css';

const projects = [
  {
    id: 1,
    location: 'LAHORE, PUNJAB',
    title: 'Alkhidmat Head Office',
    subtext: '3 KM Khayaban-e-Jinnah, next to water filtration plant, Dream Villas, Lahore, 54000',
    type: 'large',
    bgClass: 'bg-project-1' // TODO: Replace with actual image of Head Office
  },
  {
    id: 2,
    location: 'LAHORE, PUNJAB',
    title: 'Central Punjab Regional Office',
    subtext: 'Block J-2, Johar Town, Lahore',
    type: 'small',
    bgClass: 'bg-project-2' // TODO: Replace with actual image of Regional Office
  },
  {
    id: 3,
    location: 'LAHORE, PUNJAB',
    title: 'Alkhidmat Markaz',
    subtext: '106/M Block, Gulberg III, Lahore',
    type: 'small',
    bgClass: 'bg-project-3' // TODO: Replace with actual image of Alkhidmat Markaz
  }
];

function Partners() {
  return (
    <section className="partners-section section">
      <div className="text-center mb-5">
        <h2 className="section-title">Engineering Sustainable Infrastructure</h2>
      </div>

      <div className="container">
        <div className="infrastructure-grid">
          {projects.map((project) => (
            <div key={project.id} className={`infrastructure-card ${project.type}`}>
              <div className={`infrastructure-card__bg ${project.bgClass}`}></div>
              <div className="infrastructure-card__content">
                <div className="infrastructure-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {project.location}
                </div>
                <h3>{project.title}</h3>
                {project.subtext && <p className="infrastructure-card__subtext">{project.subtext}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
