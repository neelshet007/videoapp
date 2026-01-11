import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"


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



export default router   