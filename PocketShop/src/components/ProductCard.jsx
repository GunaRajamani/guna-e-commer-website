import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <>
      <style>{`
        .product-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
          border-color: #3b82f6;
        }

        .product-image-container {
          width: 100%;
          height: 200px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px;
        }

        .product-content {
          padding: 16px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px;
          line-height: 1.4;
          min-height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-description {
          font-size: 13px;
          color: rgba(0,0,0,0.6);
          margin: 0 0 12px;
          line-height: 1.4;
          min-height: 26px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-price {
          font-size: 18px;
          font-weight: 700;
          color: #3b82f6;
          margin: 12px 0;
        }

        .product-rating {
          font-size: 12px;
          color: #f59e0b;
          margin-bottom: 12px;
        }

        .product-button-group {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .btn-add-cart {
          flex: 1;
          padding: 10px 14px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .btn-add-cart:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59,130,246,0.3);
        }

        .btn-add-cart:active {
          transform: translateY(0);
        }

        .btn-view-details {
          flex: 1;
          padding: 10px 14px;
          background: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-view-details:hover {
          background: rgba(59,130,246,0.1);
        }

        .product-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #ef4444;
          color: white;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .product-image-container {
            height: 160px;
          }

          .product-content {
            padding: 12px;
          }

          .product-name {
            font-size: 14px;
            min-height: 35px;
          }
        }
      `}</style>

      <div className="product-card">
        <div className="product-image-container">
          {product.discount && (
            <div className="product-badge">{product.discount}% OFF</div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>

        <div className="product-content">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          
          {product.rating && (
            <div className="product-rating">
              {'⭐'.repeat(Math.floor(product.rating))} ({product.reviews} reviews)
            </div>
          )}

          <div className="product-price">₹{product.price}</div>

          <div className="product-button-group">
            <button 
              className="btn-add-cart"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="btn-view-details"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
