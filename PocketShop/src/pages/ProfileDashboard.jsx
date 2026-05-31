import { useState } from 'react'


function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState('profile')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  // User State
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    avatar: '👤',
    joinDate: 'January 2024',
  })

  const [editMode, setEditMode] = useState(false)
  const [editUser, setEditUser] = useState(user)

  // Addresses State
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Home',
      name: 'John Doe',
      phone: '+91 9876543210',
      address: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Office',
      name: 'John Doe',
      phone: '+91 9876543210',
      address: '456 Business Avenue',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400002',
      country: 'India',
      isDefault: false,
    },
  ])

  const [showAddAddress, setShowAddAddress] = useState(false)
  const [newAddress, setNewAddress] = useState({
    label: 'Home',
    name: user.name,
    phone: user.phone,
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    isDefault: false,
  })

  // Orders State
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2024-01-15',
      product: 'Premium Wireless Headphones',
      image: '🎧',
      price: 4999,
      quantity: 1,
      status: 'Delivered',
      deliveryDate: '2024-01-18',
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      product: 'Smart Watch',
      image: '⌚',
      price: 12999,
      quantity: 1,
      status: 'Processing',
      deliveryDate: 'Expected 2024-01-25',
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      product: 'Phone Case Bundle',
      image: '📱',
      price: 1299,
      quantity: 3,
      status: 'Delivered',
      deliveryDate: '2024-01-07',
    },
    {
      id: 'ORD-004',
      date: '2023-12-28',
      product: 'USB-C Cable',
      image: '🔌',
      price: 299,
      quantity: 2,
      status: 'Cancelled',
      deliveryDate: 'N/A',
    },
  ])

  // Settings State
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    promotions: false,
  })

  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  })

  // Handle Functions
  const handleSaveProfile = () => {
    setUser(editUser)
    setEditMode(false)
  }

  const handleAddAddress = () => {
    setAddresses([...addresses, { ...newAddress, id: Date.now() }])
    setShowAddAddress(false)
    setNewAddress({
      label: 'Home',
      name: user.name,
      phone: user.phone,
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India',
      isDefault: false,
    })
  }

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id))
  }

  const handleLogout = () => {
    alert('Logging out...')
  }

  const handleDeleteAccount = () => {
    alert('Account deleted permanently')
    setShowDeleteConfirm(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#10b981'
      case 'Processing':
        return '#f59e0b'
      case 'Cancelled':
        return '#ef4444'
      default:
        return '#6b7280'
    }
  }

  const getStatusBg = (status) => {
    switch (status) {
      case 'Delivered':
        return 'rgba(16,185,129,0.1)'
      case 'Processing':
        return 'rgba(245,158,11,0.1)'
      case 'Cancelled':
        return 'rgba(239,68,68,0.1)'
      default:
        return 'rgba(107,114,128,0.1)'
    }
  }

  return (
    <>
      <style>{`
        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 5%;
          background: #ffffff;
          color: #1f2937;
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 2px solid rgba(59,130,246,0.1);
        }

        .profile-avatar-large {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          box-shadow: 0 8px 24px rgba(59,130,246,0.2);
          flex-shrink: 0;
        }

        .header-info h1 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 8px;
        }

        .header-info p {
          margin: 4px 0;
          color: rgba(0,0,0,0.6);
          font-size: 14px;
        }

        .dashboard-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          border-bottom: 2px solid rgba(59,130,246,0.1);
          overflow-x: auto;
          padding-bottom: 0;
        }

        .dashboard-tab {
          padding: 14px 24px;
          background: transparent;
          border: none;
          color: rgba(0,0,0,0.6);
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          transition: all 0.3s;
        }

        .dashboard-tab:hover {
          color: #3b82f6;
        }

        .dashboard-tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }

        .tab-content {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .profile-card {
          background: #f8fafc;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 8px;
          background: #ffffff;
          color: #1f2937;
          font-size: 14px;
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .btn-primary {
          padding: 12px 28px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59,130,246,0.3);
        }

        .btn-secondary {
          padding: 12px 28px;
          background: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .btn-secondary:hover {
          background: rgba(59,130,246,0.1);
        }

        .btn-danger {
          padding: 12px 28px;
          background: transparent;
          color: #ef4444;
          border: 2px solid #ef4444;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .btn-danger:hover {
          background: rgba(239,68,68,0.1);
        }

        .btn-group {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .address-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }

        .address-card {
          background: #f8fafc;
          border: 2px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s;
          position: relative;
        }

        .address-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 8px 16px rgba(59,130,246,0.1);
        }

        .address-label {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(59,130,246,0.1);
          color: #3b82f6;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .address-default-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #10b981;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .address-info {
          margin-bottom: 12px;
        }

        .address-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        .address-text {
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 1.6;
        }

        .address-actions {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .address-actions button {
          flex: 1;
          padding: 8px 12px;
          font-size: 12px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-edit {
          background: rgba(59,130,246,0.1);
          color: #3b82f6;
        }

        .btn-edit:hover {
          background: rgba(59,130,246,0.2);
        }

        .btn-delete {
          background: rgba(239,68,68,0.1);
          color: #ef4444;
        }

        .btn-delete:hover {
          background: rgba(239,68,68,0.2);
        }

        .add-address-btn {
          padding: 20px;
          border: 2px dashed #3b82f6;
          border-radius: 12px;
          background: rgba(59,130,246,0.05);
          color: #3b82f6;
          cursor: pointer;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s;
        }

        .add-address-btn:hover {
          background: rgba(59,130,246,0.1);
        }

        .orders-container {
          display: grid;
          gap: 20px;
        }

        .order-card {
          background: #f8fafc;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 20px;
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 20px;
          align-items: center;
          transition: all 0.3s;
        }

        .order-card:hover {
          box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }

        .order-image {
          font-size: 40px;
          text-align: center;
        }

        .order-details h4 {
          margin: 0 0 4px;
          font-size: 16px;
        }

        .order-details p {
          margin: 4px 0;
          font-size: 13px;
          color: rgba(0,0,0,0.6);
        }

        .order-status {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          white-space: nowrap;
        }

        .settings-section {
          background: #f8fafc;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .settings-section h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px;
        }

        .settings-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid rgba(59,130,246,0.1);
        }

        .settings-item:last-child {
          border-bottom: none;
        }

        .toggle-switch {
          position: relative;
          width: 50px;
          height: 28px;
          background: rgba(59,130,246,0.1);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .toggle-switch.active {
          background: #10b981;
        }

        .toggle-knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .toggle-switch.active .toggle-knob {
          transform: translateX(22px);
        }

        .delete-confirmation {
          background: rgba(239,68,68,0.1);
          border: 2px solid #ef4444;
          border-radius: 12px;
          padding: 24px;
          margin-top: 20px;
          text-align: center;
        }

        .delete-confirmation h4 {
          color: #ef4444;
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            text-align: center;
          }

          .header-info h1 {
            font-size: 24px;
          }

          .address-grid {
            grid-template-columns: 1fr;
          }

          .order-card {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .btn-group {
            flex-direction: column;
          }

          .btn-group button {
            width: 100%;
          }
        }
      `}</style>

      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="profile-avatar-large">{user.avatar}</div>
          <div className="header-info">
            <h1>Welcome, {user.name}! 👋</h1>
            <p>Email: {user.email}</p>
            <p>Member since {user.joinDate}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="dashboard-tabs">
          {['profile', 'addresses', 'orders', 'settings'].map((tab) => (
            <button
              key={tab}
              className={`dashboard-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'profile' && '👤 '}
              {tab === 'addresses' && '📍 '}
              {tab === 'orders' && '📦 '}
              {tab === 'settings' && '⚙️ '}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="tab-content">
            <div className="profile-card">
              <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '700' }}>
                Personal Information
              </h3>

              {editMode ? (
                <>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={editUser.email}
                      onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={editUser.phone}
                      onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })}
                    />
                  </div>

                  <div className="btn-group">
                    <button className="btn-primary" onClick={handleSaveProfile}>
                      Save Changes
                    </button>
                    <button className="btn-secondary" onClick={() => setEditMode(false)}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'grid', gap: '20px', marginBottom: '24px' }}>
                    <div>
                      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)', marginBottom: '4px' }}>
                        Full Name
                      </p>
                      <p style={{ fontSize: '16px', fontWeight: '600' }}>{user.name}</p>
                    </div>

                    <div>
                      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)', marginBottom: '4px' }}>
                        Email Address
                      </p>
                      <p style={{ fontSize: '16px', fontWeight: '600' }}>{user.email}</p>
                    </div>

                    <div>
                      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)', marginBottom: '4px' }}>
                        Phone Number
                      </p>
                      <p style={{ fontSize: '16px', fontWeight: '600' }}>{user.phone}</p>
                    </div>
                  </div>

                  <button className="btn-primary" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* ADDRESSES TAB */}
        {activeTab === 'addresses' && (
          <div className="tab-content">
            {addresses.length > 0 ? (
              <div className="address-grid">
                {addresses.map((addr) => (
                  <div key={addr.id} className="address-card">
                    {addr.isDefault && <div className="address-default-badge">Default</div>}
                    <div className="address-label">{addr.label}</div>
                    <div className="address-info">
                      <div className="address-name">{addr.name}</div>
                      <div className="address-text">
                        {addr.address}
                        <br />
                        {addr.city}, {addr.state} {addr.pincode}
                        <br />
                        {addr.country}
                        <br />
                        {addr.phone}
                      </div>
                    </div>
                    <div className="address-actions">
                      <button className="btn-edit">Edit</button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteAddress(addr.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(0,0,0,0.6)' }}>
                <p style={{ fontSize: '16px', marginBottom: '12px' }}>
                  📍 No addresses saved yet
                </p>
                <p style={{ fontSize: '14px' }}>Add your first address to get started</p>
              </div>
            )}

            {showAddAddress && (
              <div className="profile-card" style={{ marginTop: '24px' }}>
                <h3 style={{ marginBottom: '20px' }}>Add New Address</h3>
                <div className="form-group">
                  <label>Address Type</label>
                  <select
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid rgba(59,130,246,0.1)',
                      borderRadius: '8px',
                      background: '#ffffff',
                      color: '#1f2937',
                    }}
                    value={newAddress.label}
                    onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                  >
                    <option>Home</option>
                    <option>Office</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Full Address</label>
                  <input
                    type="text"
                    placeholder="Street address"
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    value={newAddress.pincode}
                    onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                  />
                </div>

                <div className="btn-group">
                  <button className="btn-primary" onClick={handleAddAddress}>
                    Save Address
                  </button>
                  <button className="btn-secondary" onClick={() => setShowAddAddress(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {!showAddAddress && (
              <div
                className="add-address-btn"
                onClick={() => setShowAddAddress(true)}
                style={{ marginTop: '24px' }}
              >
                + Add New Address
              </div>
            )}
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="tab-content">
            {orders.length > 0 ? (
              <div className="orders-container">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-image">{order.image}</div>
                    <div className="order-details">
                      <h4>{order.product}</h4>
                      <p>Order ID: {order.id}</p>
                      <p>Order Date: {order.date}</p>
                      <p>Price: ₹{order.price.toLocaleString()}</p>
                      <p>Quantity: {order.quantity}</p>
                      <p style={{ marginTop: '8px' }}>
                        {order.status === 'Delivered' ? '✓ Delivered on' : 'Expected Delivery:'}{' '}
                        {order.deliveryDate}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div
                        className="order-status"
                        style={{
                          background: getStatusBg(order.status),
                          color: getStatusColor(order.status),
                        }}
                      >
                        {order.status}
                      </div>
                      <button className="btn-secondary" style={{ fontSize: '12px', padding: '8px 12px' }}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(0,0,0,0.6)' }}>
                <p style={{ fontSize: '16px', marginBottom: '12px' }}>📦 No orders yet</p>
                <p style={{ fontSize: '14px' }}>Start shopping to place your first order</p>
              </div>
            )}
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="tab-content">
            <div className="settings-section">
              <h3>Notification Preferences</h3>

              <div className="settings-item">
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: '600' }}>Order Updates</p>
                  <p style={{ margin: '0', fontSize: '13px', color: 'rgba(0,0,0,0.6)' }}>
                    Get notified about your order status
                  </p>
                </div>
                <div
                  className={`toggle-switch ${settings.orderUpdates ? 'active' : ''}`}
                  onClick={() =>
                    setSettings({ ...settings, orderUpdates: !settings.orderUpdates })
                  }
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>

              <div className="settings-item">
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: '600' }}>Email Notifications</p>
                  <p style={{ margin: '0', fontSize: '13px', color: 'rgba(0,0,0,0.6)' }}>
                    Receive email updates and offers
                  </p>
                </div>
                <div
                  className={`toggle-switch ${settings.emailNotifications ? 'active' : ''}`}
                  onClick={() =>
                    setSettings({ ...settings, emailNotifications: !settings.emailNotifications })
                  }
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>

              <div className="settings-item">
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: '600' }}>SMS Notifications</p>
                  <p style={{ margin: '0', fontSize: '13px', color: 'rgba(0,0,0,0.6)' }}>
                    Get SMS alerts for important updates
                  </p>
                </div>
                <div
                  className={`toggle-switch ${settings.smsNotifications ? 'active' : ''}`}
                  onClick={() =>
                    setSettings({ ...settings, smsNotifications: !settings.smsNotifications })
                  }
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>

              <div className="settings-item">
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: '600' }}>Promotional Offers</p>
                  <p style={{ margin: '0', fontSize: '13px', color: 'rgba(0,0,0,0.6)' }}>
                    Receive special deals and discounts
                  </p>
                </div>
                <div
                  className={`toggle-switch ${settings.promotions ? 'active' : ''}`}
                  onClick={() => setSettings({ ...settings, promotions: !settings.promotions })}
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>Security Settings</h3>

              {showPasswordForm ? (
                <>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      value={passwords.current}
                      onChange={(e) =>
                        setPasswords({ ...passwords, current: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={passwords.new}
                      onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      value={passwords.confirm}
                      onChange={(e) =>
                        setPasswords({ ...passwords, confirm: e.target.value })
                      }
                    />
                  </div>

                  <div className="btn-group">
                    <button className="btn-primary" onClick={() => setShowPasswordForm(false)}>
                      Update Password
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => {
                        setShowPasswordForm(false)
                        setPasswords({ current: '', new: '', confirm: '' })
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <button className="btn-secondary" onClick={() => setShowPasswordForm(true)}>
                  Change Password
                </button>
              )}
            </div>

            <div className="settings-section">
              <h3>Account Actions</h3>

              <button className="btn-primary" onClick={handleLogout} style={{ width: '100%' }}>
                🚪 Logout
              </button>

              {!showDeleteConfirm ? (
                <button
                  className="btn-danger"
                  onClick={() => setShowDeleteConfirm(true)}
                  style={{ width: '100%', marginTop: '12px' }}
                >
                  🗑️ Delete Account
                </button>
              ) : (
                <div className="delete-confirmation">
                  <h4>⚠️ Delete Account Permanently?</h4>
                  <p style={{ marginBottom: '16px', fontSize: '13px' }}>
                    This action cannot be undone. All your data will be deleted.
                  </p>
                  <div className="btn-group">
                    <button
                      className="btn-danger"
                      onClick={handleDeleteAccount}
                      style={{ flex: 1 }}
                    >
                      Yes, Delete
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => setShowDeleteConfirm(false)}
                      style={{ flex: 1 }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProfileDashboard
