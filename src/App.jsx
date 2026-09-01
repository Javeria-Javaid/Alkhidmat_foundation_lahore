import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const OrphanCare = lazy(() => import('./pages/OrphanCare'));
const CleanWater = lazy(() => import('./pages/CleanWater'));
const DisasterManagement = lazy(() => import('./pages/DisasterManagement'));
const EducationProgram = lazy(() => import('./pages/EducationProgram'));
const CommunityServices = lazy(() => import('./pages/CommunityServices'));
const Healthcare = lazy(() => import('./pages/Healthcare'));
const Mawakhat = lazy(() => import('./pages/Mawakhat'));
const Donate = lazy(() => import('./pages/Donate'));
const Career = lazy(() => import('./pages/Career'));
const EventsCommunityActivities = lazy(() => import('./pages/EventsCommunityActivities'));
const AlkhidmatVolunteer = lazy(() => import('./pages/AlkhidmatVolunteer'));
const WaysToDonate = lazy(() => import('./pages/WaysToDonate'));
const Campaigns = lazy(() => import('./pages/Campaigns'));
const NewsAndMedia = lazy(() => import('./pages/NewsAndMedia'));

// A simple loading fallback
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', color: 'var(--primary-blue)' }}>
    Loading...
  </div>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/news-media" element={<NewsAndMedia />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
