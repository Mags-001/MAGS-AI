import type { Product } from '../data/products'
import { ProductPreview } from './ProductPreview'
import { ProductStatus } from './ProductStatus'

type ProductCardProps = {
  product: Product
  index: number
  isVisible: boolean
}

export function ProductCard({ product, index, isVisible }: ProductCardProps) {
  return (
    <article className={`product-card${isVisible ? ' is-visible' : ''}`}>
      <ProductPreview product={product} index={index} />
      <div className="product-card-content">
        <div className="product-card-heading">
          <div>
            <p className="product-type">Product / Demo 0{index + 1}</p>
            <h3>{product.name}</h3>
          </div>
          <ProductStatus status={product.status} />
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-detail">
          <p><strong>Problem</strong>{product.problem}</p>
          <p><strong>Solution</strong>{product.solution}</p>
        </div>
        <ul className="product-features" aria-label={`${product.name} key features`}>
          {product.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <a className="product-cta" href="#contact">
          {product.ctaLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}