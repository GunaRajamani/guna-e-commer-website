import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar   from './components/Navbar'
import Home     from './pages/Home'
import Cart     from './pages/Cart'
import About    from './pages/About'
import Contact  from './pages/Contact'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"       element={<Home />}    />
          <Route path="/login" element={<Login />}    />
          <Route path="/cart"   element={<Cart />}    />
          <Route path="/about"  element={<About />}   />
          <Route path="/contact"element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App