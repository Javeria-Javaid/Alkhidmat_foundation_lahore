export const educationHeroStats = [
  {
    value: '200+',
    label: 'Active Schools\nAcross Pakistan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    value: '18,500+',
    label: 'Scholarships\nAwarded',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    value: '91%',
    label: 'Student Continuation\nRate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: '35,000+',
    label: 'Students Currently\nEnrolled',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
];

export const donationAmounts = [
  { value: 1000, label: 'PKR 1,000' },
  { value: 2500, label: 'PKR 2,500' },
  { value: 5000, label: 'PKR 5,000' },
  { value: 10000, label: 'PKR 10,000' },
  { value: 25000, label: 'PKR 25,000' },
  { value: 0, label: 'Other' },
];

export const panelDonationAmounts = [
  { value: 1000, label: 'PKR 1,000', sublabel: 'Sponsor Books' },
  { value: 2500, label: 'PKR 2,500', sublabel: 'School Supplies' },
  { value: 5000, label: 'PKR 5,000', sublabel: 'Student Scholarship', featured: true },
  { value: 10000, label: 'PKR 10,000', sublabel: 'Adopt a Classroom' },
  { value: 25000, label: 'PKR 25,000', sublabel: 'Build a Learning Lab' },
  { value: 0, label: 'Other', sublabel: 'Custom Amount' },
];

export const schoolsNetworkItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: 'Primary Schools',
    detail: '120+ Schools',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    label: 'Secondary Schools',
    detail: '60+ Schools',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Remote Area Schools',
    detail: '20+ Schools',
  },
];

export const scholarshipItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    label: 'Merit Scholarships',
    detail: 'For bright & talented students',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: 'Orphan Assistance Grants',
    detail: "Supporting orphans' education",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    label: 'Professional Degrees',
    detail: 'Undergraduate & Postgraduate',
  },
];

export const vocationalItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    label: 'Technical & Trade Skills',
    detail: 'Electrician, Plumbing, Carpentry & more',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Digital Literacy Programs',
    detail: 'Computer, IT & Online Skills',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    label: 'Women Empowerment',
    detail: 'Tailored programs for women',
  },
];

export const studentStories = [
  {
    id: 1,
    name: 'Ayesha Khan',
    location: 'Swat, KPK',
    scholarship: 'Merit Scholarship',
    program: 'BS Computer Science',
    image: null,
  },
  {
    id: 2,
    name: 'Zain Ul Abidin',
    location: 'Bahawalpur, Punjab',
    scholarship: 'Orphan Grant',
    program: 'BS Mechanical Engineering',
    image: null,
  },
  {
    id: 3,
    name: 'Sana Fatima',
    location: 'Hyderabad, Sindh',
    scholarship: 'Women Empowerment',
    program: 'Diploma in IT',
    image: null,
  },
];
