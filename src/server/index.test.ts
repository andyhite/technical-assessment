import request from "supertest";
import products from "./data/products.json";
import app from ".";

describe("GET /products", () => {
  it("returns a list of all products", async () => {
    const res = await request(app).get("/products");
    expect(res.status).toEqual(200);
    expect(res.body).toMatchObject(products);
  });
});
