import express from 'express';
import {
    CreateTeacher,
    AllTeachers,
    UpdateTeacher,
    DeleteTeacher
} from '../Controller/teacher.js'
const router=express.Router();

router.get('/all',AllTeachers);
router.put('/update/:id',UpdateTeacher);
router.post('/create/:username/:email/:password',CreateTeacher);
router.delete('/delete/:id',DeleteTeacher);

export default router;