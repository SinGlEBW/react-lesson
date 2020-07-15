const { Images } = require("@models"); //по ум в папке берёт index
const validateDecorator = require('@services/validate-decorator');


function showImages(req, res, next) {
  Images.findAll()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ err: err.message }));
}

function addImages(req, res, next) {
  console.dir(req.files);
  
  // Images.findOne({ where: { name: req.body.name } })
  //   .then((user) => {
      
  //     if (user){
  //       console.dir(1);
  //       return Promise.reject({ statusCode: 422, message: "Такое имя существует" });
  //     }
  //     else {
        
  //       const { name, src, alt } = req.body;
  //       return Images.create({ name, src, alt });
  //     }
  //   })
  //   .then((data) => res.json(data))//отправлять всё не нужно
  //   .catch((err) => res.status(err.statusCode).json({ err: err.message }));
}


module.exports = {
  showImages,
  addImages
};

/*
destination:'uploads'
encoding:'7bit'
fieldname:'images'
filename:'f7b44ea971354ad396c2f39933546f93'
mimetype:'image/jpeg'
originalname:'2-kGmr0i3l8.jpg'
path:'uploads\f7b44ea971354ad396c2f39933546f93'
size:225592
*/