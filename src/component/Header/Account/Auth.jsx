import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Button } from "@material-ui/core";//тож есть Switch
import { styled } from "@material-ui/core/styles";

import c from './Auth.module.css';
import LogIn from './Authentication/LogIn';
import Register from './Registration/Register';

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 'max-content'
});


let Auth = (props) => {
console.dir(props);
  
  return (
    <section className={c.auth}>
      <div className='container'>
        <div className={c.btnWrap}>
          <MyButton><NavLink className={c.btn} name='login' to='/login'>Авторизация</NavLink></MyButton>
          <MyButton><NavLink className={c.btn} name='register' to='/register'>Регистрация</NavLink></MyButton>
        </div>
        <Route path='/login' render={() => <LogIn {...props} />} />
        <Route path='/register' render={() => <Register {...props} />} />
      </div>
    </section>
  )
}


export default Auth;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/
