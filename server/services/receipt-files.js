const multer = require('multer');
const upload = multer({dest: 'uploads'});


module.exports = upload.array('images', 10);

   

/*
ОПЦИИ multer({}) 
   dest: 'путь' - где сохранять файлы.
   storage: принимает настройку diskStorage
   diskStorage({description, filename}) - это метод для расширенного управления файлами 
      description: (req, file, callback){ callback(err, path) }
      filename: (req, file, callback){ callback(err, filename) }
МЕТОДЫ upload
   single('avatar') - один файл из какого input
   upload.array('photos'[, 12]) -  > = 1. до 12  ?как обработать ошибку не понятно?
   fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]) - принять несколько input
   any() - принимает всё
   none() - принимает текстовые input. Зачем он нужен если можно и так отправить на сервер

*/
/*

*/
