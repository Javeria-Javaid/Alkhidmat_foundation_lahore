import React from 'react';
import { 
  HeartHandshake, 
  Droplets, 
  Ambulance, 
  GraduationCap 
} from 'lucide-react';

// Hero images
import rebuildGazaImg from '../assets/rebuild_gaza.png';
import zakatImg from '../assets/heroimg.png';
import washImg from '../assets/wash_img.png';
import emergencyImg from '../assets/serve_humanity.png';
import heroBgRebuildGaza from '../assets/hero-bg-rebuild-gaza.png';
import heroBgZakat from '../assets/hero-bg-zakat.png';
import heroBgWash from '../assets/hero-bg-wash.png';
import heroBgEmergency from '../assets/hero-bg-emergency-relief.png';
import educationImg from '../assets/education_program.jpeg';

// New Hero images
import newHeroEducation from '../assets/new-hero-education.png';
import newHeroEmergency from '../assets/new-hero-emergency.png';
import newHeroGaza from '../assets/new-hero-gaza.png';
import newHeroWash from '../assets/new-hero-wash.png';

// Program slider images
import overviewImage from '../assets/extra/community-service.jpeg';
import washImage from '../assets/extra/clean_water.jpeg';
import gazaAppealImage from '../assets/program_images/palestine_emergency_relief_program.jpg';
import emergencyImage from '../assets/extra/disaster_management.jpeg';
import educationImage from '../assets/extra/education.jpeg';

export const sharedCauses = [
  {
    id: 'wash',
    tabIcon: <Droplets className="nav-tab-icon" />,
    tabLabel: 'WASH',
    hero: {
      id: 'wash',
      category: 'CLEAN WATER APPEAL',
      heroHeadingPrefix: 'CLEAN WATER.\n',
      heroHighlight: 'HEALTHIER FUTURES.',
      heroHeadingSuffix: '',
      heroDescription: 'Safe water. Stronger communities.',
      image: newHeroWash,
      backgroundImage: newHeroWash,
      donationTitle: 'WASH',
      donationDescription: 'Providing clean water and promoting hygiene for healthier communities.',
      formCause: 'WASH',
      badges: ['Sustainable Impact', 'Verified Projects', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Clean Water Program',
      description: 'Installing solar-powered water filtration plants, hand pumps, and deep wells in remote areas facing severe water scarcity.',
      previewImage: washImage,
      imagePosition: 'center 85%',
      glassLabel: 'WASH Initiative',
      stats: [
        { value: '15K+', label: 'Water Projects' },
        { value: '3M+', label: 'Daily Beneficiaries' },
        { value: '100%', label: 'Tested Safe' }
      ],
      btnPrimary: 'Learn More',
      btnSecondary: 'Donate Now'
    }
  },
  {
    id: 'gaza-appeal',
    tabIcon: <HeartHandshake className="nav-tab-icon" />,
    tabLabel: 'Gaza Appeal',
    hero: {
      id: 'rebuild-gaza',
      category: 'EMERGENCY APPEAL',
      heroHeadingPrefix: 'TOGETHER\nWE CAN REBUILD\nA ',
      heroHighlight: 'BETTER',
      heroHeadingSuffix: ' TOMORROW',
      heroDescription: 'Support vulnerable families affected by the Gaza crisis through food, shelter, healthcare, and emergency humanitarian assistance.',
      image: newHeroGaza,
      backgroundImage: newHeroGaza,
      donationTitle: 'Rebuild Gaza',
      donationDescription: 'Supporting families with food, shelter and medical aid.',
      formCause: 'Gaza Emergency',
      badges: ['Zakat Eligible', 'Tax Deductible', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Gaza Relief',
      description: 'Providing immediate hot meals, medical supplies, clean drinking water, and winter clothing to displaced Palestinian families with transparent field tracking.',
      previewImage: gazaAppealImage,
      imagePosition: 'center 20%',
      glassLabel: 'Gaza Emergency Response',
      stats: [
        { value: '850K+', label: 'Meals Distributed' },
        { value: '120+', label: 'Relief Convoys' },
        { value: '100%', label: 'Direct Delivery' }
      ],
      btnPrimary: 'Learn More',
      btnSecondary: 'Donate Now'
    }
  },
  {
    id: 'emergency',
    tabIcon: <Ambulance className="nav-tab-icon" />,
    tabLabel: 'Emergency',
    hero: {
      id: 'emergency-relief',
      category: 'EMERGENCY RESPONSE',
      heroHeadingPrefix: 'WHEN CRISIS STRIKES\nWE RESPOND\nWITH ',
      heroHighlight: 'HUMANITY',
      heroHeadingSuffix: '',
      heroDescription: 'Support rapid humanitarian response for families affected by disasters, displacement, and unexpected emergencies.',
      image: newHeroEmergency,
      backgroundImage: newHeroEmergency,
      donationTitle: 'Emergency Relief',
      donationDescription: 'Responding quickly to save lives and support families in times of crisis.',
      formCause: 'Emergency Relief',
      badges: ['Rapid Response', 'Emergency Support', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Emergency Response',
      description: 'Equipped with 300+ ambulances, flood response boats, and mobile medical units ready to reach disaster-struck regions across Pakistan within minutes.',
      previewImage: emergencyImage,
      imagePosition: 'center 70%',
      glassLabel: 'Disaster Emergency Fleet',
      stats: [
        { value: '300+', label: 'Ambulance Fleet' },
        { value: '24/7', label: 'Emergency Hotline' },
        { value: '500K+', label: 'Rescue Missions' }
      ],
      btnPrimary: 'Learn More',
      btnSecondary: 'Donate Now'
    }
  },
  {
    id: 'education',
    tabIcon: <GraduationCap className="nav-tab-icon" />,
    tabLabel: 'Education',
    hero: {
      id: 'education',
      category: 'EDUCATION APPEAL',
      heroHeadingPrefix: 'ORPHAN CARE\n& QUALITY\n',
      heroHighlight: 'EDUCATION',
      heroHeadingSuffix: ' ACCESS',
      heroDescription: 'Sponsoring orphan education, state-of-the-art schools, Aghosh orphan homes, and vocational training centers to build resilient futures for deserving youth.',
      image: newHeroEducation,
      backgroundImage: newHeroEducation,
      donationTitle: 'Education',
      donationDescription: 'Supporting education and orphan care programs.',
      formCause: 'Education',
      badges: ['Orphan Care', 'Zakat Eligible', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Education & Orphan Care',
      description: 'Sponsoring orphan education, state-of-the-art schools, Aghosh orphan homes, and vocational training centers to build resilient futures for deserving youth.',
      previewImage: educationImage,
      imagePosition: '30% 15%',
      glassLabel: 'Aghosh Orphan Care',
      stats: [
        { value: '23,000+', label: 'Orphans Sponsored' },
        { value: '18', label: 'Aghosh Homes' },
        { value: '98%', label: 'School Retention' }
      ],
      btnPrimary: 'Learn More',
      btnSecondary: 'Donate Now'
    }
  }
];
