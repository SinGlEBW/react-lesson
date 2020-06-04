import React, { Component } from 'react';
import './../css/state.css';
export default class LifeState extends Component{
   constructor(props){
      super(props)
      this.checkEv = this.checkEvent.bind(this)
      this.state = {
         check: localStorage.getItem('checked') || false,
         date: new Date().toLocaleTimeString()//влияет только на первоначальную загрузку страницы
      }
       
   }
   componentDidMount() {//запускается как отрендерится. типa события windows.onload
      console.dir(this.props);
      this.timerID = setInterval(()=>this.tick(),1000)
      
   }
   componentWillUnmount() {
      console.dir(3);
      clearInterval(this.timerID);
   }
   tick() {
      
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    }

   checkEvent ({target}) {//такой способ checkEvent = () => {} создания метода не теряет this
      console.dir(this);
      this.setState({})
      localStorage.setItem('checked', target.checked)
      
   }
   render() {
      let check = JSON.parse(localStorage.getItem('checked'))
      
      return (
         <section className='cart'>
            <div className='container'>
               <form className='cart__form'>
                  <input className='cart__item' onChange={this.checkEv} defaultChecked={check} type="checkbox"/>
                  <div className='cart__item'>{check ? 'выбран' : 'не выбран'}</div> 
                  <h1>{this.state.date}</h1>
                 
               </form>
            </div>
         </section>
      )
   }
}

// console.dir(new LifeState());
/*

   localStorage.getItem('check') возвращает строку, поэтому добавляя в defaultChecked={localStorage.getItem('check')} мы
   будем получать всегда активную галочку для checkbox, потому что строка. Обернув строку в Boolean получим всегда
   true т.к. там строка и не важно что там 'false'. Я на этом собаку съел. Так что хранить в localeStorage
   исключительно в формате JSON и в дальнейшем получать значения через parse 

   так же важно то, что использование за пределами setState нет гарантии получить обновлённое значение к которому обращаемся
   для этого лучше использовать 2й параметр callback в котором 100% получаем обновлённое значение state
   или использовать async await
   Пример:

   async checkEvent(){
      this.setState({check: (!this.state.check)}, (item) => {
         console.dir(this.state.check);//тут уже новое
      })
      console.dir(this.state.check);//тут старое значение
   }


   «Состояние» очень похоже на уже знакомые нам пропсы, отличие в том,
   что состояние контролируется и доступно только конкретному компоненту.

   Всё что требуется для работы часов это обновлять ReactDOM через setInterval и добавить куда надо 
   часы, но есть другое решение Метод жизненного цикла. Сделано это для того что бы после удаления 
   одного компонента максимально чисто было в других файлах
   Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting).
Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting). 
Чтобы избежать утечки ресурсов, нужно сбрасывать таймер при каждом «размонтировании».

componentDidMount - в этом методе не вызывают setState. Метод вызывается после монтирования компонента в DOM
*/