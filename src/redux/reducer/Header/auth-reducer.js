import { userDAL } from 'src/apiRequests';

const CHANGE_INPUT = 'CHANGE_INPUT';
const CHECK_AUTH = 'CHECK_AUTH';
const ERRORS = 'ERRORS';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

let stateAuth = {
  isAuth: JSON.parse(localStorage.getItem('isAuth')),
  errors: {
    entrance: false,
    register: false
  },
  email: '',
  login: '',
  pass: '',
  phone: '',
  role: '',
  token: JSON.parse(localStorage.getItem('token'))
};

export const authReducer = (state = stateAuth, action) => {
 
  switch(action.type){
    case CHANGE_INPUT: return {...state, [action.key]: action.value}
    case ERRORS: return {...state, errors: {...state.errors, [action.key]: action.value}}
    case LOG_IN: return {...state, ...action.data }
    case LOG_OUT: return {...state, ...action.data, isAuth: false }
    case CHECK_AUTH: return {...state, isAuth: action.isCheck }
    
    default: return state
  }
};


export const changeInput = (key, value) => ({type: CHANGE_INPUT, key, value})
export const logIn = (data) => ({type: LOG_IN, data})
export const logOut = (data) => ({type: LOG_OUT, data})

export const checkAuth = (isCheck) => ({type: CHECK_AUTH, isCheck})
export const errors = (key, value) => ({type: ERRORS, key, value})


export const authT = (formName, formData) => (dispatch) => {
  let resolve = (formName === 'entrance')? userDAL.entrance(formData) : userDAL.register(formData);
  resolve
  .then(({data}) => {
    
    if(data.isAuth){
      dispatch(changeInput('pass', ''))
      dispatch(logIn(data))
     
      for(let i in data){
        if(i === 'msg')
          continue;
        localStorage.setItem(i, JSON.stringify(data[i]))
      }   
    } 
  })
  
  .catch(({response}) => { 
    console.dir(response);
    if(response.data.err){
      dispatch(errors(formName, response.data.err))
    }
    console.dir(response);
  })
  
}


/*
  Варианты при Регистрировании или перекинуть сразу на Profile или на Авторизацию.
  Если сразу на профиль тогда нужно предусматривать на серве выдачу токена сразу
  или же выдать через логирование
*/

