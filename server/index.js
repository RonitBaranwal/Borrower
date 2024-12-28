// console.log("Hello World");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const router=express.Router()
const userRoutes = require('./routers/userRoutes');
//DB connect
const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://ronitkbaranwal:FBGCpp5uu6jkGcJs@borrower-user-details.ygoxi.mongodb.net/");
mongoose.connect("mongodb://localhost:27017/borrower");

//Schema for users tabl

app.use('/',userRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
