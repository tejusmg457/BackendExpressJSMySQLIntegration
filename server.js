import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';


const app = express();
const port=process.env.port || 3000;

app.get('/', (req, res) => {
  res.send("helloworld");
});

app.listen(port, () =>{
  console.log("application running on port : "+port);
})

const dbConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'students'
});

dbConnection.connect((err) => {
  if(err){
    console.log(err.stack);
    return;
  }console.log("connected to SQL : "+ dbConnection.threadId); 
});

app.get('/api/users', (req, res) => {
  dbConnection.query('select * from studentinfo', (err, results)=>{
    if(err){
      console.error(err.stack);
      res.status(500).send('error fetching users');
      return;
    }
    res.json(results);
  });
});