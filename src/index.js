const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Welcome to the home page')
})

app.get('/users', (req, res) => {
  res.send('User page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
