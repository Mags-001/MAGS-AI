import { useEffect, useRef, useState } from 'react'
import { ProblemCard } from '../components/ProblemCard'

const problems = [
  {
    title: 'Manual Work',
    description: 'Still tracking customer details across notebooks, WhatsApp, and Excel?',
    image: '/images/problems/1%20%E2%80%94%20Manual%20Work.png',
    imageAlt: 'Manual business work spread across notebooks, invoices, and paperwork',
  },
  {
    title: 'Scattered Information',
    description: 'Important business information spread across different files, apps, and conversations?',
    image: '/images/problems/2%20%E2%80%94%20Scattered%20Information.png',
    imageAlt: 'Scattered business information represented by documents, files, and records',
  },
  {
    title: 'Customer Management',
    description: 'Following up with customers manually and losing track of who needs a response?',
    image: '/images/problems/3%20%E2%80%94%20Customer%20Management.png',
    imageAlt: 'Customer management workflow connecting conversations and follow-ups',
  },
  {
    title: 'No Digital Presence',
    description: 'Customers cannot easily discover what your business offers online?',
    image: '/images/problems/4%20%E2%80%94%20No%20Digital%20Presence.png',
    imageAlt: 'A business moving from offline materials toward a digital presence',
  },
  {
    title: 'Inefficient Workflows',
    description: 'Repeating the same tasks every day that could be handled automatically?',
    image: '/images/problems/5%20%E2%80%94%20Inefficient%20Workflows.png',
    imageAlt: 'Manual workflow steps and repeated business processes',
  },
  {
    title: 'Need for Custom Tools',
    description: 'Existing software does not fit the way your business actually works?',
    image: '/images/problems/6%20%E2%80%94%20Need%20for%20Custom%20Tools.png',
    imageAlt: 'A custom digital tool bringing a business process into one focused system',
  },
]

export function Problems() {
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
      { threshold: 0.14 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="problems-section"
      id="problems"
      ref={sectionRef}
      aria-labelledby="problems-title"
    >
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker"><span /> The starting point</p>
          <h2 id="problems-title">Before the solution, <em>there is a problem.</em></h2>
          <p className="section-lede">
            Digital transformation starts with noticing what is slowing the business down. These are the patterns worth making simpler.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              index={index}
              title={problem.title}
              description={problem.description}
              image={problem.image}
              imageAlt={problem.imageAlt}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="problems-transition" aria-hidden="true">
          <span>Business problem</span>
          <span className="transition-line" />
          <span>Digital opportunity</span>
          <span className="transition-arrow">→</span>
        </div>
      </div>
    </section>
  )
}