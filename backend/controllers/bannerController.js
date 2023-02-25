const Banner = require("../models/bannerModel")
   
exports.create = async (req, res) => {
    if (!req.files) {
      res.json({ success: false });
    } 
    else {        
        const temp= req.files.map(({path})=>{return {bannerLocation: path}})
        
        await Banner.insertMany(temp);
        res.status(200).json({
          message: "Banner uploaded successfully"
        })
  
    }
};

exports.read = async (req, res) =>{
  try{
    let banner = await Banner.find({});
    res.status(200).json({
      banner
    })
  }
  catch(err){
    res.status(500).json(err)
  }
}
// app.post('/delete', (req, res) => {
  
//     Detail.findByIdAndRemove(req.body.prodId, (err, data) => {
  
//       // console.log(data);
//       // remove file from upload folder which is deleted
//       fs.unlinkSync(`./uploads/${data.image1}`);
//       fs.unlinkSync(`./uploads/${data.image2}`);
  
//     })
//     res.redirect('/');
//   });
// 
//     try{
//         // let {bannerLocation}
//     }
//     catch(err){
//         res.status(400).json({
//             err: err.message
//         })
//     }

// }





  
//   let app = new express();
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: false }));
  
//   // view engine setup
//   app.set('views', path.join(__dirname, 'views'));
//   app.set('view engine', 'ejs');
//   app.use(express.static('uploads'));
  
//   app.get('/', (req, res) => {
//     Detail.find({}, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render('index', { data: data });
//       }
//     })
  
//   });
  
  
  
