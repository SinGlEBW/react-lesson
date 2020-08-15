import React from 'react';
import c from './Auth-btn.module.css';
import { Button } from "@material-ui/core";//тож есть Switch
import { styled } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 4,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 'max-content'
});

let AuthButtons = (props) => {
  
  return (
    <div className={c.auth}>
      
      <MyButton><NavLink className={c.btn} name='autorization' to='/autorization'>Авторизация</NavLink></MyButton>
      <MyButton><NavLink className={c.btn} name='registration' to='/registration'>Регистрация</NavLink></MyButton>

    </div>
  )
}

export default AuthButtons;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/