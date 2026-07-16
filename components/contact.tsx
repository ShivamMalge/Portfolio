'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/moving-border'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/60">
            Have a project in mind? Let&apos;s collaborate and build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:shivammalge@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  shivammalge@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MessageSquare size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+918618169821"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +91 8618169821
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-foreground/60 mb-4">Follow me on social platforms</p>
              <div className="flex gap-4">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'GitHub', href: 'https://github.com' },
                  { label: 'LeetCode', href: 'https://leetcode.com' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              borderRadius="0.75rem"
              as="button"
              type="submit"
              containerClassName="w-full"
              className="w-full text-foreground"
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
