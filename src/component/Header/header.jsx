import React from "react";
import "./Header.css";

import ProfileContainer from './Profile/ProfileContainer';
import AuthContainer from './Account/AuthContainer';

let Header = (props) => {

	return (
		<header className="header" >
			<div className="container">
				<div className="header__wrap">
					<ul className="header__nav">
						{props.links()}
					</ul>
					<div className="header__auth">
						{
							(props.header.isAuth)
								? <ProfileContainer />
								: <AuthContainer />
						}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;


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