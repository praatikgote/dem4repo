const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: [true, "Please mention Tag"]
    }
}, {timestamps: true});

const Tag = mongoose.model("Tag", TagSchema);

module.exports = Tag;