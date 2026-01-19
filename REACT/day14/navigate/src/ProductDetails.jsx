import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
  const { state } = useLocation();
  const [price, setPrice] = useState(state.price);

  return (
    <div>
      <h2>{state.name}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={() => setPrice(price + 1000)}>
        Increase Price
      </button>
    </div>
  );
};

export default ProductDetails;
