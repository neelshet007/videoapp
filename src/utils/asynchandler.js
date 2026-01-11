// const asyncHandler = (func)=>()=>{} function ke upaar aur operation karni hai same liek 
// const asyncHandler = (func)=>{()=>{}}
    

// Correct Version
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}



// try catch 
    // const asyncHandler = (fn) => (req, res, next) =>{
//     try {
//             await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }



// }




export {asyncHandler}

