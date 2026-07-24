import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PalestineEmergencyAppeal from './pages/PalestineEmergencyAppeal';
import BanoQabil from './pages/BanoQabil';
import CleanWater from './pages/CleanWater';
import DisasterManagement from './pages/DisasterManagement';
import EducationProgram from './pages/EducationProgram';
import CommunityServices from './pages/CommunityServices';
import Healthcare from './pages/Healthcare';
import Mawakhat from './pages/Mawakhat';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs/palestine-emergency-appeal" element={<PalestineEmergencyAppeal />} />
        <Route path="/programs/banoqabil" element={<BanoQabil />} />
        <Route path="/programs/clean-water" element={<CleanWater />} />
        <Route path="/programs/disaster-management" element={<DisasterManagement />} />
        <Route path="/programs/education" element={<EducationProgram />} />
        <Route path="/programs/community-services" element={<CommunityServices />} />
        <Route path="/programs/healthcare" element={<Healthcare />} />
        <Route path="/programs/mawakhat" element={<Mawakhat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
