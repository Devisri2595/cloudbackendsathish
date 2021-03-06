const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email : {type : String, required:true,unique:true},
    password : {type : String, required:true},
    first_name:{type: String, required:true},
    last_name:{type: String, required:true},
    designation:{type: String, required:true},
    division:{type:String, required:true},
    contactnumber:{type:String, required:true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);