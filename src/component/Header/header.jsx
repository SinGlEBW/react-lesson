import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './header.css';
import {Button} from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
	  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	  border: 0,
	  borderRadius: 3,
	  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	  color: 'white',
	  height: 48,
	  padding: '0 30px',
	},
 })

const MyButton = styled(Button)({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	height: 48,
	
 });
console.dir(MyButton);
export default class Header extends Component {
	
  render() {
	  
    return (
		
			<header className='header' >
				<div className="container">
					<ul className="header__nav">
						<li className="header__navItem"><NavLink to="/" className="header__link">Главная</NavLink></li>
						<li className="header__navItem"><NavLink to="products" className="header__link">Товары</NavLink></li>
						<li className="header__navItem"><NavLink to="chat" className="header__link">Чат</NavLink></li>
						<li className="header__navItem"><NavLink to="contacts" className="header__link">Контакты</NavLink></li>
						<li className="header__navItem"><NavLink to="info" className="header__link">Информация</NavLink></li>
						<li className="header__navItem"><NavLink to="images" className="header__link">Картинки</NavLink></li>
					</ul>	
					<div className="header__lk">
						<MyButton ><NavLink to='account' className='header__lkItem'>Авторизация</NavLink></MyButton>
						<MyButton ><NavLink to='registration' className='header__lkItem'>Регистрация</NavLink></MyButton>
					</div>
				</div>							
			</header>	
		);
  }
}


/*
 Из-за того что есть возможность css файлы подключать отдельно, существует и возможность 
 в этих отдельных файлах писать одинаковые классы. Но для этого требуется префиксом дописать
 в css файл module и подключить его как объект. В таком случае классы в css
 файле будут играть в роле ключей.
 Запись примерно такая:
 import classHeader from './../css/header.module.css';

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