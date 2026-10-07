export type ProcessStep = {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Understand',
    description: 'Understand the business, current process, and actual problem.',
  },
  {
    title: 'Analyse',
    description: 'Break down the workflow, requirements, constraints, and opportunities.',
  },
  {
    title: 'Design',
    description: 'Define the right digital solution before building it.',
  },
  {
    title: 'Build',
    description: 'Develop the website, application, automation, or AI solution.',
  },
  {
    title: 'Test',
    description: 'Test functionality, usability, responsiveness, and edge cases.',
  },
  {
    title: 'Improve',
    description: 'Refine the solution based on testing and feedback.',
  },
  {
    title: 'Launch & Support',
    description: 'Deploy the solution and continue improving it when needed.',
  },
]