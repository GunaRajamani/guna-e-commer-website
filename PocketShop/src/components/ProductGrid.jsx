import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductsGrid() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [loading, setLoading] = useState(true)

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        
        const enrichedProducts = data.map((product) => ({
          ...product,
          price: Math.round(product.price * 100) / 100,
          discount: Math.floor(Math.random() * 30),
          reviews: Math.floor(Math.random() * 300) + 10,
          rating: Math.floor(Math.random() * 2) + 4,
        }))

        setProducts(enrichedProducts)
        setFilteredProducts(enrichedProducts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filter and sort products
  useEffect(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.reverse()
        break
      default:
        break
    }

    
  }, [selectedCategory, searchQuery, sortBy, products])

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  return (
    <>
      <style>{`
        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 5%;
          background: #ffffff;
          color: #1f2937;
        }

        .products-header {
          margin-bottom: 32px;
        }

        .products-header h1 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 24px;
        }

        .filters-section {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 16px;
          margin-bottom: 32px;
          align-items: center;
        }

        .search-input {
          padding: 12px 16px;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 8px;
          background: #f8fafc;
          color: #1f2937;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .sort-select {
          padding: 10px 12px;
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 8px;
          background: #f8fafc;
          color: #1f2937;
          font-size: 13px;
          cursor: pointer;
        }

        .category-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .category-btn {
          padding: 8px 16px;
          background: #f8fafc;
          border: 2px solid rgba(59,130,246,0.1);
          border-radius: 8px;
          color: #1f2937;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s;
        }

        .category-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: #3b82f6;
          color: white;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .products-count {
          text-align: center;
          padding: 40px 20px;
          color: rgba(0,0,0,0.6);
          font-size: 14px;
        }

        .loading {
          text-align: center;
          padding: 60px 20px;
          color: rgba(0,0,0,0.6);
        }

        .loading-spinner {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 4px solid rgba(59,130,246,0.1);
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .filters-section {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
          }

          .products-header h1 {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="products-container">
        <div className="products-header">
          <h1>Our Products</h1>
          <p style={{ margin: '8px 0 0', color: 'rgba(0,0,0,0.6)', fontSize: '14px' }}>
            Discover our collection of quality products
          </p>
        </div>

        <div className="filters-section">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)' }}>
            {filteredProducts.length} products
          </div>
        </div>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="products-count">
            <p>No products found matching your criteria</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ProductsGrid