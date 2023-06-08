const express = require("express");
const Person = require("../models/userSchema");
const {AddUsers,GetUsers,GetUserByID,UpdateUserByID,DeleteUserByID} =require('../Controllers/Controllers')

const router = express.Router();

//Create and Save a Record of a Model:
router.post("/person",AddUsers);

// Get all collections in database
router.get("/person",GetUsers);

// Get user by ID
router.get("/person/:id",GetUserByID);

// Update the user by id
router.put('/person/:id', UpdateUserByID);

// Delete the user by id
router.delete('/person/:id',DeleteUserByID)
  
module.exports = router;