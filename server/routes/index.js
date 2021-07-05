const router = require('express').Router()
const userController = require('../controller/userController')
const photoController = require('../controller/photoController')
const albumController = require('../controller/albumController')
const {authenticate, adminAuthorize} = require('../middlewares/auth.js')

router.post('/register', userController.register) // done
router.post('/login', userController.login) // done

router.use(authenticate)

router.get('/photos', photoController.showAll) // done
router.get('/photos/:id', photoController.findbyId) // done
router.get('/albums', albumController.showAll) // done
router.get('/albums/:id', albumController.findbyId) // done

router.post('/photos', adminAuthorize, photoController.addPhoto) // done
router.put('/photos/:id', adminAuthorize, photoController.update) // done
router.patch('/photos/:id', adminAuthorize, photoController.updateOne) // done
router.delete('/photos/:id', adminAuthorize, photoController.delete) // done

router.post('/albums', adminAuthorize, albumController.addAlbum) // done
router.patch('/albums/:id', adminAuthorize, albumController.updateOne) // done
router.delete('/albums/:id', adminAuthorize, albumController.delete) // done


module.exports = router