import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
		<header className='header'>
			<div className="container">
				<ul className="header__list">
					<li className="header__item"><a href="#1" className="header__link">Страница 1</a></li>
					<li className="header__item"><a href="#2" className="header__link">Страница 2</a></li>
					<li className="header__item"><a href="#3" className="header__link">Страница 3</a></li>
					<li className="header__item"><a href="#4" className="header__link">Страница 4</a></li>
					<li className="header__item"><a href="#5" className="header__link">Страница 5</a></li>
					<li className="header__item"><a href="#6" className="header__link">Страница 6</a></li>
				</ul>	
			</div>
										
		</header>
		);
  }
}
