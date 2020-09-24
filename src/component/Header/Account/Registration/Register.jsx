import { Form, withFormik, Field, ErrorMessage } from 'formik';
import React from "react";
import { schemaRegister } from 'src/utils/validYup';
import c from './Registration.module.css'

//className={c.form} 

let Registration = (props) => {
console.dir(props);
  return (
    <div className={c.wrap}>
      <h3 className={c.title}>Регистрация</h3>
      <Form className={c.form} onKeyDown={(e) => props.stepBelow(e, 6)}>
        <Input type="text" name="login" placeholder='Login' autoFocus/>
        <Input type="password" name="pass" placeholder='Password'/>
        <Input type="text" name="name" placeholder='Name'/>
        <Input type="email" name="email" placeholder='Email'/>
        <Input type="date" name="age"/>
        <Input type="tel" name="phone" placeholder='Phone'/>
        <Input type="file" name="avatar"/>
        <input className={c.item} type="submit" value='Зарегистрироваться' disabled={props.isSubmitting}/>
        <p className={c.msg} >{props.message}gg</p>
      </Form> 
    </div>
  );
};

let Input = ({label, ...props}) => (
  <>
    <p><label htmlFor={props.id || props.name}>{label}</label></p>
    <Field className={
      (props.type === 'file') ? `${c.item} ${c.file}` : c.item} {...props}/>
    <ErrorMessage name={props.name} component='div'/>
  </>
)


export default withFormik({
  mapPropsToValues: () => ({ login: '', pass: '', name: '', email: '', age: '', phone: '', avatar: '' }),
  handleSubmit: (values, { setSubmitting, ...props }) => {
    console.dir(111);
   
    setTimeout(() => {
     
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      props.setStatus({login: 200})
    }, 1000);
  },
  validationSchema: schemaRegister,
  displayName: 'register',
  
})(Registration);







/*
  {
    name: ['login','pass','name','email','age', 'phone','avatar']
    type: ['text','password','text','email','date', 'tel','file']
    className: {c.item}
    autoFocus: 1
  }
*/

/*
        <input className={c.item} onChange={props.changeInp} value={props.auth.pass} type="password" name="pass" placeholder='Password' />
        <input className={c.item} onChange={props.changeInp} value={props.auth.name} type="text" name="name" placeholder='Name' />
        <input className={c.item} onChange={props.changeInp} value={props.auth.email} type="email" name="email" placeholder='Email' />
        <input className={c.item} onChange={props.changeInp} value={props.auth.age} type="date" name="age" />
        <input className={c.item} onChange={props.changeInp} value={props.auth.phone} type="tel" name="phone" placeholder='Phone' />
        <input className={c.item} type="file" name="avatar" />
        <input className={c.item} type="button" name="but" value='Зарегистрироваться' onClick={props.send}/>
        <p className={c.msg}>{props.message}gg</p>

*/