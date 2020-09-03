const { User } = require("@models"); //по ум в папке берёт index
const bcryptjs = require("bcryptjs");
const { createTokenPair } = require("@services/auth-service");
const { Op } = require('sequelize');
const fs = require('fs');

function createUser(req, res, next) {
  console.dir('функция создание пользователя');
  
  const { email, login } = req.body;
  //Что бы не писать каждой функции проверку, функция прогоняется через декоратор
  User.findOne({ where: { [Op.or]: [{ email }, { login }] } })
    .then((user) => {
      const client = user && [user.email, user.login].find((item) => (email === item || login === item));// && обрабатывает null
      
      if (client) {
        
        return Promise.reject([{ msg:`${client} уже занят`, param: 'login' }]);
      } else {
       
        let { login, name, email, pass, age, phone } = req.body;

        req.saveFile.cb(null, req.saveFile.fieldname)

        let avatar = "/avatars/" + req.saveFile.fieldname;
        let salt = bcryptjs.genSaltSync(10);
        let passwordHash = bcryptjs.hashSync(pass, salt);
        
        return User.create({ login, name, email, password: passwordHash, avatar, age, phone });
      }
    })
    .then((data) => {
      res.status(201).json({ msg: 'Пользователь зарегистрирован', isRegister: true })
    })
    .catch((err) => res.status(409).json({ err }));
}

function logIn(req, res, next) {
  console.dir('функция Login');
  
  const { login, pass } = req.body;
  User.findOne({where: { login }})
    .then((user) => {
      if(user){
        if(bcryptjs.compareSync(pass, user.password))
          return user
        return Promise.reject([{ code:401, msg: 'Пароли не совпадают', param: 'pass'}]);
        
      }
      return Promise.reject([{ code:404, msg: 'Пользователь не найден', param: ['login, pass'] }]);
      
    })
    //передаётся в createToken данные пользователя
    .then(createTokenPair)
    .then(({token, refreshToken}) => {
      //вроде как нужно ещё рефреш токен возвращать в виде уникального id (uuid)
      //так же можно попробовать отправлять токен в header Authorization 
      let a = fs.appendFile(__dirname+'token.key', refreshToken, {flag: 'a+'});
      console.dir(a);
      res.cookie('refresh', refreshToken, { httpOnly: true,  })
      res.status(200).json({
        msg: 'Вход выполнен',
        isAuth: true,
        token: `Bearer ${token}`,
        ...req.infoUser
      });
      
    })
    .catch((err) => {
      console.dir(err);
      res.status(err[0].code).json({ err })
    });
}

//при logOut refresh токен удаляется из бд с id пользователем
function logOut(req, res, next) {

  res.status(200).json({isAuth: false})
}
//при refresh удаляем из бд, создаём новый, добавляем в бд, возвращаем пользователю пару
function issueTokenPair(req, res, next) {
  if(req.body.refresh){
    
  }
  
}

module.exports = {
  createUser,
  logIn,
  logOut,
  issueTokenPair
}

/*
  Сначала пользователь проверяется в БД после чего выдаётся токен
*/

/*
###***МЕТОДЫ ДЛЯ ВЗАИМОДЕЙСТВИЯ ЧЕРЕЗ МОДЕЛЬ Users (через непосредственно класс)
    create({ login, name, email, и т.д}) - создать запись. 2й объект не об. { fields: ['login'] } какие поля сохранить
    update({ age: 36 }, {where: { name: "Bob"}})  - обновить. что поменять, где искать
    destroy({where: {name: "Bob"}}) - что удалить. Можно просто вызвать у экземпляра удалив его значения в бд
// МЕТОДЫ РАБОТАЮТ НА ЭКЗЕМПЛЯРЕ, то есть не на голых данных после raw: true
    findByPk(2) - получает объект по первичному ключу
    findOne({ where: { email: req.body.email } }) - находит одну запись
    findAll({attributes: ['name', 'age'], raw: true}) - выводит массив данных по нужным атрибутам**********
  *     attributes:['кол1', ['old name', 'new name'], 'кол3'] - массив в массиве, переименовывает колонку    *
  *     
  *   where работает как логический оператор И (AND)
  *   where: {login: 'SinGlE', age: 28}        
  * 
  *   можно подключить объект Op - оператор из sequelize и работать вместе с where
  *   [Op.and]: [{login: 'SinGlE'}, {age: 28}]
  *   [Op.or]: [{login: 'SinGlE'}, {age: 28}] //здесь работает ИЛИ
  * можно сложней
  *   where: {
  *       login: {[Op.eq]: 'SinGlE'},   // = 'SinGlE'     
  *       age: {[Op.ne]: 20,  [Op.is]: null}} // != 20,  IS NULL
  *   
  *     
  *   [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // между 6 AND 10
      [Op.notBetween]: [11, 15],               // не между 11 AND 15
  * 
  *   там много операторов. Раздел док Model Querying - Basics
  *                                                                                       *
  *******************************************************************************************************
  count({where: {id: {[Op.gt]: 25 }}}) - подсчёт чего либо. Принимает те же условия
  max('age', { where: { age: { [Op.lt]: 20 } } }) - max('age') - максимальное число
  min('age', { where: { age: { [Op.lt]: 20 } } }) - min('age') - максимальное число
  sum('age', { where: { age: { [Op.lt]: 20 } } }) 
  findAndCountAll() - сочетание findAll и count
  findOrCreate() - создаст запись если не найдёт в таблице

  let jane = await User.build({ name: "Jan", age: 100 });//сначала создать. 
  jane.save();//сохранение через переменную (это экземпляр. создаётся без new)
  

####--Управление таблицей через модель ***
* User.sync() - создать таблицу
* User.drop() - удалить таблицу
*

###**** ОБРАЩЕНИЕ ЧЕРЕЗ ЭКЗЕМПЛЯР ***###
  На экземпляре так же доступны название столбцов как свойства.

  increment('age', { by: 2 }) добавить значение
  decrement - убавить
  reload() - передать свойствам экземпляра значения из бд

  ПРИМЕР
    const jane = await User.create({ name: "Jane" });
    jane.name = "Jane II";
    jane.favoriteColor = "blue";
    await jane.save({ fields: ['name'] });//подтвердили изменения только в name 
    console.log(jane.favoriteColor); // "blue" что присвоили, то и есть
    await jane.reload();
    console.log(jane.name); // "Jane II"
    console.log(jane.favoriteColor); // "green" что в базе


************************************************************************************************

*НЕКОТОРОЕ напоминание
  AS служит для переименования одного названия в другое

Обычные запросы 
const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12");
*/
