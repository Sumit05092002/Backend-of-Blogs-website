const mongoose=require('mongoose');

const like=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },

    user:{
        Type:String,
    }

})

module.exports=mongoose.model("likeModel",like)