const ADD_INFO = 'ADD_INFO';

let info = {
       text: ["Информация 1", "Информация 2", "Информация 3"],
};


export const infoReducer = (stateInfo = info, action) => {
   
   switch(action.type){
      case ADD_INFO: stateInfo.setText = action.text; return stateInfo;
      
      default: return stateInfo; 
      
    }
}

export const inInfoAction = (text) => ({type: ADD_INFO, text})