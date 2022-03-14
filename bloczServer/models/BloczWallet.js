const mongoose = require("mongoose");

const BloczWalletSchema = new mongoose.Schema(
  {
    bloczAddress: {
      type: String,
      required: true,
      unique: true,
    },
    bloczbal:{
        type: Number,
        default : 0.0
    },
    btcbal:{
        type: Number,
        default : 0.0
    },
    ethbal:{
        type: Number,
        default : 0.0
    },
    bnbbal:{
        type: Number,
        default : 0.0
    },
    solbal:{
        type: Number,
        default : 0.0
    },
    adabal:{
        type: Number,
        default : 0.0
    },
    collectibles: [
      {
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("BloczWallet", BloczWalletSchema);
