const CHECK_AUTH = 'CHECK_AUTH';

let stateAuth = {
  isAuth: 'reducer-auth'
};

export const authReducer = (state = stateAuth, action) => {
  
  switch(action.type){
    case CHECK_AUTH: return {...state, isAuth: action.isCheck }
    
    default: return state
  }
};

export const checkAuth = (isCheck) => ({type: CHECK_AUTH, isCheck})






