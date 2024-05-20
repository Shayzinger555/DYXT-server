import express from "express";
import {
  registerController,
  loginController,
  getUserByIdController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
} from "../../controllers/usersController.js";
import isAdminMW from "../../middlewares/isAdminMW.js";
import loginLimiter from "../../middlewares/loginLimiterMW.js";
import rateLimit from "express-rate-limit";
import registerValidationMW from "../../middlewares/registerBodyValidationMW.js";
import isAdminOrLoggedUserMW from "../../middlewares/isAdminOrLoggedUserMW.js";
import editUserValidationMW from "../../middlewares/editUserBodyValidationMW.js";
const router = express.Router();

// register
router.post("/", registerValidationMW, registerController);
// login
router.post("/login", loginLimiter, loginController);
// getByID
router.get(`/:_id`, isAdminOrLoggedUserMW, getUserByIdController);
// PUT
router.put(
  `/:_id`,
  editUserValidationMW,
  isAdminOrLoggedUserMW,
  updateUserController
);
// Get all users
router.get("/", isAdminMW, getAllUsersController);
// Delete
router.delete(`/:_id`, isAdminOrLoggedUserMW, deleteUserController);

// rate Limiter for blocking
router.use((err, req, res, next) => {
  if (err instanceof rateLimit.RateLimitExceeded) {
    // Rate limit exceeded error
    res.status(429).json({ error: err.message });
  } else {
    // Handle other errors
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
