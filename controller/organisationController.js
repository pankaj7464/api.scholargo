const Organization = require('../schema/Oraganization'); // Import the Organization model

// Retrieve all organizations
const getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organizations.' });
  }
};

// Create a new organization
const addOrganization = async (req, res) => {
  try {
    const organizationData = req.body;
    const organization = new Organization(organizationData);
    const createdOrganization = await organization.save();
    res.status(201).json(createdOrganization);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create organization.' });
  }
};

// Retrieve a single organization by ID
const getSingleOrganization = async (req, res) => {
  try {
    const organizationId = req.params.id;
    const organization = await Organization.findById(organizationId);
    if (!organization) {
      res.status(404).json({ error: 'Organization not found.' });
    } else {
      res.json(organization);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organization.' });
  }
};

// Update an organization by ID
const updateOrganization = async (req, res) => {
  try {
    const organizationId = req.params.id;
    const updatedData = req.body;
    const organization = await Organization.findByIdAndUpdate(organizationId, updatedData, { new: true });
    if (!organization) {
      res.status(404).json({ error: 'Organization not found.' });
    } else {
      res.json(organization);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update organization.' });
  }
};

// Delete an organization by ID
const deleteOrganization = async (req, res) => {
  try {
    const organizationId = req.params.id;
    const organization = await Organization.findByIdAndDelete(organizationId);
    if (!organization) {
      res.status(404).json({ error: 'Organization not found.' });
    } else {
      res.json(organization);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete organization.' });
  }
};

module.exports = {
  getAllOrganizations,
  addOrganization,
  deleteOrganization,
  getSingleOrganization,
  updateOrganization
};
