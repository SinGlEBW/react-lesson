const { Menu } = require('@models');//по ум в папке берёт index
let { validationResult } = require('express-validator');

/*
   Концепция схожа с отдельными роутами. 
*/
function create (req, res, next) {
 
      let errors = validationResult(req);
      if(!errors.isEmpty()){
         
         res.status(422).json({errors: errors.array()})
      }

      Menu.findOne({where: {name: req.body.name} })
      .then(
         (data) => {
            if(data)//если данные есть вернётся reject в then и нас кинет в ветку catch
               return Promise.reject({statusCode: 422, message: 'нету данных'})//можно и объект вернуть
            else{
               let {name, src, submenu} = res.body;
               return Menu.create({name,src,submenu})
            }
         }
      )
      .then(
         (data) => res.json(data)
            

      )
      .catch(
         (err) => res.status(err.statusCode).json({err: err.message})
      )
}
function find (req, res, next) {
 
      let errors = validationResult(req);
      if(!errors.isEmpty()){
         
         res.status(422).json({errors: errors.array()})
      }

      Menu.findAll({raw: true})
      .then(
         (data) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.status(200);
            res.json(data)
         })
      .catch(
         (err) => res.status(422).json({err: err}))
}
module.exports = {
   create,
   find
}
/*
 Menu.create({заполнить поля колонок})
 .then((res) => console.dir(res);получаем сразу же)
 .catch((err) => console.dir(err))
*/



/* 
raw: true показывает только данные бд
where принимает объект ключ значение
findAll({where:{id: userid}, raw: true}}) - поиск всех элементов
findByPk(2) - возвращает один эл. по ключу
findOne({where: {name: "Bob"}) - по критериям как и findAll
update({ age: 36 }, {where: {name: "Bob"}) - указывается 1й объект что изменить, потом ищем где
destroy({where: {name: "Bob"}) - удаляет все найденные элементы
*/

/*
   Это в get я должен передавать ?name=phone ?
*/
