const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server started at port no 3000")
})

app.get("/",(req,res)=>{
    res.send("Server is ready");
})

app.use(express.json());
const dbConnect=require("./Config/database")
dbConnect();
const route=require("./Routes/blogs")
app.use("/api/v1",route);