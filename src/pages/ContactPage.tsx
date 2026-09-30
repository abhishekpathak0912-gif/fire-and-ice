import React, { useState } from 'react';
import { BRANCHES } from '../data/branchData';
import { ReservationFormState, ReservationValidationErrors, DemoReservationConfirmation, ContactValidationErrors } from '../types/contact';
import { validateReservationForm, validateContactForm } from '../utils/validation';

export const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reservation' | 'inquiry'>('reservation');

  // Reservation State
  const [resForm, setResForm] = useState<ReservationFormState>({
    fullName: '',
    email: '',
    phone: '',
    branch: 'thamel',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingArea: 'indoor-hearth',
    specialRequests: ''
  });
  const [resErrors, setResErrors] = useState<ReservationValidationErrors>({});
  const [resConfirmation, setResConfirmation] = useState<DemoReservationConfirmation | null>(null);

  // Inquiry State
  const [inqForm, setInqForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [inqErrors, setInqErrors] = useState<ContactValidationErrors>({});
  const [inqSuccess, setInqSuccess] = useState<boolean>(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateReservationForm(resForm);
    if (Object.keys(errors).length > 0) {
      setResErrors(errors);
      return;
    }

    setResErrors({});
    const randomId = 'RES-' + Math.floor(10000 + Math.random() * 90000);
    setResConfirmation({
      reservationId: randomId,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      form: { ...resForm },
      branchName: BRANCHES[resForm.branch].name
    });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateContactForm(inqForm);
    if (Object.keys(errors).length > 0) {
      setInqErrors(errors);
      return;
    }
    setInqErrors({});
    setInqSuccess(true);
  };

  return (
    <div className="container-custom" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
            Kathmandu &amp; Lalitpur Hospitality
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.75rem',
              fontWeight: 600,
              color: 'var(--color-on-surface)'
            }}
          >
            Reservations &amp; Enquiries
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '560px',
              margin: '0.5rem auto 0'
            }}
          >
            Gather with loved ones by our wood-fired hearths in Thamel or the serene garden in Sanepa.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div
          style={{
            backgroundColor: '#354638',
            color: '#F5F1E9',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            border: '1px solid var(--color-tertiary)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '24px' }}>
            info
          </span>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            <strong>DEMO NOTICE:</strong> This is a client-side frontend demonstration. Submitting this form tests local validation and produces a simulated confirmation. No email or reservation is sent to the restaurant without a live backend service.
          </p>
        </div>

        {/* Form Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('reservation')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              backgroundColor: activeTab === 'reservation' ? 'var(--color-primary)' : 'var(--color-surface-container)',
              color: activeTab === 'reservation' ? '#FFFFFF' : 'var(--color-on-surface)',
              border: '1px solid rgba(197, 170, 121, 0.4)'
            }}
          >
            Book a Table (Reservation)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('inquiry')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              backgroundColor: activeTab === 'inquiry' ? 'var(--color-primary)' : 'var(--color-surface-container)',
              color: activeTab === 'inquiry' ? '#FFFFFF' : 'var(--color-on-surface)',
              border: '1px solid rgba(197, 170, 121, 0.4)'
            }}
          >
            General Inquiries &amp; Events
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Form Side */}
          <div>
            {activeTab === 'reservation' ? (
              resConfirmation ? (
                /* Reservation Success State */
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '2.5rem 2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 170, 121, 0.4)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-tertiary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                      event_available
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>
                    Demo Reservation Received
                  </h3>
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                    Reference Number: <strong style={{ color: 'var(--color-secondary)' }}>{resConfirmation.reservationId}</strong>
                  </p>

                  <div
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      padding: '1.25rem',
                      borderRadius: '8px',
                      textAlign: 'left',
                      margin: '1.5rem 0',
                      fontSize: '0.875rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div><strong>Name:</strong> {resConfirmation.form.fullName}</div>
                    <div><strong>Branch:</strong> {resConfirmation.branchName}</div>
                    <div><strong>Date &amp; Time:</strong> {resConfirmation.form.date} at {resConfirmation.form.time}</div>
                    <div><strong>Party Size:</strong> {resConfirmation.form.guests} Guests ({resConfirmation.form.seatingArea.replace('-', ' ')})</div>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-muted)', marginBottom: '1.5rem' }}>
                    This is a verified frontend demo. To confirm a real table reservation tonight, call <strong>{BRANCHES[resConfirmation.form.branch].displayPhone}</strong>.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setResConfirmation(null);
                      setResForm(prev => ({ ...prev, fullName: '', specialRequests: '' }));
                    }}
                    className="btn-primary"
                  >
                    Make Another Demo Reservation
                  </button>
                </div>
              ) : (
                /* Reservation Form */
                <form
                  onSubmit={handleReservationSubmit}
                  noValidate
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 170, 121, 0.35)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                  }}
                >
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}>
                    Reserve a Table
                  </h2>

                  {/* Name */}
                  <div>
                    <label htmlFor="res-fullName" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Full Name <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <input
                      id="res-fullName"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!resErrors.fullName}
                      value={resForm.fullName}
                      onChange={(e) => setResForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="e.g. Maya Shrestha"
                      className={resErrors.fullName ? 'is-invalid' : ''}
                      style={{ width: '100%' }}
                    />
                    {resErrors.fullName && (
                      <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                        {resErrors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label htmlFor="res-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Email <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <input
                        id="res-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!resErrors.email}
                        value={resForm.email}
                        onChange={(e) => setResForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="maya@example.com"
                        className={resErrors.email ? 'is-invalid' : ''}
                        style={{ width: '100%' }}
                      />
                      {resErrors.email && (
                        <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                          {resErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="res-phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Phone <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!resErrors.phone}
                        value={resForm.phone}
                        onChange={(e) => setResForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+977 9841234567"
                        className={resErrors.phone ? 'is-invalid' : ''}
                        style={{ width: '100%' }}
                      />
                      {resErrors.phone && (
                        <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                          {resErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Branch & Seating */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label htmlFor="res-branch" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Branch Location <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <select
                        id="res-branch"
                        value={resForm.branch}
                        onChange={(e) => setResForm(prev => ({ ...prev, branch: e.target.value as 'thamel' | 'sanepa' }))}
                        style={{ width: '100%', height: '46px' }}
                      >
                        <option value="thamel">Thamel Branch (Original Hearth)</option>
                        <option value="sanepa">Sanepa Branch (Lalitpur Garden)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="res-guests" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Number of Guests <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <input
                        id="res-guests"
                        type="number"
                        min="1"
                        max="30"
                        value={resForm.guests}
                        onChange={(e) => setResForm(prev => ({ ...prev, guests: parseInt(e.target.value) || 1 }))}
                        style={{ width: '100%', height: '46px' }}
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label htmlFor="res-date" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Date <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        value={resForm.date}
                        onChange={(e) => setResForm(prev => ({ ...prev, date: e.target.value }))}
                        style={{ width: '100%', height: '46px' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="res-time" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Preferred Time <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <select
                        id="res-time"
                        value={resForm.time}
                        onChange={(e) => setResForm(prev => ({ ...prev, time: e.target.value }))}
                        style={{ width: '100%', height: '46px' }}
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:00">1:00 PM (Lunch)</option>
                        <option value="14:00">2:00 PM (Lunch)</option>
                        <option value="18:00">6:00 PM (Dinner)</option>
                        <option value="19:00">7:00 PM (Dinner)</option>
                        <option value="20:00">8:00 PM (Dinner)</option>
                        <option value="21:00">9:00 PM (Late Dinner)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="res-requests" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Special Requests / Dietary Notes (Optional)
                    </label>
                    <textarea
                      id="res-requests"
                      rows={3}
                      value={resForm.specialRequests}
                      onChange={(e) => setResForm(prev => ({ ...prev, specialRequests: e.target.value }))}
                      placeholder="e.g. Birthday celebration, high chair required, quiet garden corner"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '0.85rem' }}>
                    <span>Submit Demo Reservation</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      arrow_forward
                    </span>
                  </button>
                </form>
              )
            ) : (
              /* General Inquiry Form */
              inqSuccess ? (
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '2.5rem 2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 170, 121, 0.4)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-tertiary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                      mail
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600 }}>
                    Demo Message Submitted
                  </h3>
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                    Thank you, <strong>{inqForm.fullName}</strong>. Your message passed frontend validation. Note: As this is a demo, no email server is attached.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInqSuccess(false);
                      setInqForm({ fullName: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-primary"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another Demo Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleInquirySubmit}
                  noValidate
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 170, 121, 0.35)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                  }}
                >
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}>
                    General Inquiry &amp; Feedback
                  </h2>

                  <div>
                    <label htmlFor="inq-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Your Name <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <input
                      id="inq-name"
                      type="text"
                      required
                      value={inqForm.fullName}
                      onChange={(e) => setInqForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="e.g. Milan Thapa"
                      className={inqErrors.fullName ? 'is-invalid' : ''}
                      style={{ width: '100%' }}
                    />
                    {inqErrors.fullName && (
                      <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                        {inqErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inq-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Email Address <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      required
                      value={inqForm.email}
                      onChange={(e) => setInqForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="milan@example.com"
                      className={inqErrors.email ? 'is-invalid' : ''}
                      style={{ width: '100%' }}
                    />
                    {inqErrors.email && (
                      <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                        {inqErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inq-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Subject <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <input
                      id="inq-subject"
                      type="text"
                      required
                      value={inqForm.subject}
                      onChange={(e) => setInqForm(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="e.g. Private Catering / Event Space Booking"
                      className={inqErrors.subject ? 'is-invalid' : ''}
                      style={{ width: '100%' }}
                    />
                    {inqErrors.subject && (
                      <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                        {inqErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inq-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                      Message <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <textarea
                      id="inq-message"
                      rows={4}
                      required
                      value={inqForm.message}
                      onChange={(e) => setInqForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Write your questions or notes here..."
                      className={inqErrors.message ? 'is-invalid' : ''}
                      style={{ width: '100%' }}
                    />
                    {inqErrors.message && (
                      <p style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                        {inqErrors.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '0.85rem' }}>
                    <span>Send Demo Message</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      send
                    </span>
                  </button>
                </form>
              )
            )}
          </div>

          {/* Right: Direct Branch Contacts & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Thamel Contact Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600 }}>
                  Thamel Flagship
                </h3>
                <span className="badge-caps badge-brass">Est. 1996</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.75rem' }}>
                {BRANCHES.thamel.address}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <div><strong>Hours:</strong> {BRANCHES.thamel.hours.weekdays}</div>
                <div><strong>Breakfast:</strong> {BRANCHES.thamel.hours.breakfast}</div>
                <div>
                  <strong>Telephone:</strong>{' '}
                  <a href={`tel:${BRANCHES.thamel.phone}`} style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>
                    {BRANCHES.thamel.displayPhone}
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <a
                  href={BRANCHES.thamel.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.75rem', padding: '0.45rem 0.8rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>navigation</span>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Sanepa Contact Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600 }}>
                  Sanepa Garden
                </h3>
                <span className="badge-caps badge-brass">Lalitpur Courtyard</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.75rem' }}>
                {BRANCHES.sanepa.address}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <div><strong>Hours:</strong> {BRANCHES.sanepa.hours.weekdays}</div>
                <div><strong>Brunch:</strong> {BRANCHES.sanepa.hours.breakfast}</div>
                <div>
                  <strong>Telephone:</strong>{' '}
                  <a href={`tel:${BRANCHES.sanepa.phone}`} style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>
                    {BRANCHES.sanepa.displayPhone}
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <a
                  href={BRANCHES.sanepa.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.75rem', padding: '0.45rem 0.8rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>navigation</span>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
