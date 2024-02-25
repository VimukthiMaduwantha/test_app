const express = require('express');
const TeestItemController = require('../Controller/TestItemController');

const TestItemRoute = express.Router();

//create item
TestItemRoute.post('/testItemCreate', TeestItemController.CreateItem);

//get item
TestItemRoute.get('/testItemGet', TeestItemController.GetAllItem);


module.exports = TestItemRoute;