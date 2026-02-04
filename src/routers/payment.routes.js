const express = require("express");
const { getAllPayments, createPayment, getPaymentById, updatePayment, removePaymentById } = require("../controllers/payment.controller");

const paymentRouter = express.Router();

paymentRouter.route("/")
             .get(getAllPayments)
             .post(createPayment)
paymentRouter.route("/:id")
             .get(getPaymentById)
             .put(updatePayment)
             .delete(removePaymentById)

module.exports = paymentRouter;