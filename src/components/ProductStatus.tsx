import type { ProductStatus as ProductStatusValue } from '../data/products'

type ProductStatusProps = {
  status: ProductStatusValue
}

export function ProductStatus({ status }: ProductStatusProps) {
  return <span className={`product-status status-${status.toLowerCase().replaceAll(' ', '-')}`}>{status}</span>
}