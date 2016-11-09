// importing configs
import * as db from '../configs/config';

// initializing user schema
var userSchema = db.mongoose.Schema({

    fullname        : String,
    username        : { type : String, unique : true },
    email           : { type : String, unique : true },
    password        : String,
    source          : { type : String, default : 'local' },
    profileId       : { type : String, default : null },
    profileToken    : { type : String, default : null },
    profilePic      : String,
    isActive        : { type : Boolean, default : true },
    createdOn       : { type : Date, default : Date.now }

})

// creating model
var User = db.mongoose.model('Users', userSchema);

// register new user
var register = (formdata, callback) => {

    var user = new User(formdata);

    user.save( (err, res) => {

        if(err){

            throw err;
           
        } else {
           
            callback(res)
        }

    } )   

}


// exporting modules
export {

    register as register

}