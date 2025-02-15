import {Router} from 'express'
import {registerUser} from "../controllers/user.controlle.js"
import {upload} from "../middlewares/mutler.middlewares.js"
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router