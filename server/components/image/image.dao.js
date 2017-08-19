const mongoose = require('mongoose');
const Promise = require('bluebird');
const imageSchema = require('./image.model');
const _ = require('lodash');

imageSchema.statics.createNew = image => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(image)) {
            return reject(new TypeError('Image is not a valid object.'));
        }

        let _image = new Image(image);
        _image.save((err, saved) => {
            return err ?
                reject(err) :
                resolve(saved);
        });
    });
}

imageSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        Image
            .find()
            .exec((err, images) => {
                err ? reject(err)
                    : resolve(images);
            });
    });
}

imageSchema.statics.getOneById = (_id) => {
    return new Promise((resolve, reject) => {
        Image
            .findById(_id)
            .exec((err, image) => {
                err ? reject(err)
                    : resolve(image);
            });
    });
}

imageSchema.statics.removeById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Image
            .findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err)
                    : resolve();
            });
    });
}

imageSchema.statics.getRange = (start, limit) => {
    return new Promise((resolve, reject) => {
        Image
            .find()
            .limit(parseInt(limit))
            .skip(parseInt(start))
            .exec((err, images) => {
                return err ?
                    reject(err) :
                    resolve(images);
            });
    });
}

const Image = mongoose.model('image', imageSchema);

module.exports = Image;