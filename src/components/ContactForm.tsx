import { useState } from 'react'

const roles = [
  'I am a Kapiʻolani Community College Student',
  'I am a Kapiʻolani Community College Faculty Member',
  'I am a current Community Partner',
  'I want to be a Community Partner',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      role: data.get('role'),
      message: data.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="p-8 bg-white rounded-2xl">
        <p className="font-display text-xl text-kalo">Message sent.</p>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out &mdash; the KSSLP office will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-2xl space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="text-ink/70">First name *</span>
          <input required type="text" name="firstName" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-gold" />
        </label>
        <label className="block text-sm">
          <span className="text-ink/70">Last name *</span>
          <input required type="text" name="lastName" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-gold" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-ink/70">Email *</span>
        <input required type="email" name="email" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-gold" />
      </label>
      <label className="block text-sm">
        <span className="text-ink/70">I am... *</span>
        <select required name="role" defaultValue="" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 bg-white focus:border-gold">
          <option value="" disabled>
            Choose one
          </option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-ink/70">Message *</span>
        <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-gold" />
      </label>

      {status === 'error' && (
        <p className="text-sm text-hibiscus" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="press w-full sm:w-auto px-6 py-3 rounded-md bg-papaya text-sand font-medium hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
