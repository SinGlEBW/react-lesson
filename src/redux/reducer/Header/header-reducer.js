
const SET_PATH = 'SET_PATH';
const TOGGLE_BTN = 'TOGGLE_BTN';
const EDITS_LINKS = 'EDITS_LINKS';
const CHECK_TOKEN = 'CHECK_TOKEN';
const CHECK_AUTH = 'CHECK_AUTH';

let stateHeader = {
  links: [
    ['/home', "Главная"],
    ['/catalog', "Товары"],
    ['/chat', "Чат"],
    ['/contacts', "Контакты"],
    ['/info', "Информация"],
    ['/images', "Картинки"],
  ],
  isAuth: localStorage.getItem('auth'),
  token: localStorage.getItem('token'),
  pathname: localStorage.getItem('pathname'),
  checkButton: {
    registration: false,
    autorization: false
  }
};

export const headerReducer = (state = stateHeader, action) => {
  
  switch(action.type){
    case SET_PATH: return {...state, pathname: action.path}
    case TOGGLE_BTN: return {...state, checkButton: {...state.checkButton, [action.o_toggle.name]: action.o_toggle.value}}
    case EDITS_LINKS: return {...state, links: action.keyLinks}
    case CHECK_TOKEN: return {...state, token: action.token}
    case CHECK_AUTH: return {...state,  isAuth: action.isAuth}
    
    default: return state
  }
};

export const setPath = (path) => ({type: SET_PATH, path})
export const toggleAuth = (o_toggle) => ({type: TOGGLE_BTN, o_toggle})
export const editLinks= (keyLinks) => ({type: EDITS_LINKS, keyLinks})
export const setToken= (token) => ({type: CHECK_TOKEN, token})
export const setAuth= (idAuth) => ({type: CHECK_AUTH, idAuth})


export const setPathT =  (path) => (dispatch) => {
  localStorage.setItem('pathname', path)
  dispatch(setPath(path))
}
 
export const editLinksT =  (target) => (dispatch) =>{

  let toggle = {
    name: target.name,
    value: !target.isOn
  }
  dispatch(toggleAuth(toggle))
  
  let newLinks = target.links.map((item) => (
    (toggle.value) ? [(item[0]+ '/' + target.name), item[1]]:[item[0].replace(/\b\/\w*n\b/, ''), item[1]]
  ))
  dispatch(editLinks(newLinks))  
}

export const setAuthT =  (isAuth) => (dispatch) => {
  localStorage.setItem('isAuth', isAuth)
  dispatch(setAuth(isAuth))
}
 
/*
  Способ добавить название ключа в объект если оно неизвестно
  [action.toggle.name]: action.toggle.value
*/

