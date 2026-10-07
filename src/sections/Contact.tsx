import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { contactLinks } from '../data/contact'

type FormValues = {
  name: string
  business: string
  contact: string
  description: string
  problem: string
  currentProcess: string
  desiredImprovement: string
  budget: string
  preferredContact: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  business: '',
  contact: '',
  description: '',
  problem: '',
  currentProcess: '',
  desiredImprovement: '',
  budget: '',
  preferredContact: '',
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const trimmedContact = values.contact.trim()
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact)
  const looksLikeWhatsApp = /^[+\d][\d\s().-]{6,}$/.test(trimmedContact)

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.business.trim()) errors.business = 'Please enter your business name.'
  if (!trimmedContact) {
    errors.contact = 'Please enter an email address or WhatsApp number.'
  } else if (!looksLikeEmail && !looksLikeWhatsApp) {
    errors.contact = 'Use a valid email address or WhatsApp number.'
  }
  if (!values.description.trim()) errors.description = 'Please tell me briefly what your business does.'
  if (!values.problem.trim()) errors.problem = 'Please describe the problem you are trying to solve.'
  if (!values.preferredContact) errors.preferredContact = 'Please choose a preferred contact method.'

  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }))
    setSubmissionError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmissionError('Please check the highlighted fields and try again.')
      return
    }

    setErrors({})
    setSubmissionError('')
    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setValues(initialValues)
    }, 700)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="section-kicker"><span /> Start a conversation</p>
          <h2 id="contact-title">Have a Business Problem? <em>Let&apos;s Talk.</em></h2>
          <p>
            Tell me what is happening in the business today, where the process feels difficult, and what you would like to improve. We can start with the problem rather than a generic website request.
          </p>
          <div className="contact-links" aria-label="Direct contact options">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href}>
                <span>{link.label}</span>
                <small>{link.detail}</small>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          {isSubmitted ? (
            <div className="form-success" role="status">
              <span className="success-mark" aria-hidden="true">✓</span>
              <h3>Thanks! Your business problem has been received.</h3>
              <p>I&apos;ll review it and get back to you.</p>
              <small>This prototype does not send or store submissions yet.</small>
              <button className="form-reset" type="button" onClick={() => setIsSubmitted(false)}>
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-fields-row">
                <FormField label="Name" name="name" value={values.name} error={errors.name} onChange={updateValue} required />
                <FormField label="Business" name="business" value={values.business} error={errors.business} onChange={updateValue} required />
              </div>
              <FormField label="Email / WhatsApp" name="contact" type="text" value={values.contact} error={errors.contact} onChange={updateValue} required />
              <FormField label="What does your business do?" name="description" value={values.description} error={errors.description} onChange={updateValue} required multiline />
              <FormField label="What problem are you trying to solve?" name="problem" value={values.problem} error={errors.problem} onChange={updateValue} required multiline />
              <FormField label="Current Process" name="currentProcess" value={values.currentProcess} onChange={updateValue} multiline optional />
              <FormField label="Desired Improvement" name="desiredImprovement" value={values.desiredImprovement} onChange={updateValue} multiline optional />
              <div className="form-fields-row">
                <FormField label="Budget" name="budget" value={values.budget} onChange={updateValue} optional />
                <label className={`form-field${errors.preferredContact ? ' has-error' : ''}`}>
                  <span>Preferred Contact Method <em>*</em></span>
                  <select value={values.preferredContact} onChange={(event) => updateValue('preferredContact', event.target.value)}>
                    <option value="">Choose one</option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                  </select>
                  {errors.preferredContact && <small>{errors.preferredContact}</small>}
                </label>
              </div>
              {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
              <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Preparing your enquiry...' : 'Discuss Your Business Problem'}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>
              <p className="form-note">This is a frontend prototype. Your information is not sent or stored yet.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type FormFieldProps = {
  label: string
  name: keyof FormValues
  value: string
  error?: string
  onChange: (field: keyof FormValues, value: string) => void
  type?: string
  multiline?: boolean
  optional?: boolean
  required?: boolean
}

function FormField({ label, name, value, error, onChange, type = 'text', multiline = false, optional = false, required = false }: FormFieldProps) {
  const fieldId = `contact-${name}`
  const errorId = `${fieldId}-error`
  const fieldProps = {
    id: fieldId,
    name,
    value,
    required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(name, event.target.value),
  }

  return (
    <label className={`form-field${error ? ' has-error' : ''}`} htmlFor={fieldId}>
      <span>{label} {optional && <small>(optional)</small>}{required && <em>*</em>}</span>
      {multiline ? <textarea {...fieldProps} rows={3} /> : <input {...fieldProps} type={type} />}
      {error && <small id={errorId}>{error}</small>}
    </label>
  )
}