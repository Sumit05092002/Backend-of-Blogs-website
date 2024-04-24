const post=require("../Models/postModel");

exports.postController=async(req,res)=>{
    try {
        const {title,body,like,comment}=req.body;
        const response=await post.create({title,body,like,comment});
        res.status(200).json({
            success:true,
            message:"Data submitted succeessfully",
            data:response
        })
    } catch (error) {
        res.status(500).json({
            success:flase,
            messaage:"Internal server error",
            data:error.message
        })
    }
}