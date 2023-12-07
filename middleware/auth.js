

const jwt = require('jsonwebtoken')

const authenticationmiddleware = async (req,res,next) =>{

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(404).json({msg : 'There is some error'})
    }  

    const token  = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const{id , username} = decoded
        req.user = {id,username}
        next()
    } catch (error) {
        res.status(500).json({msg : error})
    }

}

module.exports = authenticationmiddleware