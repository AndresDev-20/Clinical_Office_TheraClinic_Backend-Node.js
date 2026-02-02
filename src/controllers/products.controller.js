const Product = require("../api/models");
const catchError = require("../utils/catchError");

// Get all products
const getAllProducts = catchError(async (req, res) => {
    const products = await Product.findAll();
    return res.status(200).json(products);
});

// Create new product
const createProduct = catchError(async (req, res) => {
    const data = req.body;
    const newProduct = await Product.create(data);
    return res.status(201).json({
        message: "Producto creado exitosamente",
        data: newProduct
    });
});

// Get product by ID
const getProductById = catchError(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    if (!product) return res.status(404).json({
        error: "Producto no encontrado"
    });
    return res.status(200).json(product);
});

// Update product by ID
const updateProduct = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await Product.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró el producto o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Producto actualizado exitosamente"
    });
});

// Delete product by ID
const removeProductById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró el producto para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    removeProductById
};
