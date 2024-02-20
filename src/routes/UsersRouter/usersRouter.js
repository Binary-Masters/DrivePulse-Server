const express = require("express");
const postUsers = require("../../controllers/users/postUsers.controller");
const getUsers=require("../../controllers/users/getUsers.controller")
const putUsers = require("../../controllers/users/putUser.controller");
const SimpleGetUser = require("../../controllers/users/SimpleGetUser.controller");
const GetSingleUser = require("../../controllers/users/GetSingleUser.controller");


const router = express.Router();

router.post("/users", postUsers);
// singel user route
// http://localhost:3001/users?email=mnmorshadmondol@gmail.com
router.get('/single-user',getUsers)
router.get('/single-user/:userId', GetSingleUser)

// test
// update user 
router.put('/users',putUsers)


router.get('/users', SimpleGetUser)



module.exports = router;
