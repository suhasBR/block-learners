const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth")

const {createNew} = require("../controllers/bloczwallet");



router.route('/create').post(auth,createNew);


module.exports = router;



