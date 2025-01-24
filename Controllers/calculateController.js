const express = require("express");
require("dotenv").config();
const calculateModel = require("../models/calculate");

const getAllCalculate = async (req, res) => {
  try {
    const response = await calculateModel.find();

    if (response) {
      res.status(200).json({ success: true, data: response });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createCalculate = async (req, res) => {
  try {
    const miniOrder = new calculateModel({
      calculateName: req.body.calculateName,
      calculatePrice: req.body.calculatePrice,
    });

    const BigOne = await miniOrder.save();
    if (BigOne) {
      res.status(200).json({ success: true, data: BigOne });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateCalculate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = {
      calculateName: req.body.calculateName,
      calculatePrice: req.body.calculatePrice,
    };

    const updatedCalculate = await calculateModel.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true } // Return the updated document
    );

    if (updatedCalculate) {
      res.status(200).json({
        success: true,
        data: updatedCalculate,
        message: "Successfully updated!",
      });
    } else {
      res.status(404).json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteCalculate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecc = await calculateModel.findByIdAndDelete(id);
    if (deletecc) {
      res.status(200).json({ success: true, message: "Successfully Deleted" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Not Deleted Successfully" });
  }
};

module.exports = {
  getAllCalculate,
  createCalculate,
  updateCalculate,
  deleteCalculate,
};
