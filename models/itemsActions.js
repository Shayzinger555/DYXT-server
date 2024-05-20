import logger from "../logger.js";

// GET all users collection items by user_id
const getMyCollectionItemsAction = (user_id, model) => {
  return model.find({ user_id: user_id });
};
// GET item By _id
const getItemByIdAction = (item_id, model) => {
  return model.findById(item_id);
};
// GET  item By Condition
const getItemsByConditionAction = (conditionKey, conditionValue, model) => {
  return model.find({ [conditionKey]: conditionValue });
};

// POST
const createItemAction = (itemData, user_id, model) => {
  const dataWithId = { ...itemData, user_id: user_id };
  console.log(dataWithId);
  let item = new model(dataWithId);
  return item.save();
};

// DELETE
const deleteItemByIdAction = (model, item_id) => {
  try {
    const deletedItem = model.findByIdAndDelete(item_id);
    return deletedItem;
  } catch (error) {
    console.log(error);
  }
};

// PUT
const updateItemAction = async (item_id, updatedData, model) => {
  try {
    const response = await model.findByIdAndUpdate(item_id, updatedData, {
      new: true,
    });
    if (!response) {
      console.log("Item not found");
      return null;
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// PATCH a specific key in an item
const patchKeyInItemAction = async (item_id, key, value, model) => {
  console.log(value);
  try {
    const response = await model.findByIdAndUpdate(
      item_id,
      { [key]: value.value },
      {
        new: true,
      }
    );
    if (!response) {
      console.log("Item not found");
      return null;
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
export {
  createItemAction,
  getMyCollectionItemsAction,
  getItemByIdAction,
  updateItemAction,
  deleteItemByIdAction,
  getItemsByConditionAction,
  patchKeyInItemAction,
};
