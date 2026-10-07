export type FAQItem = {
  id: string
  question: string
  answer: string
  displayOrder: number
  isActive: boolean
}

export const faqs: FAQItem[] = [
  {
    id: 'businesses',
    question: 'What types of businesses can Mags.Ai help?',
    answer: 'Mags.Ai can help small and growing businesses, local retailers, service businesses, online sellers, family businesses, and teams looking to make their work more digital and organized.',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'solutions',
    question: 'What kind of websites or applications can you build?',
    answer: 'This can include business websites, product catalogues, landing pages, internal tools, dashboards, management systems, and custom web applications shaped around a specific need.',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'custom-solutions',
    question: 'Can you build a solution specifically for my business process?',
    answer: 'Yes. The process starts by understanding how the work is done today, what is difficult about it, and what the business actually needs before defining the right solution.',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'automation',
    question: 'Can you automate repetitive business tasks?',
    answer: 'Yes. Suitable tasks may include follow-ups, notifications, reporting, data processing, and other repeatable workflow steps. The automation should fit the process rather than add unnecessary complexity.',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'ai-workflows',
    question: 'Can AI be integrated into an existing business workflow?',
    answer: 'Yes, when there is a practical use case. AI can be considered for assistants, workflow support, integrations, or business-specific tools after the existing process and requirements are understood.',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'getting-started',
    question: 'What do I need to provide to get started?',
    answer: 'Start with a description of the business, the current process, the problem you want to solve, and what a better outcome would look like. Existing notes, examples, or materials can help but are not required to begin the conversation.',
    displayOrder: 6,
    isActive: true,
  },
  {
    id: 'project-beginning',
    question: 'How does a project usually begin?',
    answer: 'It begins with a conversation about the business problem. From there, the workflow, requirements, constraints, and possible solution are explored before deciding what to build.',
    displayOrder: 7,
    isActive: true,
  },
  {
    id: 'project-cost',
    question: 'How much does a project cost?',
    answer: 'Cost depends on the type of solution, its scope, and the complexity of the business process. A clearer estimate can be discussed after understanding what needs to be built.',
    displayOrder: 8,
    isActive: true,
  },
  {
    id: 'existing-system',
    question: 'Can you improve or build on an existing website or system?',
    answer: 'Possibly. The existing website or system can be reviewed first to understand what is working, what needs improvement, and whether extending or rebuilding it is the more practical path.',
    displayOrder: 9,
    isActive: true,
  },
  {
    id: 'support',
    question: 'Do you provide support after launch?',
    answer: 'Further improvements and support can be discussed based on the solution and what is needed after launch. The scope and arrangement should be clear for each project.',
    displayOrder: 10,
    isActive: true,
  },
]