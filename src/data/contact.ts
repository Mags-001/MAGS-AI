export type ContactLink = {
  label: string
  href: string
  detail: string
}

export const contactLinks: ContactLink[] = [
  { label: 'WhatsApp', href: '#contact', detail: 'Link to be configured' },
  { label: 'Email', href: '#contact', detail: 'Address to be configured' },
  { label: 'LinkedIn', href: '#contact', detail: 'Profile to be configured' },
  { label: 'Instagram', href: '#contact', detail: 'Profile to be configured' },
]

export const footerNavigation = [
  { label: 'Problems', href: '#problems' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'How I Work', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '#contact' },
  { label: 'Terms & Conditions', href: '#contact' },
  { label: 'Refund / Cancellation Policy', href: '#contact' },
]