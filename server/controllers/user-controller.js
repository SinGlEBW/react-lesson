const { User, SessionTokens, Sequelize, sequelize, } = require("@models"); //по ум в папке берёт index
const bcryptjs = require("bcryptjs");
const { createTokenPair } = require("@services/auth-service");
const { Op } = require('sequelize');

SessionTokens.belongsTo(User, {onDelete: 'CASCADE'})
// SessionTokens.sync({alter: true})
/*----------------------------------------------------------------------------------------*/

function register(req, res, next) {
  console.dir(1);
  
  const { email, login } = req.body;
 
  //Что бы не писать каждой функции проверку, функция прогоняется через декоратор
  User.findOne({ where: { [Op.or]: [{ email }, { login }] } })
    .then((user) => {
      const client = user && [user.email, user.login].find((item) => (email === item || login === item));// && обрабатывает null
      
      if (client) {
        
        return Promise.reject({ msg:`${client} уже занят`, param: 'login' });
      } else {
       
        let { login, name, email, pass, age, phone } = req.body;
        
        req.saveFile.cb(null, req.saveFile.fieldname)//upload_Validate передаёт этот метод

        let avatar = "/avatars/" + req.saveFile.fieldname;
        let salt = bcryptjs.genSaltSync(10);
        let passwordHash = bcryptjs.hashSync(pass, salt);
        
        return User.create({ login, name, email, password: passwordHash, avatar, age, phone });
      }
    })
    .then((data) => {
      res.status(201).json({ msg: 'Пользователь зарегистрирован', isRegister: true })
    })
    .catch((err) => res.status(409).json(err));
}

/*----------------------------------------------------------------------------------------*/

function logIn(req, res, next) {
  console.dir('функция Login');
  
  const { login, pass } = req.body;

  User.findOne({where: { login }})
    .then((user) => {
      if(user){
        if(bcryptjs.compareSync(pass, user.password))
          return user
        return Promise.reject({ msg: 'Пароли не совпадают', param: 'pass'});
        
      }
      return Promise.reject({ msg: 'Пользователь не найден', param: ['login', 'pass'] });
      
    })
    //передаётся в createToken user
    .then(createTokenPair)
    .then(({ token, refreshToken }) => {

      res.status(200).json({
        msg: 'Вход выполнен',
        isAuth: true,
        token: `Bearer ${ token }`,
        refreshToken,
        ...req.infoUser
      });
      
    })
    .catch(next);
}

/*----------------------------------------------------------------------------------------*/

function logOut(req, res, next) {
  const { refreshToken } = req.body; 
  if(refreshToken){
     SessionTokens.findOne({where: { refreshToken }})
      .then((data) => res.status(200).json({isAuth: false}))
      .catch(next)
  }
  res.status(409).json({err: 'Не верный refreshToken'})
  
}

/*----------------------------------------------------------------------------------------*/

async function refresh(req, res, next) {
  let { refreshToken } = req.body;
  if(refreshToken){
    SessionTokens.findOne({where: { refreshToken }, include: User, raw: true, nest: true})
    .then(({ User }) => {
      createTokenPair(User)
    })
    .catch(next)
  }else
    res.status(404).json({err: 'refreshToken не был передан'})
  
}

module.exports = {
  register,
  logIn,
  logOut,
  refresh
}


