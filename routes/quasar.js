const { Router } = require('express');
const { getQuasar, topSecret } = require('../controllers/quasar');

const router = Router();

/*
 * root test route 
 */
router.get('/', getQuasar);

/*
 *   Level 2 route
 */
router.post('/top_secret/', topSecret);

module.exports = router;