import React from "react";
import c from './Registration.module.css'

let Registration = (props) => {
console.dir(props);
  return (
    <section className={c.registration}>
      <div className='container'>
        <div className={c.wrap}>
          <h3 className={c.title}>Регистрация</h3>
          <form className={c.form} onKeyDown={(e)=> props.stepBelow(e, 6)} name='register' ref={props.refRegister}>
            <input className={c.item} onChange={props.changeInp} value={props.auth.login} type="text" name="login" placeholder='Login' autoFocus/>
            <input className={c.item} onChange={props.changeInp} value={props.auth.pass} type="password" name="pass" placeholder='Password' />
            <input className={c.item} onChange={props.changeInp} value={props.auth.email} type="email" name="email" placeholder='Email' />
            <input className={c.item} onChange={props.changeInp} value={props.auth.age} type="date" name="age" />
            <input className={c.item} onChange={props.changeInp} value={props.auth.phone} type="tel" name="phone" placeholder='Phone' />
            <input className={c.item} type="file" name="avatar" />
            <input className={c.item} type="button" name="but" value='Зарегистрироваться' onClick={props.send}/>
            <p className={c.msg}>{props.message}gg</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
