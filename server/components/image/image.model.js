const mongoose = require('mongoose');

const _imageSchema = new mongoose.Schema({
    description: { type: String }
}, { versionKey: false });

module.exports = _imageSchema;