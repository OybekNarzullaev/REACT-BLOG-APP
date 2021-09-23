const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: {
      unique: true,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
