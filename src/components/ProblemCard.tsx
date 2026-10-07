type ProblemCardProps = {
  index: number
  title: string
  description: string
  image: string
  imageAlt: string
  isVisible: boolean
}

export function ProblemCard({ index, title, description, image, imageAlt, isVisible }: ProblemCardProps) {
  return (
    <article className={`problem-card${isVisible ? ' is-visible' : ''}`}>
      <div className="problem-card-topline">
        <span className="problem-number">0{index + 1}</span>
        <span className="problem-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="problem-card-image-wrap">
        <img className="problem-card-image" src={image} alt={imageAlt} loading="lazy" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="problem-card-prompt">There is a better way</span>
    </article>
  )
}