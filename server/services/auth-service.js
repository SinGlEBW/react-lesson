const jwt = require('jsonwebtoken');
const config = require('@config-server/config');

function createToken (userFromDB){
   const token = jwt.sign({id: userFromDB.dataValues.id}, config.secret, {expiresIn: 86400});
   return token;
}

function verifyToken (req, res, next){
   let token;
   if(req.headers['autorization']) 
      token = req.headers['autorization'];
   if(token){
      token = token.replace(/bearer|jwt\s+ /i)
   
      jwt.verify(token, config.secret, (err, decoded) => {
         if(err) {
            res.status(401).json({error: err})
            return;
         }
         //в объект запроса запишем раскодированные данные и передадим дальше. Всё равно на сервере
         req.userId = decoded.id;
         next();

      });
   }else
      res.status(401).json({error: 'Неправильный Token'})
      
}


module.exports = {
   createToken,
   verifyToken
}

/*
   sign() 
   1й - это данные пользователя которые хотим засунуть в token() объект payload
   2й - ключ которые замешиваем
   3й - это опции. expiresIn - время жизни
*/


/*
   Разница аутентификации и авторизации.
   аутентификация - это когда пользователь ввёл логин и пароль и если всё норм 
                     отправляется token
   авторизация - это непосредственно проверка пользователя, существует ли доступ
                  у него к ресурсам сайта. Берётся token из localeStorage отсылается
                  на сервак и сопоставляется с пользователем. Может ли он имея этот
                  token что-нибудь редактировать
*/
