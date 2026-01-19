import { useLocation } from "react-router-dom";
import { useState } from "react";

const OrderDetails = () => {
  const { state } = useLocation();
  const [status, setStatus] = useState(state.status);

  return (
    <div>
      <p>Order ID: {state.orderId}</p>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Delivered")}>
        Mark Delivered
      </button>
    </div>
  );
};

export default OrderDetails;
