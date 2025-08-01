import StarRating from "./StartRating";
import "../styles/productCard.css";

function ProductCard({ products }) {
  return (
    <div>
      {products.map(({ id, title, description, images, price, rating }) => (
        <div key={id} className="card h-100">
          <div>
            <img
              src={images[0]}
              alt={title}
              className="object-fit-contain"
              height={200}
            />
            <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-eye"></i>
            </div>
          </div>

          <div>
            <h6 className="">{title}</h6>
            <p>${price}</p>
          </div>

          <p>Rating: {rating.rate}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
