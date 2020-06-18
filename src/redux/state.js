import arrTexts from "./text";

export function reloadState(reloadDOMfileIndex) {

//   reloadDOMfileIndex(stateData);
}

let arrImage = [
   { id: 1, src: "./../../image/18.jpg", alt: "бобр1" },
   { id: 2, src: "./../../image/19.jpg", alt: "бобр2" },
   { id: 3, src: "./../../image/20.jpg", alt: "бобр3" },
 ];

 let stateData = {
   home: {
     arrTexts: arrTexts,
     methodHome() {},
   },
   products: {
     phone: [
       { id: 1, name: "Huawei" },
       { id: 2, name: "Honor" },
       { id: 3, name: "Xiaomi" },
     ],
     handleChange({ target }) {
       this.props.products.phone.push({ id: 4, name: "Huawei" });

       this.setState({ value: target.value });
     },
   },
   chat: {
     message: ["Hello"], //берёт этот текст
     value: "",
     //####---2 вариант
     inMess({ target }) {
       this.setState({ value: target.value });
     },

     send({ target }) {
       let valueTextarea = this.refTextarea.current.value;

       this.props.chat.message.push(valueTextarea);

       this.setState({ value: "" });
     },
     /*---3й способ--- */

     addPost(text) {
        this.props.chat.message.push(text);
        this.setState({ value: "" });

     //   this.props.chat.value = "";
     //   reloadDOMfileIndex(stateData);
     },

     addMess(text) {
        this.setState({ value: text});

     //   this.props.chat.value = text;
     //   reloadDOMfileIndex(stateData);

       
     },
   },

   contact: {
     tel: ["8(800)300-05-00", "417-555"],
   },
   info: {
     text: ["Информация 1", "Информация 2", "Информация 3"],
   },
   images: {
     animal: arrImage,
     add: (ev, image) => {
       ev.preventDefault();

       // this.setState({})
     },
   },
 };
 
export default stateData; //вариант 1

/*
   Концепция FLUX подразумевает когда объект state начинает путь с одного файла и передаётся 
   через props.
*/
/*
   Не могу поймать мысль в чём прикол не использовать setState, а оборачивать ReactDOM.render функцией потом её вызывать
   Скорей всего это требуется при использовании функционального программирования, а не классов,
   но как я понял все обновления state лучше использовать в одном файле, а не разбрасывать по компонентам.
   Возможно даже при использовании классов не требуется оборачивать функцией ReactDOM и пытаться что-то выносить,
   т.к. мы пользуемся setState.
   Возможно от классов отказались из-за проблем с передачей контекста и сложности понимания классов
*/
/*
   Использование классов требует постоянного вызова setState для использования и обновления объекта state.
   Димыч использует props

*/
//let message = document.getElementById('message');//так в React не используют т.к. отрисовку DOM нужно контролировать
