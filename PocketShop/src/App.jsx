import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar_Light'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer_Light'
import Login from './pages/Login_Light'
import ProductDetail from './pages/ProductDetail'
import ProfileDashboard from './pages/ProfileDashboard'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App