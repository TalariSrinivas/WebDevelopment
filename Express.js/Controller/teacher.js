import express from 'express';

const AllTeachers=(req,res)=>{
    res.send("All Teachers");
};
const UpdateTeacher=(req,res)=>{
    const {id}=req.params;
    res.send(`Teacher with id:${id} is updated`);
};
const CreateTeacher=(req,res)=>{
    const {username,email,password}=req.params;
    res.send(`Username:${username}\nEmail:${email}\nPassword:${password}`);
}
const DeleteTeacher=(req,res)=>{
    const {id}=req.params;
    res.send(`Teacher with id:${id} is deleted`);
};

export {AllTeachers,UpdateTeacher,CreateTeacher,DeleteTeacher};