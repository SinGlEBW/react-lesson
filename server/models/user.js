'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //тут можем описать свои методы 
    static checkLogin_Mod = async (login, pass) => {
        
    }
   
  };

  User.init({
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING(11),
    age: DataTypes.DATEONLY,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
  }, {
    sequelize,
    modelName: 'User',
    
  })//.sync({ alter: true })
  
  return User;
};



/*
  Модель описывается Функция содержащая класс модели и возвращающая его, инициализацию модели с 2мя объектами
  В первом объекте ключи это будущие столбцы, значения это параметры столбца
  Если параметров много помешается в объект.

  DataTypes.STRING  - type                      
  defaultValue: "John Doe" - Пример того что будет отображаться по умолчанию вместо NULL
  allowNull - разрешить NULL
  типы данных
    DataTypes.INTEGER.UNSIGNED - без знака
    DataTypes.STRING(100) - точное указание значения
  Интересная вещь, можно добавить setters и getters
  Пример:

password: {
  type: DataTypes.STRING,
  set(value){
     this.setDataValue('password', hash(value));
  }
},
прежде чем попасть в бд пароль автоматом придёт в set. setDataValue это встроенный метод
принимает ключ ( по которому обращаться и значение.) Так же работает get вариант


  Во 2м объекте находятся настройки таблиц.
  freezeTableName: true - имя таблицы меняться не будет
  tableName: 'Employees' - установка имени таблицы напрямую
  timestamps: true, - авт. следит за созданием и обновлением времени в столбцах createdAt updatedAt 
  createdAt: false, - можно указать чтоб не создавался столбец

User.sync() - создает таблицу (и ничего не делает, если она уже существует)
User.sync({ force: true }) - создает таблицу, удаляя ее первой, если она уже существовала
User.sync({ alter: true }) - проверяет, текущее состояние таблицы. Выполняет изменения в таблице, чтобы она соответствовала модели.
await sequelize.sync({ force: true match: /-site$/}); - синхронизация всех таблиц одновременно 
                      match - это некая проверка что бы случайно не на партачить. Если имя бд оканчивается
User.drop(); - удаление таблицы
sequelize.drop(); - удаление всех таблиц
*/
