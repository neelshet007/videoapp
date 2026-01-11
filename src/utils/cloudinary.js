import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"


// cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET,  
//     });
//it was here but to fix the error problem we have loaded it works becuase of import statement 

const uploadOnCloudinary = async (localFilePath) => {
        // console.log("DEBUG: Attempting to upload file at path:", localFilePath);///****fix thsi error of if two files are smae there is no diretory foudn error  */
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,  
    });
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })//file has been uploaded successfully
        // console.log("File is uploaded on cloudinary",response.url)
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.error("CLOUDINARY ERROR:", error);
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as upload operation got failed 

    }
    
}


export {uploadOnCloudinary}