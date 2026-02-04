const { Payment } = require("../api/models");
const catchError = require("../utils/catchError");

// Get all payments
const getAllPayments = catchError(async (req, res) => {
    const payments = await Payment.findAll();
    return res.status(200).json(payments);
});

// Create new payment
const createPayment = catchError(async (req, res) => {
    const data = req.body;
    const newPayment = await Payment.create(data);
    return res.status(201).json({
        message: "Pago creado exitosamente",
        data: newPayment
    });
});

// Get payment by ID
const getPaymentById = catchError(async (req, res) => {
    const { id } = req.params;
    const payment = await Payment.findOne({ where: { id } });
    if (!payment) return res.status(404).json({
        error: "Pago no encontrado"
    });
    return res.status(200).json(payment);
});

// Update payment by ID
const updatePayment = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await Payment.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró el pago o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Pago actualizado exitosamente"
    });
});

// Delete payment by ID
const removePaymentById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await Payment.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró el pago para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
    getAllPayments,
    createPayment,
    getPaymentById,
    updatePayment,
    removePaymentById
};
