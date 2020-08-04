import React, { Fragment } from 'react';

import { Button } from "@material-ui/core";//тож есть Switch
import { styled } from "@material-ui/core/styles";
import { NavLink, Route } from 'react-router-dom';
import LoginIn from './Authorization/LoginIn';
import Registration from './Registration/Registration';


const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 'max-content'
});

let Auth = (props) => {
  let path = props.pathname;
  console.dir(props);
  return (
    <Fragment >

      <MyButton><NavLink className='header__auth-btn' name='autorization' to='/autorization'>Авторизация</NavLink></MyButton>
      <MyButton><NavLink className='header__auth-btn' name='registration' to='/registration'>Регистрация</NavLink></MyButton>

      <Route path='/autorization' render={() => <LoginIn /> }/>
      <Route path='/registration' render={() => <Registration />}/>
    </Fragment>
  )
}

export default Auth;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/