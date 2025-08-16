const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['donor', 'receiver_individual', 'receiver_org', 'admin'], default: 'donor' },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  },
  verified: { type: Boolean, default: false } // for organizations
}, { timestamps: true });

userSchema.index({ location: '2dsphere' }); // for nearby search

module.exports = mongoose.model('User', userSchema);
