
const url = 'mongodb://localhost:27017/mydatabase';
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', ejs);

const getDataByName = require('./public/component/priorauth');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');



// Parse incoming request bodies as form data
app.use(bodyParser.urlencoded({ extended: true }));
const myDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create a model for your data
const MyData = mongoose.model('Mydata', myDataSchema);

// Create an Express app


// Parse incoming request bodies as JSON
app.use(bodyParser.json());

const createDatabase = () => {
  
  MongoClient.connect(url)
    .then((client) => {

       const db = client.db();
       console.log("connected");
       
      const collection = db.collection('mycollection');
      
       //const document = { name: 'John Doe', age: 30 };
       app.post('/submit-form', (req, res) => {
        // Read data from the request body
        const { name, email, request_id, date, urgency, services, resq ,status} = req.body;
        console.log(req);
        console.log(name);
        console.log(req.body);
        console.log(name);
        console.log(resq)
  // Create a new document in your database
        const data = {
          name: name,
          email: email,
          request_id: request_id,
          date: date,
          urgency: urgency,
          status: status,
          services: services,
          resq: resq,
        };
  
  // Do something with the data object, such as storing it in your database
  
  // Send a response back to the client
      
        
       
        // Save the document to the database
        collection.insertOne(data)
        .then((result) => {
          console.log('form inserted', result.insertedId);
          // console.log(date)
          // client.close();
        })
        .catch((err) => {
          console.log('Error inserting from', err);
          // client.close();
        });

        res.send("form submmited");
       
      });
          

      
    })
    .catch((err) => {
      console.log('Error connecting to database:', err);
    });
   
};
createDatabase();



 
// Handle form submission

// Call the createDatabase function

var promiseObject=getDataByName("ram")
  .then((promiseObject) => {
    console.log(promiseObject);
    return promiseObject;
  })
  .catch((err) => {
    console.log(err);
  });


app.use(express.static(__dirname + '/public'));

app.get('/Home', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
// app.get('/priorauthorization', function(req, res) {
//     res.sendFile(__dirname + '/public/component/priorauth.html');
// });

app.get('/priorauthorization', (req, res) => {
   
   console.log("byeee")
  console.log(promiseObject);
  promiseObject.then(data => {
    const datai = data;
    // You can now access the `datai` object here and its properties using dot notation
   // 'abodh'
   res.render('./index.ejs',  {datai} );
  });

  
  
});
// app.get('/priorauthorization', (req, res) => {
//   const title = 'My Website';
//   res.render('./views/index.ejs', { title });
// });


app.get('/profile', function(req, res) {
    res.sendFile(__dirname + '/public/component/myprofile.html');
});
app.get('/claims', function(req, res) {
    res.sendFile(__dirname + '/public/component/claims.html');
});
app.get('/medical', function(req, res) {
    res.sendFile(__dirname + '/public/component/medical.html');
});


app.listen(4444);
console.log('Open this link http://localhost:4444');
