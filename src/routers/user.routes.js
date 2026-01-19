const express = require('express');
const { getAllUsers, create } = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.route("/")
          .get(getAllUsers)
          .post(create)

module.exports = userRouter;