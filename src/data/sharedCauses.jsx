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

// Program slider images
import communityImg from '../assets/community_services.png';
import cleanWaterImg from '../assets/clean_water.png';
import disasterImg from '../assets/disaster_management.png';
import orphanCareImg from '../assets/Orphan_Care.png';
import educationImg from '../assets/education_program.jpeg';

export const sharedCauses = [
  {
    id: 'overview',
    tabIcon: <HeartHandshake className="nav-tab-icon" />,
    tabLabel: 'Overview',
    hero: {
      id: 'zakat',
      category: 'ZAKAT APPEAL',
      heroHeadingPrefix: 'YOUR ZAKAT\nCAN RESTORE\n',
      heroHighlight: 'HOPE',
      heroHeadingSuffix: ' & DIGNITY',
      heroDescription: 'Fulfill your Zakat obligation and help provide sustainable support, healthcare, education, and essential assistance to deserving families.',
      image: zakatImg,
      backgroundImage: heroBgZakat,
      donationTitle: 'Zakat',
      donationDescription: 'Empowering deserving families through your Zakat.',
      formCause: 'Zakat',
      badges: ['Zakat Eligible', 'Shariah Compliant', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Transforming Lives Through Every Program',
      description: 'Providing comprehensive humanitarian aid, emergency relief, and sustainable development programs across Pakistan and globally.',
      previewImage: communityImg,
      glassLabel: 'Global Impact',
      stats: [
        { value: '2.5M+', label: 'Lives Impacted' },
        { value: '150+', label: 'Cities Served' },
        { value: '25+', label: 'Years of Service' }
      ],
      btnPrimary: 'Explore Programs',
      btnSecondary: 'Donate Now'
    }
  },
  {
    id: 'wash',
    tabIcon: <Droplets className="nav-tab-icon" />,
    tabLabel: 'WASH',
    hero: {
      id: 'wash',
      category: 'CLEAN WATER APPEAL',
      heroHeadingPrefix: 'CLEAN WATER\nCAN BUILD\n',
      heroHighlight: 'HEALTHIER',
      heroHeadingSuffix: ' FUTURES',
      heroDescription: 'Help communities gain access to safe drinking water, sanitation, and sustainable hygiene solutions.',
      image: washImg,
      backgroundImage: heroBgWash,
      donationTitle: 'WASH',
      donationDescription: 'Providing clean water and promoting hygiene for healthier communities.',
      formCause: 'WASH',
      badges: ['Sustainable Impact', 'Verified Projects', 'Secure Donation']
    },
    program: {
      topLabel: 'CLEAN WATER PROGRAM',
      heading: 'Safe Drinking Water For Vulnerable Communities',
      description: 'Installing solar-powered water filtration plants, hand pumps, and deep wells in remote areas facing severe water scarcity.',
      previewImage: cleanWaterImg,
      glassLabel: 'WASH Initiative',
      stats: [
        { value: '15K+', label: 'Water Projects' },
        { value: '3M+', label: 'Daily Beneficiaries' },
        { value: '100%', label: 'Tested Safe' }
      ],
      btnPrimary: 'Learn More',
      btnSecondary: 'Donate to WASH'
    }
  },
  {
    id: 'gaza',
    tabIcon: <HeartHandshake className="nav-tab-icon" />,
    tabLabel: 'Gaza Appeal',
    hero: {
      id: 'rebuild-gaza',
      category: 'EMERGENCY APPEAL',
      heroHeadingPrefix: 'TOGETHER\nWE CAN REBUILD\nA ',
      heroHighlight: 'BETTER',
      heroHeadingSuffix: ' TOMORROW',
      heroDescription: 'Support vulnerable families affected by the Gaza crisis through food, shelter, healthcare, and emergency humanitarian assistance.',
      image: rebuildGazaImg,
      backgroundImage: heroBgRebuildGaza,
      donationTitle: 'Rebuild Gaza',
      donationDescription: 'Supporting families with food, shelter and medical aid.',
      formCause: 'Gaza Emergency',
      badges: ['Zakat Eligible', 'Tax Deductible', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Urgent Gaza Relief & Rebuilding Efforts',
      description: 'Providing immediate hot meals, medical supplies, clean drinking water, and winter clothing to displaced Palestinian families with transparent field tracking.',
      previewImage: rebuildGazaImg,
      glassLabel: 'Gaza Emergency Response',
      stats: [
        { value: '850K+', label: 'Meals Distributed' },
        { value: '120+', label: 'Relief Convoys' },
        { value: '100%', label: 'Direct Delivery' }
      ],
      btnPrimary: 'Support Gaza Appeal',
      btnSecondary: 'Donate Relief'
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
      image: emergencyImg,
      backgroundImage: heroBgEmergency,
      donationTitle: 'Emergency Relief',
      donationDescription: 'Responding quickly to save lives and support families in times of crisis.',
      formCause: 'Emergency Relief',
      badges: ['Rapid Response', 'Emergency Support', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Rapid Response Medical & Rescue Network',
      description: 'Equipped with 300+ ambulances, flood response boats, and mobile medical units ready to reach disaster-struck regions across Pakistan within minutes.',
      previewImage: disasterImg,
      glassLabel: 'Disaster Emergency Fleet',
      stats: [
        { value: '300+', label: 'Ambulance Fleet' },
        { value: '24/7', label: 'Emergency Hotline' },
        { value: '500K+', label: 'Rescue Missions' }
      ],
      btnPrimary: 'Emergency Network',
      btnSecondary: 'Support Rescue'
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
      image: educationImg,
      backgroundImage: heroBgZakat,
      donationTitle: 'Education',
      donationDescription: 'Supporting education and orphan care programs.',
      formCause: 'Education',
      badges: ['Orphan Care', 'Zakat Eligible', 'Secure Donation']
    },
    program: {
      topLabel: '',
      heading: 'Orphan Care & Quality Education Access',
      description: 'Sponsoring orphan education, state-of-the-art schools, Aghosh orphan homes, and vocational training centers to build resilient futures for deserving youth.',
      previewImage: orphanCareImg,
      glassLabel: 'Aghosh Orphan Care',
      stats: [
        { value: '23,000+', label: 'Orphans Sponsored' },
        { value: '18', label: 'Aghosh Homes' },
        { value: '98%', label: 'School Retention' }
      ],
      btnPrimary: 'Sponsor an Orphan',
      btnSecondary: 'Donate Education'
    }
  }
];
