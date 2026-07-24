export const healthcareHeroStats = [
  {
    id: 1,
    value: '40',
    label: 'Hospitals',
    iconColor: '#dbeafe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0254a4" strokeWidth="2">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/>
        <path d="M9 18v.01"/>
      </svg>
    ),
  },
  {
    id: 2,
    value: '53',
    label: 'Medical Centers',
    iconColor: '#ffedd5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8"/><path d="M8 12h8"/>
      </svg>
    ),
  },
  {
    id: 3,
    value: '359,573+',
    label: 'Beneficiaries',
    iconColor: '#dcfce7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 4,
    value: 'PKR 3.9 Billion',
    label: 'Healthcare Expenditure',
    iconColor: '#f3e8ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

export const healthcareImpactCounters = [
  { value: '121', label: 'Collection Centers' },
  { value: '288', label: 'Ambulances' },
  { value: '436', label: 'Medical Camps' },
];

export const healthcareServices = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency response and life-saving medical care.',
    color: '#dbeafe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0254a4" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Mother & Child Care',
    description: 'Maternal health, safe deliveries, and neonatal care.',
    color: '#ffedd5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Diagnostic Services',
    description: 'Advanced lab testing and modern diagnostic imaging.',
    color: '#d1fae5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Blood Bank',
    description: 'Safe blood collection, storage, and transfusion services.',
    color: '#fce7f3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Ambulance Services',
    description: 'Nationwide emergency ambulance fleet for rapid response.',
    color: '#fee2e2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Telemedicine',
    description: 'Remote consultations connecting patients with doctors.',
    color: '#e0f2fe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Medical Clinics',
    description: 'Outpatient clinics providing affordable healthcare.',
    color: '#dcfce7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Community Clinics',
    description: 'Local clinics bringing healthcare to underserved areas.',
    color: '#fef3c7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export const healthcareFacilities = [
  { id: 1, title: 'Alkhidmat Hospitals' },
  { id: 2, title: 'Medical Centers' },
  { id: 3, title: 'Clinics' },
  { id: 4, title: 'Emergency Units' },
];

export const healthcareTimeline = [
  { stage: 'Community Need', desc: 'Identifying underserved regions requiring urgent healthcare infrastructure.' },
  { stage: 'Medical Assessment', desc: 'Doctor teams evaluate health requirements and plan mobile interventions.' },
  { stage: 'Treatment', desc: 'Providing free surgeries, medicine, diagnostic tests, and hospitalization.' },
  { stage: 'Recovery', desc: 'Follow-up visits and physical rehabilitation care for patients.' },
  { stage: 'Long-Term Care', desc: 'Continuous maternal, child, and chronic disease support.' },
];

export const healthcareDoctors = [
  { id: 1, name: 'Dr. Hamza Ramzan', role: 'Chief Medical Officer', desc: 'Dedicated to providing emergency medical aid in remote villages.' },
  { id: 2, name: 'Dr. Ayesha Bashir', role: 'Pediatric Specialist', desc: 'Focused on maternal and infant health programs across Punjab.' },
  { id: 3, name: 'Dr. Rehan Rashid', role: 'Surgeon & Relief Lead', desc: 'Leads mobile surgical units during disaster and crisis situations.' },
  { id: 4, name: 'Dr. Usman Farooq', role: 'Diagnostic Lead', desc: 'Manages Alkhidmat diagnostic centers and laboratory networks.' },
];

export const healthcareFaqs = [
  { q: 'How can patients access free Alkhidmat healthcare?', a: 'Patients can visit any Alkhidmat hospital or free outpatient clinic across Pakistan.' },
  { q: 'Are emergency ambulance services available 24/7?', a: 'Yes, Alkhidmat operates a nationwide 24/7 emergency ambulance fleet reachable via helpline.' },
  { q: 'Can doctors volunteer for Alkhidmat medical camps?', a: 'Yes, medical professionals can register as volunteers for routine or disaster relief camps.' },
  { q: 'Is Zakat used for patient treatment?', a: 'Zakat funds are strictly utilized for deserving and underprivileged patients under Zakat compliance rules.' },
];
