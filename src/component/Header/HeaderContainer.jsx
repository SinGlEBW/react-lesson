import React, { Component } from "react";
import { connect } from 'react-redux';
import { editLinks, setPathT, editLinksT } from 'src/redux/reducer/Header/header-reducer';
import Header from './Header';
import { NavLink, withRouter } from 'react-router-dom';

class HeaderContainer extends Component {

	links = () => {
		let id = 0;

		return this.props.header.links.map((item) => (
			<li className="header__navItem" key={id++}>
				<NavLink className="header__navItem-link" to={item[0]} onClick={this.pressLink}>{item[1]}</NavLink>
			</li>
		))
	}

	pressLink = ({ target }) => {
		
		let path = target.pathname.replace(/\b\/[\w\D]*/g, '');
		this.props.setPathT(path)		
		
	}

	render = () => {
	
		return <Header {...this.props} links={this.links} />
	}
}

let HeaderContainerWR = withRouter(HeaderContainer);//withRouter нужен тогда когда нет нужды оборачивать в Router и указывать путь
let mapStateToProps = (props) => ({ header: props.header })


export default connect(mapStateToProps, {	
	editLinks,
	setPathT,
	editLinksT
})(HeaderContainerWR);



/*
mapDispatchToProps - предназначен для передачи наших методов в props. Вызывается эта функция самим 
										Redux который передаёт в параметры callback dispatch. На основе dispatch
										путём замыкания мы строим наши методы.
 Наши методы могут что-то возвращать, но это наша инициатива. Сам callback dispatch	рассчитан
 получать объект именуемый (Action) и возвращать только объект непосредственно в state прямо в reducer'ы. 
Есть промежуточный функционал Thunk для передачи в dispatch callback'a. Вместо объекта. Зачем это нужно?

	Redux-Thunk нужен если мы при одном действии обращаемся к нескольким нашим методам в props для изменения BLL.
	Установив Redux-Thunk промежуточный слой будет отслеживать что за данные в dispatch. Если это callback
	то он его запустит и проверит если возвращаться будет объект передаст в reducer.
*/


/*
	Бывает такое что функции из reducer и методы из контейнера пересекаются в презентационной компоненте
	поэтому если при передаче поставить правильный порядок то ненужные нам перезатираются
*/

/*
	Старый способ
	let mapDispatchToProps = (dispatch) => {
	let setPath = (data) => dispatch(setPath1(data))
	let toggleBtn = (data) => dispatch(toggleBtn1(data))
	let editLinks = (data) => dispatch(editLinks1(data))
	
	return {
		setPath: setPath,//dispatch возвращает объект, а значит наша любая функция тож возвращает объект
		toggleBtn,//здесь просто функции вместо которых будут объекты
		editLinks,
	
	}
}
*/

/*
		let toggle = await !this.state.formSwitch;

		await this.setState({
			formSwitch: toggle,
			pathLogin: (toggle) ?  this.state.path + '/' : (`${this.state.path}/login`).replace(/^\/{2,}/, '/login')//true значит путь без login. При следующем клике(ВЫКЛ)
*/

/*
	Из-за того что header не привязан к Router и пути мы отслеживаем путь по всем ссылкам.
	1. При нажатии на любую ссылку нужно менять адрес +
	2. Где бы я на находился при нажатии на регистрацию или авторизацию
		 к адресу должно конкатенироваться /autorization или /registration,
		 при этом контент не должен уходить

*/



