import React from 'react';

const HomePage = () => {
  return (
    <main className="content">
      <h1 className="page-title">Welcome to MobileShop</h1>
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2>Best Deals on Latest Smartphones!</h2>
        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
          Explore our wide range of mobiles, accessories, and exclusive offers.
        </p>
        <div style={{ margin: '30px 0' }}>
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" 
            alt="Latest Smartphones" 
            style={{ maxWidth: '100%', borderRadius: '10px' }} 
          />
        </div>
        <p>Shop now and get up to 30% off on selected items!</p>
      </div>
    </main>
  );
};

export default HomePage;