import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Profile() {
  const { isDark, colors } = useTheme()
  const [activeTab, setActiveTab] = useState('profile')
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    avatar: '👤',
  })

  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: '123 Main St, Mumbai, 400001', default: true },
    { id: 2, type: 'Office', address: '456 Business Ave, Mumbai, 400002', default: false },
  ])

  const [orders] = useState([
    { id: 1, date: '2024-01-15', total: 2500, status: 'Delivered', items: 3 },
    { id: 2, date: '2024-01-10', total: 5000, status: 'Processing', items: 5 },
    { id: 3, date: '2024-01-05', total: 1800, status: 'Delivered', items: 2 },
  ])

  return (
    <>
      <style>{`
        .profile-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 5%;
          background: ${colors.bg};
          color: ${colors.text};
          min-height: 100vh;
          transition: all 0.3s ease;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid ${colors.border};
        }

        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: ${colors.primary};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
        }

        .profile-info h1 {
          margin: 0 0 8px;
          font-size: 28px;
        }

        .profile-info p {
          margin: 4px 0;
          color: ${colors.textSecondary};
        }

        .profile-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          border-bottom: 1px solid ${colors.border};
        }

        .profile-tab {
          padding: 12px 24px;
          background: transparent;
          border: none;
          color: ${colors.textSecondary};
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 3px solid transparent;
        }

        .profile-tab.active {
          color: ${colors.primary};
          border-bottom-color: ${colors.primary};
        }

        .profile-content {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .profile-form {
          max-width: 500px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
          color: ${colors.text};
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid ${colors.border};
          background: ${colors.bgSecondary};
          color: ${colors.text};
          font-size: 14px;
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: ${colors.primary};
          box-shadow: 0 0 0 3px ${isDark ? 'rgba(0,220,255,0.1)' : 'rgba(59,130,246,0.1)'};
        }

        .btn-save {
          padding: 12px 28px;
          background: linear-gradient(135deg, ${colors.primary}, #2563eb);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px ${isDark ? 'rgba(0,220,255,0.2)' : 'rgba(59,130,246,0.2)'};
        }

        .address-card {
          background: ${colors.card};
          border: 1px solid ${colors.border};
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          transition: all 0.3s;
        }

        .address-card:hover {
          background: ${colors.hover};
        }

        .address-type {
          font-weight: 600;
          margin-bottom: 8px;
          color: ${colors.primary};
        }

        .address-text {
          font-size: 14px;
          color: ${colors.textSecondary};
          margin-bottom: 8px;
        }

        .address-badge {
          display: inline-block;
          padding: 4px 10px;
          background: ${colors.primary};
          color: ${isDark ? '#04060f' : '#fff'};
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .order-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 12px;
          padding: 16px;
          background: ${colors.card};
          border: 1px solid ${colors.border};
          border-radius: 8px;
          margin-bottom: 8px;
          align-items: center;
        }

        .order-status {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .order-status.delivered {
          background: rgba(16,185,129,0.2);
          color: #10b981;
        }

        .order-status.processing {
          background: rgba(245,158,11,0.2);
          color: #f59e0b;
        }

        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }

          .profile-tabs {
            flex-wrap: wrap;
          }

          .order-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">{user.avatar}</div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          {['profile', 'addresses', 'orders', 'settings'].map((tab) => (
            <button
              key={tab}
              className={`profile-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="profile-content">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} />
              </div>
              <button className="btn-save">Save Changes</button>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div>
              {addresses.map((addr) => (
                <div key={addr.id} className="address-card">
                  <div className="address-type">{addr.type}</div>
                  <div className="address-text">{addr.address}</div>
                  {addr.default && <span className="address-badge">Default Address</span>}
                </div>
              ))}
              <button className="btn-save" style={{ marginTop: '12px' }}>+ Add New Address</button>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <div style={{ marginBottom: '16px', fontSize: '14px', color: colors.textSecondary }}>
                You have {orders.length} orders
              </div>
              {orders.map((order) => (
                <div key={order.id} className="order-row">
                  <div>
                    <div style={{ fontWeight: 600 }}>Order #{order.id}</div>
                    <div style={{ fontSize: '12px', color: colors.textSecondary }}>{order.date}</div>
                  </div>
                  <div>₹{order.total}</div>
                  <div>{order.items} items</div>
                  <span className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div style={{ maxWidth: '500px' }}>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '16px', height: '16px' }} />
                  <span>Email notifications</span>
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ width: '16px', height: '16px' }} />
                  <span>SMS notifications</span>
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                  <span>Marketing emails</span>
                </label>
              </div>
              <button className="btn-save">Save Settings</button>
              <button style={{ marginTop: '12px', padding: '12px 28px', background: 'transparent', border: `2px solid #ef4444`, color: '#ef4444', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
