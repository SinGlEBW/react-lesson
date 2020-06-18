import React, { Component } from 'react';
import './Chat.css';

export default class Chat extends Component {
   // sendState = this.props.chat.send.bind(this)
   // inMessState = this.props.chat.inMess.bind(this)
   refTextarea = React.createRef();
   refLi = React.createRef();
   refBoxMessage = React.createRef();
   state = { value: '' }


   responseMessage = (id) => {
      return this.props.chat.message.map((message) => {
         id++

         return <li ref={this.refLi} key={id} className='chat__list-message-item'>{message}</li>
      })
   }
   //####---1 вариант
   inMess = ({ target }) => {
      this.setState({ value: target.value })
   }
   send = () => {

      let valueTextarea = this.refTextarea.current.value;

      this.props.chat.message.push(valueTextarea)//массив с сервера

      this.setState({ value: '' })

   }
   //####---3 вариант
   inMess2 = ({ target }) => {

      this.props.chat.addMess.call(this, target.value)
   }

   send2 = () => {

      let valueTextarea = this.refTextarea.current.value;

      this.props.chat.addPost.call(this, valueTextarea)
   }

   render = () => {
      let idMessage = 0;
      console.dir(this);
      return (
         <main className="chat">
            <div className="container">
               <div className="chat__box">
                  <textarea className="chat__input" value={this.state.value} onChange={this.inMess2} ref={this.refTextarea} id="message" cols="30" rows="10"></textarea>
                  <button className="chat__input--but" onClick={this.send2}>Отправить</button>
                  <div className="chat__output" ref={this.refBoxMessage}>
                     <ul className='chat__list-message'>
                        {this.responseMessage(idMessage)}

                     </ul>
                  </div>
               </div>
            </div>

         </main>
      )
   }
};

/*
димыч добавлял в value={props.chat.message} просто напрямую обращался к объекту в state который передаётся
через props.
Ещё зачем функцию addPost передавал отдельно от объекта, тем самым дополнительно указывал в App атрибутом для props
эту функцию. Мог бы методом кинуть и всё.
*/



/*
   Что мешает использовать setState внутри компонента? Должна быть последовательность
   ввожу данные, отправляю на сервер, оттуда приходит разрешение на отрисовку.

   Если требуется прокинуть setState в один файл, зачем оборачивать ReactDOM.render своей
   функцией и вызывать её в state если мы можем вызывать setState там же?

   объект state прокидывают для ....
   Отличия..
Разницы между использованием setState, как в конечном компоненте так и выносить метод за
за пределы помещая в state, не вижу разве что меньше кода в компоненте, но скопиться код
в файле state. Возможно это сделано для того что бы не лазить по компонентам и искать
код отрисовки, хотя не вижу трудностей для этого и разбивают код на компоненты и каждый компонент
содержит свои методы.

Одно дело пробрасывать данные от верхнего уровня к нижнему через props даём возможность
пользоваться данными на разных уровнях в тех компонентах через которые проходят наши данные
и при изменении на нижнем уровне мы можем получать изменение на верхнем уровне. Делается это для того,
что бы не делать подключение к каждому компоненту (то бишь import) и не работать с каждым файлом
индивидуально, в дальнейшем сложно поддерживать такой код. Возможно для этого и содержат методы
обновляющие state, что бы можно было ими так же воспользоваться на разных уровнях, тем более методы можно
написать универсальными для нескольких действий.


   Вариант 1. использовать один метод с setState в компоненте
   Вариант 2. использовать один метод с setState в файле state
   Вариант 3. использовать setState в файле state и ещё метод в компоненте передающий значения в файл state

Использование методов из файла state которые хранятся в объекте принуждает привязывать контекст в
файле компонента после чего могу использовать метод. По идее мы имеем в props эти методы обновляющие state, но
для использования их в нужных компонентах придётся привязывать контекст, но это не влияет на общие изменения
props, таким образом сам класс зарастает копиями методов получившихся после bind.

Как же избавится от использования bind?
До этого мы использовали методы по одиночке или создавали в компоненте или создавали в state и для использования
методов из state привязывали контекст через bind в нашем компоненте после чего могли использовать метод.
Есть 3й вариант создавать метод в как в state так и в компоненте и каждый будет отвечать за свои действия
метод в файле state будет вызываться методом находящимся в компоненте, после чего будет передаваться данные,
но что бы контекст в файле state не терялся придётся передавать через call() как контекст так и значения.

Что это даёт, больше написанных методов


Пробуем избавиться от setState
*/