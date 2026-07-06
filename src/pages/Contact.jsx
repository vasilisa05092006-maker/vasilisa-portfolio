import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  function validateForm(formData) {
    const newErrors = {}

    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const subject = formData.get('subject').trim()
    const message = formData.get('message').trim()

    if (!name) {
      newErrors.name = 'Name is required.'
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!email) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (subject && subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.'
    }

    if (!message) {
      newErrors.message = 'Message is required.'
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    return newErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const validationErrors = validateForm(formData)

    setErrors(validationErrors)
    setStatus('')

    if (Object.keys(validationErrors).length > 0) {
      setStatus('Please fix the errors above before sending.')
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xjgqawgr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        form.reset()
      } else {
        setStatus('Something went wrong. Try again.')
      }
    } catch {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact">
      <h1 className="section-title">Contact Me</h1>

      <div className="contact-form">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className={errors.name ? 'input-error' : ''}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              aria-describedby="name-error"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            <p className="error-message" id="name-error">{errors.name}</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className={errors.email ? 'input-error' : ''}
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              aria-describedby="email-error"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            <p className="error-message" id="email-error">{errors.email}</p>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              className={errors.subject ? 'input-error' : ''}
              type="text"
              id="subject"
              name="subject"
              placeholder="Your subject"
              aria-describedby="subject-error"
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            <p className="error-message" id="subject-error">{errors.subject}</p>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className={errors.message ? 'input-error' : ''}
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              aria-describedby="message-error"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            <p className="error-message" id="message-error">{errors.message}</p>
          </div>

          <button type="submit">Send message</button>
          <p id="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact