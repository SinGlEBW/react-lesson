import React from 'react';
import c from './Profile.module.css';
import { NavLink } from 'react-router-dom';


let Profile = (props) => {
console.dir(props);
  return (
    <section className={c.profile}>
      <div className="container">
        <div className={c.wrap}>
          <span className={c.title}>Profile</span>
          {/* <img src={props.user.avatar.path} alt={props.user.avatar.alt} /> */}
          {/* <span>Привет {props.user.name}</span> */}
          <button className={c.btn} onClick={props.issueTokenPair}>Обновить токен</button>
          <button className={c.btn} onClick={props.logOut}>Выход</button>
        </div>
      </div>
    </section>
  )
}

export { Profile }


