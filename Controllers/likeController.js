const like=require('../Models/likeModel');
const Post=require('../Models/postModel');
const { post } = require('../Routes/blogs');
exports.likeController=async(req,res)=>{
    try {
        const {post,user}=req.body;
        const response=await like.create({post,user});
        const updatedpost=await Post.findByIdAndUpdate(post,{$push:{like:response._id}},{new:true}).populate("comment").exec()
        res.json({
            post:updatedpost
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error",
            data:error.message
        })
    }
}

exports.unlike=async(req,res)=>{
    try {
        const {postId,likeId}=req.body;
        const response=await like.findByIdAndDelete(likeId);
        const updatedPost=await Post.findByIdAndUpdate(postId,{$pull:{like:likeId}},{new:true}).populate("like").exec();
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error",
            data:error.message
        })
    }
}