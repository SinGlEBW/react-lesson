const { Images  } = require("@models"); //по ум в папке берёт index
const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

function showImages(req, res, next) {
 
  Images.findAll()
    .then((files) => res.status(200).json({files, ...req.infoUser}))
    .catch((err) => next(err));   
}

 async function addImages(req, res, next) {
  console.dir(5);
   let id = [];
  try {
    for(let item of req.files){
      
      await Images.create({name: item.filename, src: "/images/" + item.filename, alt: item.fieldname })
      .then(image => id.push(image.get('id')))
    }
   
    await Images.findAll({where: {id: {[Op.between]: [id[0], id[id.length - 1]]}}, raw: true})
      .then(files => res.status(200).json({
        message: 'Файлы загружены',
        files,
        ...req.infoUser
      }))
  
  } catch (err) { next(err) }
          
}

async function delImages (req, res, next){
 console.dir(req.cookies);
  let pathImages = path.resolve('public','images');
  
  await Images.findByPk(req.params.id || req.query.id)
  .then((item) => {
    fs.unlink(`${pathImages}\\${item.dataValues.name}`, console.dir)
    return item
  })
  .then(item => {
    item.destroy()
    res.status(200).json({ message: 'Файл удалён', ...req.infoUser })
  })
  .catch(err => next(err))
}

module.exports = {
  showImages,
  addImages,
  delImages
};




async function idDestroy (operator, numFirst, numSecond){
  numFirst = Array.isArray(numFirst) ? [...numFirst] : [numFirst];
  numSecond = Array.isArray(numSecond) ? [...numSecond] : [numSecond];
  switch(operator){
    case '||': return Images.findAll({where: {id: {[Op.or]: [...numFirst, ...numSecond]}}, raw: true});
    case '-': return Images.findAll({where: {id: {[Op.between]: [...numFirst, ...numSecond]}}, raw: true});
    default: return console.dir('Неизвестный оператор');
  }
}
