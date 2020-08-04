let { body } = require('express-validator');

let validator = {
   userValid: [
      body('login').trim().notEmpty(),
      body('email').trim().isEmail().normalizeEmail(),
      body('phone').trim().isMobilePhone().notEmpty(),
      
      body('password').trim().not().isEmpty().isLength({min: 5})
      .withMessage('Минимальный ввод 5 символов')
   ],
   logInValid: [
      body('email').trim().isEmail().normalizeEmail(),
      body('password').trim().not().isEmpty().isLength({min: 5})
      .withMessage('Минимальный ввод 5 символов')
   ]
}

module.exports = validator;

/*
   isEmail() - является ли email'ом
   normalizeEmail() - приводит к единому регистру, очищает от мусора и пробелов
   not() - является ли не пустым?
   isEmpty() - является пустым?
   trim() - удаление пробелов
   isLength({min: 5}) - длина строки
   withMessage() - принимает сообщение для вывода
   matches() - принимает регулярное выражение если нужно что-то выполнить
   escape() - удаляет символы HTML которые могут использоваться в атаках
   Кстате request это объект "запроса", который приходит от клиента, а response это объект
   "ответа" который мы отсылем клиенту
*/