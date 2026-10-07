import type { Product } from '../data/products'

type ProductPreviewProps = {
  product: Product
  index: number
}

export function ProductPreview({ product, index }: ProductPreviewProps) {
  return (
    <div className={`product-preview preview-${index + 1}`} aria-label={`${product.name} preview placeholder`}>
      <div className="preview-window-bar">
        <span /><span /><span />
        <small>mags.ai / {product.id}</small>
      </div>
      <div className="preview-interface">
        <div className="preview-sidebar">
          <i /><i /><i /><i />
        </div>
        <div className="preview-main">
          <div className="preview-heading"><span /><b /><b /></div>
          <div className="preview-metrics"><i /><i /><i /></div>
          <div className="preview-table"><i /><i /><i /><i /></div>
        </div>
      </div>
      <span className="preview-note">Preview placeholder</span>
    </div>
  )
}