const { Invoice, Patient, InvoiceItem, Product, Payment } = require("../api/models");
const catchError = require("../utils/catchError");

// Get all invoices
const getAllInvoices = catchError(async (req, res) => {
    const invoices = await Invoice.findAll({
        attributes: {exclude: ["updatedAt", "patient_id", "doctor_id"]},
        include: [
            {
                model: Patient, 
                as: "patient",
                attributes: ["id", "firstNames", "lastNames"]
            },
            {
                model: InvoiceItem,
                as: "items",
                attributes: ["amount", "unitPrice", "subTotal"],
                include: [
                    {
                        model: Product,
                        as: "product",
                        attributes: ["name"]
                    }
                ]
            },
            {
                model: Payment,
                as: "payments",
                attributes: ["monto", "createdAt"]
            }
        ]
    });
    return res.status(200).json(invoices);
});

// Create new invoice
const createInvoice = catchError(async (req, res) => {
    const data = req.body;
    const newInvoice = await Invoice.create(data);
    return res.status(201).json({
        message: "Factura creada exitosamente",
        data: newInvoice
    });
});

// Get invoice by ID
const getInvoiceById = catchError(async (req, res) => {
    const { id } = req.params;
    const invoice = await Invoice.findOne({ where: { id } });
    if (!invoice) return res.status(404).json({
        error: "Factura no encontrada"
    });
    return res.status(200).json(invoice);
});

// Update invoice by ID
const updateInvoice = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await Invoice.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró la factura o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Factura actualizada exitosamente"
    });
});

// Delete invoice by ID
const removeInvoiceById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await Invoice.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró la factura para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
    getAllInvoices,
    createInvoice,
    getInvoiceById,
    updateInvoice,
    removeInvoiceById
};
