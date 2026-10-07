import type { ProcessStep as ProcessStepData } from '../data/process'

type ProcessTimelineProps = {
  steps: ProcessStepData[]
  isVisible: boolean
}

export function ProcessTimeline({ steps, isVisible }: ProcessTimelineProps) {
  return (
    <ol className={`process-timeline${isVisible ? ' is-visible' : ''}`}>
      {steps.map((step, index) => (
        <li className="process-step" key={step.title}>
          <div className="process-step-marker" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="process-step-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}