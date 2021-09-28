import express from "express"
import { authUser, register, getUsers } from "../controllers/userController.js"

const router = express.Router()

router.route("/").get(getUsers).post(register)
router.route("/login").post(authUser)

export default router
