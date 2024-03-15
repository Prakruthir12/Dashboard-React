import Single from "../../components/single/Single";
import { products } from "../../data";
import { useParams } from "react-router-dom";
import "./product.scss";

const Product = () => {
  const { id } = useParams<{ id?: string }>(); // Make id optional

  if (!id) {
    return <div>No product ID provided</div>;
  }

  const productId = parseInt(id);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <Single
        id={product.id}
        img={product.img}
        title={product.title}
        info={{
          "Color": product.color,
          "Producer": product.producer,
          "Price": product.price,
          "In Stock": product.inStock ? "Yes" : "No",
        }}
      />
    </div>
  );
};

export default Product;
