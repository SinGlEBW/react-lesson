import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';
import { showMessAC, changesTheMessAC, sendMessAC, delMessAC } from 'src/redux/reducer/Content/chat-reducer';
import { withRouter } from 'react-router-dom';



class ChatContainer extends Component {
	myRef = React.createRef()

	responseMessage = () => {
		return this.props.chat.users.map((item) => (
			<li key={item.id} className='chat__list-item'>
				<span className='chat__item-name'>{item.name}: </span>
				<span className='chat__item-message'>{item.message}</span>
			</li>
		))
	}

	listensMessage = ({ target }) => this.props.changesTheMessAC(target.value)

	sendMessage = () => this.props.sendMessAC(this.myRef.current.value)

	componentDidMount = () => {
		
	}
	render = () => {
		return (
			<Chat chat={this.props.chat}
						listensMessage={this.listensMessage}
						responseMessage={this.responseMessage}
						sendMessage={this.sendMessage}
						myRef={this.myRef}
	/>
		)
	}
};

/*----------REDUX---------@@@@@@@>>>>>>>>>>>>>---------------*/
let mapStateToProps = (state) => ({ chat: state.chat })

 //let wrChatContainer = withRouter(ChatContainer)

export default connect(mapStateToProps, {
	showMessAC,
	changesTheMessAC,
	sendMessAC,
	delMessAC
})(ChatContainer);

/*
   Что бы не создавать однообразные dispatch, есть возможность сократить запись до объекта,
	 Вместо:  let sendMess = (o_Message) => dispatch(sendMessAction(o_Message)); и функции
	 mapDispatchToProps, connect принимает объект. Ключами выступают наши методы, а значениями методы
	 action. Что бы сократить объект до названия ключей, назовём методы action так же как и наши методы
	 Кстате если передать в connect функцию возвращающую объект, то всё равно работать не будет

*/