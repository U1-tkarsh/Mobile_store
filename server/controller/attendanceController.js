const express = require("express");
const Subject = require("../model/attendanceModel");
const asyncHandler = require("express-async-handler");

// http://localhost:5001/api/attendance/addSubject
const addSubject = asyncHandler(async (req, res) => {
  const { subject } = req.body;

  const subjects = await Subject.create({
    subject,
  });

  res.status(201).json(subjects);
});

// http://localhost:5001/api/attendance/updateSubject/:id
const updateSubject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { newSubjects } = req.body;

  try {
    const subject = await Subject.findById({ _id: id });

    if (!subject) {
      res.status(400);
      throw new Error("Subject not found");
    }

    subject.subject = [...subject.subject, ...newSubjects];

    await subject.save();

    return res.status(200).json({
      success: true,
      message: "Subjects updated successfully",
      subject,
    });
  } catch (error) {
    console.error("Error occurred", error);
    return res.status(500).json({ success: false, error });
  }
});

// http://localhost:5001/api/attendance/getSubject
const getSubject = async (req, res) => {
  const subject = await Subject.find({});

  res.status(200).json({ success: true, message: subject });
};


// http://localhost:5001/api/attendance/dynamicAttendance/:id
const dynamicAttendance = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  try{
    const subject = await Subject.findById({ _id: id });

    if (!subject) {
      res.status(400);
      throw new Error("Subject not found");
    }

  if (action !== "increase" && action !== "decrease") {
    return res.status(400).json({ success: false, message: "Invalid action" });
  }

  if (action === "increase") {
    subject.currentAttendance = (subject.currentAttendance || 0) + 1;
    subject.totalAttendance = (subject.totalAttendance || 0) + 1;
  } else if (action === "decrease") {
    if (subject.currentAttendance > 0) {
      subject.currentAttendance = (subject.currentAttendance || 0) - 1;
      subject.totalAttendance = (subject.totalAttendance || 0) + 1;
    } else if (subject.currentAttendance === 0) {
      subject.currentAttendance = 0;
      subject.totalAttendance = (subject.totalAttendance || 0) + 1;
    }
  } else {
    return res.status(400).json({ success: true, message: "Invalid action" });
  }

  await subject.save();
  res.status(200).json(subject);
} catch (err) {
    console.error("error", err);
}
});

module.exports = { dynamicAttendance, addSubject, updateSubject, getSubject };
