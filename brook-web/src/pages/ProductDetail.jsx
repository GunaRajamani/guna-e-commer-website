import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    // Fetch main product
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))

    // Fetch all products for related items
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((mainProduct) => {
            const related = data.filter(
              (p) => p.category === mainProduct.category && p.id !== mainProduct.id
            )
            setRelatedProducts(related.slice(0, 4))
          })
      })
  }, [id])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    alert(`Added ${quantity} item(s) to cart!`)
    setQuantity(1)
  }

  if (!product) {
    return <div className="text-center mt-5"><p>Loading...</p></div>
  }

  return (
    <>
      <style>{`
        .pd-container { max-width: 1280px; margin: 0 auto; padding: 40px 5%; }
        .pd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 60px; }
        .pd-image { width: 100%; max-width: 400px; height: 400px; object-fit: contain; border-radius: 12px; }
        .pd-info h1 { font-size: 32px; font-weight: 800; color: #1f2937; margin-bottom: 12px; }
        .pd-category { display: inline-block; padding: 6px 14px; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
        .pd-price { font-size: 28px; font-weight: 800; color: #3b82f6; margin: 20px 0; }
        .pd-rating { font-size: 14px; color: #f59e0b; margin-bottom: 20px; }
        .pd-desc { color: rgba(0,0,0,0.6); line-height: 1.8; margin-bottom: 28px; }
        .pd-quantity { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .pd-qty-btn { width: 36px; height: 36px; border: 1px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer; font-weight: 600; }
        .pd-qty-input { width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 8px; padding: 8px; }
        .pd-btn { padding: 14px 32px; border-radius: 12px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: #fff; border: none; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
        .pd-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.3); }
        .pd-related h2 { font-size: 24px; font-weight: 800; color: #1f2937; margin-bottom: 24px; }
        .pd-grid-related { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr; gap: 30px; }
          .pd-info h1 { font-size: 24px; }
        }
      `}</style>

      <div className="pd-container">
        {/* Product Detail */}
        <div className="pd-grid">
          <div>
            <img src={product.image} alt={product.title} className="pd-image" />
          </div>

          <div className="pd-info">
            <span className="pd-category">{product.category}</span>
            <h1>{product.title}</h1>
            <div className="pd-rating">⭐ {product.rating?.rate || 4.5} ({product.rating?.count || 100} reviews)</div>
            <p className="pd-price">${product.price}</p>
            <p className="pd-desc">{product.description}</p>

            <div className="pd-quantity">
              <button className="pd-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <input type="number" className="pd-qty-input" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              <button className="pd-qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className="pd-btn" onClick={handleAddToCart}>
              Add {quantity} to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pd-related">
            <h2>More from {product.category}</h2>
            <div className="pd-grid-related">
              {relatedProducts.map((p) => (
                <div key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductDetail