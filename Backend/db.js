const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&serverSelectionTimeoutMS=2000";

const connectToMongo = () => {
    //Connection
    mongoose.connect(mongoURI);
    console.log("Connected to Server");
}
module.exports = connectToMongo;