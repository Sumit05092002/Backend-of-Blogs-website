const express=require('express');
const router=express.Router();
const {postController}=require("../Controllers/postController")
const {commentController}=require("../Controllers/commentController")
const {likeController,unlike}=require('../Controllers/likeController')
router.post("/createBlogs",postController);
router.post("/createComment",commentController);
router.post("/createLike",likeController);
router.post("/deleteLike",unlike);
module.exports=router;