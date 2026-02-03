const express = require("express");
const { getAllPayments, createPayment, getPaymentById } = require("../controllers/payment.controller");
const { updatePatient, removePatient } = require("../controllers/patient.controller");

const paymentRouter = express.Router();

paymentRouter.route("/")
             .get(getAllPayments)
             .post(createPayment)
paymentRouter.route("/:id")
             .get(getPaymentById)
             .put(updatePatient)
             .delete(removePatient)

module.exports = paymentRouter;