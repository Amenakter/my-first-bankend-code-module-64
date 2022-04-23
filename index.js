const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello brother, How are you?');
})

const users = [
    { id: 1, name: 'Tania Akter', email: "tania@gmail.com" },
    { id: 2, name: 'tanjila Akter', email: "tanjila@gmail.com" },
    { id: 3, name: 'Maksuda Akter', email: "Maksuda@gmail.com" },
    { id: 4, name: 'Tabassum Akter', email: "Tabassum@gmail.com" }
]

app.get('/fruites', (req, res) => {
    res.send(['mango', 'banana', 'orange', 'grape', 'pineapple'])
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        console.log(req.query);
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {

        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    const id = (req.params.id)
    const user = users.find(user => user.id == id)
    res.send(user)
})
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('hello is running');
})