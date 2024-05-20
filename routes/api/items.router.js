import {
  getMyCollectionItemsController,
  getItemByIdController,
  createItemController,
  updateItemController,
  getItemByConditionController,
  deleteItemController,
  patchItemController,
} from "../../controllers/itemsController.js";
import express from "express";
import myItemOrAdmin from "../../middlewares/myItemOrAdmin.MW.js";
import conditionItemAuth from "../../middlewares/conditionItemAuthMW.js";
import bodyValidationMW from "../../middlewares/bodyValidationMW.js";
const Router = express.Router();

const APIs = {
  "/:collection": {
    // Whole collections controllers
    post: [createItemController],
    get: [getMyCollectionItemsController],
  },
  "/:collection/:item_id": {
    // single document controllers
    get: [myItemOrAdmin, getItemByIdController],
    put: [myItemOrAdmin, updateItemController],
    delete: [myItemOrAdmin, deleteItemController],
  },
  "/:collection/:item_id/:keyToPatch": {
    // only for patching a document
    patch: [myItemOrAdmin, patchItemController],
  },
  "/:collectionForAuth/:collection/:item_id/:condition": {
    // only for getting by a condition which isnt _id
    // first property is the collection of the relative document
    // For example if we want to find cats whos dogs friend id is "xcvbns" the collectionForAuth would be dogs, and collection would be cats.
    get: [conditionItemAuth, getItemByConditionController],
  },
};
for (const [endpoint, methods] of Object.entries(APIs)) {
  for (const [method, handler] of Object.entries(methods)) {
    Router[method](endpoint, handler);
  }
}
export default Router;
