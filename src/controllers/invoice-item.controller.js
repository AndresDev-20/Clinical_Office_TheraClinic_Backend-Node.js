const { InvoiceItem } = require("../api/models");
const catchError = require("../utils/catchError");

// Get all invoice items
const getAllInvoiceItems = catchError(async (req, res) => {
    const invoiceItems = await InvoiceItem.findAll();
    return res.status(200).json(invoiceItems);
});

// Create new invoice item
const createInvoiceItem = catchError(async (req, res) => {
    const data = req.body;
    const newInvoiceItem = await InvoiceItem.create(data);
    return res.status(201).json({
        message: "Ítem de factura creado exitosamente",
        data: newInvoiceItem
    });
});

// Get invoice item by ID
const getInvoiceItemById = catchError(async (req, res) => {
    const { id } = req.params;
    const invoiceItem = await InvoiceItem.findOne({ where: { id } });
    if (!invoiceItem) return res.status(404).json({
        error: "Ítem de factura no encontrado"
    });
    return res.status(200).json(invoiceItem);
});

// Update invoice item by ID
const updateInvoiceItem = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await InvoiceItem.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró el ítem de factura o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Ítem de factura actualizado exitosamente"
    });
});

// Delete invoice item by ID
const removeInvoiceItemById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await InvoiceItem.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró el ítem de factura para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
    getAllInvoiceItems,
    createInvoiceItem,
    getInvoiceItemById,
    updateInvoiceItem,
    removeInvoiceItemById
};
