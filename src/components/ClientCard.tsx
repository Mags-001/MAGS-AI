import type { Client } from '../data/testimonials'

type ClientCardProps = {
  client: Client
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className="client-card">
      <div className="client-card-mark" aria-hidden="true">{client.businessName.slice(0, 1)}</div>
      <div>
        <h3>{client.businessName}</h3>
        <p>{client.name}</p>
      </div>
    </article>
  )
}