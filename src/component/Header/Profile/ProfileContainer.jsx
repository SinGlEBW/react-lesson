import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { logOutT, checkAuthT } from 'src/redux/reducer/Header/auth-reducer';

class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    
  }
  logOut = (e) => {
   
    this.props.logOutT()

  }
  render = () => {
    console.dir(this.props);
    return <Profile logOut={this.logOut}/>
  }
}

let mapStateToProps = (props) => ({profile: props.profile, auth: props.auth})

export default connect(mapStateToProps, {
  logOutT
})(ProfileContainer)