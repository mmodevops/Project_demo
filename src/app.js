const express = require('express');
// require('express) ben trong modulues de luu vao bien express 
const app = express();
//khi khoi tao function sau khi khoi tao no se tra ve 1 doi tuong de xay dung 1 website 
const port = process.env.PORT || 3000
//Bien port de minh co the khoi chay theo cong tuyen 3000
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
app.use(morgan('combined'));
// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})


app.listen(port, () => {
  console.log(`App listening at ${port}`)
  //http:localhost:3000
})