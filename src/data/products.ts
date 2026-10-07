export type ProductStatus = 'Demo' | 'Concept' | 'In Development' | 'Live'

export type Product = {
  id: string
  name: string
  description: string
  problem: string
  solution: string
  features: string[]
  status: ProductStatus
  ctaLabel: string
}

export const products: Product[] = [
  {
    id: 'customer-follow-up-system',
    name: 'Customer Follow-Up System',
    description: 'A focused workspace for keeping customer conversations and next steps in view.',
    problem: 'Customer details and follow-ups can become scattered across WhatsApp, notebooks, or spreadsheets.',
    solution: 'A simple digital system to organize customers and follow-up activities.',
    features: ['Customer overview', 'Follow-up tracking', 'Activity notes'],
    status: 'Demo',
    ctaLabel: 'Request a Demo',
  },
  {
    id: 'inventory-tracker',
    name: 'Inventory Tracker',
    description: 'A practical concept for making product and inventory information easier to maintain.',
    problem: 'Manual inventory tracking can become difficult to maintain.',
    solution: 'A practical digital tool for tracking products and inventory information.',
    features: ['Product records', 'Stock overview', 'Information search'],
    status: 'Concept',
    ctaLabel: 'Discuss This Concept',
  },
  {
    id: 'business-product-catalogue',
    name: 'Business Product Catalogue',
    description: 'A shareable catalogue concept for businesses that sell through social and messaging channels.',
    problem: 'Businesses selling through Instagram or messaging platforms may not have an organized digital catalogue.',
    solution: 'An interactive product catalogue that makes products easier to browse and share.',
    features: ['Product browsing', 'Shareable catalogue', 'Clear product details'],
    status: 'Concept',
    ctaLabel: 'Discuss This Concept',
  },
]