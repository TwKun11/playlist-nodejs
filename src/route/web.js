const express = require('express');
const { getHomepage, postCreateUser, getCreateUser } = require('../controller/homeController');
const { getTwkun } = require('../controller/homeController');

const router = express.Router();
router.get('/', getHomepage)
router.get('/create', getCreateUser)
router.get('/twkun', getTwkun)
router.post('/create-user', postCreateUser)

module.exports = router;