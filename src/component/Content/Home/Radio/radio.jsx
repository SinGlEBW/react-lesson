import React, { Component } from 'react';
import './radio.css';

export default class Radio extends Component{
   constructor(params) {
      super(params)
      this.value = 15
   }
   checkEvent = (ev,value) => {
      console.dir(ev);//имитирую передачу аргумента
    
   }
   render = () => {
      return(
         <section className="radio">
            <div className="container">
               <form className='radio__form'>
                  <input className='radio__item' onChange={(ev) => this.checkEvent(ev, this.value)} type="radio" name="radio" value='yes'/>
                  <input className='radio__item' onChange={(ev) => this.checkEvent(ev, this.value)} type="radio" name="radio" value='no'/>
                  <input className='radio__item' onChange={(ev) => this.checkEvent(ev, this.value)} type="radio" name="radio" value="don't know"/>
               </form>
            </div>
         </section>
      )
   }
} 



/* Метод класса теряет контекст, стрелочная функция в setTimeout берёт контекст родителя.
  Обычная же функция в setTimeout возьмёт на себя ответственность и покажет контекст window,
  даже если это будет функция конструктор или классовый методы.

    checkEvent (ev)  { //this потерян
     console.dir(this);
      setTimeout(()=>{ //this undefined
         
         console.dir(this);
      },0)
   }
   
   let checkEvent2 = function() {}//может быть конструктором. this известен
   let checkEvent2 = () => {}//не может быть конструктором.
   function checkEvent2 () {}//может быть конструктором. this известен

   в классах
   checkEvent = function (ev)  {} //this неизвестен. требуется bind
   checkEvent (ev) {}//this неизвестен. требуется bind
   checkEvent = (ev) => {}//this известен

   Кстате при передаче аргументов React понимает в какой позиции передан event

   В React встречаемся с другой проблемой, потеря event в setTimeout.
   В React есть обёртка для Event называется SyntheticEvent. Обычный же event,
   который есть в JS находиться в (nativeEvent).
   В setTimeout теряется этот ev.nativeEvent из-за этого в SyntheticEvent не попадают 
   значения к которым мы обращаемся из setTimeout.
   
   Решение ещё старое, это передать event в переменную до setTimeout и использовать её в функции
   или установить методом ev.preset() в родителе, после чего ev.nativeEvent
   станет доступным в setTimeout

*/