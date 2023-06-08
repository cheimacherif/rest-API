const mongoose=require('mongoose')



const userSchema = mongoose.Schema({
    name: {type:String, required:true} ,
    age:Number,
    Email:String
})

const Person =mongoose.model('Person',userSchema)


module.exports =Person