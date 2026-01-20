import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
