const express = require("express");
const { getAllProducts, createProduct, updateProduct, removeProductById } = require("../controllers/products.controller");

const productRouter = express.Router();
productRouter.route("/")
             .get(getAllProducts)
             .post(createProduct)
productRouter.route("/:id")
             .get(getAllProducts)
             .put(updateProduct)
             .delete(removeProductById)

module.exports = productRouter;