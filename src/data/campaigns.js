import rebuildGazaImg from '../assets/rebuild_gaza.png';
import zakatImg from '../assets/heroimg.png';
import washImg from '../assets/wash_img.png';
import emergencyImg from '../assets/serve_humanity.png';

export const campaigns = [
  {
    id: "rebuild-gaza",
    label: "Rebuild Gaza",
    category: "EMERGENCY APPEAL",
    heroHeadingPrefix: "TOGETHER\nWE CAN REBUILD\nA ",
    heroHighlight: "BETTER",
    heroHeadingSuffix: " TOMORROW",
    heroDescription: "Support vulnerable families affected by the Gaza crisis through food, shelter, healthcare, and emergency humanitarian assistance.",
    image: rebuildGazaImg,
    donationTitle: "Rebuild Gaza",
    donationDescription: "Supporting families with food, shelter and medical aid.",
    formCause: "Gaza Emergency",
    badges: ["Zakat Eligible", "Tax Deductible", "Secure Donation"]
  },
  {
    id: "zakat",
    label: "Zakat",
    category: "ZAKAT APPEAL",
    heroHeadingPrefix: "YOUR ZAKAT\nCAN RESTORE\n",
    heroHighlight: "HOPE",
    heroHeadingSuffix: " & DIGNITY",
    heroDescription: "Fulfill your Zakat obligation and help provide sustainable support, healthcare, education, and essential assistance to deserving families.",
    image: zakatImg,
    donationTitle: "Zakat",
    donationDescription: "Empowering deserving families through your Zakat.",
    formCause: "Zakat",
    badges: ["Zakat Eligible", "Shariah Compliant", "Secure Donation"]
  },
  {
    id: "wash",
    label: "WASH",
    category: "CLEAN WATER APPEAL",
    heroHeadingPrefix: "CLEAN WATER\nCAN BUILD\n",
    heroHighlight: "HEALTHIER",
    heroHeadingSuffix: " FUTURES",
    heroDescription: "Help communities gain access to safe drinking water, sanitation, and sustainable hygiene solutions.",
    image: washImg,
    donationTitle: "WASH",
    donationDescription: "Providing clean water and promoting hygiene for healthier communities.",
    formCause: "WASH",
    badges: ["Sustainable Impact", "Verified Projects", "Secure Donation"]
  },
  {
    id: "emergency-relief",
    label: "Emergency Relief",
    category: "EMERGENCY RESPONSE",
    heroHeadingPrefix: "WHEN CRISIS STRIKES\nWE RESPOND\nWITH ",
    heroHighlight: "HUMANITY",
    heroHeadingSuffix: "",
    heroDescription: "Support rapid humanitarian response for families affected by disasters, displacement, and unexpected emergencies.",
    image: emergencyImg,
    donationTitle: "Emergency Relief",
    donationDescription: "Responding quickly to save lives and support families in times of crisis.",
    formCause: "Emergency Relief",
    badges: ["Rapid Response", "Emergency Support", "Secure Donation"]
  }
];
