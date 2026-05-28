import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h4>Your cart is empty</h4>
        <p className="text-muted">Go add some products!</p>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Cart</h3>

      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong>
              <span className="text-muted ms-2">x{item.quantity}</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="text-success fw-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h5 className="text-end">Total: <span className="text-success">${total.toFixed(2)}</span></h5>
      <div className="text-end">
        <button className="btn btn-dark mt-2">Checkout</button>
      </div>
    </div>
  )
}

export default Cart