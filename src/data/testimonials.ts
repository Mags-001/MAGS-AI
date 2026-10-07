export type Testimonial = {
  id: string
  clientName: string
  businessName: string
  testimonial: string
  photo?: string
  logo?: string
  relatedProject?: string
}

export type Client = {
  id: string
  name: string
  businessName: string
  logo?: string
  relatedProject?: string
}

export const testimonials: Testimonial[] = []
export const clients: Client[] = []