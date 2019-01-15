const express = require('express')
const app = express()
const port = 3000

app.get('/cats', (req, res) => {
  res.send('Woof')
})

app.get('/dogs', (req, res) => {
  res.send('Dog')
})


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))