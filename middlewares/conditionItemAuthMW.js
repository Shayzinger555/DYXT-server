import { verifyToken } from "../token/jwt.js";
import { getItemByIdAction } from "../models/itemsActions.js";
import matchCollectionToModel from "../utils/matchCollectionToModel.js";
import logger from "../logger.js";
const myItemOrAdmin = async (req, res, next) => {
  // ?? This MW provides guard when trying to fetch data from a collection based on relation to another item from a different collection. this MW check if the relational items contains the logged user ID
  try {
    if (req.headers.token) {
      const userDataFromToken = await verifyToken(req.headers.token);
      const { item_id, collectionForAuth } = req.params;
      const model = matchCollectionToModel(collectionForAuth);
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
    logger.error("error in Item MW :");
    res.status(403).json({ error: error.message });
  }
};

export default myItemOrAdmin;
