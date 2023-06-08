const Person = require('../models/userSchema')




//Post user/users to database
const AddUsers = async (req,res)=>{
    try {
        const newPersons = await Person.create(req.body);
        res.send({ message: 'Users Added', data: newPersons });
      } catch (err) {
        console.error(err);
        res.status(500).send("server error");
      }
}
// Get all collections in database
const GetUsers = async(req,res)=>{
    try{
        const users =await Person.find()
        res.send({message:`${users.length} users in database`, data:users})
    } catch(err){
        console.error(err);
        res.status(500).send('server error')
    }
}
// Get user by ID
const GetUserByID =async(req,res)=>{
    try{
        const searchedUser =await Person.findById(req.params.id)
        res.send({message:'user result',data:searchedUser})
    }catch(err) {
        console.error(err)
        res.status(404).send({message:'user not found'});
    }
}
// Update the user by id
const UpdateUserByID = async (req, res) => {
    try {
      const originalUser =await Person.findById(req.params.id)  
      const updatedUser = await Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      res.send({ old_version: originalUser, new_version: updatedUser });
    } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
    }
  }
// Delete the user by id
const DeleteUserByID =async(req,res)=>{
    try{
        const deletedUser =await Person.findByIdAndRemove(req.params.id)
        res.send({message:`${deletedUser.name} is successfully deleted`, user_deleted:deletedUser})
    }catch(err){
        console.error(err);
        res.status(500).send('server error')
    }
}  


module.exports ={AddUsers,GetUsers,GetUserByID,UpdateUserByID,DeleteUserByID}