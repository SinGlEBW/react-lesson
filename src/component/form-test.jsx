import React, { Component } from "react";
import './../css/form-test.css';
export default class Test extends Component {
   
   sh(props, index){
      return (
      <div className='text-block__items' key={index}> 
         <p className='text-block__item'>{props}</p>
         <input className="text-block__item" type="radio" name={`radio${index}`} value="yes"/>
         <input className="text-block__item" type="radio" name={`radio${index}`} value="no"/>
         <input className="text-block__item" type="radio" name={`radio${index}`} value="neutral"/> 
      </div>
      )
   }
  render() {
    
    let block = this.props.textTest.map( (item, index) => this.sh(item,index) )
    
    return (
      <section className='test-block'>
        <div className='container'> 
          <form className='test-block__form'>
              {block}
              <div className='text-block__items'>
                <button className='text-block__item text-block__btn'>Ответить</button>
              </div>   
          </form>
         
        </div>
      </section>
		);
  }
}



/*

Что бы исправить такую ошибку:
Warning: Each child in a list should have a unique "key" prop.
при перечислении массива в тег нужно ключ массива передавать в атрибут key
причём этот ключ передаётся родительскому элементу, а не дочернему 
<div key={props.toString()}> props </div> - перечисляется массив
React ориентируется по ключам при дальнейшем изменении массива. 
Далее обычно используются ID из моих данных как ключи:

Можно использовать index как ключи, но не рекомендуют т.к 
в некоторых случаях при определёно построенном коде есть возможность
изменить порядок элементов (тегов), а это может привести к проблемам
Как вариант циклы в которых index изначально строковой. как я понимаю по каким-то причинам
строковой индекс не всегда выстраивается по порядку. Такое было описано о цикле вроде for in


*/