import { useEffect, useRef, useState } from 'react'
import { processSteps } from '../data/process'
import { ProcessTimeline } from '../components/ProcessTimeline'

export function Process() {
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
      className="process-section"
      id="process"
      ref={sectionRef}
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="process-intro">
          <div>
            <p className="section-kicker"><span /> How I Work</p>
            <h2 id="process-title">Understand first. <em>Build second.</em></h2>
          </div>
          <p className="process-lede">
            A thoughtful path from a real business problem to a practical digital solution.
          </p>
        </div>

        <div className="process-principle">
          <span className="principle-mark" aria-hidden="true">01</span>
          <p>Understand the business first. <strong>Build the technology second.</strong></p>
        </div>

        <ProcessTimeline steps={processSteps} isVisible={isVisible} />
      </div>
    </section>
  )
}