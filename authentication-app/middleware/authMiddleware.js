const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(token){
            let user = jwt.verify(token, process.env.SECRET_KEY)
            req.userId = user.id;
        }else{
            res.status(401).json({message : "Unauthorized"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message : "Unauthenticated User"})
    }
}

module.exports = auth;