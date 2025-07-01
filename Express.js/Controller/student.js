import express from 'express';

const AllStudents=(req,res)=>{
    res.send("All Students");
};
const UpdateStudent=(req,res)=>{
    const {id}=req.params;
    res.send(`Student with id:${id} is updated`);
};
const CreateStudent=(req,res)=>{
    const {username,email,password}=req.params;
    res.send(`Username:${username}\nEmail:${email}\nPassword:${password}`);
}
const DeleteStudent=(req,res)=>{
    const {id}=req.params;
    res.send(`Student with id:${id} is deleted`);
};

export {AllStudents,UpdateStudent,CreateStudent,DeleteStudent};