const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }

    let checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ msg: "Email is already used" });
    }

    user = new User({
      username,
      email,
      password,
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //id we can get from the promise we get from await user.save
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).select("-password");
    // console.log(user);
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server ERror");
  }
};

const login = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let user = null;
    if (username) {
      user = await User.findOne({ username });
    } else {
      user = await User.findOne({ email });
    }

    //if user does not exist then throw error
    if (!user) {
      return res.status(400).json({ msg: "user does not exist" });
    }

    //compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    //id we can get from the promise we get from await user.save
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  register,
  getUser,
  login
};
