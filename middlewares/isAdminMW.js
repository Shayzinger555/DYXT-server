import { verifyToken } from "../token/jwt.js";

const isAdminMW = async (req, res, next) => {
  //? Like name suggest this MW checks if logged user is an admin
  try {
    if (req.headers.token) {
      const userDataFromToken = await verifyToken(req.headers.token);
      if (userDataFromToken.isAdmin) {
        next();
      } else {
        throw new Error("this action is only for admins!");
      }
    }
  } catch (error) {
    throw new error("something went wrong, maybe you're not an admin?");
  }
};

export default isAdminMW;
