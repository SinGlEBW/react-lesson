import React, { Component } from 'react';
import './Chat.css';

export default class Chat extends Component {
   myRef = {
      refTextarea: React.createRef(),
      rrr: (ref) => ref//можно и функцию отдать, получается что-то типа события onload   
   }

   state = { value: '' }

   responseMessage = () => {
      let id = 0;
      return this.props.chat.message.map((message) =>
         <li key={id++} className='chat__list-message-item'>{message}</li>)
   }

   listensMessage = ({ target }) => this.props.changesTheMessage(target.value)

   sendMessage = () => this.props.toSend(this.myRef.refTextarea.current.value)

   render = () => {

      console.dir(this);
      return (
         <main className="chat">
            <div className="container">
               <div className="chat__box">
                  <textarea className="chat__input" value={this.props.chat.setText} onChange={this.listensMessage} ref={this.myRef.refTextarea} id="message" cols="30" rows="10"></textarea>
                  <button className="chat__input--but" onClick={this.sendMessage}>Отправить</button>
                  <div className="chat__output">
                     <ul className='chat__list-message'>
                        {this.responseMessage()}
                     </ul>
                  </div>
               </div>
            </div>

         </main>
      )
   }
};


/*
   Удобно тем что при обращении у  методам state контекст в том объекте остаётся своим
   и обращение через this можно проводить локально внутри объекта chat
*/



/*
Кстате говоря useState это тот же setState только предназначен для компонентов в виде
функций и требует вызова в import. useState принимает начальное значение и возвращает
массив где 1й элемент это текущее значение, 2й эл. это функция изменения. Она принимает

setCount синхронный способ получения это указать callback

Разница setState и useState в том что setState изменяет лишь часть state, то есть объединяет
данные с объектом,  в то время как useState обновляет весь объект state, то есть как я
понимаю перезаписывает, то есть в разных местах объект будет разный


   Новый способ передавать контекст компонента, не совсем понятно но вроде у компонента
   вызывать метод Consumer в одном месте, и Provider в другом месте
   сделано это вроде для того что бы не использовать props

   Что такое хуки? - это набор функций которые расширяют возможности
   функциональных компонентов.
   useState useContext useEffect useRef useReducer... это и есть хуки


   useEffect как я понял это аналог componentDidMount отрабатывает 1 раз как дерево дом обновилось
*/
/************************************************************************* */
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

//#-!!! вариант с использованием отдельно setState как в компоненте, так и файле state - НЕ ИСПОЛЬЗУЕТСЯ !!!

   Вариант 1. использовать один метод с setState в компоненте. (На больших проектах не используют)
   Вариант 2. использовать один метод с setState в файле state. (На больших проектах не используют)
   Вариант 3. использовать setState в файле state и ещё метод в компоненте передающий значения в файл state
   Вариант 4. не использовать setState, а использовать props и строить свой reload и объект state.


Использование классов и вынесение setState в отдельный файл state, принуждает передавать контекст компонента
в файл state. 2й вариант требует использование bind, 3й имеет 2 способа: 1й. через методы компонента передавать
контекст через call обращаясь к методам в файле state или 2й. передавать 2 аргумента методу файла state, это
контекст и данные. Такой вариант даёт возможность работать в файле state 2мя контекстами, что упрощает и уменьшает длину
обращений к свойствам при передачи данных.


4й же вариант это отказ от использования setState и существующего объекта state.
При этом придётся пользоваться объектом props и создавать там свой объект state так же обновлять
ReactDOM самостоятельно, оборачивая его callback'ом передавая в файл state и при каждом чихе вызывать.
Таким способом обычно пользуются при функциональном программировании. Используя такой способ, будет перезагружаться
общий стек компонентов, а не одна затронутая часть компонента, всё зависит по какому адесу и сколько
компонентов мы прослушиваем. Встаёт вопрос насколько это эффективно. Пока да полный список Хук не изучал, может там
и есть альтернативы, но они для функциональных компонентов, а не для классов.





 До этого мы использовали методы по одиночке или создавали в компоненте или создавали в state и для использования
 методов из state привязывали контекст через bind в нашем компоненте после чего могли использовать метод.
   // Есть 3й вариант создавать метод в как в state так и в компоненте и каждый будет отвечать за свои действия
   // метод в файле state будет вызываться методом находящимся в компоненте, после чего будет передаваться данные,
   // но что бы контекст в файле state не терялся придётся передавать через call() как контекст так и значения.

Что это даёт, больше написанных методов




*/