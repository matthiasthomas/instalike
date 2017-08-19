const mongoose = require('mongoose');

const _imageSchema = new mongoose.Schema({
    description: { type: String },
    extension: { type: String, required: true }
}, { versionKey: false });

module.exports = _imageSchema;