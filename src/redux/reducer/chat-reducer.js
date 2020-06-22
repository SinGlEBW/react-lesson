const IN_MESS = 'IN_MESS';
const SEND = 'SEND';

let chat = {
   message: ["Hello"],
   setText: "",
 }
 /*
   Обязательная ручная инициализация и возврат данных из reducer
 */
export const chatReducer = (stateChat = chat, action) => {
  
   switch(action.type){
      case IN_MESS: stateChat.setText = action.text; return stateChat;
      case SEND: stateChat.message.push(action.text);
                 stateChat.setText = ''; return stateChat;
      default: return stateChat; 
      
    }
}

/*####----Зачем такой манёвр непонятно--Заполнение объекта--#### */
/* Чтоб объекты можно было как то различить ставят type, что бы было понятно как дальше работать с информацией */
export const inMessAction = (text) => ({type: IN_MESS, text})
export const sendAction = (text) => ({type: SEND, text})

/*
   Если у объекта имя совпадает с ключом, то можно писать только значение
*/
