const FoodSchema = require("./FoodSchema");
const express = require("express");
const router = express.Router();

router.post("/add", async (req, res) => {
    
        const foodData = await new FoodSchema({
            code: req.body.code,
            name: req.body.name,
            amount: req.body.amount,
            size: req.body.size,
            categories: req.body.categories
            
        });
    
        const saveData = await foodData.save();
        res.status(200).json(saveData);
   
    

});

router.get("/getAll", async (req, res) => {
    const result = await FoodSchema.find();
    res.status(200).json(result);
});

router.get("/get/:cid", async (req, res) => {
    const result = await FoodSchema.find({ categories:req.params.cid});
    res.status(200).json(result);
})

module.exports = router;
