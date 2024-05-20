import {
  createItemAction,
  getMyCollectionItemsAction,
  getItemByIdAction,
  updateItemAction,
  deleteItemByIdAction,
  getItemsByConditionAction,
  patchKeyInItemAction,
} from "../models/itemsActions.js";

import { verifyToken } from "../token/jwt.js";
import matchCollectionToModel from "../utils/matchCollectionToModel.js";
import logger from "../logger.js";
// GET
const getMyCollectionItemsController = async (req, res) => {
  const model = await matchCollectionToModel(req.params.collection);
  try {
    if (!req.headers.token) {
      return res.status(401).json({ message: "Token not provided" });
    }
    const { _id } = await verifyToken(req.headers.token);
    const response = await getMyCollectionItemsAction(_id, model);
    res.send(response);
  } catch (error) {
    logger.error(error);
  }
};
// GET
const getItemByIdController = async (req, res) => {
  try {
    const model = matchCollectionToModel(req.params.collection);
    const { item_id } = req.params;
    const response = await getItemByIdAction(item_id, model);
    res.send(response);
  } catch (error) {
    logger.error(error);
  }
};
//GET
const getItemByConditionController = async (req, res) => {
  try {
    const model = matchCollectionToModel(req.params.collection);
    const condition = JSON.parse(req.params.condition);
    const [[conditionKey, conditionValue]] = Object.entries(condition);
    const response = await getItemsByConditionAction(
      conditionKey,
      conditionValue,
      model
    );
    res.send(response);
  } catch (error) {
    logger.error(error);
    res.status(400).send({ error: error.message });
  }
};

// POST
const createItemController = async (req, res) => {
  try {
    const model = matchCollectionToModel(req.params.collection);

    if (!req.headers.token) {
      return res.status(401).json({ message: "Token not provided" });
    }
    const { _id } = await verifyToken(req.headers.token);
    const response = await createItemAction(req.body, _id, model);
    res.send(response);
  } catch (error) {
    logger.error(error);
  }
};

// PATCH
const editSubItemController = async (req, res) => {
  const { item_id, subItem_id, subCollection } = req.params;
  const model = matchCollectionToModel(req.params.collection);
  try {
    const itemData = await getItemByIdAction(item_id);
    const copyOfSubItems = [...itemData[subCollection]];
    const index = copyOfSubItems.findIndex(
      (subItem) => subItem._id.toString() == subItem_id
    );
    if (index !== -1) {
      copyOfSubItems[index] = { ...req.body };
    } else {
      return res.status(404).json({ error: "Note not found" });
    }
    const response = await editSubItemAction(
      item_id,
      copyOfSubItems,
      model,
      subCollection
    );
    res.send(response);
  } catch (error) {
    logger.error(error);
  }
};
// DELETE
const deleteItemController = async (req, res) => {
  try {
    const { collection, item_id } = req.params;
    const model = matchCollectionToModel(collection);
    const response = await deleteItemByIdAction(model, item_id);
    res.send(response._id);
  } catch (error) {
    logger.error(error);
    logger.error(error);
  }
};
// PUT
const updateItemController = async (req, res) => {
  const { item_id } = req.params;
  const model = matchCollectionToModel(req.params.collection);
  try {
    const response = await updateItemAction(item_id, req.body, model);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
// PATCH (a given key)
const patchItemController = async (req, res) => {
  const { item_id } = req.params;
  const model = matchCollectionToModel(req.params.collection);
  const { keyToPatch } = req.params;
  try {
    const response = await patchKeyInItemAction(
      item_id,
      keyToPatch,
      req.body,
      model
    );

    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
export {
  createItemController,
  getMyCollectionItemsController,
  getItemByIdController,
  deleteItemController,
  editSubItemController,
  getItemByConditionController,
  updateItemController,
  patchItemController,
};
