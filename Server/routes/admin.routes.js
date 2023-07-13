const express = require("express");
const router = express.Router();
const authController = require("../controllers/admin.auth");
const userController = require("../controllers/user.controller");
const propertyController = require("../controllers/property.controller");

router.post("/signup", authController.signup);

router.post("/login", authController.login);


router.get("/sale", propertyController.getAllPropertiesForSale);
router.get("/rent", propertyController.getAllPropertiesForRent);

router.get(
  "/properties",
  authController.authenticateToken,
  propertyController.getAllProperties
);

router.patch(
  "/property/:id",
  authController.authenticateToken,
  propertyController.updatePropertyById
);

router.patch(
  "/property/:id/approve",
  authController.authenticateToken,
  propertyController.approvePropertyById
);

router.patch(
  "/property/:id/reject",
  authController.authenticateToken,
  propertyController.rejectPropertyById
);

router.delete(
  "/property/:id",
  authController.authenticateToken,
  propertyController.deletePropertyById
);

router.get(
  "/users",
  authController.authenticateToken,
  userController.getAllUsers
);

router.delete(
  "/users/:id",
  authController.authenticateToken,
  userController.deleteUserById
);

router.patch(
  "/users/:/id",
  authController.authenticateToken,
  userController.updateUserById
);

router.get(
  "/Appending",
  authController.authenticateToken,
  propertyController.getAppending
);

router.patch(
  "/property/:id/feature",
  authController.authenticateToken,
  propertyController.addFeaturedById
);

router.get(
  "/messages",
  authController.authenticateToken,
  userController.getAllMessages
);
module.exports = router;
