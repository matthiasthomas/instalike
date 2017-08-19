const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validators = require('mongoose-validators');
const uniqueValidator = require('mongoose-unique-validator');

const _userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, index: true, validate: validators.isEmail() },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    archived: { type: Boolean, default: false }
}, { versionKey: false });

_userSchema.plugin(uniqueValidator);

_userSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = _userSchema;