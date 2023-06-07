const express=require("express");
const userRoutes=require("../controllers/userController");
const mailConfirmation=require("../controllers/email");
const protect=require("../middleware/authMiddleware");
const roleroutes=require("../controllers/roleSeeder");
const role=require("../middleware/addRole");
const router = express.Router();

/// Seller///
router.post("/UserRegister",role.Middleware,userRoutes.UserRegister);
router.post("/SellerLogin",userRoutes.UserLogin);
router.get("/getUser/:id",protect.verifyToken,userRoutes.getUser);
router.delete("/deleteUser/:id",protect.verifyToken,userRoutes.deleteUser);
router.put("/UserUpdate/:id",protect.verifyToken,userRoutes.UserUpdate);

//// mail///

router.get("/forSeller",protect.verifyToken,mailConfirmation.forSeller);

////role ///

router.get("/roleSeeder",protect.verifyToken,roleroutes.roleSeeder);

module.exports = router;