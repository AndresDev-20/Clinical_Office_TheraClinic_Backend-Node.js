const express = require('express');
const { getAllUsers, createUser, getUsersById, updateUser, login, removeUser } = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.route("/")
          .get(getAllUsers)
          .post(createUser)
userRouter.route("/login")
          .post(login)
userRouter.route("/:id")
          .get(getUsersById)
          .put(updateUser)
          .delete(removeUser)

module.exports = userRouter;