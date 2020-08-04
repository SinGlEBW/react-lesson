import React from 'react';
import './LoginIn.css'

let LoginIn = (props) =>  {
   console.dir(props);
   return (
      <div className='loginIn'>
         <h3 className="loginIn__title">Авторизация</h3>
         <form className='loginIn__form'>
            <input className='loginIn__formItem' type="text" name='logIn' placeholder='Login'/>
            <input className='loginIn__formItem' type="password" name='passIn' placeholder='Password'/>
            <input className='loginIn__formItem' type="submit" name='butIn' value='Войти'/>
         </form>
      </div>
   )
}

export default LoginIn;