import jwt from 'jsonwebtoken'


const isAuthenticate=async(req, res, next)=> {
    console.log('helooooo');
    const secret_key='ajmal'
    let  token = req?.headers['authorization']?.split(' ')[1]
    console.log(token)

    if (!token) {
        res.status(401).send('Please login and move on');
    } else {

        
            jwt.verify(token,secret_key,(err,user)=>{
                if(err) res.status(404).send('un authrized user')
                 else{
                    req.user=user
                    next()
                }
                
            })
           
            
        
        

    }
}

export default isAuthenticate;
