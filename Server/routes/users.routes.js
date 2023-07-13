const express = require("express");
const router = express.Router();
const authController = require("../controllers/user.auth");
const userController = require("../controllers/user.controller");
const propertyController = require("../controllers/property.controller");
const User = require('../models/user.model');
const Property = require('../models/property.model');



router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.post('/logout', authController.authenticateToken, authController.logout);

router.get("/sale", propertyController.getAllPropertiesForSale);
router.get("/rent", propertyController.getAllPropertiesForRent);

router.post(
  "/message",
  authController.authenticateToken,
  userController.addMessage
);

router.get(
  "/featured",
  propertyController.getFeatured
);

router.delete(
  "/:id",
  authController.authenticateToken,
  userController.deleteUserById
);

router.put(
  "/UpdateInfo",
  authController.authenticateToken,
  userController.updateUserById
);

router.post(
  "/addproperty",
  authController.authenticateToken,
  propertyController.addNewProperty
);

router.get('/liked-properties',
  authController.authenticateToken, 
  userController.getLikedProperty
);
module.exports = router;
