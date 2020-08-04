const { MulterError } = require("multer");
const { ConnectionError, BaseError, ConnectionRefusedError} = require('sequelize');

let errorHandler = (err, req, res, next) => {
   
   err = (typeof err === "string") ? new Error(err) : err;
   
   switch(err.constructor){
      case Error: res.status(300).json(err.message); break;
      case MulterError: console.dir('case 2'); break;
      case ConnectionError: console.dir('case 3'); break;
      case BaseError: console.dir('case 4'); break;
      case ConnectionRefusedError: console.dir('Связь с БД потеряна'); break;
     
      default: console.dir('switch не подходит'); res.status(300).json({message: 'Ошибка'});
   }

};
let customNext = (err) => {
   console.dir(err);
}
/*
   Что бы не городить много if else компактней использовать switch, но switch не умеет работать с instanceof
   поэтому предполагаем что ошибка будет объектом и принадлежность будем проверять к конструктору 
*/

let errHelperDecorator = (action) => (
   Object.keys(action).reduce((pValue, key) => {
   return {
     ...pValue,
     [key](req, res, next) {
       action[key](req, res, next); //пока ни каких изменений не вносил
       
     }
   };
 }, {}));

module.exports = {
   errHelperDecorator,
   errorHandler
};



