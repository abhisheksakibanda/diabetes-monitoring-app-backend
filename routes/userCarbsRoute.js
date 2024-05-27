const express = require("express");
const router = express.Router();
const dataController = require("../controller/userCarbsDataController");

router.post("/submitData", dataController.storeUserData); // Use to Submit Data

router.get(
  "/getDataByMealType/Date",
  dataController.getDataByFoodType_Uid_Date // User clicks on BF which has already been submitted (Current Date)
);

router.get("/getDataByDate", dataController.getUserDataByDate); // Used in History Need to Give Specific Date(DD/MM/YYY) to Get Data

router.get("/userDates", dataController.getUserAllDates);

router.put("/updateByIdAndFoodType", dataController.updateByIdAndFoodType); // Update Current Day Meal

router.put("/addBloodGlucose", dataController.addBloodGlucose); // Add BloodGlucose to Meals

router.put("/bloodGlucoseBefore", dataController.bloodGlucoseBefore);

router.post("/addBloodGlucoseBeforeMeal", dataController.addBloodGlucoseBeforeMeal);

router.get("/getBloodGlucoseBeforeMeal", dataController.getBloodGlucoseBeforeMeal);

router.get("/homeScreenCarbDetails", dataController.getCarbDetailsHomeScreen); // Get Carbs Details for home screen

router.get("/updateUserICR", dataController.updateUserIcr);

module.exports = router;