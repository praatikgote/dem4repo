const Wallpaper = require('../models/wallpaperModel');

exports.categorySearch = async (req, res) => {
    try{
        let {cat_name} = req.params;
        const wallpapers = await Wallpaper.find({cat_name: cat_name});
        res.status(200).json({
            wallpapers
        })
    }
    catch(err){
        res.status(200).json({
            err: err.message
        })
    }
}

exports.modelSearch = async (req, res) => {
    try{
        let {model} = req.params;
        const wallpapers = await Wallpaper.find({model: model});
        res.status(200).json({
            wallpapers
        })
    }
    catch(err){
        res.status(200).json({
            err: err.message
        })
    }
}

exports.tagSearch = async (req, res) => {
    try{
        let {tag} = req.params;
        const wallpapers = await Wallpaper.find( { tag: { $all: [tag] } } );
        res.status(200).json({
            wallpapers
        })
    }
    catch(err){
        res.status(200).json({
            err: err.message
        })
    }
}