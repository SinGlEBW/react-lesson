const ADD_CONTACT = 'ADD_CONTACT';

let contact = {
       tel: ["8(800)300-05-00", "417-555"],
};

export const contactReducer = (stateContact = contact, action) => {
   
   switch(action.type){
      case ADD_CONTACT: stateContact.setText = action.text; return stateContact;
      
      default: return stateContact; 
      
    }
}

export const inContactAction = (text) => ({type: ADD_CONTACT, text})