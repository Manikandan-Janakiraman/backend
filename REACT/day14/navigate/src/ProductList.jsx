import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Mobile",
    price: 12000,
  };

  return (
    <div>
      <h2>Product List</h2>
      <button
        onClick={() =>
          navigate("/product", { state: product })
        }
      >
        View Product
      </button>
    </div>
  );
};

export default ProductList;
