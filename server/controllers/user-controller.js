const { User, SessionTokens, Sequelize, sequelize } = require("@models"); //по ум в папке берёт index
const { createTokenPair } = require('@services/auth-service');
const bcryptjs = require("bcryptjs");

const { Op } = require('sequelize');
const packageName = require('sequelize');
console.dir();

User.hasOne(SessionTokens, {onDelete: 'CASCADE'})
SessionTokens.belongsTo(User)
 //sequelize.sync({alter: true})
/*----------------------------------------------------------------------------------------*/

function register(req, res, next) {
  console.debug(111);
  const { email, login } = req.body;
 
  //Что бы не писать каждой функции проверку, функция прогоняется через декоратор
  User.findOne({ where: { [Op.or]: [{ email }, { login }] } })
    .then((user) => {
      const client = user && [user.email, user.login].find((item) => (email === item || login === item));// && обрабатывает null
    
      if (client) {
        let field = Object.keys(req.body).find(key => req.body[key] === client);//ключ по значению
        return Promise.reject({ [field]: `${client} уже занят`  });
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
    .catch((err) => res.status(409).json({err}));
}

/*----------------------------------------------------------------------------------------*/

function logIn(req, res, next) {
  console.dir('функция Login');
  
  const { login, pass } = req.body;

  User.findOne({where: { login }})
    .then((user) => {
      if(user){
        if(bcryptjs.compareSync(pass, user.password)){
          req.infoUser = {
            id: user.id, 
            login: user.login, 
            avatar: user.avatar, 
            role: user.role
          }
          return user
        }
        return Promise.reject({ pass: 'Пароли не совпадают' });
      }
      return Promise.reject({ login: 'Пользователь не найден' });
    })
    //передаётся в createTokenPair user
    .then(createTokenPair)
    .then(({ token, refreshToken }) => {
      //, httpOnly: true, secure: true
      
      res.cookie('access_token', token, {maxAge: 3600,})
      .status(200).json({
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
  console.dir('функция logOut');
  const { refreshToken } = req.body; 
  if(refreshToken){
    SessionTokens.findOne({where: { refreshToken }})
    .then(session => {
      session.destroy()
      res.status(200).json({isAuth: false})
    })
    .catch(next)
  }else
    res.status(404).json({err: 'refreshToken не был передан'})

}


/*----------------------------------------------------------------------------------------*/

async function refresh(req, res, next) {
  console.dir('функция refresh');

  let { refreshToken } = req.body;

  if(refreshToken){
    SessionTokens.findOne({where: { refreshToken }, include: User, nest: true})
    .then(createTokenPair)
    .then(({token, refreshToken}) => {
      console.dir(token);
      res.cookie('access_token', token, {maxAge: 3600,})
      .status(200).json({
        msg: 'Токены обновлены',
        token: `Bearer ${ token }`,
        refreshToken,
        ...req.infoUser
      });
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


