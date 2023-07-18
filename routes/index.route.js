const express = require('express');
const router = express.Router();

const usersRouter = require("./users.route.js");
const itemsRouter = require('./items.route.js');
const commentsRouter = require('./comments.route.js');

router.get('/', (req, res) => {
    res.send("미니프로젝트 api 페이지입니다.");
});

router.use('/users', [usersRouter]);
router.use('/items', [itemsRouter, commentsRouter]);

module.exports = router;