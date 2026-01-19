import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Product Flow */
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

/* Profile (Query Params) */
import Profile from "./Profile";

/* Theme Switcher */
import ThemePage from "./ThemePage";

/* Order Flow */
import OrderPage from "./OrderPage";
import OrderDetails from "./OrderDetails";

/* Product Edit */
import ProductEdit from "./ProductEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Product price update using location state */}
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<ProductDetails />} />

        {/* Profile using query params */}
        <Route path="/profile" element={<Profile />} />

        {/* Theme switcher using query params */}
        <Route path="/theme" element={<ThemePage />} />

        {/* Order status update */}
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order-details" element={<OrderDetails />} />

        {/* Product edit form */}
        <Route path="/edit-product" element={<ProductEdit />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
