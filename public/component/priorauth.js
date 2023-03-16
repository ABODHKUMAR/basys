const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
const collectionName = 'mycollection';

async function getDataByName(name) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    console.log("connected to data base")
    const data = await collection.findOne({  name });
    app.get('/priorauthorization', (req, res) => {
      res.render('priorauth.ejs', { data });
    });
    return data;
  } catch (err) {
    console.error(err);
  } 
}


  module.exports = getDataByName;


