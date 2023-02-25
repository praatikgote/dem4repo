const Category = require("../models/categoryModel")

exports.create = async (req, res) => {
    try {
        let {cat_name} = req.body;
        if (!cat_name || !req.file)
            throw new Error("Category Name and file is required")

        const newCategory = new Category({
            cat_name: cat_name,
            catLocation: req.file.path
        })
        await newCategory.save();
        res.status(200).json({
            message: "Category added successfully"
        })
    } 
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}
exports.read = async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json({
            category
        })
    } 
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}