import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique : true,
            lowercase: true,
            trim:true,
            index: true

        },
        email :{
            type: String,
            required: true,
            unique : true,
            lowercase: true,
            trim:true

        }
,
        fullName:{
            type: String,
            required: true,
            trim:true,
            index:true
            

        },
        avatar:{
            type: String,//cloud url
            required:true,
        },
        coverImage:{
            type : String,

        },
        watchhistroy:[{

            type: Schema.Types.ObjectId,
            ref : "Video"
        }],
        password:{
            type: String,
            required: [true,"Passowrd is required"]
        },
        refreshToken:{
            type:String
        }


},
{
    timestamps:true
}


)

userSchema.pre("save",async function(){//next in function furtuher needed
    if (!this.isModified("password")) {
        // return next();
        return ;
    }//sir syntax was direclty this.password= awiat 
    try {
        this.password= await bcrypt.hash(this.password,10)
    } catch (error) {

      console.log(error);
      next(error);  
    } //to use next i have use try catch 
    // next()
})

userSchema.methods.isPasswordCorrect= async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken= function () {
  return jwt.sign(

    {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullName
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    
  )
}
userSchema.methods.generateRefreshToken= function () {
     return jwt.sign(

    {
        _id: this._id,
        
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    
  )
    
}



export const User = mongoose.model("User", userSchema)