import asyncHandler from "../utils/asyncHandler.js";


let registerUser = asyncHandler(async (req,res,next)=> {
        res.status(500).json({
            message:"hello am Ameen"
        })
})

export {
    registerUser
}