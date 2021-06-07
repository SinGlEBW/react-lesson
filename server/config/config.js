module.exports = {
   secret: '123pass',
   port: process.env.PORT || 4000, 
   production: ((process.env.NODE_ENV === "production") ? true : false)
}

/*
   process это глобальный объект NodeJS. Там храниться сервисная информация
   о запущенных процессах. В объект при желании можно закинуть данные и потом
   глобально пользоваться.
*/
