const dotenv = require("dotenv").config();
//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//schema definition
const Schema = mongoose.Schema;
//constructor
const NewScienceSchema = new Schema({
  topic: String,
  question: String,
  hint1: String,
  hint2: String,
  hint3: String,
  imageUrl: String,
});
//model creation
var Scienceqn = mongoose.model("scienceq", NewScienceSchema);
//exporting the model
module.exports = Scienceqn;
