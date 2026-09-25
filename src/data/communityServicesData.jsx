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
    description: 'Helping deserving families through structured financial aid, livelihood support, and social empowerment assistance.',
    badgeBg: 'rgba(2, 84, 164, 0.08)',
    badgeColor: '#0254a4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <path d="M12 11a2.2 2.2 0 0 0-2.2 2.2c0 1.5 2.2 3.3 2.2 3.3s2.2-1.8 2.2-3.3A2.2 2.2 0 0 0 12 11z"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Community Iftar',
    description: 'Providing hot, nutritious iftar meals and suhoor packages to thousands of deserving fasting people across Ramadan.',
    badgeBg: 'rgba(217, 119, 6, 0.09)',
    badgeColor: '#d97706',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8Z"/>
        <path d="M9 7c0-1.5 1-2.5 1-4"/>
        <path d="M14 7c0-1.5 1-2.5 1-4"/>
        <path d="M19.5 7A5.5 5.5 0 0 0 14 2a5.5 5.5 0 0 1 5.5 5Z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Winter Packages',
    description: 'Distributing warm blankets, thermal wear, and winter emergency survival kits to vulnerable families in harsh cold.',
    badgeBg: 'rgba(14, 165, 233, 0.09)',
    badgeColor: '#0284c7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10 20-1.25-2.5L6 18"/>
        <path d="M10 4 8.75 6.5 6 6"/>
        <path d="m14 20 1.25-2.5L18 18"/>
        <path d="m14 4 1.25 2.5L18 6"/>
        <path d="m17 21-3-6h-4l-3 6"/>
        <path d="m17 3-3 6h-4L7 3"/>
        <path d="M2 12h20"/>
        <path d="m20 10-2.5 1.25L18 14"/>
        <path d="m4 10 2.5 1.25L6 14"/>
        <path d="m20 14-2.5-1.25L18 10"/>
        <path d="m4 14 2.5-1.25L6 10"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Shadi Box',
    description: 'Supporting deserving families with complete wedding starter packages and household essentials for daughters marriages.',
    badgeBg: 'rgba(236, 72, 153, 0.09)',
    badgeColor: '#db2777',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="4" rx="1"/>
        <path d="M12 8v13"/>
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Wheelchair Support',
    description: 'Delivering specially designed wheelchairs and customized mobility aids to restore dignity, mobility, and independence.',
    badgeBg: 'rgba(16, 185, 129, 0.09)',
    badgeColor: '#059669',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2.2"/>
        <path d="M12 6.5v6.5l4.5 2"/>
        <path d="M7 11h5"/>
        <path d="M13 20a5 5 0 1 1-5-5"/>
        <path d="m14 14 3-2"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Masjid Construction',
    description: 'Building, renovating, and maintaining community mosques and prayer facilities equipped with clean water and solar power.',
    badgeBg: 'rgba(99, 102, 241, 0.09)',
    badgeColor: '#4f46e5',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-3 3-5 5.5-5 9h10c0-3.5-2-6-5-9z"/>
        <path d="M12 2v1"/>
        <path d="M3 12h18"/>
        <path d="M5 12v9"/>
        <path d="M19 12v9"/>
        <path d="M10 21v-5a2 2 0 0 1 4 0v5"/>
        <path d="M3 21h18"/>
        <path d="M4 7.5V12"/>
        <path d="M20 7.5V12"/>
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
