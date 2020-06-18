import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
   state = {
      value: 'Xiaomi',
      checkValue: localStorage.getItem('checked') || false,
      rangeValue: 0,
   }
   handleChange = this.props.products.handleChange.bind(this);

   handleChange1 = ({target}) => {
      console.dir(this);
      this.props.products.phone.push({id: 4, name: 'Huawei'})
            this.setState({value: target.value});
          }
  
   evCheck = ({target}) => {
      
     if (target.name === 'checkValue'){
        localStorage.setItem('checked', target.checked);
        this.setState({});
     }else{
        this.setState({[target.name]: target.value })
     }
      
   }
   render = () => {
      let check = JSON.parse(localStorage.getItem('checked'));
      let options = this.props.products.phone.map((item) => <option className="select__item" key={item.id} defaultValue={item.name} >{item.name}</option>)
     
      return (
         <section className="list-phone">
            <div className="container">
             
               <form className='list-phone__form'>
                  <div className="list-phone__items-wrap">
                     <select className="list-phone__select select" value={this.state.value} onChange={this.handleChange1} >
                        {options}
                     </select>
                     <div className="block-info">{this.state.value}</div>
                  </div>
                  <div className="list-phone__items-wrap">
                     <input className="list-phone__formItem" name="checkValue" type="checkbox"  onChange={this.evCheck} defaultChecked={check}/>
                     <div className="block-info">{(check)? 'Выбрано' : 'Не выбрано'}</div>
                  </div>
                  <div className="list-phone__items-wrap">
                     <input className="list-phone__formItem"  name="rangeValue" type="range"  defaultValue={this.state.rangeValue} onChange={this.evCheck}/>
                     <div className="block-info">{this.state.rangeValue}</div>
                  </div>
               </form>

            </div>
         </section>
      )
   }
};


/*
Для начала при ошибке TypeError: Cannot read property 'setState' of undefined
проверить контекст.

   в React input, textarea и даже select могут иметь атрибут value или defaultValue для установки значения по умолчанию.
   Разница атрибутов в том что установив value на какое-то значение, его нельзя будет изменить без вмешательства через событие,
   значение будет фиксированным. Например в select не получится выбрать значение в списке, хоть и будет список открываться, до тех пор пока
   не подключу событие onChange через которое можно будет изменять это значение. Значение получается под контролем события.
   Атрибут с префиксом default ничем не ограничивает, можно менять значение без события, а можно и с событием.
   Тоже относиться и к checked. 
   Устанавливать value в null приводит к ошибке в консоли.
   В стандартном html select не имеет value и указывается тегу options атрибут selected

   Когда происходит изменение, отрабатывает событие которое обновляет state после чего значение меняется в
   атрибуте value меняется. Получается контролирующийся круговорот. Как я понимаю state это объект который и должен работать с сервером.
   Когда мы не используем такой круговорот, мы можем выбирать значения в списке, но обновления не будет. 
   Это не тот вариант где просто вызываем setState, нам нужно изменить значение, положить его в state, далее
   вывести его где-то и state обновиться. defaultValue и value требуются для того, что бы значение не сбрасывалось,
   а было то которое в state.  

   В атрибут value можно передать массив, что позволит выбрать несколько опций в теге select:
   <select multiple={true} value={['Б', 'В']}>
  
*/