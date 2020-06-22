import arrTexts from "./text";
/*
  Как вариант иметь объекты со своими методами
*/
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

    inMess(context, text) {
      context.setState({ value: text });
    },
    
    send(context, text) {
      this.message.push(text);
      context.setState({ value: "" });
    },
    
    /*---3й способ--- */
    inMess2(text) {
      //this.setState({ value: text});
      //this.props.chat.value = text;

      console.dir(this);
      this.value = text;
      this.reloadDOM(stateData);
   
    },
    send2(text) {
      // this.props.chat.message.push(text);
      // this.setState({ value: "" });

      this.message.push(text);
      this.value = "";
      this.reloadDOM(stateData);
    },
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
    add: (ev, image) => {
      ev.preventDefault();

      
    },
  },
  reload(reloadDOMfileIndex){
    this.reloadDOM = reloadDOMfileIndex;
  }
};

export const reloadState = (reloadDOMfileIndex) => {
  reloadDOMfileIndex(stateData);
  stateData.reload(reloadDOMfileIndex);
};

export default stateData; //вариант 1


/*
 К какому методу я обращаюсь, контекст того места где этот метод лежит я и получаю, что логично.
 dispatch вроде бы лежит в _state, но обращение идёт через props поэтому и контекст получаю объекта props
*/


/*
   Концепция FLUX подразумевает когда объект state начинает путь с одного файла и передаётся 
   через props.

   UI отрисовывает то что попадает в state. Событиями мы заполняем state чтобы брать из него и отрисовывать.
   state это бизнес логика BLL, в которую попадают данные и передаются серверу.
   Удобней при разработке сайтов построить сначала бизнес логику, то бишь state, а потом UI 
*/
/*
  И того: при всех равных разница использования setState и без него в отдельном файле
  state выделю несколько моментов:
  1й. setState всегда обновляет один компонент, без него приходиться перезагружать связку
       компонентов.
  2й. использовав setState мы изначально локально обращаемся в компоненте к объекту state
      хотя отправляем обновляем этот объект наверху в файле state. Насколько это критично
      не понятно. В то время как использовав props как объект state, то мы по факту к этому 
      объекту так же имеем доступ на разных уровнях, в тех компонентах через которые проходит
      изначально props.
  3й. момент это перезагрузка. один компонент против нескольких при изменении данных 
*/
/*
   Использование классов требует постоянного вызова setState для использования и обновления объекта state.
   Конечно можно использовать классы и не использовать объект state, а на полную использовать props 
   Димыч использует props

   Один из вариантов использования методов переданных через props можно обернуть методы в один метод  
   
Использовать подход объект с объектами при обращении к вложенным объектам this будет принадлежать только им



Что такое action - объект который содержит информацию передаётся в dispatch 

  ловить такие данные 
  this.props.data.getMethod
*/
