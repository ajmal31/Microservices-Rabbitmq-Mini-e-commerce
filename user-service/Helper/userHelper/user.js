
import user from '../../model/user/userSchema.js'
export default{
   
    getUser:(data)=>{

        const res=user.findOne({email:data.email})
        return res ? res :false
        
    },
    createUser:async(data)=>{

        const {username,email,password}=data
        const User=new user({
            username:username,
            email:email,
            password:password
        }) 
        const response=await User.save()  
        return response
    },
    userLogin:async(data)=>{

        const {email,password}=data
        let res= await user.findOne({email:email})
        console.log('response from datatbse when user try to loggin',res)
        return res ? res.password === password :false
        
         

    },
    getAllUsers:(req,res)=>{
        let a= ' i got all user details'
        return a
    }

}