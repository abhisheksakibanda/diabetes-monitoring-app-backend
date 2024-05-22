const mongoose = require("mongoose");

const userBloodGlucoseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  mealDate: {
    type: String,
    default: Date.now(),
  },
  mealType: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner"], // Allowed values: 1 for breakfast, 2 for lunch, 3 for dinner
    required: true,
  },
  bloodGlucoseBeforeMeal: {
    type: String,
    required: true,
  },
});

userBloodGlucose = mongoose.model("userBloodGlucoseSchema", userBloodGlucoseSchema);

module.exports = userBloodGlucoseSchema;
