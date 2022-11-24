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
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  city: String,
  state: String,
  country: String,
  subject: String,
  vark: String,
});
//model creation
var Userdata = mongoose.model("userdata", userSchema);
//exporting the model
module.exports = Userdata;
