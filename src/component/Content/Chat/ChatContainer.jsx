import { connect } from 'react-redux';
import Chat from './Chat';



let mapStateToProps = (state) => {
   return { chat: state.chat }
}
let mapDispatchToProps = (dispatch) => {
   return {

   }
}

let ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatContainer;


/*
   Контейнер для компонента требуется что бы не засорять сам компонент методами redux 
*/

/*

class ChatContainer extends Component {
приходилось передавать dispatch через props
   changesTheMessage = (changeValue) => this.props.dispatch(inMessAction(changeValue))

   toSend = (sendMess) => this.props.dispatch(sendAction(sendMess))

   render = () => {
      
      console.dir(this);
      return <Chat changesTheMessage={this.changesTheMessage} toSend={this.toSend} chat={this.props.chat}/>
   }
};
 */