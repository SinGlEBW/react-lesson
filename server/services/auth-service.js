const jwt = require('jsonwebtoken');
const config = require('@config-server/config');

function createToken (userFromDB){
   console.dir(userFromDB);
   return jwt.sign({id: userFromDB.id, role: userFromDB.role}, config.secret, {expiresIn: 3600});
}

function verifyToken (req, res, next){
   console.dir(req.headers);
   if(req.headers['authorization'] && req.headers['authorization'].length){
      const token = req.headers['authorization'];//.replace(/(bearer|jwt)\s+/i, ''); 
      jwt.verify(token, config.secret, (err, decoded) => {
         if(err) 
            return next({err, statusCode: 401});  
        
         req.infoUser = {id: decoded.id, role: decoded.role}
         next();

      });
   }else{
      req.infoUser = {role: 'guest'};
      next()
   }     
}


module.exports = {
   createToken,
   verifyToken
}

/*
   jwt.sign() 
   1й - это данные пользователя которые хотим засунуть в token() объект payload
   2й - ключ которые замешиваем
   3й - это опции. expiresIn - время жизни

   jwt.verify()
   1й - token
   2й - секретный ключ
   3й - или option или callback который декодирует token 
   4й - если 3й option 4й callback
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
