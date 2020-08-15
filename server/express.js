require('module-alias/register');
const express = require('express');
const app = express();

// const { registerValid, loginValid } = require('@services/validator');

const { verifyToken } = require('@services/auth-service');
const { uploadImages, upload_Validate  } = require('@services/receipt-files');

const { createUser, logIn } = require('@controllers/user-controller');
const { create, find } = require('@controllers/menu-controller');
const { addImages, showImages, delImages } = require('@controllers/images-controller');

const { errorHandler } = require('@services/err-helper-decorator');
const { showMessage, addMessage, delMessage } = require('@controllers/chat-controller');

const WebSocket = require('ws');

const server = app.listen(4000)

const ws = new WebSocket.Server({server})

ws.on('connection', (socket) =>{
   socket.send('CONNECT')
})
ws.on('close', (socket) =>{
   socket.send('DISCONNECT')
})
ws.on('error', (socket) =>{
   socket.send('ERROR')
})




app.use(express.json(), (req, res, next) => {
   res.append('Access-Control-Allow-Origin', '*');
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.append('Access-Control-Allow-Headers', 'Content-Type');
   next();
});//аналогия установки body-parser. Чтоб было тело body



//app.use('/app/*', verifyToken)//на любой запрос проверять токен

//настройка валидации для регистрации

/*----------------------------------------------------------------------------*/
 app.post('/app/register', upload_Validate, createUser)//registerValid,
 app.post('/app/login', upload_Validate, logIn);//loginValid
/*----------------------------------------------------------------------------*/
 app.post('/app/catalog', find)
/*----------------------------------------------------------------------------*/
 app.get('/app/images-show', showImages)
 app.post('/app/images-add', uploadImages, addImages)
 app.delete('/app/images-delete/:id?', delImages)
/*----------------------------------------------------------------------------*/
app.get('/app/chat/message-show', showMessage)
app.post('/app/chat/message-add', addMessage)
app.delete('/app/chat/message-delete/:id?', delMessage)

/*----------------------------------------------------------------------------*/

app.use(errorHandler)




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
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
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

