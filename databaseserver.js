const url = 'mongodb://localhost:27017/mydatabase';
const MongoClient = require('mongodb').MongoClient;


const createDatabase = () => {
  
  MongoClient.connect(url)
    .then((client) => {
      const db = client.db();
      bd=db;
      const collection = db.collection('mycollection');
      
       const document = { name: 'John Doe', age: 30 };
      
      collection.insertOne(document)
        .then((result) => {
          console.log('form inserted', result.insertedId);
          client.close();
        })
        .catch((err) => {
          console.log('Error inserting from', err);
          client.close();
        });
    })
    .catch((err) => {
      console.log('Error connecting to database:', err);
    });
   
};

