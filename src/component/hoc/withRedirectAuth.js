import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export function withRedirectAuth(Component){
  
  let mapStateToProps = (props) => ({isAuth: props.auth.isAuth});
  let RedirectComponent = (props) => (!props.isAuth) ? <Redirect to='/Login' /> : <Component {...props}/>

 return connect(mapStateToProps)(RedirectComponent)
}



/* 
  Если использовать напрямую Redirect в компоненте который полон логикой, то вая эта логика загрузится, 
  дойдёт до render увидит там Redirect и перекинет на тот путь который указываем, но зачем загружать лишний
  код если можем сделать обёртку которая отвечает только за редирект
*/
/*
  HOK принимает вызов метода и возвращает объект компонента в React
*/




