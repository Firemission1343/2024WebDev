const express = require('express');
const users = require('./controllers/users.js');
/* 
* Silva
*/
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(users.greet())
})

.use('/users', users)


app.get('/test', (req, res) => {
 res.send('This is a test')
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});

