require("module-alias/register");

const express = require("express");
const fs = require('fs');
const path = require('path');
// const passport = require('passport');
const cookieParser = require('cookie-parser');
const app = express();

const { verifyToken } = require("@services/auth-service");
const { errorHandler } = require("@services/err-handler");
const { Sequelize } = require('sequelize');
const { func } = require('prop-types');


// const dotenv = require('dotenv')
// const config = require('config');

// if(process.env.NODE_ENV){
//    require('dotenv').config({ path:  path.resolve('env', `.env.${process.env.NODE_ENV}`) });
// }else{
//    require('dotenv').config({ path: path.resolve('env', '.env') });
// }


const { NODE_PORT, NODE_HOST } = process.env;
console.dir(NODE_HOST);


const server = app.listen(NODE_PORT, NODE_HOST);



const sequelize = new Sequelize("u66147_el-staff", "root", "secret", {
   dialect: "mysql",
   host: "db",
   port: 3306,
   define: {
     timestamps: false, //что бы не создавались createdAt updateAt
     freezeTableName: true, //что бы в бд таблице не приписывалось "s"
   },
 });
 
 sequelize.authenticate(); //тестирование подключения  SELECT 1+1 AS result


 sequelize.query('SELECT * FROM black_work', {raw: true, type: sequelize.QueryTypes.SELECT})
 .then((data) => {
    console.dir(data);
 })

 
app.use(require('cors')({
   origin: true,
   allowedHeaders: '',
}));


app.use(express.json(), cookieParser());
app.use(require('passport').initialize());
app.use('/app/*', verifyToken)//на любой запрос проверять токен

// fs.readdirSync(path.join(__dirname, 'routes'))
// .forEach((file) => {
//   app.use('/app', require(`./routes/${file}`));
// });





/*
   Запрос DELETE не принимает в body данных. body для post запросов.
   Этот метод рассчитан что будет передан  или params или query строка.

   query - от клиента images-delete/?id=185 
   params - images-delete/185
   Можно и POST'ом отправлять, но вроде другими методами удобней
*/
/*
   Как я понимаю идея создания сервисов и контролеров это разделение полномочий.
   контролеры отвечают за callback который находиться в запросах get,post
   сервисами же могут пользоваться как запросы, так и сами callback
*/

/*
   Как отрабатывает код валидации.
   app.use отрабатывает, за счёт express.json в req появляется body
   далее отрабатывают друг за другом массив валидации (это middleware на самом деле)
   последний middleware callback получает обработанные данные
*/

/* Выключить CORS. Почитать надо что за что отвечает
вместо кучи заголовков можно поставить require('cors')()
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.setHeader('Access-Control-Allow-Credentials', 'true');

   res.append("Access-Control-Allow-Origin", "*");
   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
   res.append("Access-Control-Allow-Headers", "Content-Type");

Пример:
   app.use((req,res,next) => {  
      res.set({
         "Access-Control-Allow-Origin": "http://localhost:3000",
         "Access-Control-Allow-Method": "GET",
         "Access-Control-Allow-Credentials": "true",
         "Access-Control-Allow-Headers": "origin, content-type, accept"
      });
      next();
   })


*/

/*
   Если next передать что-то, то функции middleware определяют что это сгенерирована ошибка
   и передают её в ближайший обработчик ошибок с 4мя  (err, req, res, next) аргументами
   Мы можем сами в цепи middleware определить обработчик такой обработчик или же ошибка улетит 
   куда то в встроенный обработчик. Для обработки ошибок существует app.errorHandler
*/

/*
   Можно сделать роут в котором будем указывать статус разработки "разработка" или "продакшн"
   app.get('env') значение указывается в NODE_ENV. Если её нет по по умолчанию development
*/
