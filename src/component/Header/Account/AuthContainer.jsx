import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from 'src/redux/reducer/Header/auth-reducer';
import { setAuthT, editLinksT } from 'src/redux/reducer/Header/header-reducer';
import  Auth from './Auth';
class AuthContainer extends React.Component {

  logIn = () => {

  }

  toggleAuth = ({ target }) => {
		let tgt = {
			name: target.name,
			pathname: target.pathname,
			links: this.props.header.links,
			isTogBtn: this.props.header.checkButton[target.name]
		}
		this.props.editLinksT(tgt);
  }
  
  render = () => {
    console.dir(this);
    return <Auth pathname={this.props.header.pathname} toggleAuth={this.toggleAuth}/>
  }

}

let mapStateToProps = (state) => ({
  auth: state.auth,
  header: state.header
})
export default connect(mapStateToProps, {
  //auth-reducer
  checkAuth,
  //header-reducer
  editLinksT,
  setAuthT
})(AuthContainer);

/*
  Если случилась такая ситуация когда требуется передавать значения state и функционал
  родительского компонента, то есть вариант подключать получить любой state через
  Можно не передавать через props сам state, его можно заполучить через mapStateToProps,
  а функционал импортировать и передать в mapDispatchToProps
*/