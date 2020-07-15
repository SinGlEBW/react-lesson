const { Menu,sequelize } = require('@models');//по ум в папке берёт index
let { validationResult } = require('express-validator');

/*
   Концепция схожа с отдельными роутами. 
*/


async function crea(){
   // let a = await Menu.count()
   // let b = sequelize.fn('COUNT', sequelize.col('name'), 'new' )
   // console.dir(b);
   
}

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
###***объект sequelize имеет методы которые иногда используются в сочетании с моделью и таблицей 
   col() - принимает название колонки. Это нужно что бы sequelize принимал колонку за колонку, а не как строку
   fn('COUNT', sequelize.col('name'), 'ne') - это функция которая передаёт все аргументы той функции
                                              которую мы указали 1м аргументом 
   
*/
