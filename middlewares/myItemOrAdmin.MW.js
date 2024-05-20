import { verifyToken } from "../token/jwt.js";
import { getItemByIdAction } from "../models/itemsActions.js";
import matchCollectionToModel from "../utils/matchCollectionToModel.js";
import logger from "../logger.js";
const myItemOrAdmin = async (req, res, next) => {
  //? Like name suggest this MW checks if the relevant item the logged user's item or if the logged user is an admin

  try {
    if (req.headers.token) {
      const userDataFromToken = await verifyToken(req.headers.token);
      const { item_id, collection } = req.params;
      const model = matchCollectionToModel(collection);
      const dataFromItem = await getItemByIdAction(item_id, model);
      if (dataFromItem.user_id == userDataFromToken._id) {
        next();
      } else {
        throw new Error("You are not allowed to perform this action!");
      }
    } else {
      throw new Error("You must provide a token");
    }
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

export default myItemOrAdmin;
