import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Button } from "@material-ui/core";//тож есть Switch
import { styled } from "@material-ui/core/styles";

import c from './Auth.module.css';
import LogIn from './Authentication/LogIn';
import Register from './Registration/Register';


/*--------------------------------------------------------------------------------------------------------------*/
const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 'max-content'
});
let ButLink = (props) => <MyButton><NavLink className={c.btn} {...props} children={props.children}/></MyButton>

/*--------------------------------------------------------------------------------------------------------------*/

let Auth = (props) => {

  
  return (
    <section className={c.auth}>
      <div className='container'>
        <div className={c.btnWrap}>
          <ButLink name='login' to='/login'>Авторизация</ButLink>
          <ButLink name='register' to='/register'>Регистрация</ButLink>
        </div>

        <Route path='/login' render={() => <LogIn    {...props} />} />
        <Route path='/register' children={ <Register {...props} />} />
      </div>
    </section>
  )
}


export default Auth;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/
