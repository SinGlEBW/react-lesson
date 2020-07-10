import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Header.css";

import { Button } from "@material-ui/core";//тож есть Switch
import { styled } from "@material-ui/core/styles";
import LoginIn from "./Account/Authorization/LoginIn";
import Registration from './Account/Registration/Registration';


const MyButton = styled(Button)({
	background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
	border: 0,
	borderRadius: 4,
	boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	color: "white",
	height: 'max-content'
});

export default class Header extends Component {
	state = {
		path: localStorage.getItem('path') || '',
		formSwitch: JSON.parse(localStorage.getItem('formSwitch')) || false,
		pathLogin: localStorage.getItem('pathLogin') || 'login'//1й пар. пустота тоже не рассматривается
	}
	pathHome = {
		pathname: '/' || '/registration'
	}

	formOnOff = async ({target}) => {
		let toggle = await !this.state.formSwitch;
		
		await this.setState({
			formSwitch: toggle,
			pathLogin: (toggle) ?  this.state.path + '/' : (`${this.state.path}/login`).replace(/^\/{2,}/, '/login')//true значит путь без login. При следующем клике(ВЫКЛ)
		})
		
		await localStorage.setItem('formSwitch', toggle)
		await localStorage.setItem('pathLogin', this.state.pathLogin)
		
	}

	render() {
console.dir(this);
		return (
			<header className="header" >
				<div className="container">
					<div className="header__wrap">
						<ul className="header__nav">
							<li className="header__navItem"><NavLink className="header__navItemlink" to={this.pathHome} onClick={this.navigation}>Главная</NavLink></li>
							<li className="header__navItem"><NavLink className="header__navItemlink" to='catalog' onClick={this.navigation}>Товары</NavLink></li>
							<li className="header__navItem"><NavLink className="header__navItemlink" to="chat" onClick={this.navigation}>Чат</NavLink></li>
							<li className="header__navItem"><NavLink className="header__navItemlink" to="contact" onClick={this.navigation}>Контакты</NavLink></li>
							<li className="header__navItem"><NavLink className="header__navItemlink" to="info" onClick={this.navigation}>Информация</NavLink></li>
							<li className="header__navItem"><NavLink className="header__navItemlink" to="images" onClick={this.navigation}>Картинки</NavLink></li>
						</ul>
						<div className="header__lkBtn">

							<MyButton ><NavLink className="header__lkBtnItem" to={this.state.pathLogin} onClick={this.formOnOff}>Авторизация</NavLink></MyButton>
							<MyButton ><NavLink className="header__lkBtnItem" to="/registration" >Регистрация</NavLink></MyButton>

						</div>
						<div className="header__loginIn">
							<Switch>
								<Route className="header__loginInItem" path='/login' component={(props) => <LoginIn {...props} />} />
								<Route className="header__loginInItem" path="/registration" component={(props) => <Registration {...props} />} />
							</Switch>
						</div>
					</div>
				</div>
			</header>
		);
	}
}



/*
	NavLink определяет то что будет показывать в url, а Router определяет что должно быть обычным путём,
	а что параметром
*/

/*
 Из-за того что есть возможность css файлы подключать отдельно, существует и возможность
 в этих отдельных файлах писать одинаковые классы. Но для этого требуется префиксом дописать
 в css файл module и подключить его как объект. В таком случае классы в css
 файле будут играть в роле ключей.
 Запись примерно такая:
 import classHeader from "./../css/header.module.css";

 render(){
	 return (
		 <div className={classHeader.header}
		 	<ul className={classHeader.list}

		 	</ul>
		 </div>
	 )
 }
Вообщем если во всех css будет класс item, но ничего страшного именно при использовании module
просто будет заменяться класс сгенерированным
*/