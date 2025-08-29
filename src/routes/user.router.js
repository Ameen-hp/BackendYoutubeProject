// import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";
let router = Router();
router.route("/register").post(registerUser)
console.log("app run successefully")
export default router