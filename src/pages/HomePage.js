import React from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
    return (
      <>
        <h1>Welcome to our e-commerce website!</h1>
        <p>Here you can find a wide range of products with high quality and affordable prices.</p>
        <ProductList />
      </>
    );
  };
  
  export default HomePage;