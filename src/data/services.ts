export type Service = {
  title: string
  image: string
  imageAlt: string
  problem: string
  builds: string
  benefit: string
  examples: string[]
}

export const services: Service[] = [
  {
    title: 'Business Websites',
    image: '/images/solutions/7%20%E2%80%94%20Business%20Websites.png',
    imageAlt: 'A collection of digital website interfaces for a business',
    problem: 'Customers need a clear, professional way to discover and understand what the business offers.',
    builds: 'Professional websites that give businesses a strong digital presence.',
    benefit: 'Make the business easier to find, understand, and contact.',
    examples: ['Business websites', 'Product catalogues', 'Landing pages'],
  },
  {
    title: 'Custom Web Applications',
    image: '/images/solutions/8%20%E2%80%94%20Custom%20Web%20Applications.png',
    imageAlt: 'Business documents and a digital workflow application working together',
    problem: 'Scattered or inefficient processes make everyday business work harder than it needs to be.',
    builds: 'Purpose-built web applications for specific workflows and operational needs.',
    benefit: 'Bring the right information and actions into one useful business tool.',
    examples: ['Internal tools', 'Dashboards', 'Management systems'],
  },
  {
    title: 'Business Automation',
    image: '/images/solutions/9%20%E2%80%94%20Business%20Automation.png',
    imageAlt: 'A business automation system connecting records, processes, and tools',
    problem: 'Repetitive follow-ups, reporting, and administrative tasks take time away from important work.',
    builds: 'Automations for repetitive processes, notifications, reporting, and data processing.',
    benefit: 'Reduce manual effort and create more consistent workflows.',
    examples: ['Workflow automation', 'Notifications', 'Data processing'],
  },
  {
    title: 'AI Solutions',
    image: '/images/solutions/10%20%E2%80%94%20AI%20Solutions.png',
    imageAlt: 'Digital interfaces and AI-powered tools arranged as a connected system',
    problem: 'Businesses want to use AI, but need a practical use case that fits the way they work.',
    builds: 'Practical AI integrations and tools that help businesses work smarter.',
    benefit: 'Apply AI to useful business processes without adding unnecessary complexity.',
    examples: ['AI assistants', 'AI-powered workflows', 'Business-specific tools'],
  },
]