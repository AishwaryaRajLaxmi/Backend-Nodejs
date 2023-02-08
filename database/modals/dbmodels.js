const mongoose = require("mongoose");
const managementSchema = new mongoose.Schema(
  {
    userId: String,
    userName: String,
    phoneNumber: Number,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userManagement", managementSchema);
