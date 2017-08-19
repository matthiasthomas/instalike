const express = require('express');
const router = express.Router();
const user_ctrl = require('./user.ctrl');

router.route('/')
    .get(user_ctrl.getAll)
    .post(user_ctrl.createNew);

router.route('/:id')
    .get(user_ctrl.getOneById)
    .delete(user_ctrl.removeById);

exports.router = router;