import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    mail: String,
});

const User = mongoose.model('User', userSchema);

export default User;
