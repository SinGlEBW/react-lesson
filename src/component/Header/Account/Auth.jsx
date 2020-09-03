import React from 'react';
import c from './Auth.module.css';
import { Route } from 'react-router-dom';
import LogIn from './Authorization/LogIn';
import Register from './Registration/Register';
import AuthButtons from './Auth-btn';

let Auth = (props) => {
 
  return (
    <section className={c.auth}>
		 	<div className='container'>
        <AuthButtons />
        <Route path='/autorization' render={() => <LogIn {...props}/>} />
        <Route path='/registration' render={() => <Register {...props} />} />
      </div>
    </section>
  )
}

export default Auth;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/