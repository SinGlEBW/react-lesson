import React, { Component } from 'react';
import './Chat.css';

export default class Chat extends Component {
   send = this.props.chat.send.bind(this)
   refTextarea = React.createRef();
   refLi = React.createRef();
   refBoxMessage = React.createRef();
   message = (id) => {


      return this.props.chat.message.map((message) => {
         id++

         return <li ref={this.refLi} key={id} className='chat__list-message-item'>{message}</li>
      })
   }

   render = () => {
      let idMessage = 0;

      return (
         <main className="chat">
            <div className="container">
               <div className="chat__box">
                  <textarea className="chat__input" name="message" ref={this.refTextarea} id="message" cols="30" rows="10"></textarea>
                  <button className="chat__input--but" onClick={this.send}>Отправить</button>
                  <div className="chat__output" ref={this.refBoxMessage}>
                     <ul className='chat__list-message'>
                        {this.message(idMessage)}
                     </ul>
                  </div>
               </div>
            </div>

         </main>
      )
   }
};
