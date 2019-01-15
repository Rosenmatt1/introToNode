const express = require('express')
const app = express()
const port = 3000

let dogs = [{
  id: 1,
  name: "Teddy"
}]
// ["Fred", "Timmy", "Lefty"]

app.use(express.static('public'))

app.get('/cat', (req, res) => {
  res.send('Woof')
})

app.get('/dog', (req, res) => {
  res.send('Woof')
})

app.get('/dog/:id', (req, res) => {
  res.send(dogs[req.param.id - 1])
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