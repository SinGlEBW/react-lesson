import React, { Component } from "react";
import './Registration.css'

export default class Registration extends Component {
  render = () => {
    return (
      <div className="registration">
        <h3 className="registration__title">Регистрация</h3>
        <form className="registration__form" >
          <input className='registration__formItem' type="text" name="regLogin" placeholder='Login'/>
          <input className='registration__formItem' type="password" name="regPass" placeholder='Password'/>
          <input className='registration__formItem' type="email" name="regEmail" placeholder='Email'/>
          <input className='registration__formItem' type="tel" name="regTel" placeholder='Phone'/>
          <input className='registration__formItem' type="file" name="regAvatar" />
          <input className='registration__formItem' type="submit" name="regBut" />
        </form>
      </div>
    );
  };
}
