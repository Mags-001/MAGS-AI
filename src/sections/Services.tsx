import { useEffect, useRef, useState } from 'react'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/services'

export function Services() {
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
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="services-intro">
          <div>
            <p className="section-kicker"><span /> What I can build</p>
            <h2 id="services-title">Practical technology for <em>real business work.</em></h2>
          </div>
          <p className="services-lede">
            Every service starts with understanding the problem. The right solution is the one that makes the work clearer, simpler, or more useful.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}