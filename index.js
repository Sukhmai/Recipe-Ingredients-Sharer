const fs = require('fs');
const express = require('express');
const app = express();
let http = require('http');
let server = http.createServer(app);
server.listen(3000);
const cors = require('cors');

app.use(cors({origin:"*"}));
app.get('/loadRecipes', function (req, res) {
  fs.readFile('recipes.txt', (err, data) => {
    res.send(data.toString());
  })
})

app.get('/addRecipe', function (req, res) {
  fs.appendFile('recipes.txt', req.query.ingredients, (err) => {
    if (err) {
      console.log(err)
    }
  }) 
})
