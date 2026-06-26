import connectDB from './config/db.js';
import User from './models/User.js';
import dotenv from 'dotenv';
import e from 'express';
import cors from 'cors';

// cross origin resource share

dotenv.config();

connectDB();

const app = e();

app.use(cors());

app.use(e.urlencoded({ extended: true }));

app.post('/api/adduser', async (req, res) => {
    const users = await User.find();
    const length = users.length;

    const newUser = await User.create({
        id: length + 1,
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
    });

    res.send(newUser);
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get('/api/users/:id', async (req, res) => {
    const users = await User.find();
    const id = req.params.id;
    const targetUser = users.find((user) => user.id == id);
    res.send(targetUser);
});

app.listen(process.env.PORT);
