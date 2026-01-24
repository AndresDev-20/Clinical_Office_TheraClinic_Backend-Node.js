const express = require('express');
const { getAllOffices, getOneOffice, createOffice, updateOffice, removeOffice } = require('../controllers/office.controller');

const officeRouter = express.Router();
officeRouter.route("/")
            .get(getAllOffices)
            .post(createOffice)
officeRouter.route("/:id")
            .get(getOneOffice)
            .put(updateOffice)
            .delete(removeOffice)

module.exports = officeRouter;