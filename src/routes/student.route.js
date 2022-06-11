'use strict';

const express = require('express');
const { Student } = require('../models/index.model');
const studentRouter = express.Router();

// all Routes

studentRouter.get('/student', getAllStudents);
studentRouter.get('/student/:id', getOneStudent);
studentRouter.post('/student', addStudent);
studentRouter.put('/student/:id', updateStudent);
studentRouter.delete('/student/:id', deleteStudent);

async function getAllStudents(req, res) {
  const students = await Student.read();
  res.status(200).json(students);
}
async function getOneStudent(req, res) {
  const student_id = parseInt(req.params.id);
  const student = await Student.read(student_id);
  res.status(200).json(student);
}
async function addStudent(req, res) {
  const student = await Student.create(req.body);
  res.status(201).json(student);
}

async function updateStudent(req, res) {
  const student_id = parseInt(req.params.id);
  const studentInfo = req.body;
  const foundStudent = await Student.read(student_id);
  if (foundStudent) {
    const updatedStudent = await foundStudent.update(studentInfo);
    res.status(201).json(updatedStudent);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
}
async function deleteStudent(req, res) {
  let student_id = parseInt(req.params.id);
  const foundStudent = await Student.delete(student_id);
  res.status(204).send('Record deleted');
}
module.exports = studentRouter;
