const BloczWallet = require("../models/BloczWallet");
const User = require("../models/User");

const createNew = async (req, res) => {
  try {
    let newAddress = "0x" + makeid(40);

    //check if it exists
    let existing = await BloczWallet.findOne({ bloczAddress: newAddress });

    if (existing) {
      return res
        .status(400)
        .json({ msg: "something went wrong, pls try again" });
    }

    const newWallet = await BloczWallet.create({
      bloczAddress: newAddress,
    });

    //add the address to user'
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { bloczAddress: newAddress },
      { new: true }
    );

    res.status(201).json({ newWallet });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  createNew,
};
