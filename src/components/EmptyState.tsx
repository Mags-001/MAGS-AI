type EmptyStateProps = {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="empty-state-label">Authenticity matters</p>
      <h3>{title}</h3>
      <p className="empty-state-description">{description}</p>
    </div>
  )
}