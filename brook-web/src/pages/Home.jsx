import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import BannerCarousel from '../components/BannerCarousel_Light'



function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch]     = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))

}, [])

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((p) => {
    const matchSearch   = p.title.toLowerCase().includes(search.toLowerCase())
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