import React, { Component } from 'react';
import './LoginIn.css'
export default class LoginIn extends Component {
   state = {loginIn: localStorage.getItem(LoginIn) || false}
   
   render = () => {
      console.dir(this);
      return (
         <div className='loginIn'>
            <h3 className="loginIn__title">Авторизация</h3>
            <form className='loginIn__form'>
               <input className='loginIn__formItem' type="text" name='logIn' placeholder='Login'/>
               <input className='loginIn__formItem' type="password" name='passIn' placeholder='Password'/>
               <input className='loginIn__formItem' type="submit" name='butIn' value={(this.state.loginIn)? 'Выход' : 'Вход'}/>
            </form>
         </div>
      )
   }
};
