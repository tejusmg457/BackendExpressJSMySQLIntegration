import express from 'express';


const app = express();
const port=3000;

app.get('/', (req, res) => {
  res.send("helloworld");
});

app.listen(port, () =>{
  console.log("application running on port : "+port);
  
})