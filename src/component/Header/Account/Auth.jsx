import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';
import LogIn from './Authorization/LogIn';
import Register from './Registration/Register';


let Auth = (props) => {
  
  return (
    <Fragment>
      <Route path='/autorization' render={() => <LogIn {...props}/>} />
      <Route path='/registration' render={() => <Register {...props} />} />
    </Fragment>

  )
}

export default Auth;

/*
  Варианты использования state для кнопок. Можно изменяя state подкидывать компонент другой кнопки, а можно
  изменить саму кнопку поменяв значения
*/