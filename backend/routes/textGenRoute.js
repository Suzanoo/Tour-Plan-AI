const express = require('express');

const { textCompletion } = require('../controller/textCompletion');

const router = express.Router();

// Protect routes
router.post('/', textCompletion);

module.exports = router;
