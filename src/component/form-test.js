import React, { Component } from "react";

export default class Test extends Component {
   static count = 0
   sh(props, index){
  
      return (
      <div className='text-block__items' key={index}> 
         <div className='text-block__item' >{props}</div>
         <input className="text-block__item" type="checkbox" name="yes"/>
         <input className="text-block__item" type="checkbox" name="no"/>
         <input className="text-block__item" type="checkbox" name="neutral"/> 
      </div>
      )
   }
  render() {
    
    let block = this.props.textTest.map( (item, index) => this.sh(item,index) )
    console.dir(block);
    return (
      <section className='test-block'>
        <div className='container'> 
          <form className='test-block__form'>
              {block}
              <button>Ответить</button>
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