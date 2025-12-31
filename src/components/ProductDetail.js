import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaCartPlus, FaArrowLeft } from 'react-icons/fa';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams(); // URL se product ID lete hain
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const renderStars = (rating) => {
    const stars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<FaStar key={i} style={{ color: '#ffc107' }} />);
      } else if (i === stars && hasHalf) {
        starIcons.push(<FaStarHalfAlt key={i} style={{ color: '#ffc107' }} />);
      } else {
        starIcons.push(<FaStar key={i} style={{ opacity: 0.3 }} />);
      }
    }
    return starIcons;
  };

  if (loading) return <div className="content"><p>Loading product details...</p></div>;
  if (!product) return <div className="content"><p>Product not found!</p></div>;

  return (
    <main className="content">
      <Link to="/products" className="filter-btn" style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center' }}>
        <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Products
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
        <div className="product-image" style={{ height: '500px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} />
        </div>

        <div>
          <h1 className="page-title">{product.title}</h1>
          <div className="product-rating" style={{ fontSize: '1.2rem', margin: '15px 0' }}>
            {renderStars(product.rating)} ({product.rating})
          </div>
          <div className="product-price" style={{ fontSize: '2rem', color: '#6a11cb', margin: '20px 0' }}>
            ${product.price}
          </div>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {product.description}
          </p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Stock:</strong> {product.stock} available</p>

        // ProductDetail.js mein button par:
<button 
  className="add-to-cart" 
  onClick={() => onAddToCart(product)}
>
  Add to Cart
</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;