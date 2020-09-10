import React, { Fragment } from "react";
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import AuthContainer from './Account/AuthContainer';
import PropTypes from 'prop-types';

let Header = (props) => {

	let links = () => {
		let id = 0;
	
		return props.header.links.map((item) => (
			<li className={c.item} key={id++}>
					<NavLink className={c.link} to={item[0]} onClick={props.pressLink}>{item[1]}</NavLink>
			</li>
		))
	}
	
	return (
		<Fragment >
			<header className={c.header} >
				<div className="container">
					<div className={c.wrap}>
						<ul className={c.nav}>
							{links()}
						</ul>
					</div>
				</div>
			</header>
			{
				(props.auth)
					? <ProfileContainer />
					: <AuthContainer />
			}
		</Fragment>
	);
}

// Header.propTypes = {
// 	link: PropTypes.string
// }
// Header.defaultProps  = {
// 	link: 'ссылка'
// }

export default Header;



/*
	NavLink определяет то что будет показывать в url, а Router определяет что должно отобразить под этим url
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