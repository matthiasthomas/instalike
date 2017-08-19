const mongoose = require('mongoose');
const Promise = require('bluebird');
const userSchema = require('./user.model');
const _ = require('lodash');

userSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        User
            .find()
            .exec((err, users) => {
                err ? reject(err)
                    : resolve(users);
            });
    });
}

userSchema.statics.getOne = (_query) => {
    return new Promise((resolve, reject) => {
        User
            .findOne(_query)
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });
}

userSchema.statics.getOneById = (_id) => {
    return new Promise((resolve, reject) => {
        User
            .findById(_id)
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });
}

userSchema.statics.createNew = (user) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(user)) {
            return reject(new TypeError('User is not a valid object.'));
        }

        let _user = new User(user);

        _user.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

userSchema.statics.removeById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        User
            .findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err)
                    : resolve();
            });
    });
}

const User = mongoose.model('user', userSchema);

module.exports = User;
