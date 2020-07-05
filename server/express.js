const express = require('express');
const app = express();
let mySQL = require('./mySql');
let {body, validationResult} = require('express-validator/check');

app.use(express.json());//Указывается для приходящих данных, в какой формат их переводить
console.dir(body);

app.listen(4000);

app.get('/db', (req, res) =>{
   // let body = JSON.stringify(module.exports.dataBD);
   // res.send(body)

   res.setHeader("Access-Control-Allow-Origin", "*");
   
   res.status(200);
   res.json(module.exports.dataBD)
  
})
//настройка валидации для регистрации
app.post('/app/reg', [
   body('email').trim().isEmail().normalizeEmail(),
   body('password').trim().not().isEmpty().isLength({min: 5})
   .withMessage('Минимальный ввод 5 символов')
], (req, res, next) => {
   let errors = validationResult(req);
   if(!errors.isEmpty()){
      
      res.status(422).json({errors: errors.array()})
   }
})
/*
   isEmail() - является ли email'ом
   normalizeEmail() - приводит к единому регистру, очищает от мусора и пробелов
   not() - является ли не пустым?
   isEmpty() - является пустым?
   trim() - удаление пробелов
   isLength({min: 5}) - длина строки
   withMessage() - принимает сообщение для вывода
   matches() - принимает регулярное выражение если нужно что-то выполнить

   Кстате request это объект "запроса", который приходит от клиента, а response это объект
   "ответа" который мы отсыалем клиенту
*/
app.get('/get-db', (req, res) =>{
   let getData = (data) => {
      return data
   }
   let getData1 = mySQL.resultBD(mySQL.getData)
    console.dir(getData1);
   res.setHeader("Access-Control-Allow-Origin", "*");
   
   res.status(200);
   res.json(module.exports.dataBD)
  
})
app.get('/add', (req, res) =>{
   // let body = JSON.stringify(module.exports.dataBD);
   // res.send(body)
   
   res.setHeader("Access-Control-Allow-Origin", "*");
   
   res.status(200);
   res.json(module.exports.dataBD)
  
})

function exp (data) {
   module.exports = {dataBD: data}
}


function getDataAC (data) {
   return data
}

mySQL.resultBD(exp)
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
   Что бы началась связь с бд нужно запускать миграцию предварительно установив 
   mysql2. Запуск миграции
   npx sequelize db:migrate 
*/

/* Выключить CORS. Почитать надо что за что отвечает
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
*/