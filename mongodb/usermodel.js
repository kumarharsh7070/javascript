const mongo = require("mongoose");

mongo.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userschema = mongo.Schema({
    name:String,
    username:String,
    email:String
})

module.exports =  mongo.model("harsh",userschema);