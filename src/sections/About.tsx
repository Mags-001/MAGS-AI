import { useEffect, useRef, useState } from 'react'

const highlights = [
  {
    number: '01',
    title: 'Business first',
    description: 'Start with what the business needs before choosing what to build.',
  },
  {
    number: '02',
    title: 'A useful perspective',
    description: 'Commerce and finance help me notice how work actually happens.',
  },
  {
    number: '03',
    title: 'Technology with purpose',
    description: 'Use modern software and AI where they make the work simpler.',
  },
]

export function About() {
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

  return (
    <section
      className={`about-section${isVisible ? ' is-visible' : ''}`}
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-portrait-wrap">
          <div className="about-portrait-frame">
            <img
              className="about-portrait"
              src="/images/mags-profile.png"
              alt="Magudeshwaran, the person behind Mags.Ai"
            />
            <span className="portrait-label">Mags.Ai / Builder</span>
          </div>
          <span className="portrait-caption">Business understanding<br />meets technology</span>
        </div>

        <div className="about-content">
          <p className="section-kicker"><span /> Meet Mr. Magudeshwaran (Mags)</p>
          <h2 id="about-title">Technology is useful when it understands <em>the business.</em></h2>
          <p className="about-founder">Founder of Mags.Ai</p>
          <p className="about-positioning">
            A software engineering enthusiast solving digital business problems.
          </p>
          <p className="about-copy">
            Mags.Ai is founded and built by me. I leverage my commerce and finance background to understand business needs and combine that understanding with modern software and AI technologies to build practical digital solutions.
          </p>

          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div className="about-highlight" key={highlight.number}>
                <span className="highlight-number">{highlight.number}</span>
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}