const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        return res.json({
            success: true,
            message: 'User ENDPOINT here'
        });
    });

exports.router = router;