const express = require('express');
const { sync, models: { User, Department } } = require('../db/index');
const { seed, db} = require('../db/index');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());

app.get('/api/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users)
})
app.get('/api/departments', async (req, res) => {
    const departments = await Department.findAll();
    res.send(departments)
})

db.sync()
    .then(() => {
        seed()
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is now listening on ${PORT}`);
        })
    })

// app.listen(PORT, () => {
//     console.log(`server is now listening on ${PORT}`);
// })