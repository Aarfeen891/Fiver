const express=require("express");
const contact=require("../controllers/contactUs");
const protect=require("../middleware/authMiddleware");
const router = express.Router();

/// contact us ///
router.post("/contactUserInfo",protect.verifyToken,contact.contactUserInfo);



module.exports = router;