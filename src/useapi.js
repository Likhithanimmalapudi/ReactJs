import React, { useEffect, useState } from 'react';
import IncreAndDecre from './incdec';
import Navigate from './Navigation';

function UseApi() {
  const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<span key={i} style={{ color: '#FFD700' }}>&#9733;</span>);
          } else {
            stars.push(<span key={i} style={{ color: '#FFD700' }}>&#9734;</span>);
          }
        }
        return stars;
      };
    return (
      <div className='card' style={{ width: '400px', marginBottom: '20px' }} >
        <div className="card-body">
          <img src={product.image} style={{ width: '200px', height: '100px' }} />
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <h6>₹{product.price}</h6>
          <div>{renderStars(product.rating.rate)} ({product.rating.count} reviews)</div>
          <IncreAndDecre/>
        </div>
      </div>
    );
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      console.log(response.ok)
      const data = await response.json();
      setProducts(data);
      console.log(data);
    }

    fetchProducts();
  });

  return (
    <div>
      <Navigate/>
      <h3 style={{ textAlign: 'center' }}>Product List</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    
  );
}

export default UseApi;
