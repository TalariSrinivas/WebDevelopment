import express from 'express';
import {
    AllStudents,
    UpdateStudent,
    CreateStudent,
    DeleteStudent
} from '../Controller/student.js'
const router=express.Router();

router.get('/all',AllStudents);
router.put('/update/:id',UpdateStudent);
router.post('/create/:username/:email/:password',CreateStudent);
router.delete('/delete/:id',DeleteStudent);

export default router;