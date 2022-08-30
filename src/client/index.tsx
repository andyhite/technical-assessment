import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, Layout } from "./components";
import { CartProvider } from "./hooks";

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default App;
