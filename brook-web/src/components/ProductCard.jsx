import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top object-fit-cover"
        style={{ height: "200px" }}
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <span className="badge bg-secondary mb-2 align-self-start">
          {product.category}
        </span>
        <h5 className="card-title">{product.name}</h5>
        <p className="text-success fw-bold">${product.price}</p>
        <button
          className="btn btn-dark w-100 mt-auto"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard