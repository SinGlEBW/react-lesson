import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';


import Info from './Info';
import { withRedirectAuth } from 'src/component/hoc/withRedirectAuth';

class InfoContainer extends React.Component {
	state = {
		date: new Date().toLocaleTimeString(),
		txtStatus: 'Status',
		editMode: true
	}
	
	componentDidMount() {
		
		this.timerID = setInterval(this.tick, 1000)
	}
	componentDidUpdate = () => {
		
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick = () => {
		this.setState({
			date: new Date().toLocaleTimeString()
		});
	}
	toggleEditMode = (e) => this.setState({editMode: !this.state.editMode})
	statusChange = (e) => this.setState({txtStatus: e.target.value})
	render = () => {
		
		return <Info date={this.state.date}
								 txtStatus={this.state.txtStatus}
								 editMode={this.state.editMode}
								 toggleEditMode={this.toggleEditMode}
								 statusChange={this.statusChange} />
								 
	}
}

let mapStateToProps = (state) => ({ info: state.info });


export default compose(
	connect(mapStateToProps, {}),
	withRedirectAuth
)(InfoContainer)







/*
	 Что бы так не писать везде при redirect
	 return (this.props.isAuth) ? <Info date={this.state.date}/> : <Redirect to='/login'/>
	 можно сделать HOC. Просто функция которая будет возвращать компонент
*/