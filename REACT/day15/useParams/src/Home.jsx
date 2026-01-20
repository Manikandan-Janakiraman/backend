import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const products = [
    { id: 101, name: "Mobile", price: 15000 },
    { id: 103, name: "Laptop", price: 55000 },
    { id: 104, name: "Tablet", price: 25000 },
    { id: 105, name: "Headphones", price: 3000 }
  ];

  const goToProduct = (item) => {
    navigate(`/product/${item.id}`, {
      state: item
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      <div className="flex flex-wrap gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-56 bg-white shadow-lg rounded-xl p-5 text-center hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 font-bold mb-4">₹{item.price}</p>

            <button
              onClick={() => goToProduct(item)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
