




export const footerReducer = (state = {['d']: 0}, action) => {

  switch(action.type){
    case 'INK': return {...state, ['d']:action.num}
    default: return state
  }
  
}

export const ink = (num) => ({type: 'INK', num})
export const numW = (n) => (dispatch) => {
  dispatch(ink(n))
}