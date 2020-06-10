import React, { Component } from 'react';
import './button.css';

export default class Button extends Component{

   render(){
      let value = (this.props.message === 'Welcome')? 'Выход' : 'Вход';
      return (
         <section className="buttons">
            <div className="container">
               <div className='buttons__items'>    
                  <button onClick={this.props.onClick} className="buttons__item">{value}</button>
                  <div className="buttons__item"><h2>{this.props.message}</h2></div>
               </div>
            </div>
         </section>
      )
   }
}