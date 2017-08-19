const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'API is working!'
    });
});

const user_routes = require('./components/user/user.routes').router;
router.use('/user', user_routes);

const image_routes = require('./components/image/image.routes').router;
router.use('/image', image_routes);

exports.router = router;