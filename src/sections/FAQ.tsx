import { useState } from 'react'
import { faqs } from '../data/faqs'
import { FAQItem } from '../components/FAQItem'

export function FAQ() {
  const activeFAQs = faqs
    .filter((item) => item.isActive)
    .sort((first, second) => first.displayOrder - second.displayOrder)
  const [openId, setOpenId] = useState<string | null>(activeFAQs[0]?.id ?? null)

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="section-kicker"><span /> Frequently asked</p>
          <h2 id="faq-title">Clear answers for <em>the next step.</em></h2>
          <p>
            A few practical answers about the work, the process, and what it takes to turn a business problem into a digital solution.
          </p>
        </div>

        <div className="faq-list">
          {activeFAQs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((currentId) => currentId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}