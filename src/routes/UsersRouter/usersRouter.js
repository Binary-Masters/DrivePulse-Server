const express = require("express");
const postUsers = require("../../controllers/users/postUsers.controller");
const getUsers=require("../../controllers/users/getUsers.controller")
const putUsers = require("../../controllers/users/putUser.controller");
const router = express.Router();

router.post("/users", postUsers);
// singel user route
// http://localhost:3001/users?email=mnmorshadmondol@gmail.com
router.get('/single-user',getUsers)

// test
// update user 
router.put('/users',putUsers)




module.exports = router;
