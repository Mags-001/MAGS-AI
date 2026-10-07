import type { Testimonial } from '../data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <blockquote>&ldquo;{testimonial.testimonial}&rdquo;</blockquote>
      <footer>
        <strong>{testimonial.clientName}</strong>
        <span>{testimonial.businessName}</span>
      </footer>
    </article>
  )
}