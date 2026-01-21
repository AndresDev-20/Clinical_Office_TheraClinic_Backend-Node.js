const express = require('express');
const { getAllUsers, create, getUsersById, update } = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.route("/")
          .get(getAllUsers)
          .post(create)
userRouter.route("/:id")
          .get(getUsersById)
          .put(update)

module.exports = userRouter;