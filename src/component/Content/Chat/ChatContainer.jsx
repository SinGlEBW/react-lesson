import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chat, { SignupForm } from './Chat';
import { showMessAC, changesTheMessAC, sendMessAC, delMessAC } from 'src/redux/reducer/Content/chat-reducer';
import { withRouter } from 'react-router-dom';
//HOC - High Order Component. Принимает компонент контейнер и возвращает его с новым поведением
//ChatContainer - тоже компонента принимающая пропс и возвращающая jsx,но грязная и уровнем выше чистой
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

	listensMessage = ({ target }) => {
		
		this.props.changesTheMessAC(target.value)
	}

	sendMessage = () => this.props.sendMessAC(this.myRef.current.value)

	componentDidMount = () => {}

	validate = (values) => {
		
		const errors = {};
		if (!values.email) 
			errors.email = 'Пустое поле';
		else 
		if (!/^[A-Z0-9._%+-]+@(mail|gmail|yandex)+\.[A-Z]{2,}$/i.test(values.email)) 
			errors.email = 'Не верный email адрес';
			
		return errors;
	}

	formButtonBehavior = (values, { setSubmitting }) => {
		console.dir(values);
		console.dir(setSubmitting);
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
	}

	render = () => {
		return (
			<Fragment>
			
				<Chat chat={this.props.chat}
							listensMessage={this.listensMessage}
							responseMessage={this.responseMessage}
							sendMessage={this.sendMessage}
							myRef={this.myRef} />
			
				<SignupForm />

			
			</Fragment>
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

export {default as React} from 'react'
export {default as React1} from 'react'
/*
   Что бы не создавать однообразные dispatch, есть возможность сократить запись до объекта,
	 Вместо:  let sendMess = (o_Message) => dispatch(sendMessAction(o_Message)); и функции
	 mapDispatchToProps, connect принимает объект. Ключами выступают наши методы, а значениями методы
	 action. Что бы сократить объект до названия ключей, назовём методы action так же как и наши методы
	 Кстате если передать в connect функцию возвращающую объект, то всё равно работать не будет

*/