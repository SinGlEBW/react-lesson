import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { logOutT, refreshTokensT } from 'src/redux/reducer/Header/auth-reducer';

class ProfileContainer extends React.Component {
  
  componentDidMount = () => {
    
  }
  logOut = (e) => this.props.logOutT()
  issueTokenPair = (e) => this.props.refreshTokensT()

  render = () => {
    console.dir(this.props);
    return <Profile logOut={this.logOut}/>
  }
}

let mapStateToProps = (props) => ({profile: props.profile, auth: props.auth})

export default connect(mapStateToProps, {
  refreshTokensT,
  logOutT
})(ProfileContainer)