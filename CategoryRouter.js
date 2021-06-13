const CategorySchema = require("./CategorySchema");
const express = require("express");
const router = express.Router();


router.post("/add", async (req, res) => {
    const categoryData = await new CategorySchema({
        name: req.body.name,
        description: req.body.description
    })

    const saveData = await categoryData.save();
    res.status(200).json(saveData);
});

router.get("/getAll", async (req, res) => {
    
    const result = await CategorySchema.find();
    res.status(200).json(result);
})

module.exports = router;