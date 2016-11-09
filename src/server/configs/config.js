// importing mongoose
import mongoose from 'mongoose';

// defining connection string
var connect = () => {

    mongoose.connect(process.env.CONNECTION_STRING);

}

// connection to database
connect();

// exporting modules
export {

    mongoose as mongoose

}