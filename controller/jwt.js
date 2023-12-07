const jwt = require('jsonwebtoken')

const login = async (req,res)=>{

    const {username,password} = req.body

    
        if(!username || !password){
            return res.status(404).json({msg : 'Please enter the Username and Password' })
        }
        
     const id = new Date().getDate

     const token = jwt.sign({id , username},process.env.JWT_SECRET,{expiresIn : '30d'})


    res.status(201).send({msg : 'Login succesful',token})
}

const dashboard = async (req,res)=>{
    res.status(201).json({msg : 'Here is the data your are looking for'})

}


module.exports = {
    login,
    dashboard,

}