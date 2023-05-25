const express = require('express');
const {
  getAllScholarships,
  addScholarship,
  getSingleScholarship,
  updateScholarship,
  deleteScholarship
} = require('../controller/scholarshipController');

const router = express.Router();

// GET all scholarships
router.get('/', getAllScholarships);

// POST new scholarship
router.post('/', addScholarship);

// GET single scholarship by ID
router.get('/:id', getSingleScholarship);

// PUT update scholarship by ID
router.put('/:id', updateScholarship);

// DELETE scholarship by ID
router.delete('/:id', deleteScholarship);

module.exports = router;
