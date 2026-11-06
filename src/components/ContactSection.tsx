import { useEffect, useRef, useState, type FormEvent } from 'react'
import { brand, budgets, projectTypes } from '../data/content'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'

function FormSelect({
  id,
  name,
  required,
  placeholder,
  options,
}: {
  id: string
  name: string
  required?: boolean
  placeholder: string
  options: string[]
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const form = rootRef.current?.closest('form')
    if (!form) return
    const onReset = () => {
      setValue('')
      setOpen(false)
    }
    form.addEventListener('reset', onReset)
    return () => form.removeEventListener('reset', onReset)
  }, [])

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`form-select-wrap ${open ? 'open' : ''}`} ref={rootRef}>
      <button
        type="button"
        id={id}
        className={`form-select form-select-button ${value ? '' : 'is-placeholder'}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{value || placeholder}</span>
      </button>
      <input
        className="form-select-value"
        name={name}
        value={value}
        required={required}
        tabIndex={-1}
        onChange={() => {}}
        aria-hidden="true"
      />
      {open && (
        <ul className="form-select-menu" id={`${id}-list`} role="listbox">
          {options.map((option) => (
            <li key={option} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                className={value === option ? 'is-selected' : ''}
                onClick={() => {
                  setValue(option)
                  setOpen(false)
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    setSending(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !result.success) {
        setStatus('error')
        setMessage(result.message || 'Sorry, the message was not sent. Email hello@solvnext.com instead.')
        return
      }
      setStatus('success')
      setMessage(result.message || 'Thanks. A Solvnext producer will reply within two hours.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Sorry, the message was not sent. Email hello@solvnext.com instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <header className="contact-header">
          <div className="contact-badge">
            <span>📞</span>
            <span>Get In Touch</span>
          </div>
          <h2 id="contact-heading" className="contact-title">
            Ready to Start Your <span className="gradient-text">Next Project?</span>
          </h2>
          <p className="contact-description">
            Let&apos;s discuss your app development needs and create something amazing together. Get a free consultation and project quote today.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let&apos;s Talk Business</h3>
            <p>
              Ready to transform your business with cutting-edge mobile and web solutions? Our Melbourne-based team is here to help bring your vision to life.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <MailIcon />
                <div className="contact-item-content">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">
                    <a href={`mailto:${brand.email}`}>{brand.email}</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <PhoneIcon />
                <div className="contact-item-content">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">
                    <a href={brand.phoneHref}>{brand.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <PinIcon />
                <div className="contact-item-content">
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">{brand.location}</div>
                </div>
              </div>
              <div className="contact-item">
                <ClockIcon />
                <div className="contact-item-content">
                  <div className="contact-item-label">Response Time</div>
                  <div className="contact-item-value">{brand.response}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {status !== 'idle' && (
              <div className={`form-message-card ${status}`} role="status">
                <div className="form-message-mark" aria-hidden="true">
                  {status === 'success' ? '✓' : '!'}
                </div>
                <h3>{status === 'success' ? 'Message sent' : 'Message not sent'}</h3>
                <p>{message}</p>
                <button
                  type="button"
                  className="form-submit"
                  onClick={() => {
                    setStatus('idle')
                    setMessage('')
                  }}
                >
                  {status === 'success' ? 'Send another message' : 'Back to the form'}
                </button>
              </div>
            )}
            <form className="contact-form" id="contactForm" hidden={status !== 'idle'} onSubmit={onSubmit}>
              <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input id="firstName" name="firstName" className="form-input" required placeholder="John" maxLength={50} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input id="lastName" name="lastName" className="form-input" required placeholder="Smith" maxLength={50} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input id="email" name="email" type="email" className="form-input" required placeholder="john@company.com" maxLength={100} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+61 400 000 000"
                    maxLength={20}
                    onChange={(event) => {
                      event.target.value = event.target.value.replace(/[^0-9\s+\-()]/g, '')
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input id="company" name="company" className="form-input" placeholder="Your Company" maxLength={100} />
              </div>
              <div className="form-group">
                <label htmlFor="projectType" className="form-label">Project Type *</label>
                <FormSelect id="projectType" name="projectType" required placeholder="Select project type" options={projectTypes} />
              </div>
              <div className="form-group">
                <label htmlFor="budget" className="form-label">Project Budget</label>
                <FormSelect id="budget" name="budget" placeholder="Select budget range" options={budgets} />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  maxLength={2000}
                />
              </div>
              <button type="submit" className="form-submit" id="submitBtn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
