const jwt = require("jsonwebtoken");
const { secret } = require("@config-server/config");
const uuid = require('uuid').v4;
/* JWT требуется для авторизации а не аутентификации. Авторизация гарантирует что 
пользователь на месте */
/*----------------------------------------------------------------------------------------*/
async function createTokenPair(data) {

  const refreshToken = uuid();
  let { id, login, avatar, role } = (data.User) ? data.User : data
 
  if(data.get('refreshToken')){//Если нет refreshToken значит это login обращаюсь
    data.set('refreshToken', refreshToken)
    data.save()

  }else
    data.createSessionToken({ UserId: id, refreshToken })
    
  return {
    token: jwt.sign({ id, login, avatar, role }, secret, { expiresIn: '1h' }),
    refreshToken//времени нет
  }
}
/*
  При refresh найти запись refresh и пользователя. создать refresh, обновить 
  запись в бд на данный refresh, вернуть новый refresh и новый токен.
  При регистрации создать refresh, по
  запись в бд на данный refresh, вернуть новый refresh и новый токен.

*/
/*----------------------------------------------------------------------------------------*/

function verifyToken(req, res, next) {
  console.dir('функция verifyToken');
  let { access_token } = req.cookies;
  console.dir(req.cookies);
   if (access_token) {
    let { id, login, avatar, role } = jwt.verify(access_token, secret);
    console.dir(1);//
    //ошибка не обрабатывается т.к. err.helper ловит ошибку сразу
    req.infoUser = { id, login, avatar, role };
    next();
   
  } else {
    req.infoUser = { role: "guest" };
    next();
    
  }
  
}

/*----------------------------------------------------------------------------------------*/

module.exports = {
  createTokenPair,
  verifyToken,
};
