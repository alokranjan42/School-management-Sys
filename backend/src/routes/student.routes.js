import {Router} from 'express'
const router=Router()
import {
    getStudents,
     registerStudent,
     updateStudent,
     deleteStudent,
      getStudentById
} from '../controller/student.controller.js'

import authMiddleware from '../middlewares/auth.middleware.js'

router.route("/").get(authMiddleware,getStudents)
router.route("/:id").get(authMiddleware,getStudentById)
router.route("/").post(authMiddleware,registerStudent)
router.route("/:id").put(authMiddleware,updateStudent)
router.route("/:id").delete(authMiddleware,deleteStudent)

export default router