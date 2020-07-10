require('module-alias/register');
const express = require('express');
const app = express();
let { resultBD } = require('./mySql');


const { userValid, loginValid} = require('@services/validator');
const { createUser, login } = require('@controllers/user-controller');
const { create, find } = require('@controllers/menu-controller');

/*
   Можно непосредственно модель кинуть сюда, а можно разбить логику, вот например
   контролер
*/
//express.json() устанавливает объект body и в какой формат приходящие данные переводить
app.use(express.json());//тот же body-parser

app.listen(4000);

app.get('/catalog', find)

app.get('/add', (req, res) =>{
   resultBD(getAC());
    
   
   res.status(200);
   res.json(module.exports.dataBD)
  
})

//настройка валидации для регистрации
 app.post('/app/reg', userValid, createUser);
 app.post('/app/login', loginValid, login);

function getAC() {

   return (
      {
         type: "GET_DATA",
         getData: (data)=>module.exports = data
      }
   ) 
}
function getData (data) {
   module.mysql = {dataBD: data}
}
// getAC()

/*
   Как я понимаю идея создания сервисов и контролеров это разделение полномочий.
   контролеры отвечают за callback который находиться в запросах get,post
   сервисами же могут пользоваться как запросы, так и сами callback
*/

/*
Как отрабатывает код валидации.
app.use отрабатывает 1й. в неё помещаем express.json для того что бы другие
middleware функции знали про объект body. Далее мы передаём в middleware некоторые
параметры которые он передаёт внутрь и обрабатывает данные внутри, после чего
отрабатывает middleware callback
 */
/*
   isEmail() - является ли email'ом
   normalizeEmail() - приводит к единому регистру, очищает от мусора и пробелов
   not() - является ли не пустым?
   isEmpty() - является пустым?
   trim() - удаление пробелов
   isLength({min: 5}) - длина строки
   withMessage() - принимает сообщение для вывода
   matches() - принимает регулярное выражение если нужно что-то выполнить
   escape() - удаляет символы HTML которые могут использоваться в атаках
   Кстате request это объект "запроса", который приходит от клиента, а response это объект
   "ответа" который мы отсылем клиенту
*/
// app.use(express.static(filePath));
/*
   Для работы с sequelize не в голом виде,лучше устанавливать дополнительно 
   sequelize cli что бы можно было пользоваться командами. 
   Так же подтянуть их npm готовые решения имеющий некую структуру
   нужно указать 
   npx sequelize init 
   Зачем нужна папка models? В ней создаём сущность которая заменять
   нам таблицу в БД. То есть нам не придётся обращаться напрямую к БД используя
   SQL, а будем использовать JS и представлять что эта модель одна из
   нужных нам таблиц. 
   Есть смысл называть модель с большой буквы т.к. это будет класс

   npx sequelize model:generate --name название --attributes название столбцов бд
   добавляя при этом через :тип. после типа пробелов не должно быть. 
   создастся так же файл миграции который описывает таблицу. Можно редактировать.

   Папка migrations отвечает за создание таблиц в бд
   Что бы началась связь с бд нужно запускать миграцию предварительно установив
   mysql2. 
   Отдельно создать файл миграции команда
   npx sequelize-cli migration:generate --name migration-skeleton

   Запуск миграции создаёт первоначально таблицу, далее изменения производиться через модель
   npx sequelize db:migrate 
   npx sequelize db:migrate:undo - вернуть к предыдущему состоянию в бд
   npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js - отменить все изменения в данной таблице

   Папка seeders отвечает за заполнение таблиц.
   Добавив команду в консоль
   npx sequelize-cli seed:generate --name demo-user в папке появится 2 функции которые можно отредактировать
   под нужды добавления элементов в таблицу

   непосредственное добавление происходит после указания в консоли команды
   npx sequelize-cli db:seed:all 
   npx sequelize-cli db:seed:undo --seed name отменить конкретную строку 
   . Всё конечно прикольно, но это не автоматический режим
*/
/*
   Функции up, down содержат 2 параметра 
   queryInterface объект для управления БД, Sequelize Объект для указания типов 
   Так же функции возвращают Promise
*/
/* Выключить CORS. Почитать надо что за что отвечает
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
*/