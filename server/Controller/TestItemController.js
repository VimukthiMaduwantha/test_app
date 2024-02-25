const TestItemModel = require('../Models/TestItemModel');

//create test item
const CreateItem = async (req, res) => {
    const {
        name,
        age,
        school,
        favFood,
        favColor
    } = req.body;

    try {
        const DBModel = new TestItemModel({
            name,
            age,
            school,
            favFood,
            favColor
        })
        return await DBModel.save().then((value) => {
            return res.status(200).json({ status: 'Success', ID: value._id })
        }).catch((err) => {
            res.status(500).json({ err })
        })

    } catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.message });
    }
}

//get all test items
const GetAllItem = async (req, res) => {
    try {
        const getAllItem = await TestItemModel.find();
        return res.status(200).json(getAllItem);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}


module.exports = {
    CreateItem,
    GetAllItem
}