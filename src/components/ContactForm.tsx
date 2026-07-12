import { useState } from 'react'

const roles = [
  'I am a Kapiʻolani Community College Student',
  'I am a Kapiʻolani Community College Faculty Member',
  'I am a current Community Partner',
  'I want to be a Community Partner',
  'Other',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Wire this up to your form handler of choice (Cloudflare Pages Function,
    // Formspree, etc). Left as a client-side stub for now.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-kalo/15 rounded-xl p-8 bg-white">
        <p className="font-display text-xl text-kalo">Message sent.</p>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out &mdash; the KSSLP office will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-kalo/15 rounded-xl p-6 sm:p-8 bg-white space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block text-sm">
          <span className="text-ink/70">First name *</span>
          <input required type="text" name="firstName" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-ocean" />
        </label>
        <label className="block text-sm">
          <span className="text-ink/70">Last name *</span>
          <input required type="text" name="lastName" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-ocean" />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-ink/70">Email *</span>
        <input required type="email" name="email" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-ocean" />
      </label>
      <label className="block text-sm">
        <span className="text-ink/70">I am... *</span>
        <select required name="role" defaultValue="" className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 bg-white focus:border-ocean">
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
        <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border border-kalo/20 px-3 py-2 focus:border-ocean" />
      </label>
      <button
        type="submit"
        className="press w-full sm:w-auto px-6 py-3 rounded-md bg-papaya text-sand font-medium hover:brightness-110 transition"
      >
        Submit
      </button>
    </form>
  )
}
