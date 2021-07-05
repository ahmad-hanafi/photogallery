const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authenticate = (req, res, next) => {
    let decoded = verifyToken(req.headers.access_token)
    User.findOne({
        where: { id: decoded.id, email: decoded.email }
    })
        .then(user => {
            req.currentUser = { id: user.id, email: user.email, roles: user.roles }
            next()
        })
        .catch(err => {
            next({
                code: 401,
                message: "Unathorize"
            })
        })
}

const adminAuthorize=(req,res,next)=>{
    // console.log(req.currentUser.roles)
    if(req.currentUser.roles !== 'Admin'){
        next({
            code:401,
            message: "Admin only",
          });
    }
    else{
        next()
    }
}

module.exports = {
    authenticate,
    adminAuthorize
}