const express = require("express");
const Container = require("./Container");

const router = express.Router();
const container = new Container();

router.get("/api/productos", (_req, res) => {
  const products = container.getAll();
  res.send(products);
});

router.get("/api/productos/:id", (req, res) => {
  const id = req.params.id;
  const product = container.getById(parseInt(id));
  res.send(product);
});

router.post("/api/productos", (req, res) => {
  const obj = req.body;
  const newProduct = container.create(obj);
  res.send(newProduct);
});

router.put("/api/productos/:id", (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  const updatedProduct = container.updateById(parseInt(id), obj);
  res.send(updatedProduct);
});

router.delete("/api/productos/:id", (req, res) => {
  const id = req.params.id;
  const product = container.deleteById(parseInt(id));
  res.send(new Container);
});

module.exports = router;