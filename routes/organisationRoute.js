const express = require('express');
const { getAllOrganizations, getSingleOrganization, addOrganization, updateOrganization, deleteOrganization } = require('../controller/organisationController');

const router = express.Router();

// GET all scholarships
router.get('/',getAllOrganizations);

// POST new scholarship
router.post('/',addOrganization );

// GET single scholarship by ID
router.get('/:id', getSingleOrganization);

// PUT update scholarship by ID
router.put('/:id',updateOrganization);

// DELETE scholarship by ID
router.delete('/:id', deleteOrganization);

module.exports = router;
