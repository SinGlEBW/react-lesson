const { Sequelize, DataTypes } = require('sequelize');
const { Model } = require('sequelize');
//Подключение к бд + настройка
const sequelize = new Sequelize("users", "root", "123456", {
   dialect: "mysql",
   host: "localhost",
   define: {
     timestamps: false,//что бы не создавались createdAt updateAt
     freezeTableName: true//что бы в бд таблице не приписывалось "s"
   }
 });

 sequelize.authenticate();//тестирование подключения

 //Определение модели
 module.exports = (sequelize, DataTypes) => {
  //обычно здесь создают модель 
 }
 

 const User = sequelize.define("user", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     allowNull: false
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   age: {
     type: DataTypes.INTEGER,
     allowNull: false
   }
 },{//3й параметр 
   tableName: 'Employees'//напрямую передача имени в БД
 });
  //sync() - принимает необязательные опции {} 
User.sync() //создает таблицу, если она есть ничего не делает
//{ force: true } создает таблицу, если она есть то удаляет старую
//{ alter: true } сопоставляет таблицу и модель если есть отличия выполняет изменения в таблице, подгоняя под модель.
//расширяющаяся модель
sequelize.sync({ force: true });//все таблицы подгонит под модель
class User1 extends Model {}

User.init({
  
  firstName: DataTypes.STRING,
  lastName: {//или так
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // Передать экземпляр подключения
  modelName: 'User1' // Передать имя класса
});


/*
   Для работы с sequelize можно в ручную всё написать, а можно устанавливать дополнительно 
   sequelize cli и с помощью некоторых команд в консоли получить готовые решения.
   sequelize cli вообще нужен для того что бы создать модель, таблицу и накидать данные через консоль
   Но это всё ручная работа через консоль, для автоматической работы нужно будет 
   использовать методы модели 
Для начала пишем
   npx sequelize init //получим несколько папок с настройками.
   models - отвечает за связь с бд таблицами через объектные решения а не SQL 
   migrations - отвечает за структуру таблиц в бд. Добавление, удаление, изменение и т.д. таблиц
   seeders - отвечает за заполнение таблиц данными.
   config - за подключение с бд.
Создание модели таблиц. (так же понадобиться пакет mysql2). Название модели с Заглавной т.к. это будет класс
   npx sequelize model:generate --name название --attributes название столбцов бд
   добавляя при этом через :тип. после типа пробелов не должно быть. 
   создастся файл модели который описывает как мы видим таблицу. Можно до редактировать в ручную.
    Далее....
  Из коробки разработчики sequelize ПРИ СОЗДАНИИ МОДЕЛИ создают только одну миграцию и это создание таблицы 
  Остальные задуманные изменения для таблицы требует создания своих миграций
  Запуск миграции создаёт первоначально таблицу, заполняя файл данными нашей модели
   npx sequelize db:migrate //создаёт файл и таблицу по модели
   npx sequelize db:migrate:undo - вернуть к предыдущему состоянию в бд
   npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js - отменить все изменения в данной таблице
  Дальнейшие манипуляции с таблицей требует ручного создания миграций
   npx sequelize-cli migration:generate --name migration-skeleton
    Далее....


Заполнение
   npx sequelize-cli seed:generate --name demo-user в папке появится 2 функции которые можно отредактировать
   под нужды добавления элементов в таблицу

   непосредственное добавление происходит после указания в консоли команды
   npx sequelize-cli db:seed:all 
   npx sequelize-cli db:seed:undo --seed name отменить конкретную строку 
   . Всё конечно прикольно, но это не автоматический режим

  Удобства миграций в том что можно копировать проект, настроить подключение,
  набрать команду миграции и в бд таблицы создадутся какие надо 
  В sequelize связь с бд построена на 2х функциях up и down аргументы этих функций 
  является QueryInterface и Sequelize.
  QueryInterface - содержит все необходимые методы для взаимодействия с бд. в док описаны методы

  Не уверено, но вроде миграции отрабатывают 1 раз в одну сторону 

*/