import React from "react";
import './Registration.css'

let Registration = (props) => {
 
  console.dir(props);
  return (
    <div className="registration">
      <h3 className="registration__title">Регистрация</h3>
      <form className="registration__form" >
        <input className='registration__formItem' type="text" name="login" placeholder='Login'/>
        <input className='registration__formItem' type="password" name="password" placeholder='Password'/>
        <input className='registration__formItem' type="email" name="email" placeholder='Email'/>
        <input className='registration__formItem' type="tel" name="tel" placeholder='Phone'/>
        <input className='registration__formItem' type="file" name="avatar" />
        <input className='registration__formItem' type="submit" name="but" />
      </form>
    </div>
  );
};

export default Registration;
