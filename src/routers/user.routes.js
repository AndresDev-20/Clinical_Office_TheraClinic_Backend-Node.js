const express = require('express');
const { getAllUsers, create, getUsersById, update, login } = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.route("/")
          .get(getAllUsers)
          .post(create)
userRouter.route("/login")
          .post(login)
userRouter.route("/:id")
          .get(getUsersById)
          .put(update)

module.exports = userRouter;