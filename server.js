const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json())
app.use(cors());


app.get('/',(req,res)=>{
    res.send("this is the home");
})
app.post('/getdata',(req,res)=>{
    console.log("enter in getdata")
    console.log(req.body);
    try {
        if(req.body=={}){
            throw new Error("unaable to get data")
        }
        // res.send(req.body)
        res.send({message:"data recived successfully to the backend"});
    } catch (error) {
        console.log(error);
    }
})

// app.get('/getdata',(req,res)=>{
//     const data=req.query;
//     console.log(data);
//     console.log("get post data");

//     // res.redirect('http://127.0.0.1:5500/index.html');
//     res.send(data);
// })


app.listen(3000,()=>{
    console.log("app is running ");
})