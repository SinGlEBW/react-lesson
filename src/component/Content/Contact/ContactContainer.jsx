import Contact from './Contact';
import { connect } from 'react-redux';



let mapStateToProps = (state) => ({contact: state.contact});
let mapDispatchToProps = (dispatch) => {

   return {}
}


let ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactContainer