import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import BannerCarousel from '../components/BannerCarousel'

const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99,  category: "Electronics", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Running Shoes",        price: 89.99,  category: "Footwear",     image: "https://via.placeholder.com/300" },
  { id: 3, name: "Smart Watch",          price: 129.99, category: "Electronics", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Backpack",             price: 39.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Sunglasses",           price: 29.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Sneakers",             price: 69.99,  category: "Footwear",     image: "https://via.placeholder.com/300" },
  { id: 7, name: "Bluetooth Speaker",    price: 59.99,  category: "Electronics", image: "https://via.placeholder.com/300" },
  { id: 8, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 9, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 10, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 11, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 12, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 13, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
  { id: 14, name: "Leather Wallet",       price: 24.99,  category: "Accessories", image: "https://via.placeholder.com/300" },
]

function Home() {
  const [search, setSearch]     = useState("")
  const [category, setCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })

  return (<>

      {/* Banner Carousel */}
      <BannerCarousel />
          <div className="container mt-4">


      <div className="mt-5">

        {/* Search */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${category === cat ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="text-center mt-5">
              <h4>No products found</h4>
              <p className="text-muted">Try a different search or category</p>
            </div>
          )}
        </div>

      </div>
    </div>
    </>)
}

export default Home