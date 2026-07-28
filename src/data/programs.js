import palestineImg from '../assets/rebuild_gaza.png';
import banoqabilImg from '../assets/banoqabil_program.jpeg';
import orphanImg from '../assets/Orphan_Care_program.png';
import cleanWaterImg from '../assets/wash_program.png';
import communityImg from '../assets/community_services_program.png';
import disasterImg from '../assets/disaster_management_program.png';
import healthImg from '../assets/health_services_program.png';
import educationImg from '../assets/education_program.png';
import mawakhatImg from '../assets/islamic_microfinance_program.png';

export const programs = [
  {
    label: 'Palestine Emergency Appeal',
    href: 'https://alkhidmat.com.pk/palestine-emergency-appeal/',
    image: palestineImg,
    description: 'Urgent humanitarian assistance for families affected by the crisis in Palestine.',
    isExternal: true,
  },
  {
    label: 'Bano Qabil',
    href: 'https://banoqabil.pk/',
    image: banoqabilImg,
    description: 'Skills and opportunities that help young people build independent futures.',
    isExternal: true,
  },
  {
    label: 'Orphan Care',
    href: '/programs/orphan-care',
    image: orphanImg,
    description: 'Care, protection and support for children who have lost a parent.',
  },
  {
    label: 'Clean Water',
    href: '/programs/clean-water',
    image: cleanWaterImg,
    description: 'Safe water, sanitation and hygiene for healthier communities.',
  },
  {
    label: 'Community Services',
    href: '/programs/community-services',
    image: communityImg,
    description: 'Local welfare initiatives that strengthen families and neighborhoods.',
  },
  {
    label: 'Disaster Management',
    href: '/programs/disaster-management',
    image: disasterImg,
    description: 'Rapid response, relief and recovery when emergencies strike.',
  },
  {
    label: 'Health',
    href: '/programs/healthcare',
    image: healthImg,
    description: 'Accessible healthcare and medical support for communities in need.',
  },
  {
    label: 'Education',
    href: '/programs/education',
    image: educationImg,
    description: 'Education and scholarships that open doors to a brighter future.',
  },
  {
    label: 'Mawakhat',
    href: '/programs/mawakhat',
    image: mawakhatImg,
    description: 'Interest-free financial support for families and small businesses.',
  },
];
