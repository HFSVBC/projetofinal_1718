const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('Bye Felicia');
});

module.exports = router;