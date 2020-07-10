const { Sequelize, DataTypes } = require('sequelize');
const { Model } = require('sequelize');
//обычный способ подключения 
const sequelize = new Sequelize("usersdb", "root", "123456", {
   dialect: "mysql",
   host: "localhost",
   define: {
     timestamps: false,
     freezeTableName: true//что бы в бд таблице не приписывалось "s"
   }
 });

 //Определение модели
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
   Миграции это создание таблиц на основе модели. Создание, обновление столбцов,
   удаление - это всё там как я понимаю

   Seeders это заполнение таблиц
*/