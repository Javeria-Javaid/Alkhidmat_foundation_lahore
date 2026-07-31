// Placeholder data for News & Media Page
import driveFood from '../assets/volunteer/drive_food.jpg';
import driveMedical from '../assets/volunteer/drive_medical.jpg';
import driveTree from '../assets/volunteer/drive_tree.jpg';
import whyJoin from '../assets/volunteer/why_join.jpg';
import eduProgram from '../assets/education_program.jpeg';
import disasterMgmt from '../assets/disaster_management.png';
import cleanWater from '../assets/clean_water.png';
import orphanCare from '../assets/Orphan_Care.png';

export const featuredStory = {
  category: 'FEATURED STORY',
  title: 'Alkhidmat Distributes Emergency Relief Packages in Flood-Affected Areas',
  date: '29 July 2026',
  excerpt: 'Our teams are on the ground providing food, clean water, and essential supplies to families affected by recent floods across Pakistan.',
  image: driveFood,
  link: '#'
};

export const newsCategories = [
  'All',
  'News',
  'Press Releases',
  'Success Stories',
  'Events',
  'Media Coverage',
  'Videos'
];

export const newsArticles = [
  {
    id: 1,
    category: 'News',
    date: '28 July 2026',
    title: 'Alkhidmat Provides Medical Camp in Remote Communities',
    description: 'Free medical checkups and medicines provided to hundreds of families.',
    image: driveMedical,
    link: '#'
  },
  {
    id: 2,
    category: 'Success Stories',
    date: '25 July 2026',
    title: 'Education Support Changes Lives in Rural Pakistan',
    description: 'Supporting underprivileged children with quality education and learning resources.',
    image: eduProgram,
    link: '#'
  },
  {
    id: 3,
    category: 'Events',
    date: '22 July 2026',
    title: 'Youth Volunteers Drive Cleanliness Campaign in Multiple Cities',
    description: 'Hundreds of volunteers joined hands to promote cleanliness and environmental care.',
    image: driveTree,
    link: '#'
  },
  {
    id: 4,
    category: 'Press Releases',
    date: '18 July 2026',
    title: 'Alkhidmat Partners with Global Agencies for Relief Efforts',
    description: 'New partnerships announced to expand humanitarian response across Pakistan.',
    image: whyJoin,
    link: '#'
  },
  {
    id: 5,
    category: 'Media Coverage',
    date: '15 July 2026',
    title: 'National Media Highlights Alkhidmat Volunteer Network',
    description: 'Leading news channels broadcast Alkhidmat youth mobilizations and impact.',
    image: disasterMgmt,
    link: '#'
  },
  {
    id: 6,
    category: 'Videos',
    date: '12 July 2026',
    title: 'Clean Water Project Documentary Released',
    description: 'Watch how clean water access is transforming health and daily lives in Sindh.',
    image: cleanWater,
    link: '#'
  },
  {
    id: 7,
    category: 'Success Stories',
    date: '08 July 2026',
    title: 'Sponsor an Orphan Program Reaches Milestone',
    description: 'Over 5,000 orphan children registered and receiving comprehensive support.',
    image: orphanCare,
    link: '#'
  },
  {
    id: 8,
    category: 'News',
    date: '05 July 2026',
    title: 'Emergency Response Training Workshop Conducted',
    description: 'Volunteers and team members complete advanced first aid and rescue drills.',
    image: whyJoin,
    link: '#'
  }
];

export const statistics = [
  {
    id: 'news',
    value: '850+',
    label: 'News Published',
    icon: 'news' // SVG icon identifier
  },
  {
    id: 'media',
    value: '120+',
    label: 'Media Mentions',
    icon: 'media'
  },
  {
    id: 'lives',
    value: '2M+',
    label: 'Lives Impacted',
    icon: 'lives'
  },
  {
    id: 'service',
    value: '35+',
    label: 'Years of Service',
    icon: 'service'
  }
];

export const videos = [
  {
    id: 1,
    title: 'Volunteer Documentary',
    subtitle: 'A Journey of Hope',
    duration: '04:35',
    image: driveTree,
    link: '#'
  },
  {
    id: 2,
    title: 'Flood Relief Mission',
    subtitle: 'On Ground Operations',
    duration: '03:12',
    image: driveFood,
    link: '#'
  },
  {
    id: 3,
    title: 'Clean Water Project',
    subtitle: 'Bringing Life to Communities',
    duration: '02:48',
    image: cleanWater,
    link: '#'
  },
  {
    id: 4,
    title: 'Ramadan Campaign',
    subtitle: 'Serving Humanity',
    duration: '03:05',
    image: whyJoin,
    link: '#'
  }
];

export const mediaGallery = [
  { id: 1, image: driveFood, alt: 'Food package distribution' },
  { id: 2, image: driveMedical, alt: 'Medical camp treatment' },
  { id: 3, image: cleanWater, alt: 'Clean water pump installation' },
  { id: 4, image: driveTree, alt: 'Volunteer environmental drive' },
  { id: 5, image: eduProgram, alt: 'Children studying in school' },
  { id: 6, image: whyJoin, alt: 'Volunteer team meeting' }
];

export const pressReleases = [
  {
    id: 1,
    date: '29 July 2026',
    title: 'Alkhidmat Launches Emergency Relief Campaign',
    summary: 'Providing urgent aid to families impacted by floods...'
  },
  {
    id: 2,
    date: '14 July 2026',
    title: 'Partnership with International Medical Organization',
    summary: 'To strengthen healthcare services in underserved areas...'
  },
  {
    id: 3,
    date: '28 June 2026',
    title: 'Alkhidmat Ramadan Report 2026 Released',
    summary: 'Highlights of our impact and achievements...'
  },
  {
    id: 4,
    date: '10 June 2026',
    title: 'New Water Project Inaugurated in Sindh',
    summary: 'Clean water access for thousands of families...'
  }
];
