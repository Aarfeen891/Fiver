const mongoose = require('mongoose');
const mongodb = require("mongodb").MongoClient;

async function connectToMongo() {
    try {
      await mongoose.connect("mongodb+srv://ESP:ESP@clusteresp.pczh54m.mongodb.net/", { useNewUrlParser: true });
      console.log('Connected to MongoDB');
    } catch (err) {
       console.error('Error connecting to MongoDB', err);
    }
  }
  
module.exports = connectToMongo;
