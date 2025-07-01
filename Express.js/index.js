import express from 'express';
import students from './routes/student.js';
import teachers from './routes/teacher.js';
import userCredentials from './Middleware/logs.js'
const app=express();
app.use(userCredentials);
app.use('/students',students);
app.use('/teachers',teachers);

app.listen(8000,()=>console.log("Server is Up"));