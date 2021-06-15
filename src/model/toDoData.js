const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "ID is needed."],
  },
  mission: {
    type: String,
    required: [true, "mission is required"],
  },
  time: {
    type: String,
    required: true,
  },
  pts: {
    type: Number,
    required: [true, "name is required"],
  },
});

module.exports = mongoose.model("Mission", missionSchema);
