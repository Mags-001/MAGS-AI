import type { FAQItem as FAQItemData } from '../data/faqs'

type FAQItemProps = {
  item: FAQItemData
  isOpen: boolean
  onToggle: () => void
}

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3>
        <button
          className="faq-question"
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className="faq-icon" aria-hidden="true">+</span>
        </button>
      </h3>
      <div
        className="faq-answer"
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
      >
        <div className="faq-answer-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}