import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "./ProductCard";
import "../styles/productList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtro, setFiltro] = useState("all");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar los productos", err);
        setError(err); // Actualiza el estado del error
      }
    };
    getProducts();
  }, []);

  if (error) {
    return <p>Error al cargar los productos</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
