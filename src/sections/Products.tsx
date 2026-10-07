import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="products-section"
      id="products"
      ref={sectionRef}
      aria-labelledby="products-title"
    >
      <div className="container">
        <div className="products-intro">
          <div>
            <p className="section-kicker"><span /> Products / Demos</p>
            <h2 id="products-title">Ideas made <em>visible.</em></h2>
          </div>
          <p className="products-lede">
            A growing collection of practical digital tools and concepts. Each one starts with a business problem worth solving.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}