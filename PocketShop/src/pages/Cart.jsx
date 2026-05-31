import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, removeFromCart } = useCart()

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.18
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + tax + shipping

  return (
    <>
      <style>{`
        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 5%;
          background: #ffffff;
          color: #1f2937;
          min-height: 100vh;
        }

        .cart-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 2px solid rgba(59,130,246,0.1);
        }

        .cart-header h1 {
          font-size: 32px;
          font-weight: 800;
          margin: 0;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 32px;
        }

        .cart-items {
          background: #f8fafc;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 24px;
        }

        .cart-empty {
          text-align: center;
          padding: 60px 20px;
          color: rgba(0,0,0,0.6);
        }

        .cart-empty h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .btn-continue-shopping {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-continue-shopping:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59,130,246,0.3);
        }

        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 16px;
          padding: 16px;
          border-bottom: 1px solid rgba(59,130,246,0.1);
          align-items: center;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .cart-item-image {
          width: 80px;
          height: 80px;
          background: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          overflow: hidden;
        }

        .cart-item-details h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .cart-item-details p {
          margin: 0;
          color: rgba(0,0,0,0.6);
          font-size: 13px;
        }

        .cart-item-price {
          font-size: 16px;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 8px;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border-radius: 6px;
          padding: 4px 8px;
          width: fit-content;
          margin-bottom: 8px;
        }

        .quantity-btn {
          background: transparent;
          border: none;
          color: #3b82f6;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          padding: 4px 8px;
        }

        .quantity-display {
          min-width: 30px;
          text-align: center;
          font-weight: 600;
        }

        .cart-item-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .cart-item-subtotal {
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          margin-bottom: 8px;
        }

        .btn-remove {
          padding: 6px 12px;
          background: rgba(239,68,68,0.1);
          color: #ef4444;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-remove:hover {
          background: rgba(239,68,68,0.2);
        }

        .cart-summary {
          background: #f8fafc;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 24px;
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .cart-summary h2 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(59,130,246,0.1);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 12px;
          color: rgba(0,0,0,0.6);
        }

        .summary-row.total {
          font-size: 18px;
          font-weight: 800;
          color: #3b82f6;
          margin-top: 16px;
        }

        .btn-checkout {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s;
        }

        .btn-checkout:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59,130,246,0.3);
        }

        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
          }

          .cart-summary {
            position: static;
          }

          .cart-item {
            grid-template-columns: 70px 1fr;
            gap: 12px;
          }

          .cart-item-actions {
            grid-column: 1 / -1;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(59,130,246,0.1);
          }
        }
      `}</style>

      <div className="cart-container">
        <div className="cart-header">
          <h1>🛒 Your Cart</h1>
          <p style={{ margin: '8px 0 0', color: 'rgba(0,0,0,0.6)' }}>
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Add some products to get started!</p>
                <Link to="/" className="btn-continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                    ) : (
                      '📦'
                    )}
                  </div>

                  <div className="cart-item-details">
                    <h3>{item.title || item.name}</h3>
                    <p>{item.description}</p>
                    <div className="cart-item-price">₹{item.price}</div>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-item-subtotal">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>

                    <div className="quantity-control">
                      <button className="quantity-btn">−</button>
                      <div className="quantity-display">{item.quantity}</div>
                      <button className="quantity-btn">+</button>
                    </div>

                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <button className="btn-checkout">
                Proceed to Checkout
              </button>

              <Link to="/">
                <button
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '8px',
                    background: 'transparent',
                    color: '#3b82f6',
                    border: '2px solid rgba(59,130,246,0.1)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart