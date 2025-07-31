import "../styles/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="card" style={{ width: "270px" }}>
      <div className="position-relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Íconos en la esquina superior derecha */}
        <div className="position-absolute top-0 end-0">
          <i className="bi bi-heart fs-5 text-danger cursor-pointer"></i>
          <i className="bi bi-eye fs-5 text-primary cursor-pointer"></i>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-semibold">S/. {product.price}</p>

        {/* Botón agregar al carrito */}
        <button
          className="btn btn-outline-dark mt-2"
          onClick={() => console.log("Producto Agregado")}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
