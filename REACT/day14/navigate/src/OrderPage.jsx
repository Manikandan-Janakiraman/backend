import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  const order = {
    orderId: 101,
    status: "Pending",
  };

  return (
    <button
      onClick={() =>
        navigate("/order-details", { state: order })
      }
    >
      View Order
    </button>
  );
};

export default OrderPage;
