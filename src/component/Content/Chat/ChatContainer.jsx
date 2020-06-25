import React, { Component } from 'react';

import { inMessAction, sendAction } from '../../../redux/reducer/chat-reducer';
import Chat from './Chat';

export default class ChatContainer extends Component {

   changesTheMessage = (changeValue) => this.props.dispatch(inMessAction(changeValue))

   toSend = (sendMess) => this.props.dispatch(sendAction(sendMess))

   render = () => {
      
      console.dir(this);
      return <Chat changesTheMessage={this.changesTheMessage} toSend={this.toSend} chat={this.props.chat}/>
   }
};

/*
   Контейнер для компонента требуется что бы не засорять сам компонент методами redux 
*/