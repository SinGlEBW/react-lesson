import React, { Component } from "react";
import './../css/header.css';

export default class Header extends Component {
  render() {
    return (
		<header className='header' >
			<div className="container">
				<ul className="header__list">
					<li className="header__item"><a href="#1" className="header__link">Страница 1</a></li>
					<li className="header__item"><a href="#2" className="header__link">Страница 2</a></li>
					<li className="header__item"><a href="#3" className="header__link">Страница 3</a></li>
					<li className="header__item"><a href="#4" className="header__link">Страница 4</a></li>
					<li className="header__item"><a href="#5" className="header__link">Страница 5</a></li>
					<li className="header__item"><a href="#6" className="header__link">Страница 6</a></li>
				</ul>	
				<ul className="header__fff">
					
				</ul>	
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