import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProductDetail from './components/ProductDetail';
import { Routes, Route, Link } from 'react-router-dom';
import CartPage from "./components/CartPage";
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [products, setProducts] = useState([]); // <-- Added

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('mobileShopCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('mobileShopCart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Removed updateQuantity (unused)

  return (
    <div className="container">
      <Header cart={cart} cartCount={cartCount} removeFromCart={removeFromCart} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route
          path="/products"
          element={
            <main className="content">
              <h1 className="page-title">Our Products</h1>
              <div className="filters">{/* Your filters */}</div>

              <div className="product-list">
                {products.length === 0 ? (
                  <p>Loading products...</p>
                ) : (
                  products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                      <div className="product-card">
                        <div className="product-image">
                          <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="product-info">
                          <h3 className="product-title">{product.title}</h3>
                          <div className="product-price">${product.price}</div>
                          <button
                            className="add-to-cart"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addToCart(product);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </main>
          }
        />

        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;