const User = require('../model/user');
const validator = require('validator');

const userController = {

    register:async(req,res)=>{
        try {
            console.log(req.body);
            const {name, email, address, parent_user, children_user, refferal_code, refferal_bonus} = req.body;

            // finding user's email
            const validate = validator.isEmail(email);
            if (!validate) {
                return res.status(400).json({msg:'email is not valid'})
            }
            
            const user = await User.findOne({email})
            if (user) {
                return res.status(400).json({msg:'email is already exists'})
            }

            const newUser = new User({
                name:name,
                email:email,
                address:address,
                parent_user:parent_user,
                children_user:children_user,
                refferal_bonus:refferal_bonus,
                refferal_code:refferal_code
            })
            await newUser.save();
            return res.status(201).json({msg:'user login successfully', data:newUser})
            
        } catch (error) {
            return res.status(500).json({msg:error.msg})
        }
    },


    getUser:async (req,res)=>{
        try {
            console.log(req.body);
            const user = await User.find();
             if (!user) {
                return res.status(400).json({msg:'user does not exists'})
            }
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({msg:error.msg})
        }
    },
}

module.exports = userController;