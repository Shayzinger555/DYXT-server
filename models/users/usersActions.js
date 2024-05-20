import logger from "../../logger.js";
import Routine from "../Models/Routine.js";
import User from "./User.js";
const getUserByEmail = (email) => {
  return User.findOne({ email });
};
const findOrCreateUser = async (userData) => {
  let user = await getUserByEmail(userData.email);
  try {
    if (!user) {
      user = new User(userData);
      return user.save();
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};
const registerAction = (userData) => {
  let user = new User(userData);
  return user.save();
};
const createRoutineAction = (data) => {
  let routine = new Routine(data);
  return routine.save();
};

const loginAction = (email) => {
  return User.findOne({ email });
};
const getUserByIdAction = (_id) => {
  return User.findById(_id);
};
const getAllUsersAction = () => {
  return User.find({}, { password: 0 });
};
const deleteUserAction = async (_id) => {
  try {
    const user = await User.findById(_id);
    if (!user.isAdmin) {
      return User.findByIdAndDelete(_id);
    } else {
      throw new Error("Can't delete Admins!");
    }
  } catch (error) {
    console.log(error);
  }
};
const updateUserAction = async (_id, newValues) => {
  try {
    const updatedUser = await getUserByIdAction(_id);
    updatedUser.firstName = newValues.firstName;
    if (newValues.middleName) {
      updatedUser.middleName = newValues.middleName;
    }
    updatedUser.lastName = newValues.lastName;
    updatedUser.userName = newValues.userName;
    updatedUser.title = newValues.title;
    updatedUser.phone = newValues.phone;
    updatedUser.country = newValues.country;
    updatedUser.city = newValues.city;
    const user = await User.findByIdAndUpdate(_id, updatedUser, { new: true });
    return user;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

export {
  registerAction,
  loginAction,
  getUserByIdAction,
  updateUserAction,
  findOrCreateUser,
  getAllUsersAction,
  deleteUserAction,
  createRoutineAction,
};
