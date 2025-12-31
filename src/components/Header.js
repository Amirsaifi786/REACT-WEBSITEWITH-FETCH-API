import React, { useState } from 'react';
import {
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaSearch,
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaAddressBook,
  FaTrash,
  FaTimes
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cart = [], cartCount = 0, removeFromCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: FaHome, label: 'Home', path: '/' },
    { icon: FaInfoCircle, label: 'About', path: '/about' },
    { icon: FaBoxOpen, label: 'Products', path: '/products' },
    { icon: FaAddressBook, label: 'Contact', path: '/contact' },
  ];

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="header-top">
        <div className="logo">
          <FaShoppingBag />
          <span>MobileShop</span>
        </div>

        <div className="header-icons">
          {/* CART */}
          <div
            className="cart-wrapper"
            onMouseEnter={() => setShowCart(true)}
          >
            <div
              className="cart-icon"
              onClick={() => setShowCart(prev => !prev)}
            >
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </div>

            {showCart && (
              <div
                className="cart-dropdown"
                onMouseLeave={() => setShowCart(false)}
              >
                <div className="cart-header">
                  <h4>Your Cart ({cartCount})</h4>
                  <button
                    className="close-cart"
                    onClick={() => setShowCart(false)}
                  >
                    <FaTimes />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div className="cart-item" key={item.id}>
                          <img src={item.thumbnail} alt={item.title} />
                          <div className="cart-item-info">
                            <p>{item.title.substring(0, 30)}</p>
                            <span>
                              ${item.price} × {item.quantity}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="cart-total">
                      Total: <strong>${totalPrice}</strong>
                    </div>

                    <Link
                      to="/cart"
                      className="checkout-btn"
                      onClick={() => setShowCart(false)}
                    >
                      View Cart & Checkout
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          <FaUser />
          <button className="menu-toggle">
            <FaBars />
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* NAV */}
      <nav className="nav-menu">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <Icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
