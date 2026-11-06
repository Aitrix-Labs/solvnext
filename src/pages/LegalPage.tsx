export function LegalPage({ kind }: { kind: 'privacy' | 'refund' }) {
  const privacy = kind === 'privacy'
  return (
    <section className="about-section">
      <div className="about-container">
        <header className="about-header">
          <div className="about-badge"><span>{privacy ? 'Legal' : 'Billing'}</span></div>
          <h1 className="about-title">{privacy ? 'Privacy Policy' : 'Refund Policy'}</h1>
          <p className="about-description">Solvnext Pty Ltd · Melbourne, Australia</p>
        </header>
        <div className="legal-copy">
          {privacy ? (
            <>
              <p>
                This policy explains what Solvnext collects when you browse solvnext.com or send a project enquiry, and how that information is used.
              </p>
              <h2>What we collect</h2>
              <ul>
                <li>Name, email, phone, company, and the project details you type into the contact form.</li>
                <li>Basic technical data such as browser type and pages viewed, used to keep the site reliable.</li>
              </ul>
              <h2>How we use it</h2>
              <p>
                Enquiry details are used to reply to you and to prepare a quote. We do not sell personal information. We keep it only as long as the conversation, the project, or the law requires.
              </p>
              <h2>Contact</h2>
              <p>
                Questions about your information can be sent to hello@solvnext.com. You can ask us to correct or delete an enquiry that is not tied to an active contract.
              </p>
            </>
          ) : (
            <>
              <p>
                Discovery workshops and fixed-scope builds are billed against a written proposal. This page explains how refunds work if a engagement stops early.
              </p>
              <h2>Before work starts</h2>
              <p>
                A deposit paid for a project that has not started can be refunded in full if you cancel in writing before kickoff.
              </p>
              <h2>After work starts</h2>
              <p>
                Time already spent on discovery, design, or engineering is not refundable. Unused prepaid milestones that have not been scheduled can be refunded within 14 days of a written cancellation.
              </p>
              <h2>Support retainers</h2>
              <p>
                Monthly support is billed in advance. Cancel before the next cycle and that upcoming month is not charged. The current month is not refunded once it has begun.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
