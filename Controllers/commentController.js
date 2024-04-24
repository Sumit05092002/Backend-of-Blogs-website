const comment=require('../Models/commentModel');
const Post=require("../Models/postModel")
exports.commentController=async(req,res)=>{
    try {
        const {post,user,body}=req.body;
        const response=await comment.create({post,user,body});
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comment:response._id}},{new:true}).populate("comment").exec()
        res.json({
           post:updatedPost
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error",
            data:error.message
        })
    }
}