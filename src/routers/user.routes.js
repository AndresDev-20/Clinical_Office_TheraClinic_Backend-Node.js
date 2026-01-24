const express = require('express');
const { getAllUsers, create, getUsersById, update, login, remove } = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.route("/")
          .get(getAllUsers)
          .post(create)
userRouter.route("/login")
          .post(login)
userRouter.route("/:id")
          .get(getUsersById)
          .put(update)
          .delete(remove)

module.exports = userRouter;