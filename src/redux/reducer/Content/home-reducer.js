import arrTexts from "../../text";
const ADD_CONTENT = 'ADD_CONTENT';

let home = {
       arrTexts: arrTexts
};
export const homeReducer = (stateContent = home, action) => {
   
   switch(action.type){
      case ADD_CONTENT: stateContent.setText = action.text; return stateContent;
      
      default: return stateContent; 
      
    }
}

export const inContentAction = (text) => ({type: ADD_CONTENT, text})