const SHOW_MESS = "SHOW_MESS";
const TEXT_INPUT_MESS = "TEXT_INPUT_MESS";
const SEND_MESS = "SEND_MESS";
const DEL_MESS = "DEL_MESS";

let chat = {
  users: [
    {
      id: 1,
      name: "Вася",
      message: "Привет",
    },
    {
      id: 2,
      name: "Петя",
      message: "Здрасте",
    },
  ],
  setTxt: "",
};

/*
   Обязательная ручная инициализация и возврат данных из reducer
*/
export const chatReducer = (stateChat = chat, action) => {
  let send = () => {
    let lastIndex = stateChat.users.length - 1;
    let o_Mess = {
      id: stateChat.users[lastIndex].id + 1, //инкремент чёт не работает
      name: "User",
      message: action.message
    };
    stateChat.setTxt = "";
  
    return { ...stateChat, users: stateChat.users.concat(o_Mess) };
  };

  switch (action.type) {
    case SHOW_MESS: return { ...stateChat }; 
    case TEXT_INPUT_MESS: return { ...stateChat, setTxt: action.txt }; 
    case SEND_MESS: return send();  
    case DEL_MESS: return stateChat.users.filter((item) => item.id !== Number(action.id));  
    default: return stateChat;
     
  }
};

/*####----Зачем такой манёвр непонятно--Заполнение объекта--#### */
/* Чтоб объекты можно было как то различить ставят type, что бы было понятно как дальше работать с информацией */
export const changesTheMessAC = (txt) => ({ type: TEXT_INPUT_MESS, txt });
export const showMessAC = () => ({ type: SHOW_MESS });
export const sendMessAC = (message) => ({ type: SEND_MESS, message });
export const delMessAC = (id) => ({ type: DEL_MESS, id });

let ws = new WebSocket('ws://localhost:4000/')
		

ws.onopen = (ev) => {
  console.dir(ev);
}
ws.onclose = (ev) => {
  console.dir(ev);
}
ws.onmessage = (ev) => {
  console.dir(ev);
}



/*
   Если у объекта имя совпадает с ключом, то можно писать только значение
*/
