const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ethAddress: {
      type: String,
    },
    bloczAddress: {
      type: String,
      default: null
    },
    sequenceAddress: {
      type: String,
      default: null
    },
    attackCards: [
      {
        cardID: {
          type: String,
        },
        count: {
          type: Number,
        },
      },
    ],
    chaptersCompleted: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
