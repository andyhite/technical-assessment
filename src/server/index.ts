import express from "express";
import createStorage from "./storage";
import productData from "./data/products.json";

const products = createStorage(productData);

const app = express();
const port = 4000;
const bodyParser = express.json;

app.use(bodyParser());

app.get("/products", (req, res) => {
  res.status(200).json(products.all());
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

export default app;
