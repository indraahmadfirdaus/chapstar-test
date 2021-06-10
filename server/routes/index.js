const router = require('express').Router();
const ApplicationController = require('../controllers/ApplicationController')

router.get('/', (req, res) => res.send('connected to router'))

router.get('/aplikasi', ApplicationController.getApplications)

router.get('/aplikasi/:id', ApplicationController.getApplicationById)

router.post('/aplikasi', ApplicationController.postApplication)

router.put('/aplikasi/:id', ApplicationController.updateApplication)

router.delete('/aplikasi/:id', ApplicationController.deleteApplication)

module.exports = router