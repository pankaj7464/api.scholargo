const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  scholarshipName: String,
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  descriptions: String,
  scholarshipAmount: {
    amount: Number,
    frequency: {
      type: String,
      enum: ['monthly', 'yearly', 'one-time']
    }
  },
  eligibility: String,
  benefit: String,
  selectionCriteria: String,
  importantLink: String,
  startDate: Date,
  deadline: Date,
});




const Scholarship = mongoose.model('Scholarship', scholarshipSchema);



module.exports = Scholarship