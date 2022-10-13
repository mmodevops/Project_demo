const express = require('express')
// require('express) ben trong modulues de luu vao bien express 
const app = express()
//khi khoi tao function sau khi khoi tao no se tra ve 1 doi tuong de xay dung 1 website 
const port = 3000
//Bien port de minh co the khoi chay theo cong tuyen 3000
var morgan = require('morgan')
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at ${port}`)
  //http:localhost:3000
})