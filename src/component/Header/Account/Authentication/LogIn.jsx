import React from 'react';
import { Field, reduxForm, SubmissionError  } from 'redux-form';

import { Button, makeStyles,  styled,  Typography, withStyles } from '@material-ui/core';

import c from './LogIn.module.css'
import { required, required1 } from 'src/utils/validates';


let LogIn = (props) => {
	let err = props.auth.errors.entrance;
//  if(err){
// 	 console.dir({[err[0].field]: err[0].msg});
// // throw new SubmissionError({[err[0].field]: err[0].msg})
// throw new SubmissionError({login: err[0].msg})
	
//  }

	const { handleSubmit, submitting, pristine, invalid, submit } = props
	console.dir(props);
	return (
		<div className={c.wrap}>
			{/* <Typography  color='error' variant='h3' >xcx</Typography> */}
		
			<h3 className={c.title}>Авторизация</h3>

			<form className={c.form} onSubmit={handleSubmit}>{/*   onKeyDown={(e) => props.stepBelow(e, 4)} */}
				<Field validate={required1} component={renderInput} name='login' type='text' placeholder='Login' autoFocus  />
		
				<Field validate={required1} component={renderInput} name='pass' type="password" placeholder='Password'  />
				<Field component={renderInput} type="checkbox"  name='isSavePass' />
				<Button type='submit' variant='outlined' disabled={pristine || submitting} color='secondary'>Войти</Button>			 
			</form>
		</div>
	)
}

const renderInput = ({label,input, meta: { touched, error, ...a }, ...props}, ob) => {
	
	let checkbox = (props.type === 'checkbox');
	let cl = (checkbox) ? c.checked : c.item;
	let checkErr = touched && error;
 
	return (
	<div className={c.boxInput}>{(checkbox) ? 'Сохранить пароль?' : ''}
		<p><label htmlFor={props.id || props.name}>{label}</label></p>
    <input className={checkErr ? `${cl} ${c.itemErr}` : cl} {...input} {...props} />
		{checkErr && <div className={c.error}>{error}</div>}         
  </div>
)}

export default reduxForm({ 
	form: 'entrance', 
	initialValues: { login: '', pass: '' },

})(LogIn);

console.dir();
/*

	selectionEnd: 4
selectionStart: 4
shadowRoot: null
size: 20
slot: ""
spellcheck: true
src: ""
step: ""
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
tabIndex: 0
tagName: "INPUT"
textContent: ""
title: ""
translate: true
type: "tel"
useMap: ""
validationMessage: ""
validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
value: (...)
valueAsDate: null
valueAsNumber: NaN
webkitEntries: []
webkitdirectory: false
width: 0
*/

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