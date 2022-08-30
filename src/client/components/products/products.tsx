import { useCart, useProducts } from "../../hooks";
import { formatMoney } from "../../utils";
import "./products.css";

export const Products = () => {
  const cart = useCart();
  const products = useProducts();

  return (
    <div className="products">
      <h2>Products</h2>

      <ul>
        {products?.map((product) => (
          <li key={`product-${product.id}`}>
            {product.name} – {formatMoney(product.price)}
            <button onClick={() => cart?.addProduct(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
