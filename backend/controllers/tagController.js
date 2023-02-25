const Tag = require("../models/tagModel")

exports.create = async (req, res) => {
    try {
        let {tag} = req.body;
        if (!tag)
            throw new Error("Tag Name is required")

        const newTag = new Tag({tag})
        await newTag.save();
        res.status(200).json({
            message: "Tag added successfully"
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
        const tag = await Tag.find({});
        res.status(200).json({
            tag
        })
    } 
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}
