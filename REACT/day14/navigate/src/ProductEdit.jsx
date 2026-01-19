import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductEdit = () => {
  const { state } = useLocation();

  const [name, setName] = useState(state.name);
  const [price, setPrice] = useState(state.price);

  const saveProduct = () => {
    const updatedProduct = { name, price };
    console.log("Saved:", updatedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={saveProduct}>Save</button>
    </div>
  );
};

export default ProductEdit;
