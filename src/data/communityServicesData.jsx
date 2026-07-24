export const communityHeroStats = [
  { id: 1, value: '148', label: 'Study Centers', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )},
  { id: 2, value: '14,843', label: 'Beneficiaries', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { id: 3, value: '359,573+', label: 'Community Iftar', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  )},
  { id: 4, value: '159,392+', label: 'Qurbani Meat Packs', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8"/>
    </svg>
  )},
  { id: 5, value: '24,467+', label: 'Winter Packages', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )},
  { id: 6, value: '7,514', label: 'Shadi Boxes', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
    </svg>
  )},
  { id: 7, value: '1,672', label: 'Wheelchairs', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="18" r="3"/>
      <path d="M15 8h4"/>
      <path d="M9 15V8h6"/>
      <circle cx="15" cy="5" r="2"/>
    </svg>
  )},
];

export const communityServicesList = [
  {
    id: 1,
    title: 'Community Welfare',
    description: 'Helping deserving families through financial and social assistance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Community Iftar',
    description: 'Providing iftar meals to deserving families during the holy month of Ramadan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Winter Packages',
    description: 'Distributing blankets, winter clothing and essentials to needy families.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Shadi Box',
    description: "Supporting deserving families with essential items for their daughters' marriages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"/>
        <rect x="2" y="7" width="20" height="5"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Wheelchair Support',
    description: 'Providing wheelchairs and mobility aids to special individuals to restore dignity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="18" r="3"/>
        <path d="M9 15V8h6"/>
        <circle cx="15" cy="5" r="2"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Masjid Construction',
    description: 'Building and renovating mosques to provide better facilities for communities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export const communityImpactStats = [
  { value: '359,573+', label: 'Community Iftar\nBeneficiaries' },
  { value: '159,392+', label: 'Qurbani Meat\nPacks Distributed' },
  { value: '126,899+', label: 'Ramadan\nPackages' },
  { value: '24,467+', label: 'Winter Relief\nPackages' },
  { value: '2,355+', label: 'Christmas Gifts\nDistributed' },
  { value: '7,514+', label: 'Shadi\nBoxes' },
  { value: '1,672+', label: 'Wheelchairs\nDistributed' },
  { value: '96+', label: 'Masjid\nConstruction' },
];

export const communityFaqs = [
  {
    q: 'Who can apply for assistance?',
    a: 'Any deserving family or individual residing in Pakistan who is facing financial hardship or social distress can apply for assistance.'
  },
  {
    q: 'Is there any application fee?',
    a: 'No, all Alkhidmat Foundation services and applications are completely free of charge.'
  },
  {
    q: 'What documents are required?',
    a: 'Generally a valid CNIC copy, proof of income/need, and supporting documents depending on the specific program requested.'
  },
  {
    q: 'How will I know the status of my application?',
    a: 'Our field verification team contacts applicants directly after reviewing the submitted details.'
  },
  {
    q: 'How long does it take to process my application?',
    a: 'Applications are typically processed within 5 to 10 working days following field verification.'
  },
  {
    q: 'Can I apply online?',
    a: 'Yes, you can fill out the Community Assistance form right here on this page to submit your application directly.'
  },
];
