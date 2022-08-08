const { Router } = require('express');
const { getQuasar, topSecret } = require('../controllers/quasar');

const router = Router();

router.get('/', getQuasar);

router.post('/top_secret/', topSecret);

router.put('/', function (req, res) {
    res.status(200).json({
        "msg":'Hello World NODEJS EXPRESS PUT'})
});

module.exports = router;