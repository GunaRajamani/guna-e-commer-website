import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div className="card h-100 shadow-sm" style={{ transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}>
       <img
          src={product.image}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain", width: "100%" }}
          alt={product.title}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary mb-2 align-self-start">
            {product.category}
          </span>
          <h5 className="card-title" style={{ fontSize: '14px', minHeight: '40px' }}>
            {product.title.substring(0, 50)}...
          </h5>
          <p className="text-primary fw-bold">${product.price}</p>
          <button
            className="btn btn-primary w-100 mt-auto"
            onClick={(e) => {
              e.preventDefault()
              addToCart(product)
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard