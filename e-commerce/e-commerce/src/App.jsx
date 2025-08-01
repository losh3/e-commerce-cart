import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route } from "react-router-dom";
import { getProducts } from "./api/productsApi.js";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      console.log(products);
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductCard products={products} />
      </main>
    </>
  );
}

export default App;
