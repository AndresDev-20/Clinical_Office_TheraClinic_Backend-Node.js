const express = require("express");
const { getInvoiceItemById, removeInvoiceItemById, getAllInvoiceItems, createInvoiceItem, updateInvoiceItem } = require("../controllers/invoice-item.controller");

const invoiceItemRouter = express.Router();

invoiceItemRouter.route("/")
                 .get(getAllInvoiceItems)
                 .post(createInvoiceItem)
invoiceItemRouter.route("/:id")
                 .get(getInvoiceItemById)
                 .put(updateInvoiceItem)
                 .delete(removeInvoiceItemById)

module.exports = invoiceItemRouter;