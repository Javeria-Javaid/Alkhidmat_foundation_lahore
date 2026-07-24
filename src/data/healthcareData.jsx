export const healthcareHeroStats = [
  { id: 1, value: '40', label: 'Hospitals' },
  { id: 2, value: '53', label: 'Medical Centers' },
  { id: 3, value: '359,573+', label: 'Beneficiaries' },
  { id: 4, value: 'PKR 3.9 Billion', label: 'Healthcare Expenditure' },
];

export const healthcareImpactCounters = [
  { value: '121', label: 'Collection Centers', progress: '85%' },
  { value: '288', label: 'Ambulances', progress: '90%' },
  { value: '436', label: 'Medical Camps', progress: '100%' },
];

export const healthcareServices = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency response and life-saving medical care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Mother & Child Care',
    description: 'Maternal health, safe deliveries, and neonatal care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Diagnostic Services',
    description: 'Advanced lab testing and modern diagnostic imaging.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Community Clinics',
    description: 'Outpatient consultation and essential medicines at low cost.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Free Medical Camps',
    description: 'Reaching remote areas with mobile doctor consultations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Mobile Health Units',
    description: 'Fully equipped vans bringing doctors to doorstep.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export const healthcareTimeline = [
  { stage: '1. Community Need', desc: 'Identifying underserved regions requiring urgent healthcare infrastructure.' },
  { stage: '2. Medical Assessment', desc: 'Doctor teams evaluate health requirements and plan mobile interventions.' },
  { stage: '3. Treatment', desc: 'Providing free surgeries, medicine, diagnostic tests, and hospitalization.' },
  { stage: '4. Recovery', desc: 'Follow-up visits and physical rehabilitation care for patients.' },
  { stage: '5. Long-Term Care', desc: 'Continuous maternal, child, and chronic disease support.' },
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
