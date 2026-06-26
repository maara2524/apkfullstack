import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
            'Data Base Successfully Connected\nURL:' + process.env.MONGO_URL,
        );
    } catch (err) {
        console.log(err.message);
    }
}

export default connectDB;
