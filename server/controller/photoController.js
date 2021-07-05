const { Photo, Album } = require('../models')

class photoController {
    static showAll(req,res,next) { // get all photos
        Photo.findAll({
            include: {
                model: Album,
                attributes: ["id", "title"]
            },
            order: [['id']]
        })
        .then(photos => {
            res.status(200).json(photos)
        })
        .catch(err => {
            next({
                code: 500,
                message: "Internal server error"
            })
        })
    }

    static addPhoto(req,res,next) { // add new photo
        const newPhoto = {
            title : req.body.title,
            url: req.body.url,
            thumbnailUrl: req.body.thumbnailUrl,
            albumId: req.body.albumId,
        }
        Photo.create(newPhoto)
        .then(Photo => {
            res.status(201).json(Photo)
        })
        .catch(err => {
            console.log(err, " <<< masuk error")
            if (err.message) {
                next({
                    code: 400,
                    message: err
                })
            } else {
                next({
                    code: 500,
                    message: "Internal server error"
                })
            }
        })
    }

    static findbyId(req, res,next) { //get photo by id
        Photo.findOne({
            where: {
                id: +req.params.id
            },
            include: {
                model: Album,
                attributes: ["id", "title"]
            }
        })
        .then(Photo => {
            res.status(200).json(Photo)
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }

    static update(req,res,next) { // update photo property
        Photo.update(req.body, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static updateOne(req,res,next) { // update albumId of photo 
        Photo.update({albumId: req.body.albumId}, {
            where: {
                id : +req.params.id
            },
            returning: true
        })
        .then(photo => {
            res.status(200).json(photo)
            
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }

    static delete(req,res,next) { // delete Album
        Photo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(Photo => {
            res.status(200).json({ message: "Photo has been deleted"})
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }
    
}

module.exports = photoController