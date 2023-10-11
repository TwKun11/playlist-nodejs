const express = require('express');
const { getHomepage, postCreateUser, postHandleRemoveUser, getCreateUser, postDeleteUser, getUpdateUser, postUpdateUser } = require('../controller/homeController');
const { getTwkun } = require('../controller/homeController');

const router = express.Router();
router.get('/', getHomepage)
router.get('/create', getCreateUser)
router.get('/twkun', getTwkun)
router.get('/update-user/:id', getUpdateUser)
router.post('/update-user-later', postUpdateUser)
router.post('/create-user', postCreateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)


module.exports = router;