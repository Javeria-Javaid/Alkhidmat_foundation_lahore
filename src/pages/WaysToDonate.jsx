import React, { useState } from 'react';
import {
  CreditCard,
  Building2,
  Truck,
  Globe2,
  Building,
  Calendar,
  ShieldCheck,
  Award,
  Users,
  Heart,
  ArrowRight,
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
  const [selectedMethodModal, setSelectedMethodModal] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMethodModal(null);
      }
    };
    if (selectedMethodModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMethodModal]);

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

  // Six Donation Methods
  const donationMethods = [
    {
      id: 'online-donation',
      title: 'Donate Online',
      desc: 'Make a secure donation using debit/credit cards or supported mobile wallets.',
      cta: 'Donate Now',
      icon: CreditCard,
      isPrimary: true,
      targetSection: 'online-donation',
    },
    {
      id: 'bank-transfer',
      title: 'Bank Transfer',
      desc: 'Transfer your donation directly through our available bank accounts.',
      cta: 'View Bank Details',
      icon: Building2,
      isPrimary: false,
      targetSection: 'bank-transfer',
    },
    {
      id: 'home-collection',
      title: 'Home Collection',
      desc: 'Request a convenient cash or cheque collection from your location.',
      cta: 'Schedule Collection',
      icon: Truck,
      isPrimary: false,
      targetSection: 'home-collection',
    },
    {
      id: 'international-donations',
      title: 'International Donations',
      desc: 'Explore available options for contributing from outside Pakistan.',
      cta: 'View Global Options',
      icon: Globe2,
      isPrimary: false,
      targetSection: 'international-donations',
    },
    {
      id: 'corporate-giving',
      title: 'Corporate Giving',
      desc: 'Partner with Alkhidmat through CSR and institutional giving initiatives.',
      cta: 'Partner With Us',
      icon: Building,
      isPrimary: false,
      targetSection: 'corporate-giving',
    },
    {
      id: 'monthly-giving',
      title: 'Monthly Giving',
      desc: 'Make recurring contributions to create sustained impact for communities.',
      cta: 'Give Monthly',
      icon: Calendar,
      isPrimary: false,
      targetSection: 'monthly-giving',
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
            <a href="/donate" className="wtd-btn wtd-btn-yellow">Donate Now</a>
            <button onClick={() => scrollToSection('quick-methods')} className="wtd-btn wtd-btn-outline-white">
              Explore Donation Methods
            </button>
          </div>
        </div>
      </section>

      {/* 2. WAYS TO DONATE */}
      <section id="quick-methods" className="wtd-quick-methods-section section">
        <div className="container text-center">
          <h2 className="section-title">Ways to Donate</h2>
          <p className="section-subtitle">
            Choose the giving option that works best for you. Every contribution helps us serve communities in need.
          </p>

          <div className="wtd-quick-grid">
            {donationMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedMethodModal(method)}
                  className={`wtd-quick-card ${method.isPrimary ? 'wtd-quick-card--primary' : ''}`}
                  aria-label={`${method.title}: ${method.cta}`}
                >
                  {method.isPrimary && (
                    <span className="wtd-quick-card__badge">Direct Gateway</span>
                  )}
                  <div className="wtd-quick-icon-box">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <h3>{method.title}</h3>
                  <p>{method.desc}</p>
                  <span className="wtd-quick-link">
                    {method.cta} <ArrowRight size={15} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Subtle Trust Row */}
          <div className="wtd-trust-row" aria-label="Donation commitments">
            <div className="wtd-trust-item">
              <ShieldCheck size={18} strokeWidth={2} />
              <span>Secure Giving</span>
            </div>
            <span className="wtd-trust-separator" aria-hidden="true">•</span>
            <div className="wtd-trust-item">
              <Award size={18} strokeWidth={2} />
              <span>Transparent Giving</span>
            </div>
            <span className="wtd-trust-separator" aria-hidden="true">•</span>
            <div className="wtd-trust-item">
              <Users size={18} strokeWidth={2} />
              <span>Supporting Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DONATION OPTIONS */}
      <section id="featured-options" className="wtd-featured-section section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Featured Donation Options</h2>
            <p className="section-subtitle">
              Sponsor our core relief and development campaigns through these popular avenues.
            </p>
          </div>

          <div className="wtd-featured-grid">
            <div className="wtd-featured-card">
              <div className="wtd-feat-img-container">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80" alt="Donate Online" />
              </div>
              <div className="wtd-feat-content">
                <h3>Donate Online</h3>
                <p>Instantly support any of our active programs via your credit/debit card or mobile wallets with complete security.</p>
                <button onClick={() => scrollToSection('online-donation')} className="wtd-btn wtd-btn-blue wtd-btn-sm">Donate Online Now</button>
              </div>
            </div>

            <div className="wtd-featured-card">
              <div className="wtd-feat-img-container">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80" alt="Bank Transfer" />
              </div>
              <div className="wtd-feat-content">
                <h3>Bank Transfer</h3>
                <p>Transfer funds directly into our certified local or international bank accounts with zero processing fees.</p>
                <button onClick={() => scrollToSection('bank-transfer')} className="wtd-btn wtd-btn-blue wtd-btn-sm">View Accounts</button>
              </div>
            </div>

            <div className="wtd-featured-card">
              <div className="wtd-feat-img-container">
                <img src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?w=600&auto=format&fit=crop&q=80" alt="Home Collection" />
              </div>
              <div className="wtd-feat-content">
                <h3>Home Collection</h3>
                <p>Schedule a convenient donation collection from your home or office. Our representative will visit to collect cash or cheques.</p>
                <button onClick={() => scrollToSection('home-collection')} className="wtd-btn wtd-btn-blue wtd-btn-sm">Request Pickup</button>
              </div>
            </div>

            <div className="wtd-featured-card">
              <div className="wtd-feat-img-container">
                <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80" alt="International Donations" />
              </div>
              <div className="wtd-feat-content">
                <h3>International Donations</h3>
                <p>Donors outside Pakistan can support us through our registered global offices and direct SWIFT transfers.</p>
                <button onClick={() => scrollToSection('international-donations')} className="wtd-btn wtd-btn-blue wtd-btn-sm">International Options</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONLINE DONATION METHODS */}
      <section id="online-donation" className="wtd-online-section section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Online Donation Methods</h2>
            <p className="section-subtitle">
              Fast, simple, and secured with 256-bit SSL encryption.
            </p>
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="brand-logo" />
                    <h4>Visa Card</h4>
                    <p>Secure global payments</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="brand-logo" />
                    <h4>Mastercard</h4>
                    <p>International card payments</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/UnionPay_logo.svg" alt="UnionPay" className="brand-logo_sm" />
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="brand-logo" />
                    <h4>Google Pay</h4>
                    <p>Fast checkout on Android</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="brand-logo" />
                    <h4>Apple Pay</h4>
                    <p>Secure checkout on iOS/Mac</p>
                  </div>
                  <div className="wtd-brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="brand-logo" />
                    <h4>PayPal</h4>
                    <p>Overseas wallet donations</p>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-3">
              <a href="/donate" className="wtd-btn wtd-btn-blue">Proceed to Donate Online</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANK TRANSFER */}
      <section id="bank-transfer" className="wtd-bank-section section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Bank Transfer</h2>
            <p className="section-subtitle">
              Make transfers directly into our bank accounts. Use the copy button next to numbers for quick clipboard copy.
            </p>
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
              <a href="/donate" className="wtd-btn wtd-btn-blue">Request Collection</a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERNATIONAL DONATIONS */}
      <section id="international-donations" className="wtd-intl-section section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Global Supporters</span>
            <h2 className="section-title">International Donations</h2>
            <p className="section-subtitle">
              Supporting Alkhidmat from outside Pakistan is simple and secure.
            </p>
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
            <span className="section-tag">Common Inquiries</span>
            <h2 className="section-title">Donation FAQ</h2>
            <p className="section-subtitle">
              Find answers to commonly asked questions about Alkhidmat donations.
            </p>
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
            <a href="/donate" className="wtd-btn wtd-btn-yellow">Donate Now</a>
            <a href="/contact" className="wtd-btn wtd-btn-outline-white">Contact Us</a>
          </div>
        </div>
      </section>

      {/* ── DETAIL MODAL FOR DONATION METHODS ── */}
      {selectedMethodModal && (
        <div
          className="wtd-modal-overlay"
          onClick={() => setSelectedMethodModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wtd-modal-title"
        >
          <div
            className="wtd-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="wtd-modal__close"
              onClick={() => setSelectedMethodModal(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="wtd-modal__header">
              <div className="wtd-modal__icon">
                {React.createElement(selectedMethodModal.icon, { size: 26, strokeWidth: 2 })}
              </div>
              <div>
                <span className="wtd-modal__badge">Ways to Donate</span>
                <h3 id="wtd-modal-title" className="wtd-modal__title">
                  {selectedMethodModal.title}
                </h3>
              </div>
            </div>

            <div className="wtd-modal__body">
              <p className="wtd-modal__intro">
                {selectedMethodModal.desc}
              </p>

              {/* Specific Content for Bank Transfer */}
              {selectedMethodModal.id === 'bank-transfer' && (
                <div>
                  <h4 className="wtd-modal__section-heading">Verified Bank Accounts</h4>
                  <div className="wtd-modal__bank-list">
                    {bankAccounts.map((acc) => (
                      <div key={acc.id} className="wtd-modal__bank-card">
                        <h4>{acc.bankName}</h4>
                        <div className="wtd-modal__row">
                          <span className="wtd-modal__row-label">Account Title:</span>
                          <span className="wtd-modal__row-val">{acc.accountTitle}</span>
                        </div>
                        <div className="wtd-modal__row">
                          <span className="wtd-modal__row-label">Account No:</span>
                          <span className="wtd-modal__row-val">
                            <code>{acc.accountNo}</code>
                            <button
                              type="button"
                              className="wtd-modal__copy-btn"
                              onClick={() => handleCopyText(acc.accountNo, `modal-${acc.id}-no`)}
                              title="Copy Account Number"
                              aria-label={`Copy ${acc.bankName} Account Number`}
                            >
                              {copiedId === `modal-${acc.id}-no` ? (
                                <Check size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </span>
                        </div>
                        <div className="wtd-modal__row">
                          <span className="wtd-modal__row-label">IBAN:</span>
                          <span className="wtd-modal__row-val">
                            <code>{acc.iban}</code>
                            <button
                              type="button"
                              className="wtd-modal__copy-btn"
                              onClick={() => handleCopyText(acc.iban, `modal-${acc.id}-iban`)}
                              title="Copy IBAN"
                              aria-label={`Copy ${acc.bankName} IBAN`}
                            >
                              {copiedId === `modal-${acc.id}-iban` ? (
                                <Check size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </span>
                        </div>
                        <div className="wtd-modal__row">
                          <span className="wtd-modal__row-label">SWIFT Code:</span>
                          <span className="wtd-modal__row-val">
                            <code>{acc.swift}</code>
                            <button
                              type="button"
                              className="wtd-modal__copy-btn"
                              onClick={() => handleCopyText(acc.swift, `modal-${acc.id}-swift`)}
                              title="Copy SWIFT"
                              aria-label={`Copy ${acc.bankName} SWIFT`}
                            >
                              {copiedId === `modal-${acc.id}-swift` ? (
                                <Check size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specific Content for Donate Online */}
              {selectedMethodModal.id === 'online-donation' && (
                <div className="wtd-modal__content-box">
                  <h4 className="wtd-modal__section-heading">Supported Payment Channels</h4>
                  <ul className="wtd-modal__features-list">
                    <li>
                      <Check size={16} className="text-success" />
                      <span><strong>Cards:</strong> Visa, Mastercard, and UnionPay with 3D Secure verification.</span>
                    </li>
                    <li>
                      <Check size={16} className="text-success" />
                      <span><strong>Mobile Wallets:</strong> Easypaisa, JazzCash, and Raast instant transfers.</span>
                    </li>
                    <li>
                      <Check size={16} className="text-success" />
                      <span><strong>International Wallets:</strong> Google Pay, Apple Pay, and PayPal support.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Specific Content for Home Collection */}
              {selectedMethodModal.id === 'home-collection' && (
                <div className="wtd-modal__content-box">
                  <h4 className="wtd-modal__section-heading">Doorstep Collection Process</h4>
                  <p className="wtd-modal__info-text">
                    A certified Alkhidmat Foundation representative will visit your location to collect cash or cheque contributions. An official, stamped receipt is issued on the spot.
                  </p>
                  <div className="wtd-modal__contact-strip">
                    <div className="wtd-modal__contact-item">
                      <Phone size={16} />
                      <span>Toll-Free Helpline: <strong>0800-44448</strong></span>
                    </div>
                    <div className="wtd-modal__contact-item">
                      <Mail size={16} />
                      <span>Support Desk: <strong>info@alkhidmat.org</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Specific Content for International Donations */}
              {selectedMethodModal.id === 'international-donations' && (
                <div className="wtd-modal__content-box">
                  <h4 className="wtd-modal__section-heading">Giving from Abroad</h4>
                  <p className="wtd-modal__info-text">
                    Donors worldwide can send funds directly through wire transfer using our foreign currency SWIFT codes or through registered partner organizations in the UK, USA, Canada, and Australia.
                  </p>
                  <div className="wtd-modal__contact-strip">
                    <div className="wtd-modal__contact-item">
                      <Mail size={16} />
                      <span>International Desk: <strong>intl.relations@alkhidmat.org</strong></span>
                    </div>
                    <div className="wtd-modal__contact-item">
                      <Phone size={16} />
                      <span>Direct Contact: <strong>+92-42-3595 7260</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Specific Content for Corporate Giving */}
              {selectedMethodModal.id === 'corporate-giving' && (
                <div className="wtd-modal__content-box">
                  <h4 className="wtd-modal__section-heading">Institutional & CSR Partnerships</h4>
                  <p className="wtd-modal__info-text">
                    We collaborate with corporate partners on sustainable CSR projects, employee payroll-giving drives, and disaster response matching programs with complete financial transparency.
                  </p>
                  <div className="wtd-modal__contact-strip">
                    <div className="wtd-modal__contact-item">
                      <Mail size={16} />
                      <span>Corporate Relations: <strong>info@alkhidmat.org</strong></span>
                    </div>
                    <div className="wtd-modal__contact-item">
                      <Phone size={16} />
                      <span>Helpline: <strong>0800-44448</strong></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Specific Content for Monthly Giving */}
              {selectedMethodModal.id === 'monthly-giving' && (
                <div className="wtd-modal__content-box">
                  <h4 className="wtd-modal__section-heading">Recurring Giving Programs</h4>
                  <p className="wtd-modal__info-text">
                    Monthly donations provide steady, reliable support for long-term programs including Orphan Family Support, Clean Water Filtration maintenance, and Community Health Clinics.
                  </p>
                </div>
              )}
            </div>

            <div className="wtd-modal__footer">
              {selectedMethodModal.id === 'online-donation' || selectedMethodModal.id === 'monthly-giving' ? (
                <a
                  href="/donate"
                  className="wtd-btn wtd-btn-blue wtd-modal__action-btn"
                >
                  Proceed to Online Donation Portal &rarr;
                </a>
              ) : selectedMethodModal.id === 'home-collection' ? (
                <a
                  href="/donate"
                  className="wtd-btn wtd-btn-blue wtd-modal__action-btn"
                >
                  Request Doorstep Collection &rarr;
                </a>
              ) : selectedMethodModal.id === 'corporate-giving' ? (
                <a
                  href="/contact"
                  className="wtd-btn wtd-btn-blue wtd-modal__action-btn"
                >
                  Contact Corporate Desk &rarr;
                </a>
              ) : selectedMethodModal.id === 'international-donations' ? (
                <button
                  type="button"
                  className="wtd-btn wtd-btn-blue wtd-modal__action-btn"
                  onClick={() => {
                    setSelectedMethodModal(null);
                    scrollToSection('international-donations');
                  }}
                >
                  View Full International Accounts &rarr;
                </button>
              ) : (
                <button
                  type="button"
                  className="wtd-btn wtd-btn-blue wtd-modal__action-btn"
                  onClick={() => {
                    setSelectedMethodModal(null);
                    scrollToSection('bank-transfer');
                  }}
                >
                  View All Bank Accounts on Page &rarr;
                </button>
              )}

              <button
                type="button"
                className="wtd-modal__sec-link"
                onClick={() => setSelectedMethodModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
