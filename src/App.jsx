import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OrphanCare from './pages/OrphanCare';
import CleanWater from './pages/CleanWater';
import DisasterManagement from './pages/DisasterManagement';
import EducationProgram from './pages/EducationProgram';
import CommunityServices from './pages/CommunityServices';
import Healthcare from './pages/Healthcare';
import Mawakhat from './pages/Mawakhat';
import Donate from './pages/Donate';
import Career from './pages/Career';
import EventsCommunityActivities from './pages/EventsCommunityActivities';
import AlkhidmatVolunteer from './pages/AlkhidmatVolunteer';
import WaysToDonate from './pages/WaysToDonate';
import Campaigns from './pages/Campaigns';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs/orphan-care" element={<OrphanCare />} />
        <Route path="/programs/clean-water" element={<CleanWater />} />
        <Route path="/programs/disaster-management" element={<DisasterManagement />} />
        <Route path="/programs/education" element={<EducationProgram />} />
        <Route path="/programs/community-services" element={<CommunityServices />} />
        <Route path="/programs/healthcare" element={<Healthcare />} />
        <Route path="/programs/mawakhat" element={<Mawakhat />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/career" element={<Career />} />
        <Route path="/events-community-activities" element={<EventsCommunityActivities />} />
        <Route path="/alkhidmat-volunteer" element={<AlkhidmatVolunteer />} />
        <Route path="/ways-to-donate" element={<WaysToDonate />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
