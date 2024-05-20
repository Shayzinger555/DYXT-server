import { verifyToken } from "../token/jwt.js";

const isAdminOrLoggedUserMW = async (req, res, next) => {
  //? Like name suggest this MW checks if logged user is an admin or the logged user
  try {
    if (req.headers.token) {
      const userDataFromToken = await verifyToken(req.headers.token);
      const { _id } = req.params;
      if (userDataFromToken.isAdmin || _id == userDataFromToken._id) {
        next();
      } else {
        throw new Error("this action is only for admins or logged users!");
      }
    }
  } catch (error) {
    throw new error(
      "something went wrong, maybe you're supposed to delete this user?"
    );
  }
};

export default isAdminOrLoggedUserMW;
