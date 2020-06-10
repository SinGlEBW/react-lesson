import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as S from '@material-ui/core';
import './tests.css';


export default class Test extends Component {
  state = {edit: null}

  eventEdit = (ev) => {
    ev.preventDefault();
    this.setState({edit: ev.target.id})
  }
  eventSettings = (ev) => {
    ev.preventDefault();
    
  }
 
   sh(props, id){
 
      let buttons,text;
      if(this.props.match.params.admin === 'admin'){
        buttons = (<Button variant="contained"><NavLink to='' id={id} onClick={this.eventEdit}>Редактировать</NavLink></Button>) 
      } 
      else
        buttons = null;

      if(this.state.edit === id.toString())
        text = <textarea className='text-block__item item__textarea' defaultValue={props}></textarea>
      else
        text =  <p className='text-block__item'>{props}</p> 

      return (
      <div className='text-block__items' key={id.toString()}> 
         {text}
         <input className="text-block__item" type="radio" name={`radio${id}`} value="yes"/>
         <input className="text-block__item" type="radio" name={`radio${id}`} value="no"/>
         <input className="text-block__item" type="radio" name={`radio${id}`} value="neutral"/> 
         {buttons}
      </div>
      )
   }

  render() {
    let id = 0;
    let block = this.props.textTest.map( (item) => { 
      
      id++
      return this.sh(item, id)} )
    
    return (
      <section className='test-block'>
        <div className='container'> 
          <form className='test-block__form'>
              {block}
              <div className='text-block__buttons'>
                
                  <button className='text-block__btn'>Ответить</button>
                
                <Button variant="contained" className='text-block__btn--color'>
                  <NavLink className='text-block__btn' to="/admin">Настройки</NavLink>
                </Button>
      
                
              </div>   
          </form>
        </div>
      </section>
		);
  }
}


console.dir(S);
console.dir(Button);
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