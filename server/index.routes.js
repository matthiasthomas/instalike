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

exports.router = router;