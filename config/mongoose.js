const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL);

        console.log('MongoDB connection successful')
    } catch(err) {
        console.log(`Error conecting to mongoDB message is ${err.message}`)
    }
}

module.exports = connectMongoDB;