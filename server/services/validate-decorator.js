const { validationResult } = require('express-validator');
const { registerValid, loginValid } = require("./validator");


let validate_Mtr_ExpV = (uploadUser) => {
  return (req, res, next) => {
    
    new Promise((resolve, reject) => {
        
      uploadUser(req, res, (errData) => {  
        console.dir(errData);
				if (errData) 
					(errData['cb']) ? resolve(errData) : reject({ avatar: errData.message })
				else 
				  (req.url.endsWith("register")) ? reject({ avatar: "Аватар не выбран" }) : validateUser(req, res, next)

      });
    })
    .then((data) => {
      req.saveFile = data
      validateUser(req, res, next)
    })
    .catch((err) => res.status(404).json({ err })) 
  };
};


let validateUser = (req, res, next) => {
		    
	let validForm = req.url.endsWith("register") ? registerValid : loginValid;
		
	Promise.resolve(validForm)
	.then(async(data) => {
		
		for (let item of data) {
			//next заглушка, чтоб не переходил к вызову контроллера после отправки возникшей ошибки
			await item(req, res, (err) => {});
		}
	})
	.then(() => {
				
		let err = validationResult(req);
		
		if (!err.isEmpty())
			return Promise.reject(err.array({ onlyFirstError: true }).reduce((preVal, i) => ({ ...preVal, [i.param]: i.msg }), {}));	
		else 
			next()
					
	})			
	.catch((err) => res.status(404).json({ err }));
};


module.exports = validate_Mtr_ExpV;


/*Как это работает. Пробует вызвать upload_Validate - не знает что это ищет дальше, видит вызов validate_Mtr_ExpV ищет что это, отрисовывает, вызывает
  и передаёт uploadUser, видит что возвращает функцию теперь вызывает upload_Validate и всё передаёт. Вызываем Promise. В промис вызываем uploadUser
  пока вся логика ожидает отрабатывает uploadUser которая отвечает за multer. Там обнаруживается к примеру ошибка, возвращаемся сюда в next метод.
  Если cb то вызовем resolve и идём в then. Передадим там присвоенные данные 
*/

/*
onlyFirstError: true возвращает только первую ошибку валидации для поля а не набор

Что тут вообще происходит и зачем это надо? 
Что бы в каждой функции не писать руками один и тот же код, существует понятие 
функции декоратор. Которую затачивают на то что бы она делала изменения в передаваемых ей
функциях. Как бы присваивала им новый функционал + возвращала старый функционал
 
Здесь ситуация такая. Собираются ключи в массив, массив перебирается в новый объект
используя старые ключи и присваиваются новые функции.

Запускается декоратор передаётся объект с функциями, собираются ключи этого объекта
присваиваются новые функции ключам, помещается новый функционал и помещается вызов старой функции.

Теперь к старой функции обращение будет через новую функцию с передачей аргументов.
Вот и получается прослойка нового функционала.

Схематично это так:

function createUser(req, res, next){
   новый функционал
   createUser(req, res, next)
}
*/



/*
let validateDecorator = (action) => (
   Object.keys(action).reduce((result, key) => {
     //интересный способ из массива создать объект
      return {
         ...result,
         [key] (req, res, next) {
           
            let errors = validationResult(req);
            console.dir(4);
            
            if (!errors.isEmpty()) {
              return res.status(404).json({ errors: errors.array({onlyFirstError: true}).map((item) => ({msg: item.msg, field: item.param})) });
            }
            action[key](req, res, next)//запускается и передаётся
         }
      }
   }, {} )
)

*/