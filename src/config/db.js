const mongoose = require('mongoose')
const { MONGO_CONNECTION_PATH } = require('./env')


class MONGO_DB {
    
  async  connect(){

    try {
        console.log("Connecting...");
        await mongoose.connect(MONGO_CONNECTION_PATH)
        console.log("Connected");
    } catch (error) {

        console.log(error);

    }
    }
}

module.exports = new MONGO_DB

 