const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth")

const {
    register,
    getUser,
    login
} = require("../controllers/user");

router.route('/').get(auth,getUser);
router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;