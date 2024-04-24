const mongoose=require('mongoose');

const comment=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },

    user:{
        type:String,
        required:true
    },

    body:{
        type:String,
        maxLength:50,
        required:true
    }
})

module.exports=mongoose.model("commentModel",comment);