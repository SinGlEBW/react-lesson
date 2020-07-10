const { User } = require("@models"); //по ум в папке берёт index

const bcryptjs = require('bcryptjs');
const validateDecorator = require('@services/validate-decorator');
const { verifyToken, createToken } = require('@services/auth-service');

/*
   Концепция схожа с отдельными роутами. 
*/


function createUser(req, res, next) {

//Что бы не писать каждой функции проверку, функция прогоняется через декоратор
  
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      
      if (user){
        
        return Promise.reject({ statusCode: 422, message: "Такой пользователь существует" });
      }
      else {
        
        const { login, name, email, password, avatar, age } = req.body;
        const salt = bcryptjs.genSaltSync(10);
         
        const passwordHash = bcryptjs.hashSync(password, salt)
        return User.create({ login, name, email, password: passwordHash, avatar, age });
      }
    })
    .then((data) => res.json(data))//отправлять всё не нужно
    .catch((err) => res.status(err.statusCode).json({ err: err.message }));
}

function login(req, res, next) {
  const loginUser = req.body.login;
  User.loginFromModels(loginUser)
  .then(createToken)
  .then((token) => {
    res.json({token});
    next();
  })
  .catch((err) => res.status(401).json({ err: err.message }))
}

module.exports = validateDecorator({
  createUser,
  login
});
  

/*
  Сначала пользователь проверяется в БД после чего выдаётся токен
*/