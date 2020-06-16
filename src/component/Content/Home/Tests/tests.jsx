import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import * as S from '@material-ui/core';
import './Tests.css';


export default class Test extends Component {
  state = {
    settings: false,
    edit: false
  }
  eventSettings = (ev) => {
    ev.preventDefault();
    this.setState({ settings: !this.state.settings })
  }
  eventEdit = (ev) => {
    ev.preventDefault();
    if (this.state.edit === Number(ev.target.id))
      this.setState({ edit: this.state.edit - Number(ev.target.id) })
    else
      this.setState({ edit: Number(ev.target.id) })

  }
  text = (item, id) => {
    return (
      (this.state.edit === id)
        ? <textarea className='text-block__item item__textarea' defaultValue={item}></textarea>
        : <p id={id} className='text-block__item'>{item}</p>

    )
  }
  editButton = (id) => {
    return (
      (this.state.settings)
        ? <Button variant="contained" key={id} ><NavLink to='' id={id} onClick={this.eventEdit}>Редактировать</NavLink></Button>
        : null
    )
  }
  blocksTest() {

    let id = 0;
    let block = this.props.home.arrTexts.map((item) => {

      id++
      return (
        <div className='text-block__items' key={id.toString()}>

          {this.text(item, id)}
          <input className="text-block__item" type="radio" name={`radio${id}`} value="yes" />
          <input className="text-block__item" type="radio" name={`radio${id}`} value="no" />
          <input className="text-block__item" type="radio" name={`radio${id}`} value="neutral" />
          {this.editButton(id)}
        </div>
      )
    })

    return block;
  }

  render() {
    console.dir(this);
    return (
      <section className='test-block'>
        <div className='container'>
          <form className='test-block__form'>
            {this.blocksTest()}
            <div className='text-block__buttons'>

              <button className='text-block__btn'>Ответить</button>

              <Button className='text-block__btn--color' variant="contained" >
                <NavLink className='text-block__btn' to="/home/admin" onClick={this.eventSettings}>Настройки</NavLink>
              </Button>

            </div>
          </form>
        </div>
      </section>
    );
  }
}





/*

 let id = 0;
    let block = this.props.home.arrTexts.map( (item) => {

      id++
      return this.blockText(item, id)} )


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



*/

/*

Что бы исправить такую ошибку:
Warning: Each child in a list blockTextould have a unique "key" prop.
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