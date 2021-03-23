const express = require('express');
const router = express.Router();

/* GET students listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});
router.get('/:id?', (req, res, next) => {
    res.json(`respond id ${req.params.id} - query: ${req.query.search}`);
});

module.exports = router;
