import React from 'react';
import './TransparencyReport.css';
import rebuildGazaImg from '../../assets/donations_section/rebuild_gaza.png';
import waterSadqahImg from '../../assets/donations_section/water_sadqah.png';
import zakatImg from '../../assets/donations_section/zakat.png';

const donationItems = [
  {
    id: 'rebuild-gaza',
    title: 'Rebuild Gaza',
    desc: 'Support emergency relief and rebuilding efforts.',
    img: rebuildGazaImg,
    objectPosition: 'center 20%'
  },
  {
    id: 'water-sadaqah',
    title: 'Water Sadaqah',
    desc: 'Provide clean water access to communities in need.',
    img: waterSadqahImg,
    objectPosition: 'center 30%'
  },
  {
    id: 'zakat',
    title: 'Give Zakat',
    desc: 'Purify what you own and support families who depend on it.',
    img: zakatImg,
    objectPosition: 'center 15%'
  }
];

function TransparencyReport() {
  return (
    <section className="transparency-report section">
      <div className="container">
        <div className="transparency-report__inner">
          <div className="text-center mb-5">
            <h2 className="section-title">Your Donation, Their Tomorrow</h2>
          </div>

          <div className="donations-grid">
            {donationItems.map((item) => (
              <div key={item.id} className="donation-card">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="donation-card__img"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="donation-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#" className="btn btn-dark btn-full">Donate Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransparencyReport;
