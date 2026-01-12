import { Router } from "express";
import { loginUser, logoutUser, registerUser, refreshAccessToken} from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()


// router.post("/test-now", (req, res) => {
//     console.log("Test-now reached!");
//     res.send("Test successful");
// });

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },//middle ware inject kia just before calling register user 
        
        {
            name:"coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

export default router   