const express = require("express");
const { getAllInvoices, createInvoice, updateInvoice } = require("../controllers/invoice.controller");
const { getInvoiceItemById, removeInvoiceItemById } = require("../controllers/invoice-item.controller");

const invoiceItemRouter = express.Router();

invoiceItemRouter.route("/")
                 .get(getAllInvoices)
                 .post(createInvoice)
invoiceItemRouter.route("/:id")
                 .get(getInvoiceItemById)
                 .post(createInvoice)
                 .put(updateInvoice)
                 .delete(removeInvoiceItemById)

module.exports = invoiceItemRouter;