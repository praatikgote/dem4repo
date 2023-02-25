const path = require('path');
let fs = require('fs');
let dir = './uploads';
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const filefilter = (req, file, callback) => {
    let ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext != '.zip' && ext !='.mp4') {
      return callback(/*res.end('Only images are allowed')*/ null, false)
    }
    callback(null, true)
  }

const upload = multer({storage: storage, fileFilter: filefilter});

module.exports = {upload}