const express = require ('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'local',
    password: '',
    database: 'CitharaAuth'
})

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    db.query(
        'INSERT INTO CitharaAuth (username, password) VALUES (?,?)', 
        [username, password], 
        (err, result) => {
        console.log(err)
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    db.query(
        'SELECT * FROM auth WHERE username = ? AND password = ?', 
        [username, password], 
        (err, result) => {
            if (err) {
                console.log({err: err})
            } 
            if (result) {
                res.send(result)
            } else {
                res.send({message: 'Wrong username or password'})
            }            
        }
    )
})

app.listen(3001, () => {
    console.log("server is running on port 3001");
});