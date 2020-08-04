const { User } = require("@models"); //по ум в папке берёт index
const bcryptjs = require("bcryptjs");
const validateDecorator = require("@services/validate-decorator");
const { createToken } = require("@services/auth-service");
const { Op } = require('sequelize');

/*
   Концепция схожа с отдельными роутами.
*/

async function crea() {
  let a = await User.drop();
}

function createUser(req, res, next) {
  const { email, login } = req.body;
  //Что бы не писать каждой функции проверку, функция прогоняется через декоратор
  User.findOne({ where: { [Op.or]: [{ email }, { login }] } })
    .then((user) => {
      
      const client = user && [user.email, user.login].find((item) => (email === item || login === item));// && обрабатывает null
      
      if (client) {
        
        return Promise.reject({
          statusCode: 422,
          message: `${client} уже занят`,
        });
      } else {
        
        const { login, name, email, password, avatar, age, role, phone } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const passwordHash = bcryptjs.hashSync(password, salt);
        return User.create({ login, name, email, password: passwordHash, avatar, age, role, phone });
      }
    })
    .then((data) => (res.status(200).json(data))) //отправлять всё не нужно
    .catch((err) => res.status(404).json({ err: err.message }));
}

function logIn(req, res, next) {
  const { email, password } = req.body;
  console.dir(req.body);

  User.findOne({where: { email }})
    .then((user) => {
      if(user){
        if(bcryptjs.compareSync(password, user.password)){
          return user
        }else{
          return Promise.reject({statusCode: 401, message: 'Пароли не совпадают'});
        }
      }else{
        return Promise.reject({statusCode: 404, message: 'Пользователь не найден'});
      }
    })
    .then(createToken)
    .then((token) => {
      console.dir(token);
      res.status(200).json({ token });
      
    })
    .catch((err) => {
      console.dir(err);
      res.status(err.statusCode).json({ err: err.message })
    });
}

module.exports = validateDecorator({
  createUser,
  logIn,
});

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
