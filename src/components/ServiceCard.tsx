import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
  index: number
  isVisible: boolean
}

export function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  return (
    <article className={`service-card${isVisible ? ' is-visible' : ''}`}>
      <div className="service-card-topline">
        <span className="service-number">0{index + 1}</span>
        <span className="service-mark" aria-hidden="true">↗</span>
      </div>
      <div className="service-card-image-wrap">
        <img className="service-card-image" src={service.image} alt={service.imageAlt} loading="lazy" />
      </div>

      <h3>{service.title}</h3>
      <p className="service-problem"><strong>The problem</strong>{service.problem}</p>
      <p className="service-build"><strong>What I build</strong>{service.builds}</p>

      <ul className="service-examples" aria-label={`${service.title} examples`}>
        {service.examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>

      <div className="service-card-footer">
        <p><strong>Business benefit</strong>{service.benefit}</p>
        <a href="#contact" aria-label={`Discuss ${service.title}`}>
          Discuss This Service <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}