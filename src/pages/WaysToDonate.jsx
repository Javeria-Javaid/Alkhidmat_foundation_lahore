import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Heart,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import './WaysToDonate.css';

export default function WaysToDonate() {
  // States for interactive components
  const [activeOnlineTab, setActiveOnlineTab] = useState('card');
  const [copiedId, setCopiedId] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Bank transfer info
  const bankAccounts = [
    {
      id: 'meezan',
      bankName: 'Meezan Bank Limited',
      accountTitle: 'Alkhidmat Foundation Pakistan',
      accountNo: '0201010238491',
      iban: 'PK49MEZN000201010238491',
      swift: 'MEZNPKKAXXX',
    },
    {
      id: 'hbl',
      bankName: 'Habib Bank Limited (HBL)',
      accountTitle: 'Alkhidmat Foundation Pakistan',
      accountNo: '00427991873903',
      iban: 'PK12HABB0000427991873903',
      swift: 'HABBPKKAXXX',
    },
    {
      id: 'mcb',
      bankName: 'MCB Bank Limited',
      accountTitle: 'Alkhidmat Foundation Pakistan',
      accountNo: '11223344556601',
      iban: 'PK88MCIB0000112233445566',
      swift: 'MCIBPKKAXXX',
    },
  ];


  // FAQs
  const faqItems = [
    {
      question: 'Is my donation secure?',
      answer: 'Yes, your donation is 100% secure. We use industry-standard SSL encryption and partner with certified payment gateways (Visa, Mastercard, 3D Secure) to process your transactions safely.',
    },
    {
      question: 'Is my donation tax deductible?',
      answer: 'Yes, Alkhidmat Foundation is registered under Section 2(36) of the Income Tax Ordinance 2001, making all donations eligible for tax credit in Pakistan. Receipts are issued automatically for your tax records.',
    },
    {
      question: 'Can I donate internationally?',
      answer: 'Absolutely. Donors outside Pakistan can donate using international credit/debit cards or send wire transfers to our foreign currency accounts. We also have partner support offices in the UK, USA, Canada, and Australia.',
    },
    {
      question: 'How do I receive a receipt?',
      answer: 'For online donations, an email receipt is sent immediately. For bank transfers and home collection, receipts are issued once the payment is verified, usually within 24 to 48 hours.',
    },
    {
      question: 'Is Zakat accepted?',
      answer: 'Yes. Alkhidmat maintains separate accounts for Zakat funds. All Zakat donations are utilized in strict compliance with Shariah guidelines under the supervision of our Shariah Advisory Board.',
    },
  ];

  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="ways-to-donate-container">
      {/* 1. HERO SECTION */}
      <section className="wtd-hero-section">
        <div className="wtd-hero-overlay"></div>
        <div className="container wtd-hero-inner">
          <h1 className="wtd-hero-title">
            Choose the Best Way to <br />Make an Impact
          </h1>

          <p className="wtd-hero-desc">
            Your generosity powers life-changing humanitarian programs. Choose from our secure and convenient donation methods below to support those who need it most.
          </p>

          <div className="wtd-hero-ctas">
            <button onClick={() => scrollToSection('online-donation')} className="wtd-btn wtd-btn-yellow">
              Donate Now
            </button>
            <button onClick={() => scrollToSection('bank-transfer')} className="wtd-btn wtd-btn-outline-white">
              Bank Transfers
            </button>
          </div>
        </div>
      </section>

      {/* 2. ONLINE DONATION METHODS */}
      <section id="online-donation" className="wtd-online-section section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Online Donation Methods</h2>
          </div>

          <div className="wtd-tabs-container">
            <div className="wtd-tabs-headers">
              <button
                className={`wtd-tab-btn ${activeOnlineTab === 'card' ? 'active' : ''}`}
                onClick={() => setActiveOnlineTab('card')}
              >
                Credit/Debit Card
              </button>
              <button
                className={`wtd-tab-btn ${activeOnlineTab === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveOnlineTab('mobile')}
              >
                Mobile Wallet
              </button>
              <button
                className={`wtd-tab-btn ${activeOnlineTab === 'intl' ? 'active' : ''}`}
                onClick={() => setActiveOnlineTab('intl')}
              >
                International Wallets
              </button>
            </div>

            <div className="wtd-tab-content">
              {activeOnlineTab === 'card' && (
                <div className="wtd-payment-brands">
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/visa.svg" alt="Visa" className="brand-logo" />
                    <h4>Visa Card</h4>
                    <p>Secure global payments</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/mastercard.svg" alt="Mastercard" className="brand-logo" />
                    <h4>Mastercard</h4>
                    <p>International card payments</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/unionpay.svg" alt="UnionPay" className="brand-logo_sm" />
                    <h4>UnionPay</h4>
                    <p>Local and global cards</p>
                  </div>
                </div>
              )}

              {activeOnlineTab === 'mobile' && (
                <div className="wtd-payment-brands">
                  <div className="wtd-brand-card">
                    <div className="wallet-avatar easypaisa-bg">EP</div>
                    <h4>Easypaisa</h4>
                    <p>Pay via mobile account</p>
                  </div>
                  <div className="wtd-brand-card">
                    <div className="wallet-avatar jazzcash-bg">JC</div>
                    <h4>JazzCash</h4>
                    <p>Instant mobile transfer</p>
                  </div>
                  <div className="wtd-brand-card">
                    <div className="wallet-avatar raast-bg">R</div>
                    <h4>Raast Pay</h4>
                    <p>Instant state bank transfers</p>
                  </div>
                </div>
              )}

              {activeOnlineTab === 'intl' && (
                <div className="wtd-payment-brands">
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/googlepay.svg" alt="Google Pay" className="brand-logo" />
                    <h4>Google Pay</h4>
                    <p>Fast checkout on Android</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/applepay.svg" alt="Apple Pay" className="brand-logo" />
                    <h4>Apple Pay</h4>
                    <p>Secure checkout on iOS/Mac</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="/assets/payment/paypal.svg" alt="PayPal" className="brand-logo" />
                    <h4>PayPal</h4>
                    <p>Overseas wallet donations</p>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-3">
              <button onClick={() => scrollToSection('bank-transfer')} className="wtd-btn wtd-btn-blue">
                View Bank Transfer Accounts &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANK TRANSFER */}
      <section id="bank-transfer" className="wtd-bank-section section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Bank Transfer</h2>
          </div>

          <div className="wtd-bank-grid">
            {bankAccounts.map((acc) => (
              <div className="wtd-bank-card" key={acc.id}>
                <h3>{acc.bankName}</h3>
                <div className="bank-detail-item">
                  <span className="lbl">Account Title:</span>
                  <span className="val">{acc.accountTitle}</span>
                </div>
                <div className="bank-detail-item">
                  <span className="lbl">Account Number:</span>
                  <div className="val-copy-row">
                    <span className="val">{acc.accountNo}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopyText(acc.accountNo, `${acc.id}-no`)}
                      title="Copy Account Number"
                    >
                      {copiedId === `${acc.id}-no` ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div className="bank-detail-item">
                  <span className="lbl">IBAN:</span>
                  <div className="val-copy-row">
                    <span className="val code">{acc.iban}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopyText(acc.iban, `${acc.id}-iban`)}
                      title="Copy IBAN"
                    >
                      {copiedId === `${acc.id}-iban` ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
                <div className="bank-detail-item">
                  <span className="lbl">SWIFT Code:</span>
                  <div className="val-copy-row">
                    <span className="val code">{acc.swift}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopyText(acc.swift, `${acc.id}-swift`)}
                      title="Copy SWIFT Code"
                    >
                      {copiedId === `${acc.id}-swift` ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOME COLLECTION */}
      <section id="home-collection" className="wtd-collection-section section bg-light">
        <div className="container">
          <div className="wtd-collection-card">
            <div className="collection-icon">
              <Truck size={48} />
            </div>
            <div className="collection-content">
              <h2>Home Collection</h2>
              <p>
                Cannot make it online or to a bank? We can send a certified Alkhidmat Foundation representative to collect your donation (cash or cheque) right from your doorstep in all major cities of Pakistan. An official receipt will be provided on the spot.
              </p>
              <div className="collection-info-box">
                <div className="info-item">
                  <Phone size={18} />
                  <span>Call to schedule: <strong>0800-44448</strong></span>
                </div>
                <div className="info-item">
                  <Mail size={18} />
                  <span>Email: <strong>info@alkhidmat.org</strong></span>
                </div>
              </div>
              <a href="/contact" className="wtd-btn wtd-btn-blue">Request Collection</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERNATIONAL DONATIONS */}
      <section id="international-donations" className="wtd-intl-section section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">International Donations</h2>
          </div>

          <div className="wtd-intl-grid">
            <div className="wtd-intl-card">
              <h3>International Bank Transfer</h3>
              <p>Donors globally can transfer directly using wire transfer. Please use the SWIFT/BIC codes provided in the Bank Transfer section or contact our international desk.</p>
              <div className="wtd-intl-contact">
                <Mail size={16} />
                <span>intl.relations@alkhidmat.org</span>
              </div>
            </div>

            <div className="wtd-intl-card">
              <h3>Overseas Donation Offices</h3>
              <p>Alkhidmat operates through registered partner organizations in the United Kingdom, United States, Canada, and Australia to ensure tax-efficient local donations (e.g. Gift Aid in the UK and 501(c)(3) status in the US).</p>
              <div className="wtd-intl-contact">
                <Phone size={16} />
                <span>+92-42-3595 7260</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Giving & Monthly Giving Anchor Targets */}
      <div id="corporate-giving"></div>
      <div id="monthly-giving"></div>

      {/* 9. DONATION FAQ */}
      <section className="wtd-faq-section section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Donation FAQ</h2>
          </div>

          <div className="wtd-faq-list">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`wtd-faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="wtd-faq-header-btn" onClick={() => setOpenFaq(isOpen ? null : index)}>
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className={`wtd-faq-body ${isOpen ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="wtd-final-cta-section">
        <div className="container text-center">
          <h2>Your Donation Can Change a Life Today</h2>
          <p>
            Millions of people depend on Alkhidmat Foundation's services every day. With your help, we can reach even more lives and give them hope for a brighter future.
          </p>
          <div className="wtd-cta-btns">
            <button onClick={() => scrollToSection('online-donation')} className="wtd-btn wtd-btn-yellow">
              Donate Now
            </button>
            <a href="/contact" className="wtd-btn wtd-btn-outline-white">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
