const express = require('express')
const app = express()
const port = 3000

app.get('/cat', (req, res) => {
  res.send('Woof')
})

app.get('/dog', (req, res) => {
  res.send('Woof')
})

app.post('/dog', (req, res) => {
  res.send('The Dogs')
})


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that! URLdoesnot exist")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke! Internal server error')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))