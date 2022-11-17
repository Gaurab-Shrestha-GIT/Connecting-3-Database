const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },

  // createdAt: {
  //   type: Date,
  //   default: () => Date.now(),
  // },
});

userSchema.set("timestamps", true);

module.exports = User = mongoose.model("user", userSchema);
