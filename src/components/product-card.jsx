import { FaExpandAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { transformImage } from "../utils/features";

const ProductCard = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}) => {
  return (
    <div className="product-card">
      <img src={transformImage(photos?.[0]?.url, 400)} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({
              productId,
              price,
              name,
              photo: photos[0].url,
              stock,
              quantity: 1,
            })
          }
        >
          <FaPlus />
        </button>

        <Link to={`/product/${productId}`}>
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
