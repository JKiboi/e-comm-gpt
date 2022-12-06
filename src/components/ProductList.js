import React,{ useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Fetch the products from the database or API
      fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} />
            <p>Price: {product.price}</p>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    );
  };
  export default ProductList;
  