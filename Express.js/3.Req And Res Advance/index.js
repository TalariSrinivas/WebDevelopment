import express from 'express';

const app=express();
//Double callback functions

app.get(
    "/double-cb",
    (req,res,next)=>{
        console.log("First Call Back Function");
        next();
    },
    (req,res)=>{
        res.send("Second Call Back Function");
    }
)
//Arrays of callback function

const cb1=(req,res,next)=>{
    console.log("First Callback Function");
    next();
}
const cb2=(req,res,next)=>{
    console.log("Second Callback Function");
    next();
}
const cb3=(req,res,next)=>{
    console.log("Third Callback Function");
    next();
}
const cb4=(req,res)=>{
    console.log("Fourth Callback Function");
    res.send("Array of Callbacks")
}

app.get('/multiple-cb',[cb1,cb2,cb3,cb4]);
app.listen(8000,()=>console.log("Server is Up!"));