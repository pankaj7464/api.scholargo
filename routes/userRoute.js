const { getAllUser, addUser, getSingleUser, updateUser, deleteUser } = require("../controller/userController")
const router = require('express').Router();
router.get("/", getAllUser)
router.post("/", addUser)
router.get("/:id", getSingleUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router