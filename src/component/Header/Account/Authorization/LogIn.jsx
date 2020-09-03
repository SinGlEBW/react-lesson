import React from 'react';
import c from './LogIn.module.css'

let LogIn = (props) => {

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
}

export default LogIn;