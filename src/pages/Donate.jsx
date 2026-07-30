import React, { useState } from 'react';
import {
  CreditCard,
  Building2,
  Truck,
  Globe2,
  CalendarSync,
  Building,
  Heart,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Search,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MapPin,
  HelpCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import {
  donationCauses,
  bankAccounts,
  internationalAccounts,
  impactCalculatorOptions,
  faqItems,
  statistics
} from '../data/donateData';
import './Donate.css';

function Donate() {
  // Navigation & Filter Tabs State
  const [activeTab, setActiveTab] = useState('online');

  // Search in Causes
  const [causeSearch, setCauseSearch] = useState('');
  const [expandedCauseCategory, setExpandedCauseCategory] = useState('clean-water');

  // Selected Donation Cart Items
  const [cart, setCart] = useState({});
  const [isZakat, setIsZakat] = useState(true);
  const [customAmounts, setCustomAmounts] = useState({});

  // Payment Method Selection
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'jazzcash', 'easypaisa', 'bank'

  // Bank Search
  const [bankQuery, setBankQuery] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // International Country Selector
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

  // Impact Calculator State
  const [selectedImpactIndex, setSelectedImpactIndex] = useState(1);
  const [donationFrequency, setDonationFrequency] = useState('monthly'); // 'monthly' or 'onetime'
  const [customImpactAmount, setCustomImpactAmount] = useState('');

  // Doorstep Collection Form State
  const [collectionForm, setCollectionForm] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    address: '',
    amount: '',
    date: ''
  });
  const [collectionSubmitted, setCollectionSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Helper for Toast Copy Feedback
  const handleCopy = (text, fieldId) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Cart item increment/decrement handlers
  const updateCartQuantity = (itemId, change, defaultPrice) => {
    setCart((prev) => {
      const currentQty = prev[itemId] ? prev[itemId].qty : 0;
      const newQty = Math.max(0, currentQty + change);
      if (newQty === 0) {
        const nextCart = { ...prev };
        delete nextCart[itemId];
        return nextCart;
      }
      return {
        ...prev,
        [itemId]: { qty: newQty, price: defaultPrice }
      };
    });
  };

  const handleCustomAmountChange = (itemId, val) => {
    const num = parseInt(val, 10) || 0;
    setCustomAmounts((prev) => ({ ...prev, [itemId]: val }));
    if (num > 0) {
      setCart((prev) => ({
        ...prev,
        [itemId]: { qty: 1, price: num }
      }));
    } else {
      setCart((prev) => {
        const nextCart = { ...prev };
        delete nextCart[itemId];
        return nextCart;
      });
    }
  };

  // Compute Total Donation Amount
  const cartTotal = Object.keys(cart).reduce((sum, itemId) => {
    const item = cart[itemId];
    return sum + item.qty * item.price;
  }, 0);

  // Filtered Banks
  const filteredBanks = bankAccounts.filter((b) =>
    b.bankName.toLowerCase().includes(bankQuery.toLowerCase()) ||
    b.accountNumber.includes(bankQuery) ||
    b.iban.toLowerCase().includes(bankQuery.toLowerCase())
  );

  // Filtered Causes
  const filteredCauses = donationCauses.map((cat) => {
    const matchingItems = cat.items.filter((item) =>
      item.name.toLowerCase().includes(causeSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(causeSearch.toLowerCase())
    );
    return {
      ...cat,
      items: matchingItems
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <div className="donate-hero__overlay"></div>
        <div className="container donate-hero__container">
          <h1 className="donate-hero__title">
            Donate Now<br/>
            <span className="donate-hero__highlight">Create Hope</span>
          </h1>

          <p className="donate-hero__subtitle">
            Your support delivers clean water, healthcare, food, and shelter to families in need across Pakistan and globally.
          </p>

          <div className="donate-hero__actions">
            <a href="#online-donation" className="btn btn-hero-primary">
              Donate Online Now
            </a>
            <a href="#choose-method" className="btn btn-hero-secondary">
              Explore Donation Methods
            </a>
          </div>
        </div>
      </section>

      {/* 4. MASTER NAVIGATION TAB SELECTOR */}
      <section className="donate-section tabs-section" id="choose-method">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Choose Your Donation Method</h2>
            <p className="section-description">Select any tab below to inspect exact accounts, instructions, and interactive payment forms.</p>
          </div>

          <div className="method-tabs">
            <button
              className={`method-tab ${activeTab === 'online' ? 'active' : ''}`}
              onClick={() => setActiveTab('online')}
            >
              <CreditCard size={18} /> Online Donation
            </button>

            <button
              className={`method-tab ${activeTab === 'bank' ? 'active' : ''}`}
              onClick={() => setActiveTab('bank')}
            >
              <Building2 size={18} /> Bank Transfer (Local)
            </button>

            <button
              className={`method-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              <Truck size={18} /> Home Collection
            </button>

            <button
              className={`method-tab ${activeTab === 'international' ? 'active' : ''}`}
              onClick={() => setActiveTab('international')}
            >
              <Globe2 size={18} /> International Accounts
            </button>
          </div>
        </div>
      </section>

      {/* 5. ONLINE DONATION SECTION (MULTI-CAUSE DROPDOWNS & PRICING) */}
      {activeTab === 'online' && (
        <section className="donate-section online-donation-section" id="online-donation">
          <div className="container">
            <div className="online-donation-layout">
              {/* Left Column: Cause Selector & Pricing Dropdowns */}
              <div className="cause-selector-wrapper">
                <div className="cause-selector-header">
                  <div>
                    <h3>Select Cause(s) & Quantities</h3>
                    <p>Choose from our official verified humanitarian programs below.</p>
                  </div>

                  {/* Cause Search */}
                  <div className="cause-search-box">
                    <Search size={16} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search causes (e.g. Gaza, Hand Pump, Hospital, Bano Qabil)..."
                      value={causeSearch}
                      onChange={(e) => setCauseSearch(e.target.value)}
                    />
                    {causeSearch && (
                      <button className="clear-search-btn" onClick={() => setCauseSearch('')}>Clear</button>
                    )}
                  </div>
                </div>

                {/* Causes Accordion List */}
                <div className="causes-accordion">
                  {filteredCauses.map((cat) => {
                    const isOpen = expandedCauseCategory === cat.id || causeSearch.length > 0;
                    return (
                      <div className={`cause-category-card ${isOpen ? 'is-open' : ''}`} key={cat.id}>
                        <div
                          className="cause-category-header"
                          onClick={() => setExpandedCauseCategory(isOpen && !causeSearch ? '' : cat.id)}
                        >
                          <div className="category-title-group">
                            <span className="category-badge">{cat.badge}</span>
                            <h4>{cat.category}</h4>
                          </div>
                          <div className="category-toggle">
                            <span>{cat.items.length} Options</span>
                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </div>

                        {isOpen && (
                          <div className="cause-items-list">
                            <p className="category-description">{cat.description}</p>
                            {cat.items.map((item) => {
                              const inCart = cart[item.id];
                              const qty = inCart ? inCart.qty : 0;
                              const isCustomInputItem = item.price === 0 || item.id === 'wn-1';

                              return (
                                <div className={`cause-item-row ${qty > 0 ? 'selected' : ''}`} key={item.id}>
                                  <div className="item-info">
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <span className="item-price">
                                      {item.price > 0 ? `PKR ${item.price.toLocaleString()}` : 'Custom Amount'}
                                    </span>
                                  </div>

                                  <div className="item-action">
                                    {isCustomInputItem ? (
                                      <div className="custom-input-group">
                                        <span className="currency-tag">PKR</span>
                                        <input
                                          type="number"
                                          placeholder="Enter amount"
                                          value={customAmounts[item.id] || ''}
                                          onChange={(e) => handleCustomAmountChange(item.id, e.target.value, item.price)}
                                        />
                                      </div>
                                    ) : (
                                      <div className="quantity-control">
                                        <button
                                          className="qty-btn"
                                          onClick={() => updateCartQuantity(item.id, -1, item.price)}
                                          disabled={qty === 0}
                                        >
                                          -
                                        </button>
                                        <span className="qty-val">{qty}</span>
                                        <button
                                          className="qty-btn"
                                          onClick={() => updateCartQuantity(item.id, 1, item.price)}
                                        >
                                          +
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Checkout Summary & Payment Gateway Selector */}
              <div className="checkout-summary-wrapper">
                <div className="checkout-card">
                  <div className="checkout-card__header">
                    <h3>Donation Summary</h3>
                    <span className="secure-badge"><ShieldCheck size={14} /> 100% Encrypted</span>
                  </div>

                  {/* Zakat Checkbox Toggle */}
                  <div className="zakat-toggle-box">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={isZakat}
                        onChange={(e) => setIsZakat(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      <span className="label-text">
                        <strong>My donation is Zakat</strong>
                        <small>Strict Shariah-compliant Zakat processing</small>
                      </span>
                    </label>
                  </div>

                  {/* Cart Items List */}
                  <div className="cart-items-summary">
                    {Object.keys(cart).length === 0 ? (
                      <div className="empty-cart">
                        <Heart size={36} className="empty-icon" />
                        <p>Select causes from the left panel to add to your donation basket.</p>
                      </div>
                    ) : (
                      <ul className="cart-list">
                        {Object.keys(cart).map((itemId) => {
                          let foundItem = null;
                          for (const cat of donationCauses) {
                            const it = cat.items.find((i) => i.id === itemId);
                            if (it) {
                              foundItem = it;
                              break;
                            }
                          }
                          const cartEntry = cart[itemId];
                          const lineTotal = cartEntry.qty * cartEntry.price;
                          return (
                            <li className="cart-line-item" key={itemId}>
                              <div className="cart-line-details">
                                <span className="cart-line-name">{foundItem ? foundItem.name : itemId}</span>
                                <span className="cart-line-qty">Qty: {cartEntry.qty} × PKR {cartEntry.price.toLocaleString()}</span>
                              </div>
                              <span className="cart-line-total">PKR {lineTotal.toLocaleString()}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Total Calculation */}
                  <div className="checkout-total-row">
                    <span>Total Donation:</span>
                    <strong className="total-amount">PKR {cartTotal.toLocaleString()}</strong>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="payment-method-selector">
                    <label className="selector-label">Select Payment Method</label>
                    <div className="payment-tabs-grid">
                      <button
                        className={`pay-tab ${paymentMethod === 'card' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        <CreditCard size={18} />
                        <span>Debit / Credit Card</span>
                        <small>Visa / MasterCard</small>
                      </button>

                      <button
                        className={`pay-tab ${paymentMethod === 'jazzcash' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('jazzcash')}
                      >
                        <Zap size={18} />
                        <span>JazzCash</span>
                        <small>Mobile Wallet</small>
                      </button>

                      <button
                        className={`pay-tab ${paymentMethod === 'easypaisa' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('easypaisa')}
                      >
                        <TrendingUp size={18} />
                        <span>EasyPaisa</span>
                        <small>Mobile Wallet</small>
                      </button>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className="btn btn-checkout-submit"
                    disabled={cartTotal === 0}
                    onClick={() => alert(`Proceeding to ${paymentMethod.toUpperCase()} gateway for PKR ${cartTotal.toLocaleString()}...`)}
                  >
                    Proceed to Donate PKR {cartTotal.toLocaleString()} <ArrowRight size={18} />
                  </button>

                  <p className="checkout-footer-note">
                    Official tax exemption receipt (FBR Section 2(36)c) will be emailed immediately after payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. BANK TRANSFER SECTION */}
      {(activeTab === 'bank' || activeTab === 'all') && (
        <section className="donate-section bank-transfer-section" id="bank-transfer">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Local Banking</span>
              <h2 className="section-title">Direct Bank Transfer Accounts</h2>
              <p className="section-description">
                Transfer your Zakat or Sadaqah directly to official Alkhidmat Foundation bank accounts across Pakistan.
              </p>
            </div>

            {/* Bank Search Filter */}
            <div className="bank-search-bar">
              <Search size={18} className="bank-search-icon" />
              <input
                type="text"
                placeholder="Search bank name, account number or IBAN..."
                value={bankQuery}
                onChange={(e) => setBankQuery(e.target.value)}
              />
            </div>

            <div className="bank-cards-grid">
              {filteredBanks.map((bank, index) => (
                <div className={`bank-card ${bank.recommended ? 'recommended' : ''}`} key={index}>
                  {bank.recommended && (
                    <div className="bank-card__badge">
                      <Sparkles size={12} /> Primary Collection Account
                    </div>
                  )}

                  <div className="bank-card__header">
                    <h3>{bank.bankName}</h3>
                    <span className="branch-tag">{bank.branch}</span>
                  </div>

                  <div className="bank-card__details">
                    <div className="detail-row">
                      <span className="detail-label">Account Title:</span>
                      <strong className="detail-val">{bank.accountTitle}</strong>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">Account Number:</span>
                      <div className="detail-val-copy">
                        <code>{bank.accountNumber}</code>
                        <button
                          className="copy-btn"
                          onClick={() => handleCopy(bank.accountNumber, `acc-${index}`)}
                          title="Copy Account Number"
                        >
                          {copiedField === `acc-${index}` ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">IBAN:</span>
                      <div className="detail-val-copy">
                        <code className="iban-code">{bank.iban}</code>
                        <button
                          className="copy-btn"
                          onClick={() => handleCopy(bank.iban, `iban-${index}`)}
                          title="Copy IBAN"
                        >
                          {copiedField === `iban-${index}` ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    {bank.swiftCode && (
                      <div className="detail-row">
                        <span className="detail-label">Swift Code:</span>
                        <strong className="detail-val">{bank.swiftCode}</strong>
                      </div>
                    )}
                  </div>

                  <div className="bank-card__footer">
                    <span className="bank-card__note">Receipt info: Email deposit slip to info@alkhidmat.org</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. HOME COLLECTION TIMELINE & FORM */}
      {(activeTab === 'home' || activeTab === 'all') && (
        <section className="donate-section home-collection-section" id="home-collection">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Doorstep Service</span>
              <h2 className="section-title">Cash & Cheque Pick-Up Service</h2>
              <p className="section-description">Schedule an official uniformed Alkhidmat representative to collect your donation directly from your home or office.</p>
            </div>

            {/* Step-by-Step Timeline */}
            <div className="collection-timeline">
              <div className="timeline-step">
                <div className="step-num">1</div>
                <h4>Schedule Request</h4>
                <p>Fill out the form below or call 0800-44448.</p>
              </div>
              <div className="timeline-arrow">→</div>

              <div className="timeline-step">
                <div className="step-num">2</div>
                <h4>Representative Visits</h4>
                <p>Uniformed staff arrives with official ID badge.</p>
              </div>
              <div className="timeline-arrow">→</div>

              <div className="timeline-step">
                <div className="step-num">3</div>
                <h4>Donation Received</h4>
                <p>Cash, cheque, or gold collection handled securely.</p>
              </div>
              <div className="timeline-arrow">→</div>

              <div className="timeline-step">
                <div className="step-num">4</div>
                <h4>Official Receipt Issued</h4>
                <p>Instant computer-generated physical & digital receipt.</p>
              </div>
              <div className="timeline-arrow">→</div>

              <div className="timeline-step">
                <div className="step-num">5</div>
                <h4>Impact Delivered</h4>
                <p>Funds deployed to your designated cause.</p>
              </div>
            </div>

            {/* Collection Form & Call Box */}
            <div className="collection-form-container">
              <div className="form-card">
                <h3>Schedule Doorstep Pick-Up</h3>
                {collectionSubmitted ? (
                  <div className="submission-success">
                    <CheckCircle2 size={48} className="text-green" />
                    <h4>Pick-Up Request Submitted!</h4>
                    <p>Our representative will contact you shortly on <strong>{collectionForm.phone}</strong> to confirm the pickup schedule.</p>
                    <button className="btn btn-outline" onClick={() => setCollectionSubmitted(false)}>Schedule Another Pickup</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setCollectionSubmitted(true); }}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={collectionForm.name}
                          onChange={(e) => setCollectionForm({ ...collectionForm, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 0300 1234567"
                          value={collectionForm.phone}
                          onChange={(e) => setCollectionForm({ ...collectionForm, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>City *</label>
                        <select
                          value={collectionForm.city}
                          onChange={(e) => setCollectionForm({ ...collectionForm, city: e.target.value })}
                        >
                          <option value="Lahore">Lahore</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Rawalpindi">Rawalpindi</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Multan">Multan</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="Quetta">Quetta</option>
                          <option value="Other">Other City</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Estimated Amount (PKR) *</label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 25000"
                          value={collectionForm.amount}
                          onChange={(e) => setCollectionForm({ ...collectionForm, amount: e.target.value })}
                        />
                      </div>

                      <div className="form-group full-width">
                        <label>Complete Pickup Address *</label>
                        <textarea
                          required
                          rows="3"
                          placeholder="House/Office number, street address, area name..."
                          value={collectionForm.address}
                          onChange={(e) => setCollectionForm({ ...collectionForm, address: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary full-width-btn">
                      Request Doorstep Pick-Up Now <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>

              <div className="hotline-card">
                <PhoneCall size={36} className="hotline-icon" />
                <h3>Prefer Calling Us Directly?</h3>
                <p>Call our dedicated helpline for instant pickup booking and donation support:</p>
                <div className="hotline-numbers">
                  <a href="tel:080044448" className="hotline-number">0800-44448</a>
                  <a href="tel:04232300817" className="hotline-number-sec">(042) 32300817</a>
                </div>
                <span className="hotline-hours">Toll-Free & Landline • Available 24/7 Nationwide</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. INTERNATIONAL DONATIONS SECTION */}
      {(activeTab === 'international' || activeTab === 'all') && (
        <section className="donate-section international-section" id="international-donations">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Global Impact</span>
              <h2 className="section-title">International Donation Accounts</h2>
              <p className="section-description">
                Donate locally in the UK, USA, Canada, Australia, or Middle East with tax receipts and local bank wire capabilities.
              </p>
            </div>

            {/* Country Selector Tabs */}
            <div className="country-tabs">
              {internationalAccounts.map((item, idx) => (
                <button
                  key={idx}
                  className={`country-tab ${selectedCountryIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedCountryIndex(idx)}
                >
                  <span className="country-flag">{item.flag}</span>
                  <span>{item.country}</span>
                </button>
              ))}
            </div>

            {/* Selected Country Details Card */}
            {(() => {
              const country = internationalAccounts[selectedCountryIndex];
              return (
                <div className="country-detail-card">
                  <div className="country-detail-header">
                    <div className="country-title">
                      <span className="large-flag">{country.flag}</span>
                      <div>
                        <h3>{country.organization}</h3>
                        <span className="reg-badge">{country.charityReg}</span>
                      </div>
                    </div>

                    <div className="tax-badge-box">
                      <ShieldCheck size={20} className="text-green" />
                      <span>{country.taxInfo}</span>
                    </div>
                  </div>

                  <div className="country-info-grid">
                    <div className="info-box">
                      <span className="info-label">Receiving Bank:</span>
                      <strong>{country.bank}</strong>
                    </div>

                    {country.sortCode && (
                      <div className="info-box">
                        <span className="info-label">Sort Code:</span>
                        <strong>{country.sortCode}</strong>
                      </div>
                    )}

                    {country.routing && (
                      <div className="info-box">
                        <span className="info-label">Routing / ABA:</span>
                        <strong>{country.routing}</strong>
                      </div>
                    )}

                    {country.transitNo && (
                      <div className="info-box">
                        <span className="info-label">Transit No:</span>
                        <strong>{country.transitNo}</strong>
                      </div>
                    )}

                    {country.bsb && (
                      <div className="info-box">
                        <span className="info-label">BSB:</span>
                        <strong>{country.bsb}</strong>
                      </div>
                    )}

                    <div className="info-box">
                      <span className="info-label">Account Number:</span>
                      <code>{country.accountNo}</code>
                    </div>

                    {country.iban && (
                      <div className="info-box full-width">
                        <span className="info-label">IBAN Code:</span>
                        <code className="iban-code">{country.iban}</code>
                      </div>
                    )}

                    <div className="info-box">
                      <span className="info-label">SWIFT / BIC Code:</span>
                      <strong>{country.swift}</strong>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* 9. HOW MUCH TO DONATE (VISUAL IMPACT CALCULATOR) */}
      <section className="donate-section impact-calculator-section" id="impact-calculator">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Real-Life Impact</span>
            <h2 className="section-title">How Much Should You Donate?</h2>
            <p className="section-description">See how every amount translates into real relief on the ground.</p>
          </div>

          <div className="calculator-layout">
            {/* Left Column: Visual Impact Image Showcase matching prompt style */}
            <div className="calculator-visual-card">
              <img
                src={impactCalculatorOptions[selectedImpactIndex].image}
                alt={impactCalculatorOptions[selectedImpactIndex].title}
                className="calculator-bg-image"
              />
              <div className="calculator-visual-overlay"></div>

              <div className="calculator-visual-content">
                <span className="impact-tag">FEATURED IMPACT</span>
                <h3 className="impact-headline">WE CAN SAVE THE FUTURE</h3>
                <p className="impact-desc">{impactCalculatorOptions[selectedImpactIndex].impactText}</p>

                <div className="impact-amount-badge">
                  <span>PKR {impactCalculatorOptions[selectedImpactIndex].amountPKR.toLocaleString()}</span>
                  <small>≈ ${impactCalculatorOptions[selectedImpactIndex].amountUSD} USD</small>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Selection Box */}
            <div className="calculator-control-box">
              <div className="frequency-toggle-bar">
                <button
                  className={`freq-btn ${donationFrequency === 'monthly' ? 'active' : ''}`}
                  onClick={() => setDonationFrequency('monthly')}
                >
                  <CalendarSync size={16} /> Give Monthly
                </button>
                <button
                  className={`freq-btn ${donationFrequency === 'onetime' ? 'active' : ''}`}
                  onClick={() => setDonationFrequency('onetime')}
                >
                  <Heart size={16} /> One-Time Donation
                </button>
              </div>

              <div className="impact-options-list">
                {impactCalculatorOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className={`impact-option-card ${selectedImpactIndex === idx ? 'selected' : ''}`}
                    onClick={() => setSelectedImpactIndex(idx)}
                  >
                    <div className="radio-indicator">
                      <div className="radio-dot"></div>
                    </div>
                    <div className="option-details">
                      <div className="option-title-row">
                        <strong>PKR {opt.amountPKR.toLocaleString()}</strong>
                        <span className="usd-equivalent">${opt.amountUSD} USD</span>
                      </div>
                      <p className="option-desc">{opt.title} - {opt.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="calculator-action-area">
                <button
                  className="btn btn-primary full-width-btn"
                  onClick={() => {
                    setActiveTab('online');
                    document.getElementById('online-donation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Donate PKR {impactCalculatorOptions[selectedImpactIndex].amountPKR.toLocaleString()} {donationFrequency === 'monthly' ? '/ Month' : 'Now'} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FEATURED PROGRAMMES GRID */}
      <section className="donate-section programmes-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Core Pillars</span>
            <h2 className="section-title">Featured Humanitarian Programs</h2>
            <p className="section-description">Explore our 8 major program sectors fighting poverty and hardship across Pakistan.</p>
          </div>

          <div className="programmes-grid">
            <div className="programme-card">
              <div className="programme-image-wrapper">
                <img src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&auto=format&fit=crop&q=80" alt="Clean Water" />
                <span className="programme-tag">WASH</span>
              </div>
              <div className="programme-content">
                <h3>Clean Water & Sanitation</h3>
                <p>Constructing hand pumps, solar wells, and filtration plants for 2.5 million villagers.</p>
                <div className="programme-actions">
                  <a href="#online-donation" className="btn btn-sm btn-primary">Donate Now</a>
                </div>
              </div>
            </div>

            <div className="programme-card">
              <div className="programme-image-wrapper">
                <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80" alt="Healthcare" />
                <span className="programme-tag">Healthcare</span>
              </div>
              <div className="programme-content">
                <h3>Hospitals & Healthcare</h3>
                <p>50+ hospitals, diagnostic labs, and mobile clinics offering free medical care.</p>
                <div className="programme-actions">
                  <a href="#online-donation" className="btn btn-sm btn-primary">Donate Now</a>
                </div>
              </div>
            </div>

            <div className="programme-card">
              <div className="programme-image-wrapper">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80" alt="Orphan Care" />
                <span className="programme-tag">Orphan Care</span>
              </div>
              <div className="programme-content">
                <h3>Orphan Care & Aghosh Homes</h3>
                <p>Sponsoring education, food, shelter, and medical care for over 28,000 orphans.</p>
                <div className="programme-actions">
                  <a href="#online-donation" className="btn btn-sm btn-primary">Donate Now</a>
                </div>
              </div>
            </div>

            <div className="programme-card">
              <div className="programme-image-wrapper">
                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80" alt="Gaza Appeal" />
                <span className="programme-tag">Gaza Appeal</span>
              </div>
              <div className="programme-content">
                <h3>Gaza Emergency Relief</h3>
                <p>Air-delivering hot meals, tents, medical kits, and hygiene supplies directly to Gaza.</p>
                <div className="programme-actions">
                  <a href="#online-donation" className="btn btn-sm btn-primary">Donate Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="donate-section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Everything you need to know about payment security, tax exemption, and receipt generation.</p>
          </div>

          <div className="faq-container">
            {faqItems.map((item, idx) => (
              <div className={`faq-card ${openFaq === idx ? 'open' : ''}`} key={idx}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <h4>{item.question}</h4>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
