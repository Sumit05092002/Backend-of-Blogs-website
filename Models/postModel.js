const mongoose=require('mongoose');

const post=mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        createdAt:Date.now(),
        updatedAt:Date.now(),
        maxLength:50
    },

    body:{
        type:String,
        required:true,
        createdAt:Date.now(),
        updatedAt:Date.now(),
        maxLength:200
    },

    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"likeModel"
    }],

    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"commentModel"
    }]


})

module.exports=mongoose.model("postModel",post);