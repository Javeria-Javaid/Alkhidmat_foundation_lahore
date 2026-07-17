import React from 'react';
import './ImpactStatistics.css';

const categoryA = [
  { id: 1, label: 'Total Lives Impacted', value: '24,640,000', icon: '👥' },
  { id: 2, label: 'Nutritional Food & Meat Packs', value: '657,651', icon: '🍲' },
  { id: 3, label: 'Clean Water Infrastructure Projects', value: '25,809', icon: '💧' },
  { id: 4, label: 'Active Fleet Ambulances', value: '296', icon: '🚑' },
  { id: 5, label: 'Mobilized Network Volunteers', value: '80,000', icon: '🤝' },
];

const categoryB = [
  { id: 1, label: 'Sponsored Orphans & Aghosh Homes', value: '34,137', icon: '👨‍👩‍👧‍👦' },
  { id: 2, label: 'Fully Operational Welfare Hospitals', value: '57', icon: '🏥' },
  { id: 3, label: 'Academic Schools & Scholarships', value: '1,629', icon: '🎓' },
  { id: 4, label: 'Active Microfinance Interest-Free Loans', value: 'PKR 866M', icon: '💰' },
];

function ImpactStatistics() {
  return (
    <section className="impact-statistics section">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-tag">OUR OPERATIONAL FOOTPRINT</div>
          <h2 className="section-title">The Measurable Impact of Your Trust</h2>
          <p className="section-subtitle">
            Every contribution is systematically translated into direct humanitarian assistance and sustainable development across all provinces of Pakistan.
          </p>
        </div>

        <div className="impact-statistics__cards">
          <div className="impact-card">
            <div className="impact-card__header">
              <div className="impact-card__icon-wrapper bg-blue-100 text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="impact-card__title">Category A: Immediate Emergency Relief</h3>
            </div>
            <div className="impact-card__list">
              {categoryA.map((stat) => (
                <div key={stat.id} className="impact-card__item">
                  <div className="impact-card__item-left">
                    <span className="impact-card__item-icon">{stat.icon}</span>
                    <span className="impact-card__item-label">{stat.label}</span>
                  </div>
                  <div className="impact-card__badge">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-card__header">
              <div className="impact-card__icon-wrapper bg-gray-800 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h3 className="impact-card__title text-gray-800">Category B: Institutional & Social Growth</h3>
            </div>
            <div className="impact-card__list">
              {categoryB.map((stat) => (
                <div key={stat.id} className="impact-card__item">
                  <div className="impact-card__item-left">
                    <span className="impact-card__item-icon">{stat.icon}</span>
                    <span className="impact-card__item-label">{stat.label}</span>
                  </div>
                  <div className="impact-card__badge bg-gray-100 text-gray-800">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStatistics;
