import {
  registerAction,
  loginAction,
  getUserByIdAction,
  getAllUsersAction,
  deleteUserAction,
  createRoutineAction,
  updateUserAction,
} from "../models/users/usersActions.js";

import { generateHash, cmpHash } from "../utils/bcrypt.js";
import { generateToken } from "../token/jwt.js";
import logger from "../logger.js";
const registerController = async (req, res) => {

  try {
    const passwordHash = await generateHash(req.body.password);
    req.body.password = passwordHash;
    const newUser = await registerAction(req.body);
    res.send(newUser);
    const routine = { user_id: newUser._id.toString() };
    const response = createRoutineAction(routine);
  } catch (error) {
    logger.error(error);
  }
};
const loginController = async (req, res) => {
  try {
    let userFromDB = await loginAction(req.body.email);
    if (!userFromDB) throw new Error("invalid email or password");
    let passwordMatch = await cmpHash(req.body.password, userFromDB.password);

    if (!passwordMatch) throw new Error("invalid email or password");
    let token = await generateToken({
      _id: userFromDB._id,
      isAdmin: userFromDB.isAdmin,
    });
    res.json(token);
  } catch (error) {
    logger.error(error);
  }
};
const getUserByIdController = async (req, res) => {
  try {
    const user = await getUserByIdAction(req.params._id);
    delete user.password;
    res.json(user);
  } catch (error) {
    logger.error(error);
  }
};
const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersAction();
    res.json(users);
  } catch (error) {
    logger.error(error);
  }
};
const deleteUserController = async (req, res) => {
  try {
    const reponse = await deleteUserAction(req.params._id);
    res.send(reponse);
  } catch (error) {
    logger.error(error);
  }
};
const updateUserController = async (req, res) => {
  try {
    const { _id } = req.params;
    const reponse = await updateUserAction(_id, req.body);
    res.send(reponse);
  } catch (error) {
    logger.error(error);
  }
};

export {
  registerController,
  loginController,
  getUserByIdController,
  getAllUsersController,
  deleteUserController,
  updateUserController,
};
