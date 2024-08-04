import express from 'express'
import protectRoute from "../middleware/protect.route.js";
import {getCurrentUser, getUsersForSidebar} from "../controllers/user.controller.js";
const router = express.Router()

router.get('/', protectRoute, getUsersForSidebar)
router.get('/current', protectRoute, getCurrentUser)

export default router
