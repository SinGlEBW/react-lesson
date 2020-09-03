import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



let mapStateToProps = (props) => ({isAuth: props.auth.isAuth});


export let WithRedirectAuth = (Component) => {
  let RedirectComponent = (props) => {
    if(!props.isAuth)
      return <Redirect to='/registration' />

    return <Component {...props}/>
 
  }

 return connect(mapStateToProps)(RedirectComponent)
}