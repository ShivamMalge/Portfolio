'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/moving-border'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Shivam Malge',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-white/80">
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
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:shivammalge@gmail.com"
                  className="text-white/90 hover:text-white transition-colors"
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
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <a
                  href="tel:+918618169821"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  +91 8618169821
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-white/80 mb-4">Follow me on social platforms</p>
              <div className="flex gap-4">
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-malge-12523a293/' },
                  { label: 'GitHub', href: 'https://github.com/ShivamMalge' },
                  { label: 'LeetCode', href: 'https://leetcode.com/u/ShivamMalge/' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium"
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
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              borderRadius="0.75rem"
              as="button"
              type="submit"
              containerClassName="w-full h-14 mt-4"
              className={`w-full h-full text-white flex items-center justify-center transition-colors ${
                submitStatus === 'success' ? 'bg-green-500/20 text-green-400' : 
                submitStatus === 'error' ? 'bg-red-500/20 text-red-400' : ''
              }`}
              style={{ width: '100%' }}
              disabled={isSubmitting || submitStatus === 'success'}
            >
              {isSubmitting ? (
                <>
                  Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : submitStatus === 'success' ? (
                'Message Sent Successfully!'
              ) : submitStatus === 'error' ? (
                'Failed to send. Try again.'
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
