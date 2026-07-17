import React from 'react';
import './TransparencyReport.css';

function TransparencyReport() {
  return (
    <section className="transparency-report section">
      <div className="container">
        <div className="transparency-report__inner">
          <div className="text-center mb-5">
            <span className="section-tag section-tag--blue">FEATURED DONATIONS</span>
            <h2 className="section-title">Your Donation, Their Tomorrow</h2>
            <p className="section-subtitle mx-auto">
              Choose a cause close to your heart and create a lasting impact in someone's life.
            </p>
          </div>

          <div className="donations-grid">
            <div className="donation-card">
              <div className="donation-card__img bg-gaza-card"></div>
              <div className="donation-card__content">
                <h3>Rebuild Gaza</h3>
                <p>Help families rebuild their lives and restore hope for a better future.</p>
                <a href="#" className="btn btn-dark btn-full">Donate Now</a>
              </div>
            </div>

            <div className="donation-card">
              <div className="donation-card__img bg-water-card"></div>
              <div className="donation-card__content">
                <h3>Water Sadaqah</h3>
                <p>Provide clean water access and earn ongoing rewards with every drop.</p>
                <a href="#" className="btn btn-dark btn-full">Donate Now</a>
              </div>
            </div>

            <div className="donation-card">
              <div className="donation-card__img bg-zakat-card"></div>
              <div className="donation-card__content">
                <h3>Give Zakat</h3>
                <p>Purify what you own and support families who depend on it.</p>
                <a href="#" className="btn btn-dark btn-full">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransparencyReport;
