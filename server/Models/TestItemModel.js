const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestItemModel = new Schema(
    {
        name: {
            type: String,
            requires: true
        },
        age: {
            type: Number,
            required: true
        },
        school: {
            type: String,
            required: true
        },
        favFood: {
            type: String,
            required: true
        },
        favColor: {
            type: String,
            required: true
        }
    }
)

const Test = mongoose.model("TestItem", TestItemModel);
module.exports = Test;