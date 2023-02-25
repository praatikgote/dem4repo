const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    cat_name: {
        type: String,
        required: [true, "Please mention category"]
    },
    span_count: {
        type: Number,
        required: [true, "span count is required"]
    }
}, {timestamps: true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;