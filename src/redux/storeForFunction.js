import arrTexts from "./text";
import { chatReducer } from "./reducer/Content/chat-reducer";

let store = {
  _state: {
    home: {
      arrTexts: arrTexts,
    },
    products: {
      phone: [
        { id: 1, name: "Huawei" },
        { id: 2, name: "Honor" },
        { id: 3, name: "Xiaomi" },
      ],
    },
    chat: {
      message: ["Hello"],
      setText: "",
    },
    contact: {
      tel: ["8(800)300-05-00", "417-555"],
    },
    info: {
      text: ["Информация 1", "Информация 2", "Информация 3"],
    },
    images: {
      animal: [
        { id: 1, src: "./../../image/18.jpg", alt: "бобр1" },
        { id: 2, src: "./../../image/19.jpg", alt: "бобр2" },
        { id: 3, src: "./../../image/20.jpg", alt: "бобр3" },
      ],
    },
  },

  dispatch(action) {
    chatReducer(this._state.chat, action);
    this.reloadDOM(store);
  },
  setState(stateObjChild) {},

  getState(stateObjChild) { 
    for(let key in this._state){
      if(key === stateObjChild)
        return this._state[key]
    }
  },
  subscribe(reloadDOMfileIndex){
    //reloadDOMfileIndex(store)
    this.reloadDOM = reloadDOMfileIndex;
  },
}


export { store };

/*
  action - объект в котором собираем информацию и передаётся в dispatch для обработки 
  dispatch - это метод для общей обработки запросов с UI, чтоб не плодить вроде как кучу методов.
  reducer - это функции в которые просто хранят куски кода из dispatch, для более читабельности кода
  subscribe - это callback который пробрасывает ReactDOM в файл store и далее привязывает к reloadDOM.
  На самом деле в Redux subscribe это слушатель изменений в store.
  Но по факту что я вижу что все методы action это всё те же методы которые мы бы и плодили,
  ко всему прочему мы ещё и имеем dispatch и более сложную систему понимания кода

  state меняют через dispatch
*/

//   reload(reloadDOMfileIndex) {
//     this.reloadDOM = reloadDOMfileIndex;
//   },
// };

// export const setReactDOMforState = (reloadDOMfileIndex) => {
//   reloadDOMfileIndex(store);
//   store.reload(reloadDOMfileIndex); //пока что так. можно в индекс перенести
// };
