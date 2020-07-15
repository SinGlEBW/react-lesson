require('module-alias/register');
const express = require('express');
const app = express();

const { userValid, loginValid } = require('@services/validator');
const { verifyToken } = require('@services/auth-service');
const receiptFiles = require('@services/receipt-files');

const { createUser, login } = require('@controllers/user-controller');
const { create, find } = require('@controllers/menu-controller');
const { addImages, showImages } = require('@controllers/images-controller');

app.use(express.json(), (req, res, next) => {
   res.append('Access-Control-Allow-Origin', '*');
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.append('Access-Control-Allow-Headers', 'Content-Type');
   next();
});//аналогия установки body-parser. Чтоб было тело body

app.listen(4000);

app.use('/app/*', verifyToken)

//настройка валидации для регистрации
 app.post('/app/reg', userValid, createUser);
 app.post('/app/login', loginValid, login);

 app.post('/app/catalog', find)
 app.post('/app/images-show', showImages)
 app.post('/app/images-add',receiptFiles, addImages)

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
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
*/