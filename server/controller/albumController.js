const { Photo, Album } = require('../models')

class albumController {
    static showAll(req,res,next) { // get all Album
        Album.findAll({
            include: {
                model: Photo
            }
        })
        .then(album => {
            res.status(200).json(album)
        })
        .catch(err => {
            next({
                code: 500,
                message: "Internal server error"
            })
        })
    }

    static addAlbum(req,res,next) { // add new Album
        const newAlbum = {
            title : req.body.title
        }
        Album.create(newAlbum)
        .then(Album => {
            res.status(201).json(Album)
        })
        .catch(err => {
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

    static findbyId(req, res,next) { //get Album by id
        Album.findOne({
            where: {
                id: +req.params.id
            },
            include: [{ model: Photo }]
        })
        .then(Album => {
            res.status(200).json(Album)
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }

    static updateOne(req,res,next) { // update title of album 
        Album.update({title: req.body.title}, {
            where: {
                id : +req.params.id
            },
            returning: true
        })
        .then(Album => {
            res.status(200).json(Album)
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }

    static delete(req,res,next) { // delete album
        Album.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(Album => {
            res.status(200).json({ message: "Album has been deleted"})
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not found"
            })
        })
    }
    
}

module.exports = albumController