const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    bannerLocation: {
        type: String,
        required: [true, "Invalid file name"]
    }
}, {timestamps: true});

const Banner = mongoose.model("Banner", BannerSchema);

module.exports = Banner;