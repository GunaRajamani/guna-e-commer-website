import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

function Navbar_Light() {
  const { totalItems } = useCart()
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav style={{
      background: '#ffffff',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        Pocket<span style={{ color: '#3b82f6' }}>Shop</span>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#666' }}>About</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</Link>
      </div>

      {/* Right Side Buttons */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        
        {/* Login/Logout Section */}
        {isAuthenticated ? (
          <>
            <span style={{ color: '#666', fontSize: '14px' }}>
              👤 {user?.name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                padding: '8px 16px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{
            padding: '8px 16px',
            background: '#3b82f6',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}>
            Login
          </Link>
        )}

        {/* Cart Button */}
        <Link to="/cart" style={{
          padding: '8px 16px',
          background: '#3b82f6',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          position: 'relative',
        }}>
          🛒 Cart
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#ef4444',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar_Light