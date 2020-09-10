const multer = require("multer");
const validate_Mtr_ExpV = require('./validate-decorator');
//возможно при использовании router url уже не /app/register а /register
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
     console.dir(2);
     (req.url === '/app/register') ? cb(null, "public/avatars") : cb(null, "public/images");
  },
  filename: (req, file, cb) => {

    console.dir(3);
    let ext = [".jpeg", ".jpg", ".png", ".bmp"];
    let msg =
      'Поддерживаемое расширение: ".jpeg", ".jpg", ".png", ".bmp"';

    ext = ext.find((item) => file.originalname.endsWith(item));
   
    !!ext
			? (req.url === '/add-img') 
					? cb(null, file.fieldname + Math.round(Math.random() * 1e10) + ext)
					//бросаю данные в ошибку и нужно обработать данные в validate-decorator
					: cb({cb, fieldname: file.fieldname + Math.round(Math.random() * 1e10) + ext})
      : cb(new Error(msg));//просто ошибку
  },
});

//пока эти функции не будут запущены или в ручную или запросами, свойства тела body не будут заполнятся 
const uploadImages = multer({ storage }).array("images", 10);
const uploadUser = multer({ storage, limits: { fieldSize: 2097152 } }).single("avatar");


module.exports = { 
   uploadImages
}

 module.exports.upload_Validate = validate_Mtr_ExpV(uploadUser)

/*
   Если в Функции middleware есть вызов другая middleware, то вызов next во 2й функции ни к чему как я понимаю не приводит
    
   filename - вызывается не больше заданного предела изображений так что до new Error в таком случае дело не 
               доходит. в upload next передаётся аргумент ошибки и улетает это всё в обработчик 
*/
/*
   Раньше в голову не приходило что передаваемые в middleware слой методы можно ж запустить и передать 
   им req, res и вместо next функцию которая будет запускаться
*/
/*
ОПЦИИ multer({}) . БЕЗ использования storage имя автоматом задаётся и без расширения
   dest: 'путь' - где сохранять файлы.
   storage: принимает настройку diskStorage
   diskStorage({description, filename}) - это метод для расширенного управления файлами 
      description: (req, file, callback){ callback(err, path) }
      filename: (req, file, callback){ callback(err, filename) }

   memoryStorage() - если есть желание загружать в оперативную память
   limits {} - некоторые лимиты на размеры
МЕТОДЫ upload
   single('avatar') - один файл из какого input
   upload.array('photos'[, 12]) -  > = 1. до 12  ?как обработать ошибку не понятно?
   fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]) - принять несколько input
   any() - принимает всё
   none() - принимает текстовые input. Зачем он нужен если можно и так отправить на сервер

*/
/*

*/
