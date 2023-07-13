const express = require("express");
const router = express.Router();
const authController = require("../controllers/user.auth");
const propertyController = require("../controllers/property.controller");
const User = require('../models/user.model');
const Property = require('../models/property.model');

// GET /properties/search?type=office&status=sale&location=New+York
router.get('/search', propertyController.searchProperties);

router.get('/Owner', 
authController.authenticateToken, 
propertyController.getPropertiesByOwner);




router.get("/properties", propertyController.getAllProperties);

router.get("/sale", propertyController.getAllPropertiesForSale);
router.get("/rent", propertyController.getAllPropertiesForRent);
router.get("/cairo", propertyController.getAllPropertiesCairo);
router.get("/giza", propertyController.getAllPropertiesGiza);
router.get("/alex", propertyController.getAllPropertiesAlex);

router.get("/:id", propertyController.getPropertyById);


router.delete('/delete/:id', authController.authenticateToken, propertyController.deletePropertyById);

router.post(
  "/addproperty",
  authController.authenticateToken,
  propertyController.addNewProperty
);


router.patch(
  "update/:id",
  authController.authenticateToken,
  propertyController.updatePropertyById
);


router.post('/:propertyId/like', 
authController.authenticateToken,
propertyController.addPropertyLike);


module.exports = router;


