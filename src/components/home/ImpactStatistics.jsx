import React from 'react';
import './ImpactStatistics.css';
import impactStatsImg from '../../assets/impact_stats.png';

function ImpactStatistics() {
  return (
    <section className="impact-statistics section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">The Measurable Impact of Your Trust</h2>
        </div>
        <div className="impact-image-wrapper">
          <img
            src={impactStatsImg}
            alt="Alkhidmat Foundation Impact Statistics"
            className="impact-stats-img"
            width="1712"
            height="716"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default ImpactStatistics;
