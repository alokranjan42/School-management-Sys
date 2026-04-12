import {Router} from 'express'
const router=Router()
import {
    createTask,
     getTask,
     updateTask,
     deleteTask,
     getTaskById,
     taskCompleted
} from '../controller/task.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

router.route("/").post(authMiddleware,createTask)
router.route("/").get(authMiddleware,getTask)
router.route("/:id").get(authMiddleware,getTaskById)
router.route("/:id").put(authMiddleware,updateTask)
router.route("/:id").put(authMiddleware,taskCompleted)
router.route("/:id").delete(authMiddleware,deleteTask)
export default router