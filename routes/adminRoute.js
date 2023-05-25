const { getAllAdmin, addAdmin, getSingleAdmin, updateAdmin, deleteAdmin } = require('../controller/adminConntroller');

const router = require('express').Router();
router.get("/", getAllAdmin)
router.post("/", addAdmin)
router.get("/:id", getSingleAdmin)
router.put("/:id", updateAdmin)
router.delete("/:id", deleteAdmin)
module.exports = router