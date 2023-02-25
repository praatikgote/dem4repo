const express = require('express');
const router = express.Router();
const multer  = require('multer');

const bannerController = require('../controllers/bannerController');
const {upload} = require('../helper/fileUpload');
// let upload = multer({
//     storage: multer.diskStorage({
//       destination: (req, file, callback) => {
//         if (!fs.existsSync(dir)) {
//           fs.mkdirSync(dir);
//         }
//         callback(null, './uploads');
//       },
//       filename: (req, file, callback) => { callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); }
  
//     }),
  
//     fileFilter: (req, file, callback) => {
//       let ext = path.extname(file.originalname)
//       if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext != '.zip') {
//         return callback(/*res.end('Only images are allowed')*/ null, false)
//       }
//       callback(null, true)
//     }

// });
router.post('/', upload.array('files'),bannerController.create);
// router.get('/', bannerController.read);
// router.delete('/deleteBanner', bannerController.delete)


module.exports = router;