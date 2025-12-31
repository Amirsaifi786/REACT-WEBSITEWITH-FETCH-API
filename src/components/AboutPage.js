import React from 'react';
import './AboutPage.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <>
      {/* Introduction Section */}
      <main className="content">
        <h1 className="page-title" style={{ textAlign: 'center', marginTop: '20px' }}>About Our Store</h1>
        <div style={{ padding: '20px', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
          <p>
            <strong>MobileShop</strong> is your one-stop destination for the latest smartphones and accessories. 
            Founded in 2020, we aim to provide the best quality products at affordable prices.
          </p>
          <p>
            <strong>Our Mission:</strong> To make premium mobile technology accessible to everyone.
          </p>
          <p>
            <strong>Why Choose Us?</strong>
          </p>
          <ul style={{ marginLeft: '20px' }}>
            <li>✓ Genuine Products</li>
            <li>✓ Fast Delivery</li>
            <li>✓ Easy Returns</li>
            <li>✓ 24/7 Customer Support</li>
          </ul>
        </div>
      </main>

      {/* Detailed Company Section */}
<div className="content">
  <div className="container">
    <div className="row">
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column">
          <div className="sec-title">
            <span className="title">About Company</span>
            <h2>
              We are leader in <br />
              Industrial market Since 1992
            </h2>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <ul className="list-style-one">
            <li>Lorem Ipsum is simply dummy tex</li>
            <li>Consectetur adipisicing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
          </ul>
          <div className="btn-box">
            <a href="#" className="theme-btn btn-style-one">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Image Column */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column wow fadeInLeft">
          <figure className="image-1">
            <a href="#" className="lightbox-image" data-fancybox="images">
              <img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" />
            </a>
          </figure>
          <figure className="image-2">
            <a href="#" className="lightbox-image" data-fancybox="images">
              <img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default AboutPage;