import React from 'react';
import { FaFilter, FaSortAmountDown, FaList, FaStar, FaStarHalfAlt, FaCartPlus, FaCheck } from 'react-icons/fa';

const Content = ({ pageTitle, products, onAddToCart }) => {
  const renderStars = (rating) => {
    const stars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<FaStar key={i} />);
      } else if (i === stars && hasHalf) {
        starIcons.push(<FaStarHalfAlt key={i} />);
      } else {
        starIcons.push(<FaStar key={i} style={{ opacity: 0.3 }} />); // Dim empty stars
      }
    }
    return starIcons;
  };

  const handleAddClick = (e, productId) => {
    e.target.innerHTML = '<FaCheck /> Added!';
    e.target.style.backgroundColor = '#4CAF50';
    onAddToCart();

    setTimeout(() => {
      e.target.innerHTML = '<FaCartPlus /> Add to Cart';
      e.target.style.backgroundColor = '#6a11cb';
    }, 1500);
  };

  return (
    <main className="content">
      <h1 className="page-title">{pageTitle}</h1>

      <div className="filters">
        <button className="filter-btn"><FaFilter /> Filter</button>
        <button className="filter-btn"><FaSortAmountDown /> Sort</button>
        <button className="filter-btn"><FaList /> Categories</button>
      </div>

      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  {renderStars(product.rating)}
                </div>
                <button 
                  className="add-to-cart" 
                  onClick={(e) => handleAddClick(e, product.id)}
                >
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </main>
  );
};

export default Content;