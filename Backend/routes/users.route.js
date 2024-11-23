import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { getUserForSidebar } from "../controllers/user.controller.js"

const router=express.Router()
router.get('/get/users',isAuthenticated,getUserForSidebar)

export default router