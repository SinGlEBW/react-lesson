import { userDAL } from 'src/apiRequests';

const ERRORS = 'ERRORS';
const REF_TOKENS = 'REF_TOKENS';
const SET_AUTH_USER = 'SET_AUTH_USER';

let stateAuth = {
  isAuth: JSON.parse(localStorage.getItem('isAuth')),
  errors: {
    entrance: false,
    register: false
  },
  
  refreshToken: JSON.parse(localStorage.getItem('refreshToken')),
  role: JSON.parse(localStorage.getItem('role')),
  token: JSON.parse(localStorage.getItem('token'))
};

export const authReducer = (state = stateAuth, action) => {
 
  switch(action.type){
    case ERRORS: return {...state, errors: {...state.errors, [action.key]: action.value}}
    case REF_TOKENS: return {...state, ...action.tokens}
    case SET_AUTH_USER: return {...state, ...action.user}
    default: return state
  }
};
/*------------<{ Action }>-----------------------------------------------------------------*/

export const errors = (key, value) => ({type: ERRORS, key, value})
export const refreshTokens = (tokens) => ({type: REF_TOKENS, tokens})
export const setAuthUser = (user) => ({type: SET_AUTH_USER, user})

/*------------<{ Thunk }>------------------------------------------------------------------*/

export const authT = (formName, formData) => (dispatch) => {
  let resolve = (formName === 'entrance') ? userDAL.entrance(formData) : userDAL.register(formData);
  resolve
  .then(({data}) => {
    console.dir(data);
    if(data.isAuth){
      dispatch(setAuthUser(data))
     
      for(let i in data){
        if(i === 'msg')
          continue;
        
        localStorage.setItem(i, JSON.stringify(data[i]))
      }   
    } 
  })

  .catch((err) => { 
    console.dir(err);
    if(err){

    }
    // if(response.data.err)
    //   dispatch(errors(formName, response.data.err))
      
  })
  
}

//вариант выхода просто удалить токен на клиенте
export const logOutT = () => (dispatch) => {
  userDAL.logOut(JSON.parse(localStorage.getItem('refreshToken')))
  .then(({data}) => {
    console.dir(data);
    if(!data.isAuth){
      dispatch(setAuthUser(data))
      localStorage.clear();
    }
  })
  .catch((err) => console.dir(err))
}

export const refreshTokensT = () => (dispatch) => {
  userDAL.refresh(JSON.parse(localStorage.getItem('refreshToken')))
  .then(({data}) => {
    console.dir(data);
    
      dispatch(refreshTokens(data))

      for(let i in data){
        if(i === 'msg')
          continue;
       
        localStorage.setItem(i, JSON.stringify(data[i]))
      }   
    
  })
  .catch((err) => console.dir(err))
}

/*
  По refresh найти запись сессий и удалить, найти пользователя по id,
  создать запись
*/
/*
  Почитать как работать с куками через react
*/
/*
  В принципе не обязательно использовать JSON.stringify и parse. Storage возвращает строки
  но мы можем преобразовывать в нужный нам тип. 
*/
/*
  Варианты при Регистрировании или перекинуть сразу на Profile или на Авторизацию.
  Если сразу на профиль тогда нужно предусматривать на серве выдачу токена сразу
  или же выдать через логирование
*/

