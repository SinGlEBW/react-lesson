import { Field, reduxForm } from 'redux-form';
import React from 'react';
import * as yup from 'yup';
import c from './LogIn.module.css'

console.dir(yup);

const renderInput = ({input, meta: { touched, error }, ...props}, ob) => {

	let checkbox = props.type === 'checkbox';
	let cl = (checkbox) ? c.checked : c.item;
	let checkErr = touched && error;

	return (
	<div className={c.boxInput}>{(checkbox) ? 'Сохранить пароль?' : ''}
    <input className={checkErr ? `${cl} ${c.itemErr}` : cl} {...input} {...props} />
		{checkErr && <div className={c.error}>{error}</div>}         
  </div>
)}


let LogIn = (props) => {

	const {submitSucceeded, handleSubmit, submitting, pristine } = props
console.dir(submitting);
	console.dir(props);
	return (
		<div className={c.wrap}>
			<h3 className={c.title}>Авторизация</h3>
			<form className={c.form} onSubmit={handleSubmit}>{/*onKeyDown={(e) => props.stepBelow(e, 4)} */}
				<Field type='text' name='login' component={renderInput} placeholder='Login' autoFocus  />
				<Field type="password" name='pass' component={renderInput} placeholder='Password'  />
				<Field type="checkbox" component={renderInput} name='isSavePass' />
				<button className={c.item} disabled={pristine} type="submit">Войти</button>					
			</form>

		</div>
	)
}

export default reduxForm({ 
	form: 'entrance', 
	initialValues: {login: '', pass: ''},
	validate: ({ login, pass }) => {
		const errors = {}
		if (!login) {
			errors.login = 'Required'
		} else if (login.length > 5) {
			errors.login = 'Must be 15 characters or less'
		}
		if (!pass) {
			errors.pass = 'Required'
		} else if (login.length > 15) {
			errors.pass = 'Must be 15 characters or less'
		}
		return errors
	},

	
})(LogIn);

// schema

 


/*

БЫЛО

return (
		<div className={c.wrap}>
			<h3 className={c.title}>Авторизация</h3>
			<form className={c.form} onKeyDown={(e) => props.stepBelow(e, 4)} name='entrance' ref={props.refLogin}>
				<input className={c.item} onChange={props.changeInp} value={props.auth.login} name='login' type="text" placeholder='Login' autoFocus />
				<input className={c.item} onChange={props.changeInp} value={props.auth.pass} name='pass' type="password" placeholder='Password' />
				<span className={c.item}>Сохранить пароль?
					<input className={c.checked} type="checkbox" name='isSavePass' />
				</span>
				<input className={c.item} type="button" onClick={props.send} name='sub' value='Войти' />
				<p className={c.msg}>{props.message}</p>						
			</form>
		</div>
	)

*/