const multer = require("multer");
const { errHelperDecorator } = require("./err-helper-decorator");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {

    let ext = [".jpeg", ".jpg", ".png", ".bmp"];
    let message =
      'The file does not match the file extension: ".jpeg", ".jpg", ".png", ".bmp"';

    ext = ext.find((item) => file.originalname.endsWith(item));
   
    !!ext
      ? cb(null, file.fieldname + Math.round(Math.random() * 1e10) + ext)
      : cb(new Error(message));
  },
});

const upload = multer({ storage }).array("images", 10);

module.exports = errHelperDecorator({ upload });

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
