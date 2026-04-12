import {Router} from 'express'
const router=Router()
import {
    registerUser,
     loginUser,
     logout
} from '../controller/auth.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout").post(authMiddleware, logout);


export default router
 