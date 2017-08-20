const mongoose = require('mongoose');

const _imageSchema = new mongoose.Schema({
    description: { type: String },
    extension: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    archived: { type: Boolean, default: false }
}, { versionKey: false });

module.exports = _imageSchema;