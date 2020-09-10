import React from 'react';
import c from './Profile.module.css';
import { NavLink } from 'react-router-dom';


let Profile = (props) => {

  return (
    <section className={c.profile}>
      <div className="container">
        <span className={c.title}>Profile</span>
        {/* <img src={props.user.avatar.path} alt={props.user.avatar.alt} /> */}
        {/* <span>Привет {props.user.name}</span> */}
        <button className={c.btn} onClick={props.logOut}>Выход</button>
        <button className={c.btn} onClick={props.issueTokenPair}>Обновить токен</button>
      </div>
    </section>
  )
}

export { Profile }


