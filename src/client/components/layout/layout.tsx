import { Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks";
import "./layout.css";

export const Layout = () => {
  const cart = useCart();
  const navigate = useNavigate();

  return (
    <div className="layout">
      <h1>ShipEngine Technical Assessment</h1>

      {cart && (
        <div className="cart">
          Cart: {cart?.products.length} items
          <button onClick={() => navigate("/cart")}>Checkout</button>
        </div>
      )}

      <Outlet />
    </div>
  );
};
