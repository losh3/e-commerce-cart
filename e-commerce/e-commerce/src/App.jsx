import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar.jsx"; // ✅

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ProductList />
      </main>
    </>
  );
}

export default App;
