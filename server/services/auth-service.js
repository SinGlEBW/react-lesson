const jwt = require("jsonwebtoken");
const config = require("@config-server/config");
const uuid = require('uuid').v4;

function createTokenPair(userFromDB) {
  //можно передать объект refresh и access токена

  return {
    token: jwt.sign({
        id: userFromDB.id, login: userFromDB.login,
        avatar: userFromDB.avatar, role: userFromDB.role
      },
      config.secret,
      { expiresIn: '1m' }),
    refreshToken: uuid()
   }
}

function verifyToken(req, res, next) {
  
  if (req.headers["authorization"] && req.headers["authorization"].length) {
   
    const token = req.headers["authorization"].replace(/(bearer|jwt)\s+/i, '');
    
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return next(err);
      
      req.infoUser = {
        id: decoded.id,
        login: decoded.login,
        avatar: decoded.avatar,
        role: decoded.role,
      };
      next();
    });
  } else {
    req.infoUser = { role: "guest" };
    next();
  }
}
function refreshToken(refresh) {
  if(refresh){

  }
}

module.exports = {
  createTokenPair,
  verifyToken,
  refreshToken,
};

/*
  Как я понял refresh токен это ещё один токен, который должен жить дольше, хранить его в бд.
  предположительно refresh токен от пользователя получаем через body (по всей видимости это uuid),
  далее ищем по uuid в бд ссылки на пользователя. 

  Если находим по refresh токену(вроде как по uuid), то подготавливаем новый uuid перезапишем его в бд
  так же отправим его клиенту,достаём клиента из бд и создаём новый токен. Токен и новый refresh 
  токен отправляем клиенту. 
  Возможно определённый refresh токен (uuid) должен ссылаться в бд на пользователя 


*/

/*
Вся котовасия с токенами или без это выдать бейджик пользователю и при каждом запросе 
проверять кто это и его авторитет.
  Как бы можно было реализовать без токена? Пришлось бы сохранять id на клиенте и 
  присылать его на сервер, идти искать по id пользователя, доставать его, передавать 
  в request объект и дальше на разных этапах запроса проверять роль и отвечать.
  Можно конечно и роль пользователя сохранять на клиенте и получать её и уже как либо
  отвечать на неё, но клиенту ничего не мешает зайти в Cookie или в Storage и поменять 
  user на admin.

  Удобства с токеном это один раз обратиться к серверу при регистрации, зашифровать данные 
  в токене и получать токен при каждом обращении, расшифровывать его, передавать данные 
  в объект request и основываясь на данных определять по каким роутам он может переходить 
  и что может изменять. Отсылаю указания клиенту где уже реагирую на эти данные.
  
  Если время жизни токена закончилось, то клиент должен воспользоваться refresh токеном.
  Будет создан новый access и refresh токен. refresh - токен одноразовый, access - токен
  работает при каждом запросе. 
  Предположим хакер украл access токен и делает запросы на сервер подставляя его в headers,
  то хакер будет себя выдавать за клиента. Если время жизни токена закончиться, то это будет не долго.
  Если хакер имеем refresh токен, то по истечению жизни access токена он будет передавать 
  refresh токен и получать новую пару [access, refresh] токена и пользоваться ресурсом до тех пор
  пока реальный клиент не попробует восстановить доступ на сайт, тем самым получив для его имени 
  так же пару [access, refresh] и у хакера его пара будет не валидная.

  Если изменить секретный ключ, то все токены становятся не валидными, это значит что пользователям 
  придётся снова залогиниться.
  
  Можно попробовать создавать для каждого пользователя индивидуальный ключ секрет и хранить
  его в бд, но опять проблема с частыми запросами к бд. Хранить в сессии?
  .
   jwt.sign() 
   1й - это данные пользователя которые хотим засунуть в token() объект payload
   2й - ключ которые замешиваем
   3й - [option]. expiresIn - время жизни
   4й - [cb(err, token)]

   jwt.verify()
   1й - token
   2й - секретный ключ
   3й - или [option] или [callback] который декодирует token 
   4й - если 3й [option] 4й [callback]

   payload так же имеет стандартные свойства
    iat: время вроде как жизни 

   option
   algorithm (default: HS256)
   expiresIn время жизни (если число то в секундах, если строка то с препиской d h m )
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
