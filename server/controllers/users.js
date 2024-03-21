

const express = require('express');
const app = express.Router();

app
    .get('/', (req, res) => {
        res.send([
            { name: 'Silva', age : 25 },
            { name: 'Ronaldo', age : 35 },
            { name: 'Messi', age : 33 },
        ])
    })
   
        .get('/test', (req, res) => {
            res.send({
                name: 'Silva',
                age: 25
            })
            
        }),


    module.exports = {
    greet, village
}
