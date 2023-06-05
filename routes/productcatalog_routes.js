const express = require("express");
const router = express.Router();
const productController = require("../controllers/productcatalog_controller");
const { verifyToken } = require("../controllers/auth_controller");

router.route("/").post(verifyToken, productController.createProduct);
router.route("/:id/reviews").post(verifyToken, productController.createReview);
router.route("/:id/reviews").get(productController.getReviews);
router.route("/").get(productController.getAllProducts);
router.route("/:id").get(productController.getProductById);
router.route("/:id").delete(verifyToken, productController.deleteProduct);
module.exports = router;
