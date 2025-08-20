// models/Interview.js
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: String,
  question: String,
  answerText: String,
  score: { type: Number, default: 0 }
}, { _id: false });

const interviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  answers: [answerSchema],
  overallScore: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Interview', interviewSchema);
