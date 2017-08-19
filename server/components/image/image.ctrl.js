const imageDAO = require('./image.dao');
const fs = require('fs-extra');
const path = require('path');

module.exports = class imageController {
    static createNew(req, res) {
        let _image = req.body;
        let _file = req.file;

        imageDAO
            .createNew(_image, path.extname(_file.originalname))
            .then(image => {
                return new Promise((resolve, reject) => {
                    fs.move(_file.path, path.join(process.env.APP_FILES_FOLDER, image._id + '.image' + path.extname(_file.originalname)), (err) => {
                        return err ?
                            reject(err) :
                            resolve(image);
                    });
                });
            })
            .then(image => res.status(200).send(image))
            .catch(error => {
                res.status(500).send(error)
            });
    }

    static getAll(req, res) {
        imageDAO
            .getAll()
            .then(images => res.status(200).send(images))
            .catch(err => res.status(500).send(err));
    }

    static getOneById(req, res) {
        let _id = req.params.id;

        imageDAO.getOneById(_id)
            .then(image => res.status(200).send(image))
            .catch(err => res.status(500).send(err));
    }

    static removeById(req, res) {
        let _id = req.params.id;

        imageDAO.removeById(_id)
            .then(() => res.status(200).send('Image removed successfully!'))
            .catch(err => res.status(500).send(err));
    }

    static getRange(req, res) {
        let _start = req.params.start;
        let _limit = req.params.limit;

        imageDAO.getRange(_start, _limit)
            .then(images => res.status(200).send(images))
            .catch(err => res.status(500).send(err));
    }
}