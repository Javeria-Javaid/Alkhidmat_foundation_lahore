import React from 'react';
import './TransparencyReport.css';

function TransparencyReport() {
  return (
    <section className="transparency-report section">
      <div className="container">
        <div className="transparency-report__inner">
          <div className="text-center mb-5">
            <h2 className="section-title">Your Donation, Their Tomorrow</h2>
          </div>

          <div className="donations-grid">
            <div className="donation-card">
              <div className="donation-card__img bg-gaza-card"></div>
              <div className="donation-card__content">
                <h3>Rebuild Gaza</h3>
                <p>Support emergency relief and rebuilding efforts.</p>
                <a href="#" className="btn btn-dark btn-full">Donate Now</a>
              </div>
            </div>

            <div className="donation-card">
              <div className="donation-card__img bg-water-card"></div>
              <div className="donation-card__content">
                <h3>Water Sadaqah</h3>
                <p>Provide clean water access to communities in need.</p>
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
