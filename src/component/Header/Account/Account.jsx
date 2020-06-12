 import React, { Component } from 'react';
 import LoginIn from './Authorization/loginIn';
 export default class Account extends Component {
   constructor(props){
      super(props)
      this.state = {check: false,
        checked: false,
        mess: 'Login In',
        toggle: 'Вход'
      }
    }
    eventClickOn = () => {
      this.setState({check: true})
    }
    eventClickOff = () => {
      this.setState({check: false})
    }
  
    eventClickToggle = () => {
      
      this.setState({
        checked: !this.state.checked,
        mess: (this.state.checked) ? 'Login In' : 'Welcome',
        toggle: (this.state.checked) ? 'Вход' : 'Выход'
      })
    }
  
    render = () => {
       return (
          <section className="LoginIn">
            {//условный рендер
            (this.state.check) 
            ? <LoginIn onClick={this.eventClickOff} message='Welcome'/> 
            : <LoginIn onClick={this.eventClickOn} message='Login In'/>
            }

            {/*Пробуем строить логику на одной кнопке*/}
            <section className="box">
            
               <div className="box__items">
                  <button className="box__item" onClick={this.eventClickToggle}>{this.state.toggle}</button>
                  <div className="box__item"><h3>{this.state.mess}</h3></div>
               </div> 
            
            </section>
          </section>  
   )
 }

}