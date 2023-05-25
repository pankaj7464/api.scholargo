const Scholarship = require('../schema/Scholarship');

// Retrieve all scholarships
const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scholarships.' });
  }
};

// Create a new scholarship
const addScholarship = async (req, res) => {
  try {
    const scholarshipData = req.body;
    const scholarship = new Scholarship(scholarshipData);
    const createdScholarship = await scholarship.save();
    res.status(201).json(createdScholarship);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create scholarship.' });
  }
};

// Retrieve a single scholarship by ID
const getSingleScholarship = async (req, res) => {
  try {
    const scholarshipId = req.params.id;
    const scholarship = await Scholarship.findById(scholarshipId);
    if (!scholarship) {
      res.status(404).json({ error: 'Scholarship not found.' });
    } else {
      res.json(scholarship);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scholarship.' });
  }
};

// Update a scholarship by ID
const updateScholarship = async (req, res) => {
  try {
    const scholarshipId = req.params.id;
    const updatedData = req.body;
    const scholarship = await Scholarship.findByIdAndUpdate(scholarshipId, updatedData, { new: true });
    if (!scholarship) {
      res.status(404).json({ error: 'Scholarship not found.' });
    } else {
      res.json(scholarship);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update scholarship.' });
  }
};

// Delete a scholarship by ID
const deleteScholarship = async (req, res) => {
  try {
    const scholarshipId = req.params.id;
    const scholarship = await Scholarship.findByIdAndDelete(scholarshipId);
    if (!scholarship) {
      res.status(404).json({ error: 'Scholarship not found.' });
    } else {
      res.json(scholarship);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete scholarship.' });
  }
};

module.exports = {
  getAllScholarships,
  addScholarship,
  deleteScholarship,
  getSingleScholarship,
  updateScholarship
};
