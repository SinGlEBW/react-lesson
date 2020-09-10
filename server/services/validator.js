let { body } = require('express-validator');

let validator = {
   registerValid: [
      body('login').trim().escape().isLength({min: 5}).withMessage('Минимальный ввод 5 символов'),
      body('name').trim().escape().isLength({min: 2}).withMessage('Слишком короткое имя'),
      body('email','Введённые данные не являются почтой').trim().isEmail().normalizeEmail(),
      body('phone', 'Набор чисел не является номером').trim().escape().notEmpty().withMessage('Поле не заполнено').isMobilePhone(),
      body('pass').trim().escape().isLength({min: 5}).withMessage('Минимальный ввод 5 символов'),
      body('age', 'Поле не заполнено').isISO8601().withMessage('Неправильная дата'),
   ],
   loginValid: [
      body('login').trim().escape().isLength({min: 5}).withMessage('Минимальный ввод 5 символов'),
      body('pass').trim().escape().isLength({min: 5}).withMessage('Минимальный ввод 5 символов')
   ]
}


module.exports = validator;
/*
   isEmail() - является ли email'ом
   normalizeEmail() - приводит к единому регистру, очищает от мусора и пробелов
   not() - нет
   isEmpty() - является пустым?
   trim() - удаление пробелов
   isLength({min: 5}) - длина строки
   withMessage() - принимает сообщение для вывода
   matches() - принимает регулярное выражение если нужно что-то выполнить
   escape() - удаляет символы HTML которые могут использоваться в атаках
   Кстате request это объект "запроса", который приходит от клиента, а response это объект
   "ответа" который мы отсылем клиенту

   Есть поле .custom((user) => {}) в котором можно делать запросы в бд 

   не совсем понял но вроде можно вызвать check это тот же самый body

   можно вызвать из let { body, param, query, cookie, header } = require('express-validator');
   и проверять
*/