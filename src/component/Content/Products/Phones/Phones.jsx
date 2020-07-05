import React from 'react';
import './Phones.css';

export const Phones = (props) => {
   // checkValue: localStorage.getItem('checked') || false;
   let evCheck = ({ target }) => {

      // if (target.name === 'checkValue') {
      //    localStorage.setItem('checked', target.checked);
      //    this.setState({});
      // } else {
      //    this.setState({ [target.name]: target.value })
      // }
   }
   let handleChange = ({target}) => {
      props.showProducts(target.value)
   }
   let check = JSON.parse(localStorage.getItem('checked'));
   let options = props.products.phone.map((item) => <option className="select__item" key={item.id} defaultValue={item.name} >{item.name}</option>)
   let checkFilter = props.products.phoneFILTER[0].name;
   
   return (
      <div></div>
   )
}

/*
  <form className='phone__form'>
               <div className="phone__items">
                  <select className="phone__select select" value={checkFilter} onChange={handleChange} >
                     {options}
                  </select>
                 
               </div>
               <div className="phone__items">
                  <input className="phone__formItem" name="checkValue" type="checkbox" onChange={evCheck} defaultChecked={check} />
                  <div className="block-info">{(check) ? 'Выбрано' : 'Не выбрано'}</div>
               </div>
               <div className="phone__items">
                  <input className="phone__formItem" name="rangeValue" type="range" defaultValue={''} onChange={evCheck} />
                  <div className="block-info">{''}</div>
               </div>
            </form>
*/
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