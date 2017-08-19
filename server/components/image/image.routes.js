const express = require('express');
const router = express.Router();
const image_ctrl = require('./image.ctrl');
const multer = require('multer');
const path = require('path');

var upload = multer({
    dest: process.env.APP_TMP_FOLDER,
    fileFilter: function (req, file, cb) {
        return cb(null, ([".png", ".jpg", ".jpeg"].indexOf(path.extname(file.originalname)) > -1));
    }
});

router.route('/')
    .post(upload.single('image'), image_ctrl.createNew);

router.route('/:start/:limit')
    .get(image_ctrl.getRange);

router.route('/:id')
    .get(image_ctrl.getOneById)
    .delete(image_ctrl.removeById);

exports.router = router;