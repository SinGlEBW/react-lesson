import Info from './Info';
import { connect } from 'react-redux';


let mapStateToProps = (state) => ({info: state.info});
let mapDispatchToProps = (dispatch) => {

   return {}
};

let InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info);

export default InfoContainer;