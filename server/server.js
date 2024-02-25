const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Db Connection 
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connected!!")
});

app.listen(port, () => {
    console.log("PORT connected on " + port);
})


//test item route
const testItemRoute = require('./Routes/TestItemRoute');
app.use("/api/Test", testItemRoute);









//userName - maduwanthavimukthi
//password - SOoeLn3LHHFvSlaH