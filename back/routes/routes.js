import express from "express";
import {
  deleteProducts,
  getProducts,
  postProducts,
} from "../controller/controller.js";

const router = express.Router();

router
  .get("/products", getProducts)
  .post("/products", postProducts)
  .delete("/product/:id", deleteProducts);

  export default router;