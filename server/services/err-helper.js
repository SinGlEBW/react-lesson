const { MulterError } = require("multer");
const { ConnectionError, BaseError, ConnectionRefusedError } = require("sequelize");
const { JsonWebTokenError, TokenExpiredError } = require('jsonwebtoken');



let errorHelper = (err, req, res, next) => {
  console.dir(err);
  err = typeof err === "string" ? new Error(err) : err;

  switch (err.constructor) {
    case Error: res.status(300).json(err.message); break; 
    case MulterError: console.dir("case 2"); break; 
    case ConnectionError: console.dir("case 3"); break; 
    case BaseError: console.dir("case 4"); break; 
    case TypeError: res.status(415).json({err: err.message}); break; 
    case JsonWebTokenError: res.status(401).json({err: err.message}); break; 
    case TokenExpiredError: res.status(401).json({err: err.message}); break; 
    case ConnectionRefusedError: res.status(522).json({err: 'Связь с БД потеряна'}); break;
    default:
      res.status(404).json({ message: "Ошибка по умолчанию в errHelper" });
  }
};




/*
   Что бы не городить много if else компактней использовать switch, но switch не умеет работать с instanceof
   поэтому предполагаем что ошибка будет объектом и принадлежность будем проверять к конструктору 
*/
/*
   Не валидный фал или нормальный срабатывает 2 и 3й раздел. При нормальном файле multer next 
   не работает. При повреждённом или незагруженном можно обращаться через next
*/



module.exports = {
  errorHelper,
};
