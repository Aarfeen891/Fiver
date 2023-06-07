const express=require("express");
const admin=require("../controllers/admin");
const role=require("../middleware/addRole");
const router = express.Router();

/// admin ///
router.post("/adminRegister",role.Middleware,admin.adminRegister);
router.get("/getBuyerSeller",admin.getBuyerSeller);
router.get("/getAllSellers",admin.getAllSellers);
router.get("/getAllBuyer",admin.getAllBuyer);




module.exports = router;