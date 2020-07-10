let { body } = require('express-validator');

let validator = {
   userValid: [
      body('login').trim().notEmpty(),
      body('email').trim().isEmail().normalizeEmail(),
      body('phone').trim().isMobilePhone().notEmpty(),
      body('password').trim().not().isEmpty().isLength({min: 5})
      .withMessage('Минимальный ввод 5 символов')
   ],
   loginValid: [
      body('email').trim().isEmail().normalizeEmail(),
      body('password').trim().not().isEmpty().isLength({min: 5})
      .withMessage('Минимальный ввод 5 символов')
   ]
}

module.exports = validator;
