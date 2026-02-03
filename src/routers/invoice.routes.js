const express = require("express");
const { getAllInvoices, createInvoice, updateInvoice, getInvoiceById, removeInvoiceById } = require("../controllers/invoice.controller");

const invoiceRouter = express.Router();

invoiceRouter.route("/")
             .get(getAllInvoices)
             .post(createInvoice)
invoiceRouter.route("/:id")
             .get(getInvoiceById)
             .put(updateInvoice)
             .delete(removeInvoiceById)

module.exports = invoiceRouter;