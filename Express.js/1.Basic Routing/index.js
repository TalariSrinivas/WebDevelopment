import express from 'express';
const app= express();
//HTTP METHODS
//GET Retrive Data
//POST Create/Insert Data
//PUT  Completely Update Data
//PATCH Partially Update Data
//DELETE Delete Data
//ALL Any HTTP Request Method
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to express js</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
});

app.listen(8000,()=>console.log("Server Up!"));
