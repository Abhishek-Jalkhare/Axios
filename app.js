const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/test', (req, res) => {
    res.send('Hello Test!');
  });

 app.post('/test', (req, res) => {  
    console.log(req.body); 
  }); 

app.listen(3000, () => {       
    console.log('Server is running on port 3000');
    } );   