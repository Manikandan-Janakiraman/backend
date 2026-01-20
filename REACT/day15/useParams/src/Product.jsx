import { useParams, useLocation } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const location = useLocation();

  const product = location.state;

  if (!product) {
    return (
      <div className="p-6">
        <h3 className="text-red-600">No product data found</h3>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>

        <p className="mb-2">
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {product.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Price:</span> ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
