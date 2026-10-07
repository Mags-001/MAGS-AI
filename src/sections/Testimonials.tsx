import { useEffect, useRef, useState } from 'react'
import { ClientCard } from '../components/ClientCard'
import { EmptyState } from '../components/EmptyState'
import { TestimonialCard } from '../components/TestimonialCard'
import { clients, testimonials } from '../data/testimonials'

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const hasContent = testimonials.length > 0 || clients.length > 0

  return (
    <section
      className={`testimonials-section${isVisible ? ' is-visible' : ''}`}
      id="testimonials"
      ref={sectionRef}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="testimonials-intro">
          <div>
            <p className="section-kicker"><span /> Testimonials / Clients</p>
            <h2 id="testimonials-title">Work should speak for <em>itself.</em></h2>
          </div>
          <p className="testimonials-lede">
            Real experiences will be shared here when there are real projects and people behind them.
          </p>
        </div>

        {hasContent ? (
          <div className="testimonial-content">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {clients.map((client) => <ClientCard key={client.id} client={client} />)}
          </div>
        ) : (
          <EmptyState
            title="Real businesses. Real experiences."
            description="Client stories will appear here as Mags.Ai projects go live."
          />
        )}
      </div>
    </section>
  )
}