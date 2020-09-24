require("module-alias/register");
const express = require("express");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const app = express();

const { verifyToken } = require("@services/auth-service");
const { errorHelper } = require("@services/err-helper");

const userRouter = require("@routes/user");
const chatRouter = require("@routes/chat");
const menuRouter = require("@routes/menu");
const imagesRouter = require("@routes/images");

const server = app.listen(4000);

app.use((req,res,next) => { 
   console.dir(req.method);
   
   res.set({
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Method": "GET",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "origin, content-type, accept"
   })
   next()
   
})
app.use(require('cors')({
   origin: true,
   allowedHeaders: ''
}));

app.use(express.json(), cookieParser());
app.use(require('passport').initialize());



app.use('/app/*', verifyToken)//на любой запрос проверять токен

app.use('/app', userRouter);
app.use('/app', chatRouter);
app.use('/app', menuRouter);
app.use('/app', imagesRouter);


app.use(errorHelper);


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
*/

/*
   Если next передать что-то, то функции middleware определяют что это сгенерирована ошибка
   и передают её в ближайший обработчик ошибок с 4мя  (err, req, res, next) аргументами
   Мы можем сами в цепи middleware определить обработчик такой обработчик или же ошибка улетит 
   куда то в встроенный обработчик. Для обработки ошибок существует app.errorHandler
*/

/*
   Что бы узнать приложение у нас в каком состоянии в "разработке" или "продакшн" есть команда
   app.get('env') значение указывается в NODE_ENV. Если её нет по по умолчанию development
*/
